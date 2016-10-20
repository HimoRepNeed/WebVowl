/// <reference path="../baseProperty.ts" />

namespace TRVOWL.elements {
    export class OWLEquivalentProperty extends BaseProperty {
        constructor(graph) {
            super(graph);
            this.styleClass = "equivalentproperty";
            this.type = "owl:equivalentProperty";
        }
    }
}    
