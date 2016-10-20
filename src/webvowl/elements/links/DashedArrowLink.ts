// import { ArrowLink } from './ArrowLink'
/// <reference path="./ArrowLink.ts" />

namespace TRVOWL.elements {

    export class DashedArrowLink extends ArrowLink {
        constructor(domain, range, property) {
            super(domain, range, property);
        }

        draw(linkGroup, markerContainer) {
            super.draw(linkGroup, markerContainer);
            linkGroup.selectAll('path').style('stroke', '#aaa').style('stroke-dasharray', '4,4');
        }
    }
}