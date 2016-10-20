/// <reference path="../baseProperty.ts" />

namespace TRVOWL.elements {
    export class OWLSomeValuesFromProperty extends BaseProperty {
        constructor(graph) {
            super(graph);
            this.linkType = "values-from";
            this.markerType = "filled values-from";
            this.styleClass = "somevaluesfromproperty";
            this.type = "owl:someValuesFrom";
        }

        generateCardinalityText() {
            let cardinalityText = "∃";
            let superCardinalityText = super.generateCardinalityText();
            if (superCardinalityText) {
                cardinalityText += ", " + superCardinalityText;
            }
            return cardinalityText;
        };
    }
}