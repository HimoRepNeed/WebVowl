import { ArrowLink } from '../elements/links/ArrowLink';
import { BoxArrowLink } from '../elements/links/BoxArrowLink';
import { PlainLink } from '../elements/links/PlainLink';
import { Set } from '../util/set';
import { OWLDisjointWith } from '../elements/properties/implementation/OwlDisjointWith'
import { SetOperatorProperty } from '../elements/properties/implementation/SetOperatorProperty'
import { OWLIndividualProperty } from '../elements/properties/implementation/OwlIndividualProperty'
import { DashedArrowLink } from '../elements/links/DashedArrowLink';


export class LinkCreator {


    static createLinks = (properties) => {
        var links = LinkCreator.groupPropertiesToLinks(properties);

        for (var i = 0, l = links.length; i < l; i++) {
            var link = links[i];

            LinkCreator.countAndSetLayers(link, links);
            LinkCreator.countAndSetLoops(link, links);
        }

        return links;
    }

    private static groupPropertiesToLinks = (properties) => {
        let links = [];
        let property;
        Set.d3set(properties);
        // addedProperties = require("../util/set")();
        for (var i = 0, l = properties.length; i < l; i++) {
            property = properties[i];

            if (!Set.has(property)) {
                var link = LinkCreator.createLink(property);

                property.link = link;
                if (property.inverse()) {
                    property.inverse().link = link;
                }

                links.push(link);

                Set.add(property);
                if (property.inverse()) {
                    Set.add(property.inverse());
                }
            }
        }

        return links;
    }

    private static countAndSetLayers = (link, allLinks) => {
        var layer,
            layers,
            i, l;

        if (typeof link.layers === "undefined") {
            layers = [];

            // Search for other links that are another layer
            for (i = 0, l = allLinks.length; i < l; i++) {
                var otherLink = allLinks[i];
                if (link.domain === otherLink.domain && link.range === otherLink.range ||
                    link.domain === otherLink.range && link.range === otherLink.domain) {
                    layers.push(otherLink);
                }
            }

            // Set the results on each of the layers
            for (i = 0, l = layers.length; i < l; ++i) {
                layer = layers[i];

                layer.layerIndex = i;
                layer.layers = layers;
            }
        }
    }

    private static countAndSetLoops = (link, allLinks) => {
        var loop,
            loops,
            i, l;

        if (typeof link.loops === "undefined") {
            loops = [];

            // Search for other links that are also loops of the same node
            for (i = 0, l = allLinks.length; i < l; i++) {
                var otherLink = allLinks[i];
                if (link.domain === otherLink.domain && link.domain === otherLink.range) {
                    loops.push(otherLink);
                }
            }

            // Set the results on each of the loops
            for (i = 0, l = loops.length; i < l; ++i) {
                loop = loops[i];

                loop.loopIndex = i;
                loop.loops = loops;
            }
        }
    }

    private static createLink = (property) => {
        var domain = property.domain;
        var range = property.range;

        if (property instanceof OWLDisjointWith) {
            return new PlainLink(domain, range, property);
        } else if (property instanceof SetOperatorProperty) {
            return new BoxArrowLink(domain, range, property);
        } else if (property instanceof OWLIndividualProperty) {
            return new DashedArrowLink(domain, range, property);
        }
        return new ArrowLink(domain, range, property);
    }
}