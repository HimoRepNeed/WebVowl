import { RoundNode } from '../roundNode';

export class OWLDeprecatedClass extends RoundNode {
    constructor(graph) { 
        super(graph);
        this.attributes = ['deprecated'];
        this.type = 'owl:DeprecatedClass';
    }
}