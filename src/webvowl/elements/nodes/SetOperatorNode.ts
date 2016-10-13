import { RoundNode } from './roundNode';
import { BoxArrowLink } from '../links/BoxArrowLink'
import { DrawTools } from '../drawTools';
import { AbsoluteTextElement } from '../../util/AbsoluteTextElement';

export class SetOperatorNode extends RoundNode {



    constructor(graph) {
        super(graph);
    }

    setHoverHighlighting(val: boolean) {
        super.setHoverHighlighting(val);
        this.links.forEach(function (link) {
            if (link instanceof BoxArrowLink) {
                link.property.setHighlighting(val);
            }
        });
    }

    draw(element) {
        this.nodeElement = element;
        let cssclass = this.collectCssClasses().join(" ");
        DrawTools.appendCircularClass(element, this.actualRadius(), cssclass,
            this.labelForCurrentLanguage(), this.backgroundColor);
    }

    postDrawActions() {
        super.postDrawActions();
        this.textBlock.remove();


        let textElement = new AbsoluteTextElement(this.nodeElement, this.backgroundColor);

        let equivalentsString = this.equivalentsString;
        let offsetForFollowingEquivalents = equivalentsString ? -30 : -17;
        let suffixForFollowingEquivalents = equivalentsString ? "," : "";
        textElement.addText(this.labelForCurrentLanguage(), offsetForFollowingEquivalents, "",
            suffixForFollowingEquivalents);

        textElement.addEquivalents(equivalentsString, -17);
        textElement.addInstanceCount(this.individuals.length, 17);
        this.textBlock = textElement;
    }

}