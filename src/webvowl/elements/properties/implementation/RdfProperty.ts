/// <reference path="../baseProperty.ts" />

namespace TRVOWL.elements {
    export class RDFProperty extends BaseProperty {
        constructor(graph) {
            super(graph);
            this.attributes = ["rdf"];
            this.styleClass = "rdfproperty";
            this.type = "rdf:Property";
        }
    }
}