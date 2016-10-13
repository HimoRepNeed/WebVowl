import { BaseProperty } from '../baseProperty'

export class OWLEquivalentProperty extends BaseProperty {
    constructor(graph) {
        super(graph);
        this.styleClass = "equivalentproperty";
        this.type = "owl:equivalentProperty";
    }
}
