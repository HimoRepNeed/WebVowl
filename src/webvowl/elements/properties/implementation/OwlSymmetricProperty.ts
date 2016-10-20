/// <reference path="../baseProperty.ts" />

namespace TRVOWL.elements {
    export class OWLSymmetricProperty extends BaseProperty {
        constructor(graph) {
            super(graph);
            this.attributes = ["symmetric"];
            this.styleClass = "symmetricproperty";
            this.type = "owl:SymmetricProperty";
        }
    }
}