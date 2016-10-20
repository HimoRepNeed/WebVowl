// import { BaseNode } from './elements/nodes/baseNode';
/// <reference path="./elements/nodes/baseNode.ts" />
/// <reference path="./elements/nodes/nodePrototypeMap.ts" />
/// <reference path="./elements/properties/propertyPrototypeMap.ts" />
/// <reference path="./parsing/attributeParser.ts" />
/// <reference path="./parsing/equivalentPropertyMerger.ts" />
/// <reference path="./elements/properties/implementation/OwlDisjointWith.ts" />

namespace TRVOWL {
    export class Parser {
        static nodes;
        static properties;
        static classMap;
        static propertyMap;
        static graph;
        static ontologyData;

        static parse = (ontologyData, graph) => {
            if (!ontologyData || !graph) {
                return;
            }
            Parser.graph = graph;
            ontologyData.property = ontologyData.property || [];
            ontologyData.propertyAttribute = ontologyData.propertyAttribute || [];
            Parser.ontologyData = ontologyData;

            let classes = Parser.combineClasses(ontologyData.class, ontologyData.classAttribute);
            let datatypes = Parser.combineClasses(ontologyData.datatype, ontologyData.datatypeAttribute);
            let combinedClassesAndDatatypes = classes.concat(datatypes);
            let unparsedProperties = ontologyData.property || []

            // Inject properties for unions, intersections, ...
            Parser.addSetOperatorProperties(combinedClassesAndDatatypes, unparsedProperties);

            let combinedProperties = Parser.combineProperties(unparsedProperties, ontologyData.propertyAttribute);

            Parser.classMap = Parser.mapElements(combinedClassesAndDatatypes);
            Parser.propertyMap = Parser.mapElements(combinedProperties);

            Parser.mergeRangesOfEquivalentProperties(combinedProperties, combinedClassesAndDatatypes);

            // Process the graph data
            Parser.convertTypesToIris(combinedClassesAndDatatypes, ontologyData.namespace);
            Parser.convertTypesToIris(combinedProperties, ontologyData.namespace);

            Parser.nodes = Parser.createNodeStructure(combinedClassesAndDatatypes, Parser.classMap);
            Parser.properties = Parser.createPropertyStructure(combinedProperties, Parser.classMap, Parser.propertyMap);

        }

        private static combineClasses = (baseObject, attributes) => {
            let combinations = [];
            //let prototypeMap = Parser.createLowerCasePrototypeMap(nodePrototypeMap);

            if (baseObject) {
                let count = 0;
                angular.forEach(baseObject, function (c) {
                    let matchingAttribute;

                    if (attributes) {
                        for (let i = 0; i < attributes.length; i++) {
                            let attribute = attributes[i];
                            if (c.id === attribute.id) {
                                matchingAttribute = attribute;
                                break;
                            }
                        }
                        Parser.addAdditionalAttributes(c, matchingAttribute);

                        var node = TRVOWL.elements.NodeFactory.GetNode(Parser.graph, c.type.toLowerCase());

                        if (node) {
                            Parser.addAdditionalAttributes(c, node); // TODO might be unnecessary
                            node.annotations = c.annotations;
                            node.baseIri = c.baseIri;
                            node.comment = c.comment;
                            node.complement = c.complement;
                            node.disjointUnion = c.disjointUnion;
                            node.description = c.description;
                            node.equivalents = c.equivalents;
                            node.id = c.id;
                            node.intersection = c.intersection;
                            node.label = c.label ? c.label : node.label;
                            node.union = c.union;
                            node.iri = c.iri;

                            if (c.individuals) {
                                angular.forEach(c.individuals, function (ind) {
                                    let individualnode = TRVOWL.elements.NodeFactory.GetNode(Parser.graph, 'owl:instanceclass');
                                    individualnode.label = node.label;
                                    individualnode.iri = ind.iri;
                                    individualnode.id = 'node-annt' + count;
                                    individualnode.tooltip = ind.iri;
                                    //
                                    combinations.push(individualnode);
                                    let property = {
                                        id: 'prop' + count,
                                        type: 'owl:individualProperty'
                                    }

                                    let propertyAttribute = {
                                        domain: individualnode.id,
                                        range: node.id,
                                        id: 'prop' + count,
                                        label: { 'IRI-based': 'Instance Of' }
                                    }

                                    Parser.ontologyData.property.push(property);
                                    Parser.ontologyData.propertyAttribute.push(propertyAttribute);

                                    if (ind.annotations) {
                                        individualnode.annotations = ind.annotations;
                                        let anntcount = 0;
                                        for (let a in individualnode.annotations) {
                                            let aa = individualnode.annotations[a];
                                            let aaa = aa[0];
                                            let annotationNode = TRVOWL.elements.NodeFactory.GetNode(Parser.graph, 'rdfs:datatype');
                                            annotationNode.label = aaa.identifier;
                                            annotationNode.iri = aaa.identifier;
                                            annotationNode.id = 'node-annotationt' + count;
                                            combinations.push(annotationNode);
                                            let p = {
                                                id: 'annotation-' + anntcount,
                                                type: 'owl:DatatypeProperty'
                                            }
                                            let pa = {
                                                domain: individualnode.id,
                                                id: 'annotation-' + anntcount,
                                                range: annotationNode.id,
                                                label: aaa.identifier
                                            }
                                            // Parser.ontologyData.property.push(p);
                                            // Parser.ontologyData.propertyAttribute.push(pa);
                                            anntcount = anntcount + 1;
                                        }
                                    }




                                    //
                                    node.individuals.push(individualnode);
                                    count = count + 1;
                                })
                            }


                            if (c.attributes) {
                                let dedupAttributes = d3.set(c.attributes.concat(c.attributes));
                                c.attributes = dedupAttributes.values();
                            }
                            combinations.push(node);
                        } else {
                            console.error("Unknown element type: " + c.type);
                        }
                    }
                });
            }

            return combinations;
        }

        private static mergeRangesOfEquivalentProperties = (properties, nodes) => {
            // pass clones of arrays into the merger to keep the current functionality of this module
            let newNodes = TRVOWL.parsing.EquivalentPropertyMerger.merge(properties.slice(), nodes.slice(), Parser.propertyMap, Parser.classMap, Parser.graph);

            // replace all the existing nodes and map the nodes again
            nodes.length = 0;
            Array.prototype.push.apply(nodes, newNodes);
            Parser.classMap = Parser.mapElements(nodes);
        }

        private static combineProperties = (baseObjects: any, attributes: any) => {
            var combinations = [];
            //var prototypeMap = createLowerCasePrototypeMap(propertyPrototypeMap);
            if (baseObjects) {
                baseObjects.forEach(function (element: any) {
                    var matchingAttribute;

                    if (attributes) {
                        // Look for an attribute with the same id and merge them
                        for (var i = 0; i < attributes.length; i++) {
                            var attribute = attributes[i];
                            if (element.id === attribute.id) {
                                matchingAttribute = attribute;
                                break;
                            }
                        }
                        Parser.addAdditionalAttributes(element, matchingAttribute);
                    }

                    // Then look for a prototype to add its properties
                    //var Prototype = prototypeMap.get(element.type.toLowerCase());
                    //TODO use Factory
                    var property = TRVOWL.elements.PropertyFactory.GetProperty(Parser.graph, element.type.toLowerCase());

                    if (property) {
                        // Create the matching object and set the properties
                        //var property = new Prototype(graph);
                        property.annotations = element.annotations;
                        property.baseIri = element.baseIri;
                        property.cardinality = element.cardinality;
                        property.comment = element.comment;
                        property.domain = element.domain;
                        property.description = element.description;
                        property.equivalents = element.equivalent;
                        property.id = element.id;
                        property.inverse(element.inverse);
                        property.label = element.label ? element.label : property.label;
                        property.minCardinality = element.minCardinality;
                        property.maxCardinality = element.maxCardinality;
                        property.range = element.range;
                        property.subproperties = element.subproperty;
                        property.superproperties = element.superproperty;
                        // .type(element.type) Ignore, because we predefined it
                        property.iri = element.iri;

                        if (element.attributes) {
                            var deduplicatedAttributes = d3.set(element.attributes.concat(property.attributes));
                            property.attributes = deduplicatedAttributes.values();
                        }

                        combinations.push(property);
                    } else {
                        console.error("Unknown element type: " + element.type);
                    }

                });
            }

            return combinations;
        }

        private static createNodeStructure = (rawNodes: any, classMap: any): any => {
            let nodes = [];

            // Set the default values
            let maxIndividualCount = 0;
            rawNodes.forEach(function (node) {
                maxIndividualCount = Math.max(maxIndividualCount, node.individuals.length);
                node.visible = true;
            });

            rawNodes.forEach(function (node) {
                // Merge and connect the equivalent nodes
                Parser.processEquivalentIds(node, classMap);

                TRVOWL.parsing.AttributeParser.parseClassAttributes(node);

                node.maxIndividualCount = maxIndividualCount;
            });

            // Collect all nodes that should be displayed
            rawNodes.forEach(function (node) {
                if (node.visible) {
                    nodes.push(node);
                }
            });

            return nodes;
        }

        private static findId = (object) => {
            if (!object) {
                return undefined;
            } else if (typeof object === "string") {
                return object;
            } else if ("id" in object) {
                return object.id;
            } else {
                console.warn("No Id was found for this object: " + object);
                return undefined;
            }
        }

        private static processEquivalentIds = (element: any, elementMap: any) => {
            let eqIds = element.equivalents;

            if (!eqIds || element.equivalentBase) {
                return;
            }

            // Replace ids with the corresponding objects
            for (var i = 0, l = eqIds.length; i < l; ++i) {
                var eqId = Parser.findId(eqIds[i]);
                var eqObject = elementMap[eqId];

                if (eqObject) {
                    // Cross reference both objects
                    eqObject.equivalents = eqObject.equivalents;
                    if (eqObject.equivalents) {
                        eqObject.equivalents.push(element);
                    }
                    eqObject.equivalentBase = element;
                    eqIds[i] = eqObject;

                    // Hide other equivalent nodes
                    eqObject.visible = false;
                } else {
                    console.warn("No class/property was found for equivalent id: " + eqId);
                }
            }
        }

        private static addAdditionalAttributes(base: any, addition: any): any {
            if (addition) {
                for (let addAttribute in addition) {
                    if (!(addAttribute in base) && addition.hasOwnProperty(addAttribute)) {
                        base[addAttribute] = addition[addAttribute];
                    }
                }
            }
            return base;
        }

        // private static createLowerCasePrototypeMap = (prototypeMap) => {
        //     return d3.map(prototypeMap.values(), function (Prototype) {
        //         return new Prototype().type().toLowerCase();
        //     });
        // }

        /**
         * Generates and adds properties for links to set operators.
         * @param classes unprocessed classes
         * @param properties unprocessed properties
         */
        private static addSetOperatorProperties = (classes: any, properties: any) => {
            let addProperties = (domainId: any, rangeIds: any, operatorType: any) => {
                if (!rangeIds) {
                    return;
                }

                rangeIds.forEach(function (rangeId, index) {
                    var property = {
                        id: "GENERATED-" + operatorType + "-" + domainId + "-" + rangeId + "-" + index,
                        type: "setOperatorProperty",
                        domain: domainId,
                        range: rangeId
                    };

                    properties.push(property);
                });
            }

            classes.forEach(function (clss) {
                addProperties(clss.id, clss.complement, "COMPLEMENT");
                addProperties(clss.id, clss.intersection, "INTERSECTION");
                addProperties(clss.id, clss.union, "UNION");
                addProperties(clss.id, clss.disjointUnion, "DISJOINTUNION");
            });
        }



        /**
         * Creates a map by mapping the array with the passed function.
         * @param array the array
         * @returns {{}}
         */
        private static mapElements = (array) => {
            var map = {};
            for (var i = 0, length = array.length; i < length; i++) {
                var element = array[i];
                map[element.id] = element;
            }
            return map;
        }


        /**
         * Tries to convert the type to an iri and sets it.
         * @param elements classes or properties
         * @param namespaces an array of namespaces
         */
        private static convertTypesToIris = (elements: any, namespaces: any) => {
            elements.forEach(function (element) {
                if (typeof element.iri === "string") {
                    element.iri = Parser.replaceNamespace(element.iri, namespaces);
                }
            });
        }

        /**
         * Replaces the namespace (and the separator) if one exists and returns the new value.
         * @param address the address with a namespace in it
         * @param namespaces an array of namespaces
         * @returns {string} the processed address with the (possibly) replaced namespace
         */
        private static replaceNamespace = (address: any, namespaces: any) => {
            var separatorIndex = address.indexOf(":");
            if (separatorIndex === -1) {
                return address;
            }

            var namespaceName = address.substring(0, separatorIndex);

            for (var i = 0, length = namespaces.length; i < length; ++i) {
                var namespace = namespaces[i];
                if (namespaceName === namespace.name) {
                    return namespace.iri + address.substring(separatorIndex + 1);
                }
            }
            return address;
        }

        private static wasNodeMerged = (node: any) => {
            return node && !node.visible && node.equivalentBase;
        }

        private static referenceSubOrSuperProperties = (subOrSuperPropertiesArray) => {
            let i;
            let l;

            if (!subOrSuperPropertiesArray) {
                return;
            }

            for (i = 0, l = subOrSuperPropertiesArray.length; i < l; ++i) {
                var subOrSuperPropertyId = Parser.findId(subOrSuperPropertiesArray[i]);
                var subOrSuperProperty = Parser.propertyMap[subOrSuperPropertyId];

                if (subOrSuperProperty) {
                    // Replace id with object
                    subOrSuperPropertiesArray[i] = subOrSuperProperty;
                } else {
                    console.warn("No sub-/superproperty was found for id: " + subOrSuperPropertyId);
                }
            }
        }

        private static processDisjoints = (property) => {
            if (property instanceof TRVOWL.elements.OWLDisjointWith === false) {
                return;
            }

            let domain = property.domain;
            let range = property.range;

            // Check the domain.
            if (!domain.disjointWith) {
                domain.disjointWith = [];
            }

            // Check the range.
            if (!range.disjointWith) {
                range.disjointWith = [];
            }

            domain.disjointWith.push(property.range);
            range.disjointWith.push(property.domain);
        }

        private static getOtherEqualProperty = (properties, referenceProperty) => {
            var i, l, property;

            for (i = 0, l = properties.length; i < l; i++) {
                property = properties[i];

                if (referenceProperty === property) {
                    continue;
                }
                if (referenceProperty.domain !== property.domain ||
                    referenceProperty.range !== property.range) {
                    continue;
                }

                // Check for an equal IRI, if non existent compare label and type
                if (referenceProperty.iri && property.iri) {
                    if (referenceProperty.iri === property.iri) {
                        return property;
                    }
                } else if (referenceProperty.type === property.type &&
                    referenceProperty.defaultLabel === property.defaultLabel) {
                    return property;
                }
            }

            return undefined;
        }

        private static createPropertyStructure = (rawProperties: any, classMap: any, propertyMap: any) => {
            let properties = [];

            // Set default values
            rawProperties.forEach(function (property) {
                property.visible = true;
            });

            // Connect properties
            rawProperties.forEach(function (property) {
                let domain;
                let range;
                let domainObject
                let rangeObject;
                let inverse;

                /* Skip properties that have no information about their domain and range, like
                 inverse properties with optional inverse and optional domain and range attributes */
                if ((property.domain && property.range) || property.inverse()) {

                    var inversePropertyId = Parser.findId(property.inverse());
                    // Look if an inverse property exists
                    if (inversePropertyId) {
                        inverse = propertyMap[inversePropertyId];
                        if (!inverse) {
                            console.warn("No inverse property was found for id: " + inversePropertyId);
                        }
                    }

                    // Either domain and range are set on this property or at the inverse
                    if (typeof property.domain !== "undefined" && typeof property.range !== "undefined") {
                        domain = Parser.findId(property.domain);
                        range = Parser.findId(property.range);

                        domainObject = classMap[domain];
                        rangeObject = classMap[range];
                    } else if (inverse) {
                        // Domain and range need to be switched
                        domain = Parser.findId(inverse.range);
                        range = Parser.findId(inverse.domain);

                        domainObject = classMap[domain];
                        rangeObject = classMap[range];
                    } else {
                        console.warn("Domain and range not found for property: " + property.id());
                    }

                    // Set the references on this property
                    property.domain = domainObject;
                    property.range = rangeObject;

                    // Also set the attributes of the inverse property
                    if (inverse) {
                        property.inverse(inverse);
                        inverse.inverse(property);

                        // Switch domain and range
                        inverse.domain = rangeObject;
                        inverse.range = domainObject;
                    }
                }

                // Reference sub- and superproperties
                Parser.referenceSubOrSuperProperties(property.subproperties);
                Parser.referenceSubOrSuperProperties(property.superproperties);
            });

            // Merge equivalent properties and process disjoints.
            rawProperties.forEach(function (property) {
                Parser.processEquivalentIds(property, propertyMap);
                Parser.processDisjoints(property);

                TRVOWL.parsing.AttributeParser.parsePropertyAttributes(property);
            });

            // Add additional information to the properties
            rawProperties.forEach(function (property) {

                // Properties of merged classes should point to/from the visible equivalent class
                var propertyWasRerouted = false;
                if (Parser.wasNodeMerged(property.domain)) {
                    property.domain(property.domain.equivalentBase);
                    propertyWasRerouted = true;
                }
                if (Parser.wasNodeMerged(property.range)) {
                    property.range(property.range.equivalentBase);
                    propertyWasRerouted = true;
                }

                // But there should not be two equal properties between the same domain and range
                var equalProperty = Parser.getOtherEqualProperty(rawProperties, property);
                if (propertyWasRerouted && equalProperty) {
                    property.visible = false;

                    equalProperty.redundantProperties.push(property);
                }

                // Hide property if source or target node is hidden
                if ((property.domain && !property.domain.visible) || (property.range && !property.range.visible)) {
                    property.visible = false;
                }

                // Collect all properties that should be displayed
                if (property.visible) {
                    properties.push(property);
                }
            });

            return properties;
        }
    }
}