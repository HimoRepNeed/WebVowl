import { SetOperatorNode } from '../SetOperatorNode';


export class OWLInterSectionOf extends SetOperatorNode {
    constructor(graph) {
        super(graph);
        this.styleClass = "intersectionof";
        this.type = "owl:intersectionOf";
    }

    draw(element) {
        super.draw(element);

        let symbol = element.append("g").classed("embedded", true);

        var symbolRadius = 10;
        symbol.append("path")
            .attr("class", "nostroke")
            .classed("symbol", true)
            .attr("d", this.createIntersectionPath());
        symbol.append("circle")
            .attr("class", "nofill")
            .classed("fineline", true)
            .attr("r", symbolRadius);
        symbol.append("circle")
            .attr("cx", 10)
            .attr("class", "nofill")
            .classed("fineline", true)
            .attr("r", symbolRadius);
        symbol.append("path")
            .attr("class", "nofill")
            .attr("d", "m 9,5 c 0,-2 0,-4 0,-6 0,0 0,0 0,0 0,0 0,-1.8 -1,-2.3 -0.7,-0.6 -1.7,-0.8 -2.9," +
            "-0.8 -1.2,0 -2,0 -3,0.8 -0.7,0.5 -1,1.4 -1,2.3 0,2 0,4 0,6")
            .attr("transform", "scale(.5)translate(5,0)");

        symbol.attr("transform",
            "translate(-" + (this.radius - 15) / 7 + ",-" + (this.radius - 15) / 100 + ")");

        super.postDrawActions();
    }

    private createIntersectionPath() {
        var height = 18;

        var offsetX = 5;
        var offsetY = -(height / 2);

        var bezierX = 7;
        var bezierY = 5;
        var bottomBezierY = height - bezierY;

        var startPosition = "M" + offsetX + "," + offsetY;
        var rightSide = "c" + bezierX + "," + bezierY + " " + bezierX + "," + bottomBezierY + " 0," + height;
        var leftSide = "c" + -bezierX + "," + -bezierY + " " + -bezierX + "," + -bottomBezierY + " 0," + -height;

        return startPosition + rightSide + leftSide;
    }
}