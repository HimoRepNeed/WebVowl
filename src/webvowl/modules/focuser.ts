
export class Focuser {
    private static focusedElement;

    static handle(selectedElement) {
        if (d3.event.defaultPrevented) {
            return;
        }

        if (Focuser.focusedElement !== undefined) {
            Focuser.focusedElement.toggleFocus();
        }

        if (Focuser.focusedElement !== selectedElement) {
            selectedElement.toggleFocus();
            Focuser.focusedElement = selectedElement;
        } else {
            Focuser.focusedElement = undefined;
        }
    }

    static reset = function () {
        if (Focuser.focusedElement) {
            Focuser.focusedElement.toggleFocus();
            Focuser.focusedElement = undefined;
        }
    };
}