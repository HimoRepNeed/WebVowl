/// <reference path="../baseProperty.ts" />

namespace TRVOWL.elements {
    export class OWLInverseFunctionalProperty extends BaseProperty {
        constructor(graph) {
            super(graph);
            this.attributes = ["inverse functional"];
            this.styleClass = "inversefunctionalproperty";
            this.type = "owl:InverseFunctionalProperty";
        }
    }
}