/// <reference path="../DatatypeNode.ts" />

namespace TRVOWL.elements {
    export class RDFSLiteralNode extends DatatypeNode {
        constructor(graph) {
            super(graph);
            this.attributes = ["datatype"];
            this.label = "Literal";
            this.styleClass = "literal";
            this.type = "rdfs:Literal";
            this.iri = "http://www.w3.org/2000/01/rdf-schema#Literal";
        }

        draw(element) {
            return super.draw(element, ["dashed"]);
        };
    }
}