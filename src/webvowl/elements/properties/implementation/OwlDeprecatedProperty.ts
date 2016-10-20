/// <reference path="../baseProperty.ts" />

namespace TRVOWL.elements {
    export class OWLDeprecatedProperty extends BaseProperty {
        constructor(graph) {
            super(graph);
            this.attributes = ["deprecated"];
            this.styleClass = "deprecatedproperty";
            this.type = "owl:DeprecatedProperty";
        }
    }
}