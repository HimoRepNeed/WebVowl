import { RoundNode } from '../roundNode';

export class RDFSClass extends RoundNode {
    constructor(graph) {
        super(graph);
        this.attributes = ['rdf'];
        this.type = 'rdfs:Class';
    }
}