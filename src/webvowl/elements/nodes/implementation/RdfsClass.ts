/// <reference path="../roundNode.ts" />

namespace TRVOWL.elements {
    export class RDFSClass extends RoundNode {
        constructor(graph) {
            super(graph);
            this.attributes = ['rdf'];
            this.type = 'rdfs:Class';
        }
    }
}