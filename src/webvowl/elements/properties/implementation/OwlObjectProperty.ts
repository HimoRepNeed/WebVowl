import { BaseProperty } from '../baseProperty';

export class OWLObjectProperty extends BaseProperty {
    constructor(graph) {
        super(graph);
        this.attributes = ["object"];
        this.styleClass = "objectproperty";
        this.type = "owl:ObjectProperty";
    }
}