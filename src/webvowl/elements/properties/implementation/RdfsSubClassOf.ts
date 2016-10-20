/// <reference path="../baseProperty.ts" />

namespace TRVOWL.elements {
    export class RDFSSubClassOf extends BaseProperty {
        constructor(graph) {
            super(graph);
            this.linkType = "dotted";
            this.markerType = "white";
            this.styleClass = "subclass";
            this.type = "rdfs:subClassOf";
            this.label = 'Subclass of';
        }

        draw(labelGroup) {
            this.labelVisible = !this.graph.options.compactNotation;
            return super.draw(labelGroup);
        };
    }
}