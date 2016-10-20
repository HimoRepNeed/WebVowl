/// <reference path="../roundNode.ts" />

namespace TRVOWL.elements {
    export class OWLDeprecatedClass extends RoundNode {
        constructor(graph) {
            super(graph);
            this.attributes = ['deprecated'];
            this.type = 'owl:DeprecatedClass';
        }
    }
}