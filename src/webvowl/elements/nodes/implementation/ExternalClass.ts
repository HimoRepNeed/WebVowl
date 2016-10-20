/// <reference path="../roundNode.ts" />

namespace TRVOWL.elements {
    export class ExternalClass extends RoundNode {

        constructor(graph) {
            super(graph);
            this.attributes = ['external'];
            this.type = 'ExternalClass';
        }
    }
}