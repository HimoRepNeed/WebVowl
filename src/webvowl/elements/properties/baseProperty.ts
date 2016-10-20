/// <reference path="../rectangularElementTools.ts" />
/// <reference path="../baseElement.ts" />
/// <reference path="../drawTools.ts" />
/// <reference path="../../util/centeringTextElement.ts" />

namespace TRVOWL.elements {
    export class BaseProperty extends BaseElement {

        labelHeight = 28;
        labelWidth = 80;
        smallestRadius = this.labelHeight / 2;
        // Basic attributes
        cardinality;
        domain;
        private _inverse;
        link;
        minCardinality;
        maxCardinality;
        range;
        subproperties;
        superproperties;

        pinned: boolean;
        // Style attributes
        linkType: string = "normal";
        markerType: string = "filled";
        labelVisible = true;
        // Element containers
        cardinalityElement;
        labelElement;
        linkGroup;
        markerElement;
        // Other
        pinGroupElement;
        redundantProperties = [];
        constructor(graph) {
            super(graph);
        }

        distanceToBorder = (dx, dy) => {
            return RectangularElementTools.distanceToBorder(this, dx, dy);
        };

        linkHasMarker = () => {
            return this.linkType !== "dashed";
        };

        markerId() {
            return "marker" + this.id;
        };

        toggleFocus = () => {
            this.focused = !this.focused;
            this.labelElement.select("rect").classed("focused", this.focused);
        };

        inverse(p?) {
            if (!p) {
                return this._inverse;
            }
            this._inverse = p;
        }

        actualRadius() {
            return this.smallestRadius;
        }

        draw(labelGroup) {
            function attachLabel(property) {
                var labelContainer = labelGroup.append("g")
                    .datum(property)
                    .classed("label", true)
                    .attr("id", property.id);

                property.drawLabel(labelContainer);

                return labelContainer;
            }

            if (!this.labelVisible) {
                return undefined;
            }

            this.labelElement = attachLabel(this);

            // Draw an inverse label and reposition both labels if necessary
            if (this._inverse) {
                var yTransformation = (this.labelHeight / 2) + 1 /* additional space */;
                this._inverse.labelElement = attachLabel(this._inverse);
                this.labelElement.attr("transform", "translate(" + 0 + ",-" + yTransformation + ")");
                this._inverse.labelElement.attr("transform", "translate(" + 0 + "," + yTransformation + ")");
            }

            if (this.pinned) {
                this.drawPin();
            } else if (this._inverse && this._inverse.pinned) {
                this._inverse.drawPin();
            }
            return this.labelElement;
        }

        addRect(labelContainer) {
            let _self = this;
            var rect = labelContainer.append("rect")
                .classed(_self.styleClass, true)
                .classed("property", true)
                .attr("x", -_self.labelWidth / 2)
                .attr("y", -_self.labelHeight / 2)
                .attr("width", _self.labelWidth)
                .attr("height", _self.labelHeight)
                .on("mouseover", function () {
                    _self.onMouseOver();
                })
                .on("mouseout", function () {
                    _self.onMouseOut();
                });

            rect.append("title")
                .text(_self.labelForCurrentLanguage());

            if (_self.visualAttributes) {
                rect.classed(_self.visualAttributes, true);
            }
            if (_self.backgroundColor) {
                rect.style("fill", _self.backgroundColor);
            }
        };

        foreground() {
            let selectedLabelGroup = this.labelElement.node().parentNode;
            let labelContainer = selectedLabelGroup.parentNode;
            let selectedLinkGroup = this.linkGroup.node();
            let linkContainer = this.linkGroup.node().parentNode;

            // Append hovered element as last child to the container list.
            labelContainer.appendChild(selectedLabelGroup);
            linkContainer.appendChild(selectedLinkGroup);
        };

        drawLabel(labelContainer) {
            this.addRect(labelContainer);

            var textElement = new TRVOWL.util.CenteringTextElement(labelContainer, this.backgroundColor);
            textElement.addText(this.labelForCurrentLanguage());
            textElement.addSubText(this.indicationString());
            this.addEquivalentsToLabel(textElement);
        };

        addEquivalentsToLabel = (textBox) => {
            if (this.equivalents) {
                let equivalentLabels;
                let equivalentString;

                equivalentLabels = this.equivalents.map(function (property) {
                    return property.labelForCurrentLanguage;
                });
                equivalentString = equivalentLabels.join(", ");

                textBox.addEquivalents(equivalentString);
            }
        };

        drawCardinality = (container): boolean => {
            let cardinalityText = this.generateCardinalityText();

            if (cardinalityText) {
                this.cardinalityElement = container;
                container.append("text")
                    .classed("cardinality", true)
                    .attr("text-anchor", "middle")
                    .attr("dy", "0.5ex")
                    .text(cardinalityText);
                return true; // drawing successful
            } else {
                return false;
            }
        };

        generateCardinalityText() {
            if (this.cardinality) {
                return this.cardinality;
            } else if (this.minCardinality || this.maxCardinality) {
                var minBoundary = this.minCardinality || "*";
                var maxBoundary = this.maxCardinality || "*";
                return minBoundary + ".." + maxBoundary;
            }
        };

        setHighlighting(enable) {
            if (this.labelElement) {
                this.labelElement.select("rect").classed("hovered", enable);
            }
            this.linkGroup.selectAll("path, text").classed("hovered", enable);
            this.markerElement.select("path").classed("hovered", enable);
            if (this.cardinalityElement) {
                this.cardinalityElement.classed("hovered", enable);
            }

            let subAndSuperProperties = this.getSubAndSuperProperties();
            subAndSuperProperties.forEach(function (property) {
                property.labelElement.select("rect").classed("indirect-highlighting", enable);
            });
        };

        /**
             * Combines the sub- and superproperties into a single array, because
             * they're often used equivalently.
             * @returns {Array}
             */
        private getSubAndSuperProperties = () => {
            var properties = [];

            if (this.subproperties) {
                properties = properties.concat(this.subproperties);
            }
            if (this.superproperties) {
                properties = properties.concat(this.superproperties);
            }

            return properties;
        }

        /**
             * Foregrounds the sub- and superproperties of this property.
             * This is separated from the foreground-function to prevent endless loops.
             */
        private foregroundSubAndSuperProperties = () => {
            let subAndSuperProperties = this.getSubAndSuperProperties();

            subAndSuperProperties.forEach(function (property) {
                property.foreground;
            });
        }

        private onMouseOver() {
            if (this.mouseEntered) {
                return;
            }
            this.mouseEntered = true;
            this.setHighlighting(true);

            this.foreground();
            this.foregroundSubAndSuperProperties();
        }

        private onMouseOut() {
            this.mouseEntered = false;
            this.setHighlighting(false);
        }


        drawPin() {
            this.pinned = true;
            this.pinGroupElement = DrawTools.drawPin(this.labelElement(), 20, -25, this.removePin);
        };

        removePin = () => {
            this.pinned = false;
            if (this.pinGroupElement) {
                this.pinGroupElement.remove();
            }
            this.graph.updateStyle();
        };
    }
}