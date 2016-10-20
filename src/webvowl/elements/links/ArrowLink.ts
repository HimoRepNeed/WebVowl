/// <reference path="./PlainLink.ts" />

namespace TRVOWL.elements {

    export class ArrowLink extends PlainLink {

        constructor(domain, range, property) {
            super(domain, range, property);
        }

        draw(linkGroup, markerContainer) {
            var property = this.label.property;
            var inverse = this.label.inverse();

            this.createPropertyMarker(markerContainer, property);
            if (inverse) {
                this.createInverseMarker(markerContainer, inverse);
            }
            super.draw(linkGroup, markerContainer);
            //PlainLink.prototype.draw.apply(this, arguments);

            // attach the markers to the link
            linkGroup.attr("marker-end", "url(#" + property.markerId() + ")");

            if (inverse) {
                linkGroup.attr("marker-start", "url(#" + inverse.markerId() + ")");
            }
        }

        private createPropertyMarker = (markerContainer, property) => {
            var marker = this.appendBasicMarker(markerContainer, property);
            marker.attr("refX", 12);
            marker.append("path")
                .attr("d", "M0,-8L12,0L0,8Z")
                .classed(property.markerType, true);

            property.markerElement = marker;
        }

        private createInverseMarker = (markerContainer, inverse) => {
            var inverseMarker = this.appendBasicMarker(markerContainer, inverse);
            inverseMarker.append("path")
                .attr("d", "M12,-8L0,0L12,8Z")
                .classed(inverse.markerType, true);

            inverse.markerElement = inverseMarker;
        }

        private appendBasicMarker = (markerContainer, property) => {
            return markerContainer.append("marker")
                .datum(property)
                .attr("id", property.markerId())
                .attr("viewBox", "0 -8 14 16")
                .attr("markerWidth", 12)
                .attr("markerHeight", 12)
                .attr("markerUnits", "userSpaceOnUse")
                .attr("orient", "auto");
        }
    }
}