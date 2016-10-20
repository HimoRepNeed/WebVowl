
/// <reference path="./textTools.ts" />
/// <reference path="./baseTextElement.ts" />

namespace TRVOWL.util {
    export class AbsoluteTextElement extends BaseTextElement {

        constructor(container, backgroundColor) {
            super(container, backgroundColor);
        }

        addText(text, yShift, prefix, suffix) {
            if (text) {
                this.addTextline(text, this.CSS_CLASSES.default, yShift, prefix, suffix);
            }
        }

        addSubText(text, yShift) {
            if (text) {
                this.addTextline(text, this.CSS_CLASSES.subtext, yShift, "(", ")");
            }
        }

        addEquivalents(text, yShift) {
            if (text) {
                this.addTextline(text, this.CSS_CLASSES.default, yShift);
            }
        }

        addInstanceCount(instanceCount, yShift) {
            if (instanceCount) {
                this.addTextline(instanceCount.toString(), this.CSS_CLASSES.instanceCount, yShift);
            }
        }

        addTextline(text, style, yShift, prefix?, postfix?) {
            var truncatedText = TextTools.truncate(text, this.textBlock.datum().textWidth(yShift), style);

            var tspan = this.textBlock.append("tspan")
                .classed(this.CSS_CLASSES.default, true)
                .classed(style, true)
                .text(super._applyPreAndPostFix(truncatedText, prefix, postfix))
                .attr("x", 0);
            this._repositionTextLine(tspan, yShift);
        }

        _repositionTextLine(tspan, yShift) {
            var fontSizeProperty = window.getComputedStyle(tspan.node()).getPropertyValue("font-size");
            var fontSize = parseFloat(fontSizeProperty);

            /* BBox height is not supported in Firefox for tspans and dominant-baseline doesn't work in some SVG editors */
            let approximatedShiftForVerticalCentering = (1 / 3) * fontSize;

            tspan.attr("y", approximatedShiftForVerticalCentering + (yShift || 0) + "px");
        };
    }
}