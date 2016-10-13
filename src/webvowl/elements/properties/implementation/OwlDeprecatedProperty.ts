import { BaseProperty } from '../baseProperty'

export class OWLDeprecatedProperty extends BaseProperty {
    constructor(graph) {
        super(graph);
        this.attributes = ["deprecated"];
        this.styleClass = "deprecatedproperty";
        this.type = "owl:DeprecatedProperty";
    }
}