/// <reference path="../roundNode.ts" />

namespace TRVOWL.elements {
    export class OwlClass extends RoundNode {

        constructor(graph) {
            super(graph)
            this.type = 'owl:Class';
        }
    }
}