import { BaseProperty } from '../baseProperty';

export class OWLSymmetricProperty extends BaseProperty {
    constructor(graph) {
        super(graph);
        this.attributes = ["symmetric"];
        this.styleClass = "symmetricproperty";
        this.type = "owl:SymmetricProperty";
    }
}