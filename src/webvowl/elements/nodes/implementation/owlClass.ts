import { RoundNode } from '../roundNode';

export class OwlClass extends RoundNode { 

    constructor(graph) { 
        super(graph)
        this.type = 'owl:Class';
    }    
}