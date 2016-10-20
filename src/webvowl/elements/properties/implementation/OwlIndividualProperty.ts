/// <reference path="../baseProperty.ts" />

namespace TRVOWL.elements {
    export class OWLIndividualProperty extends BaseProperty {
        constructor(graph) {
            super(graph);
            this.attributes = ["individual"];
            this.styleClass = "individualproperty";
            this.type = "owl:individualProperty";
            this.label = 'Instance Of';
        }
    }
}