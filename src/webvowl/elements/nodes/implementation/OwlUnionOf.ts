import { SetOperatorNode } from '../SetOperatorNode';

export class OWLUnionOf extends SetOperatorNode {
    constructor(graph) {
        super(graph);
        this.styleClass = "unionof";
        this.type = "owl:unionOf";
    }

    draw(element) {
        super.draw(element);

        var symbol = element.append("g").classed("embedded", true);

        var symbolRadius = 10;
        symbol.append("circle")
            .attr("class", "symbol")
            .attr("r", symbolRadius);
        symbol.append("circle")
            .attr("cx", 10)
            .attr("class", "symbol")
            .classed("fineline", true)
            .attr("r", symbolRadius);
        symbol.append("circle")
            .attr("class", "nofill")
            .classed("fineline", true)
            .attr("r", symbolRadius);
        symbol.append("path")
            .attr("class", "link")
            .attr("d", "m 1,-3 c 0,2 0,4 0,6 0,0 0,0 0,0 0,2 2,3 4,3 2,0 4,-1 4,-3 0,-2 0,-4 0,-6")
            .attr("transform", "scale(.5)translate(5,0)");

        symbol.attr("transform", "translate(-" + (this.radius - 15) / 7 + ",-" + (this.radius - 15) / 100 + ")");

        super.postDrawActions();
    };
}