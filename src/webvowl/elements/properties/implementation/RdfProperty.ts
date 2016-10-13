import { BaseProperty } from '../baseProperty';

export class RDFProperty extends BaseProperty {
    constructor(graph) {
        super(graph);
        this.attributes = ["rdf"];
        this.styleClass = "rdfproperty";
        this.type = "rdf:Property";
    }
}