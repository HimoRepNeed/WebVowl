/// <reference path="../util/elementTools.ts" />


namespace TRVOWL.modules {
    export class PickAndPin {
        static pinnedElements = [];
        static handle(selectedElement) {
            if (PickAndPin.wasNotDragged()) {
                return;
            }

            if (TRVOWL.util.ElementTools.isProperty(selectedElement)) {
                if (selectedElement.inverse() && selectedElement.inverse().pinned) {
                    return;
                } else if (PickAndPin.hasNoPaallelProperties(selectedElement)) {
                    return;
                }
            }

            if (!selectedElement.pinned) {
                selectedElement.drawPin();
                PickAndPin.pinnedElements.push(selectedElement);
            }
        };
        static reset() { }

        private static wasNotDragged() {
            return !d3.event.defaultPrevented;
        }

        private static hasNoPaallelProperties(selection) {
            return _.intersection(selection.domain().links(), selection.range().links()).length === 1;
        }
    }
}