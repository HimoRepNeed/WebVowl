import { BaseProperty } from '../baseProperty';

export class OWLIndividualProperty extends BaseProperty {
    constructor(graph) {
        super(graph);
        this.attributes = ["individual"];
        this.styleClass = "individualproperty";
        this.type = "owl:individualProperty";
        this.label = 'Instance Of';
    }
}