import { BaseTextElement } from './basetextElement';
import { TextTools } from './textTools';

export class CenteringTextElement extends BaseTextElement {

    constructor(container, backgroundColor) {
        super(container, backgroundColor);
    }

    addText = function (text, prefix?, suffix?) {
        if (text) {
            this.addTextline(text, this.CSS_CLASSES.default, prefix, suffix);
        }
    };

    addSubText = function (text) {
        if (text) {
            this.addTextline(text, this.CSS_CLASSES.subtext, "(", ")");
        }
    };

    addEquivalents = function (text) {
        if (text) {
            this.addTextline(text, this.CSS_CLASSES.default);
        }
    };

    addInstanceCount = (instanceCount) => {
        if (instanceCount) {
            this.addTextline(instanceCount.toString(), this.CSS_CLASSES.instanceCount);
        }
    };

    addTextline = (text, style, prefix?, postfix?) => {
        var truncatedText = TextTools.truncate(text, this.textBlock.datum.textWidth, style);

        var tspan = this.textBlock.append("tspan")
            .classed(this.CSS_CLASSES.default, true)
            .classed(style, true)
            .text(this._applyPreAndPostFix(truncatedText, prefix, postfix))
            .attr("x", 0);
        this._repositionTextLine(tspan);

        this._repositionTextBlock();
    };

    _repositionTextLine = (tspan) => {
        let fontSizeProperty = window.getComputedStyle(tspan.node()).getPropertyValue("font-size");
        let fontSize = parseFloat(fontSizeProperty);

        let siblingCount = this._lineCount() - 1;
        let lineDistance = siblingCount > 0 ? this.LINE_DISTANCE : 0;

        tspan.attr("dy", fontSize + lineDistance + "px");
    };

    _repositionTextBlock = () => {
        // Nothing to do if no child elements exist
        var lineCount = this._lineCount();
        if (lineCount < 1) {
            this.textBlock.attr("y", 0);
            return;
        }

        var textBlockHeight = this.textBlock.node().getBBox().height;
        this.textBlock.attr("y", -textBlockHeight * 0.5 + "px");
    };

    _lineCount = () => {
        return this.textBlock.property("childElementCount");
    };
}