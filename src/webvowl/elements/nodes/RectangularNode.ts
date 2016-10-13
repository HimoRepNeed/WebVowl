import { BaseNode } from './BaseNode';
import { DrawTools } from '../drawTools';
import { CenteringTextElement } from '../../util/centeringTextElement';
import { RectangularElementTools } from '../rectangularElementTools';

export class RectangularNode extends BaseNode {

    height: number = 20;
    width: number = 60;
    pinGroupElement;
    smallestRadius: number = this.height / 2;

    constructor(graph) {
        super(graph);
    }

    actualRadius(): number {
        return this.smallestRadius;
    };

    distanceToBorder = function (dx, dy) {
        return RectangularElementTools.distanceToBorder(this, dx, dy);
    };

    setHoverHighlighting(enable: boolean) {
        this.nodeElement.selectAll("rect").classed("hovered", enable);
    };

    textWidth = (): number => {
        return this.width;
    };

    toggleFocus = () => {
        this.focused = !this.focused;
        this.nodeElement.select("rect").classed("focused", this.focused);
    };

    draw(parentElement, additionalCssClasses) {
        let textBlock;
        let cssClasses = this.collectCssClasses();

        this.nodeElement = parentElement;

        if (additionalCssClasses instanceof Array) {
            cssClasses = cssClasses.concat(additionalCssClasses);
        }
        DrawTools.appendRectangularClass(parentElement, this.width, this.height, cssClasses,
            this.labelForCurrentLanguage(), this.backgroundColor);

        textBlock = new CenteringTextElement(parentElement, this.backgroundColor);
        textBlock.addText(this.labelForCurrentLanguage());

        this.addMouseListeners();

        if (this.pinned) {
            this.drawPin();
        }
    }

    drawPin = () => {
        this.pinned = true;

        var dx = 0.25 * this.width,
            dy = -1.1 * this.height;

        this.pinGroupElement = DrawTools.drawPin(this.nodeElement, dx, dy, this.removePin);
    };

    removePin = function () {
        this.pinned = false;
        if (this.pinGroupElement) {
            this.pinGroupElement.remove();
        }
        this.graph.updateStyle();
    };

}