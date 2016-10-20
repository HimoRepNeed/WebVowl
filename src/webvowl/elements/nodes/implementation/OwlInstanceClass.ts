/// <reference path="../roundNode.ts" />
/// <reference path="../implementation/OwlClass.ts" />

namespace TRVOWL.elements {
    export class OWLInstanceClass extends OwlClass {

        constructor(graph) {
            super(graph)
            this.type = 'owl:instanceClass';
            this.tooltip = this.iri;
            this.radius = 40;
        }

        draw(element) {
            return super.draw(element, ['lightgreen', 'dotted']);
        }
    }
}