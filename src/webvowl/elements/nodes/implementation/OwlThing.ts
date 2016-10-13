import { RoundNode } from '../roundNode';

export class OWLThing extends RoundNode {
    constructor(protected graph) {
        super(graph);
        this.label = "Thing";
        this.type = 'owl:Thing';
        this.iri = "http://www.w3.org/2002/07/owl#Thing";
        this.radius = 30;
    }

    draw(element) {
        super.draw(element, ['white', 'dashed']);
    }
}