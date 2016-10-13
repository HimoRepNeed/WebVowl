import { BaseProperty } from '../baseProperty'

export class OWLAllValuesFromProperty extends BaseProperty {
    constructor(graph) {
        super(graph);
        this.linkType = "values-from";
        this.markerType = "filled values-from";
        this.styleClass = "allvaluesfromproperty";
        this.type = "owl:allValuesFrom";
    }

    generateCardinalityText() {
        var cardinalityText = "∀";
        var superCardinalityText = super.generateCardinalityText();
        if (superCardinalityText) {
            cardinalityText += ", " + superCardinalityText;
        }

        return cardinalityText;
    };
}