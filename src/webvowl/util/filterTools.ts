/// <reference path="./elementTools.ts" />
/// <reference path="./set.ts" />

namespace TRVOWL.util {
    export class FilterTools {

        static filterNodesAndTidy(nodes, properties, shouldKeepNode) {
            //var removedNodes = require("./set")(),
            let cleanedNodes = [];
            let cleanedProperties = [];

            nodes.forEach(function (node) {
                if (shouldKeepNode(node)) {
                    cleanedNodes.push(node);
                } else {
                    Set.add(node);
                }
            });
            properties.forEach(function (property) {
                if (FilterTools.propertyHasVisibleNodes(property)) {
                    cleanedProperties.push(property);
                } else if (ElementTools.isDatatypeProperty(property)) {
                    // Remove floating datatypes/literals, because they belong to their datatype property
                    var index = cleanedNodes.indexOf(property.range());
                    if (index >= 0) {
                        cleanedNodes.splice(index, 1);
                    }
                }
            });

            return {
                nodes: cleanedNodes,
                properties: cleanedProperties
            };
        }

        private static propertyHasVisibleNodes(property) {
            return !Set.has(property.domain()) && !Set.has(property.range());
        }
    }
}