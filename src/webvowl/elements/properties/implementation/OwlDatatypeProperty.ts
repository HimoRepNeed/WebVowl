import { BaseProperty } from '../baseProperty'

export class OWLDatatypeProperty extends BaseProperty {
    constructor(graph) {
        super(graph);
        this.attributes = ["datatype"];
        this.styleClass = "datatypeproperty";
        this.type = "owl:DatatypeProperty";
    }
}