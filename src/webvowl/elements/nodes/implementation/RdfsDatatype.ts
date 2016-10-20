/// <reference path="../DatatypeNode.ts" />

namespace TRVOWL.elements {
    export class RDFSDatatypeNode extends DatatypeNode {

        constructor(graph) {
            super(graph);
            this.attributes = ['datatype'];
            this.type = 'rdfs:Datatype';
        }
    }
}