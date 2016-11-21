/// <reference path="./baseNode.ts" />
/// <reference path="../../util/centeringtextElement.ts" />
/// <reference path="../drawTools.ts" />

namespace TRVOWL.elements {
    export class RoundNode extends BaseNode {
        expanded: boolean = false;
        collapsible: boolean = false;
        radius: number = 50
        collapsingGroupElement;
        pinGroupElement;
        textBlock;
        tooltip: string;

        constructor(protected graph: TRVOWL.Graph) {
            super(graph);
        }

        setHoverHighlighting(val: boolean) {
            this.nodeElement.selectAll("circle").classed("hovered", val);
        }

        textWidth = (yOffset) => {
            var availableWidth = this.actualRadius() * 2;

            // if the text is not placed in the center of the circle, it can't have the full width
            if (yOffset) {
                var relativeOffset = Math.abs(yOffset) / this.actualRadius();
                var isOffsetInsideOfNode = relativeOffset <= 1;

                if (isOffsetInsideOfNode) {
                    availableWidth = Math.cos(relativeOffset) * availableWidth;
                } else {
                    availableWidth = 0;
                }
            }

            return availableWidth;
        };

        toggleFocus = () => {
            this.focused = !this.focused;
            this.nodeElement.select("circle").classed("focused", this.focused);
        }

        actualRadius(): number {
            if (!this.graph.options.scaleNodesByIndividuals || this.individuals.length <= 0) {
                return this.radius;
            } else {
                // we could "listen" for radius and maxIndividualCount changes, but this is easier
                let MULTIPLIER = 8;
                let additionalRadius = Math.log(this.individuals.length + 1) * MULTIPLIER + 5;

                return this.radius + additionalRadius;
            }
        }

        distanceToBorder = () => {
            return this.actualRadius();
        }

        drawPin = () => {
            this.pinned = true;

            var dx = (2 / 5) * this.actualRadius(),
                dy = (-7 / 10) * this.actualRadius();

            this.pinGroupElement = DrawTools.drawPin(this.nodeElement, dx, dy, this.removePin);
        }

        removePin = () => {
            this.pinned = false;
            if (this.pinGroupElement) {
                this.pinGroupElement.remove();
            }
            this.graph.updateStyle();
        }

        toggleExpand = () => {
            if ((this.individuals && this.individuals.length > 0) || this._individuals && this._individuals.length > 0) {
                if (this.expanded) {
                    angular.forEach(this.individuals, function (v, i) {
                        let indvProperty = v._properties[0];
                        let properties = TRVOWL.Options.unfilteredData.properties.filter(function (vo) { return vo.id === indvProperty.id });
                        if (properties && properties.length > 0) {
                            properties[0].active = false;
                        }
                        let nodes = TRVOWL.Options.unfilteredData.nodes.filter(function (vo) { return vo.id === v.id });
                        if (nodes && nodes.length > 0) {
                            nodes[0].active = false;
                        }
                    });
                    this.expanded = false;
                    this.graph.update();
                } else {
                    //this.individuals = this._individuals;
                    angular.forEach(this.individuals, function (v, i) {
                        // v.active = true;
                        let indvProperty = v._properties[0];
                        let properties = TRVOWL.Options.unfilteredData.properties.filter(function (vo) { return vo.id === indvProperty.id });
                        if (properties && properties.length > 0) {
                            properties[0].active = true;
                        }
                        let nodes = TRVOWL.Options.unfilteredData.nodes.filter(function (vo) { return vo.id === v.id });
                        if (nodes && nodes.length > 0) {
                            nodes[0].active = true;
                        }
                        // v.active = true;
                        // v._properties[0].active = true;
                        // v._propertyAttributes[0].active = true;
                        //TRVOWL.Parser.ontologyData.property.push(v._properties);
                        //TRVOWL.Parser.ontologyData.propertyAttribute.push(v._propertyAttributes);
                    })

                    //this._individuals = [];
                    this.expanded = true;
                    this.graph.update();
                    // angular.forEach(this.individuals, function (v, i) {
                    //     v.nodeElement.selectAll("*").style('opacity', 0)
                    // });
                }
            }
        }

        drawCollapsingButton = () => {
            let _self = this;
            this.collapsingGroupElement = this.nodeElement
                .append("g")
                .classed("hidden-in-export", true)
                .attr("transform", function () {
                    var dx = (-2 / 5) * _self.actualRadius(),
                        dy = (1 / 2) * _self.actualRadius();
                    return "translate(" + dx + "," + dy + ")";
                }).on('click', function () {
                    _self.toggleExpand();
                });

            this.collapsingGroupElement.append("rect")
                .classed("class pin feature", true)
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", 40)
                .attr("height", 24);

            this.collapsingGroupElement.append("line")
                .attr("x1", 13)
                .attr("y1", 12)
                .attr("x2", 27)
                .attr("y2", 12);

            this.collapsingGroupElement.append("line")
                .attr("x1", 20)
                .attr("y1", 6)
                .attr("x2", 20)
                .attr("y2", 18);
        }

        /**
             * Draws a circular node.
             * @param parentElement the element to which this node will be appended
             * @param [additionalCssClasses] additional css classes
             */
        draw(parentElement, additionalCssClasses) {
            var cssClasses = this.collectCssClasses();

            this.nodeElement = parentElement;

            if (additionalCssClasses instanceof Array) {
                cssClasses = cssClasses.concat(additionalCssClasses);
            }
            // let tooltiptext;

            // if (this instanceof OWLInstanceClass) {
            //     tooltiptext = this.iri;
            // } else {
            //     this.labelForCurrentLanguage();
            // }
            DrawTools.appendCircularClass(parentElement, this.actualRadius(),
                cssClasses, this.tooltip || this.labelForCurrentLanguage(), this.backgroundColor);

            (this.individuals && this.individuals.length > 0) || (this._individuals && this._individuals.length > 0) ? this.collapsible = true : this.collapsible = false;
            this.postDrawActions();
        }

        postDrawActions() {
            this.textBlock = this.createTextBlock();

            this.addMouseListeners();
            if (this.pinned) {
                this.drawPin();
            }
            if (this.collapsible) {
                this.drawCollapsingButton();
            }
        }

        private createTextBlock() {
            let textBlock = new TRVOWL.util.CenteringTextElement(this.nodeElement, this.backgroundColor);

            let equivalentsString = this.equivalentsString();
            let suffixForFollowingEquivalents = equivalentsString ? "," : "";

            textBlock.addText(this.labelForCurrentLanguage(), "", suffixForFollowingEquivalents);
            textBlock.addEquivalents(equivalentsString);
            if (!this.graph.options.compactNotation) {
                textBlock.addSubText(this.indicationString());
            }
            textBlock.addInstanceCount(this.individuals.length);

            return textBlock;
        }

        equivalentsString = () => {
            let equivalentClasses = this.equivalents;
            if (typeof equivalentClasses === "undefined") {
                return;
            }

            let equivalentNames = equivalentClasses.map(function (node: TRVOWL.elements.BaseElement) {
                return node.labelForCurrentLanguage();
            });

            return equivalentNames.join(", ");
        }
    }
}