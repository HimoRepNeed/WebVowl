import { ArrowLink } from './ArrowLink'

export class DashedArrowLink extends ArrowLink {
    constructor(domain, range, property) {
        super(domain, range, property);
    }

    draw(linkGroup, markerContainer) {
        super.draw(linkGroup, markerContainer);
        linkGroup.selectAll('path').style('stroke', '#ddd').style('stroke-dasharray', '4,4');
    }
}