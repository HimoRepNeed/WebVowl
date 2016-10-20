/// <reference path="../SetOperatorNode.ts" />

namespace TRVOWL.elements {
    export class OWLComplementOf extends SetOperatorNode {
        constructor(graph) {
            super(graph);
            this.styleClass = "complementof";
            this.type = "owl:complementOf";
        }

        draw(element) {
            super.draw(element);
            let symbol = element.append("g").classed("embedded", true);

            symbol.append("circle")
                .attr("class", "symbol")
                .classed("fineline", true)
                .attr("r", 10);
            symbol.append("path")
                .attr("class", "nofill")
                .attr("d", "m -7,-1.5 12,0 0,6")
                .attr("transform", "scale(.5)");

            symbol.attr("transform",
                "translate(-" + (this.radius - 15) / 100 + ",-" + (this.radius - 15) / 100 + ")");

            super.postDrawActions();
        };
    }
}