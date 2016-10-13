import { BaseProperty } from '../baseProperty'

export class OWLFunctionalProperty extends BaseProperty {
    constructor(graph) {
        super(graph);
        this.attributes = ["functional"];
        this.styleClass = "functionalproperty";
        this.type = "owl:FunctionalProperty";
    }
}