/// <reference path="../baseProperty.ts" />

namespace TRVOWL.elements {
    export class SetOperatorProperty extends BaseProperty {
        constructor(graph) {
            super(graph);
            this.labelVisible = false;
            this.linkType = "dashed";
            this.markerType = "white";
            this.styleClass = "setoperatorproperty";
            this.type = "setOperatorProperty";
        }
    }
}