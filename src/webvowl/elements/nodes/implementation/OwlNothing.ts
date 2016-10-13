import { OWLThing } from './OwlThing';

export class OWLNothing extends OWLThing {
    constructor(graph) {
        super(graph);
        this.label = 'Nothing';
        this.type = 'owl:Nothing';
        this.iri = 'http://www.w3.org/2002/07/owl#Nothing';
    }
}