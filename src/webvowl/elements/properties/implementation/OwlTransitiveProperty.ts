/// <reference path="../baseProperty.ts" />

namespace TRVOWL.elements {
    export class OWLTransitiveProperty extends BaseProperty {
        constructor(graph) {
            super(graph);
            this.attributes = ["transitive"];
            this.styleClass = "transitiveproperty";
            this.type = "owl:TransitiveProperty";
        }
    }
}