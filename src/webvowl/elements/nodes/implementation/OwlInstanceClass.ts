import { RoundNode } from '../roundNode';
import { OwlClass } from '../implementation/OwlClass'

export class OWLInstanceClass extends OwlClass {

    constructor(graph) {
        super(graph)
        this.type = 'owl:instanceClass';
        this.tooltip = this.iri;
        this.radius = 40;
    }

    draw(element) {
        return super.draw(element, ['lightgreen', 'dotted']);
    }

}