import { BaseProperty } from '../baseProperty';

export class OWLInverseFunctionalProperty extends BaseProperty {
    constructor(graph) {
        super(graph);
        this.attributes = ["inverse functional"];
        this.styleClass = "inversefunctionalproperty";
        this.type = "owl:InverseFunctionalProperty";
    }


}