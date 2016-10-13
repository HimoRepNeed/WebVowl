import { SetOperatorNode } from '../SetOperatorNode';

export class OWLDisojointUnionOf extends SetOperatorNode {
    constructor(graph) {
        super(graph);
        this.styleClass = "disjointunionof";
        this.type = "owl:disjointUnionOf";
    }

    draw(element) {
        super.draw(element);
        let symbol = element.append("g").classed("embedded", true);

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
        symbol.append("text")
            .attr("class", "link")
            .text("1")
            .attr("transform", "scale(.7)translate(3,5)");

        symbol.attr("transform", "translate(-" + (this.radius - 15) / 7 + ",-" + (this.radius - 15) / 100 + ")");
        super.postDrawActions();
    };
}