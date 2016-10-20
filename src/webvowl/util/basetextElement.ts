namespace TRVOWL.util {
    export class BaseTextElement {
        textBlock;
        LINE_DISTANCE: number = 1;
        CSS_CLASSES = {
            default: "text",
            subtext: "subtext",
            instanceCount: "instance-count"
        };
        DARK_TEXT_COLOR = "#000";
        LIGHT_TEXT_COLOR = "#fff";

        constructor(private container, private backgroundColor) {
            this.textBlock = this.container.append('text')
                .classed("text", true)
                .style("fill", this._getTextColor(backgroundColor))
                .attr("text-anchor", "middle");
        }

        private _getTextColor = function (rawBackgroundColor) {
            if (!rawBackgroundColor) {
                return this.DARK_TEXT_COLOR;
            }

            var backgroundColor = d3.rgb(rawBackgroundColor);
            if (this.calculateLuminance(backgroundColor) > 0.5) {
                return this.DARK_TEXT_COLOR;
            } else {
                return this.LIGHT_TEXT_COLOR;
            }
        };

        translation = (x, y) => {
            this.textBlock.attr("transform", "translate(" + x + ", " + y + ")");
            return this;
        };

        remove = () => {
            this.textBlock.remove();
            return this;
        };

        _applyPreAndPostFix(text, prefix, postfix) {
            if (prefix) {
                text = prefix + text;
            }
            if (postfix) {
                text += postfix;
            }
            return text;
        };

        calculateLuminance(color) {
            return 0.3 * (color.r / 255) + 0.59 * (color.g / 255) + 0.11 * (color.b / 255);
        }
    }
}