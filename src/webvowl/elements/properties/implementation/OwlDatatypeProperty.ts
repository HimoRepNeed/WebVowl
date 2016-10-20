/// <reference path="../baseProperty.ts" />

namespace TRVOWL.elements {
    export class OWLDatatypeProperty extends BaseProperty {
        constructor(graph) {
            super(graph);
            this.attributes = ["datatype"];
            this.styleClass = "datatypeproperty";
            this.type = "owl:DatatypeProperty";
        }
    }
}