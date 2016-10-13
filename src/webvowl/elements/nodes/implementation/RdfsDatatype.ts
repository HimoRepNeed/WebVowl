import { DatatypeNode } from '../DatatypeNode';

export class RDFSDatatypeNode extends DatatypeNode {

    constructor(graph) {
        super(graph);
        this.attributes = ['datatype'];
        this.type = 'rdfs:Datatype';
    }
}