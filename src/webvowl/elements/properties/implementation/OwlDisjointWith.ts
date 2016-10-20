/// <reference path="../baseProperty.ts" />
/// <reference path="../../../util/centeringTextElement.ts" />

namespace TRVOWL.elements {
    export class OWLDisjointWith extends BaseProperty {

        constructor(graph) {
            super(graph);
            this.label = "Disjoint With";
            this.linkType = 'dashed';
            this.styleClass = 'disjointwith';
            this.type = 'owl:disjointWith';
        }

        drawLabel(labelContainer) {
            this.addRect(labelContainer);

            labelContainer.append("circle")
                .classed("symbol", true)
                .classed("fineline", true)
                .classed("embedded", true)
                .attr("cx", -12.5)
                .attr("r", 10);

            labelContainer.append("circle")
                .classed("symbol", true)
                .classed("fineline", true)
                .classed("embedded", true)
                .attr("cx", 12.5)
                .attr("r", 10);

            var textElement = new TRVOWL.util.CenteringTextElement(labelContainer, this.backgroundColor);
            if (!this.graph.options.compactNotation) {
                textElement.addSubText("disjoint");
            }
            textElement.translation(0, 20);
        }
    }
}