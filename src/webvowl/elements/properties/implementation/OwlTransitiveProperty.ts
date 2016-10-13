import { BaseProperty } from '../baseProperty'

export class OWLTransitiveProperty extends BaseProperty {
    constructor(graph) {
        super(graph);
        this.attributes = ["transitive"];
        this.styleClass = "transitiveproperty";
        this.type = "owl:TransitiveProperty";
    }
}