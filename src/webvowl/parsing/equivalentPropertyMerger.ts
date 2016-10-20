/// <reference path="../util/elementTools.ts" />
/// <reference path="../elements/nodes/implementation/OwlThing.ts" />
/// <reference path="../elements/nodes/implementation/RdfsLiteral.ts" />

namespace TRVOWL.parsing {
    export class EquivalentPropertyMerger {

        private static PREFIX = "GENERATED-MERGED_RANGE-";
        private static OBJECT_PROPERTY_DEFAULT_RANGE_TYPE = "owl:Thing";
        private static DATA_PROPERTY_DEFAULT_RANGE_TYPE = "rdfs:Literal";


        private static findMergeNode = (propertyWithEquivalents, nodeMap) => {
            var typeMap = EquivalentPropertyMerger.mapPropertiesRangesToType(propertyWithEquivalents, nodeMap);
            var typeSet = d3.set(typeMap.keys());

            // default types are the fallback values and should be ignored for the type determination
            typeSet.remove(EquivalentPropertyMerger.OBJECT_PROPERTY_DEFAULT_RANGE_TYPE);
            typeSet.remove(EquivalentPropertyMerger.DATA_PROPERTY_DEFAULT_RANGE_TYPE);

            // exactly one type to chose from -> take the node of this type as range
            if (typeSet.size() === 1) {
                var type = typeSet.values()[0];
                var ranges = typeMap.get(type);

                if (ranges.length === 1) {
                    return ranges[0];
                }
            }
        }

        private static createIdToPropertyMapper = (propertyMap) => {
            return function (id) {
                return propertyMap[id];
            };
        }

        private static mapPropertiesRangesToType = (properties, nodeMap) => {
            var typeMap = d3.map();

            properties.forEach(function (property) {
                var range = nodeMap[property.range];
                var type = range.type;

                if (!typeMap.has(type)) {
                    typeMap.set(type, []);
                }

                typeMap.get(type).push(range);
            });

            return typeMap;
        }

        private static createDefaultMergeNode = (property, graph) => {
            var range;

            if (TRVOWL.util.ElementTools.isDatatypeProperty(property)) {
                range = new TRVOWL.elements.RDFSLiteralNode(graph);
            } else {
                range = new TRVOWL.elements.OWLThing(graph);
            }
            range.id = EquivalentPropertyMerger.PREFIX + property.id;

            return range;
        }

        private static replaceRangesAndCollectNodesToHide = (propertyWithEquivalents, mergeNode, properties, processedPropertyIds) => {
            var nodesToHide = [];

            propertyWithEquivalents.forEach(function (property) {
                var oldRangeId = property.range;
                property.range = mergeNode.id;
                if (!EquivalentPropertyMerger.isDomainOrRangeOfOtherProperty(oldRangeId, properties)) {
                    nodesToHide.push(oldRangeId);
                }

                processedPropertyIds.add(property.id);
            });

            return nodesToHide;
        }

        private static isDomainOrRangeOfOtherProperty = (nodeId, properties) => {
            for (var i = 0; i < properties.length; i++) {
                var property = properties[i];
                if (property.domain === nodeId || property.range === nodeId) {
                    return true;
                }
            }

            return false;
        }

        private static filterVisibleNodes = (nodes, nodeIdsToHide) => {
            var filteredNodes = [];

            nodes.forEach(function (node) {
                if (!nodeIdsToHide.has(node.id)) {
                    filteredNodes.push(node);
                }
            });

            return filteredNodes;
        }


        static merge = (properties: any, nodes: any, propertyMap, nodeMap, graph) => {
            let totalNodeIdsToHide = d3.set();
            let processedPropertyIds = d3.set();
            let mergeNodes = [];

            for (let i = 0; i < properties.length; i++) {
                let property = properties[i];
                if (property.equivalents && property.equivalents.length > 0) {
                    let equivalents = property.equivalents.map(EquivalentPropertyMerger.createIdToPropertyMapper(propertyMap));

                    if (equivalents.length === 0 || processedPropertyIds.has(property.id)) {
                        continue;
                    }

                    let propertyWithEquivalents = equivalents.concat(property);

                    let mergeNode = EquivalentPropertyMerger.findMergeNode(propertyWithEquivalents, nodeMap);
                    if (!mergeNode) {
                        mergeNode = EquivalentPropertyMerger.createDefaultMergeNode(property, graph);
                        mergeNodes.push(mergeNode);
                    }

                    let nodeIdsToHide = EquivalentPropertyMerger.replaceRangesAndCollectNodesToHide(propertyWithEquivalents, mergeNode, properties,
                        processedPropertyIds);
                    for (let j = 0; j < nodeIdsToHide.length; j++) {
                        totalNodeIdsToHide.add(nodeIdsToHide[j]);
                    }
                }
            }

            return EquivalentPropertyMerger.filterVisibleNodes(nodes.concat(mergeNodes), totalNodeIdsToHide);
        };
    }
}