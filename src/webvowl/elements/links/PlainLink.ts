import { Label } from './Label';
import { LinkPart } from './linkPart';


export class PlainLink {

    layers;
    layerIndex;
    loops;
    loopIndex;
    label: Label;
    backPart: LinkPart;
    frontPart: LinkPart;
    linkparts: Array<LinkPart>;

    constructor(private domain, private range, public property) {
        this.label = new Label(property, this);
        this.frontPart = new LinkPart(this.domain, this.label, this);
        this.backPart = new LinkPart(this.label, this.range, this);
        this.linkparts = [this.frontPart, this.backPart];
    }

    draw(linkGroup, markerContainer) {
        var property = this.label.property;
        var inverse: any = this.label.inverse();

        property.linkGroup = linkGroup;
        if (inverse) {
            inverse.linkGroup = linkGroup;
        }

        linkGroup.append("path")
            .classed("link-path", true)
            .classed(this.domain.cssClassOfNode(), true)
            .classed(this.range.cssClassOfNode(), true)
            .classed(property.linkType, true);
    }

    inverse() {
        return this.label.inverse();
    }

    isLoop = () => {
        return this.domain.equals(this.range);
    }
}