/// <reference path="../baseProperty.ts" />

namespace TRVOWL.elements {
    export class OWLObjectProperty extends BaseProperty {
        constructor(graph) {
            super(graph);
            this.attributes = ["object"];
            this.styleClass = "objectproperty";
            this.type = "owl:ObjectProperty";
        }
    }
}