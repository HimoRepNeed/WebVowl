import { RoundNode } from '../roundNode';
import { DrawTools } from '../../drawTools';

export class OWLEquivalentClass extends RoundNode {

    private CIRCLE_SIZE_DIFFERENCE: number = 4;
    constructor(protected graph) {
        super(graph);

        this.styleClass = 'equivalentclass';
        this.type = 'owl:equivalentClass';
    }

    actualRadius(): number {
        return super.actualRadius() + this.CIRCLE_SIZE_DIFFERENCE;
    }

    draw(parentElement) {
        let cssClasses = this.collectCssClasses();

        this.nodeElement = parentElement;

        // draw the outer circle at first and afterwards the inner circle
        DrawTools.appendCircularClass(parentElement, this.actualRadius(), ["white", "embedded"]);
        DrawTools.appendCircularClass(parentElement, this.actualRadius() - this.CIRCLE_SIZE_DIFFERENCE, cssClasses, this.labelForCurrentLanguage, this.backgroundColor);

        this.postDrawActions();
    }

    setHoverHighlighting(enable) {
        this.nodeElement.selectAll("circle:last-of-type").classed("hovered", enable);
    };
}