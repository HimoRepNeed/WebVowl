/// <reference path="../roundNode.ts" />

namespace TRVOWL.elements {
    export class OWLThing extends RoundNode {
        constructor(protected graph) {
            super(graph);
            this.label = "Thing";
            this.type = 'owl:Thing';
            this.iri = "http://www.w3.org/2002/07/owl#Thing";
            this.radius = 30;
        }

        draw(element) {
            return super.draw(element, ['white', 'dashed']);
        }
    }
}