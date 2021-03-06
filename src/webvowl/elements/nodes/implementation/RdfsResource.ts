/// <reference path="../roundNode.ts" />

namespace TRVOWL.elements {
    export class RDFSResourceClass extends RoundNode {
        constructor(graph) {
            super(graph);
            this.attributes = ["rdf"];
            this.label = "Resource";
            this.radius = 30;
            this.styleClass = "rdfsresource";
            this.type = "rdfs:Resource";
        }
        draw(element) {
            return super.draw(element, ["rdf", "dashed"]);
        };
    }
}