namespace TRVOWL.data {
    export var sioc = {
        "_comment": "Created with OWL2VOWL (version 0.2.2-SNAPSHOT), http://vowl.visualdataweb.org",
        "header": {
            "languages": ["en", "undefined"],
            "baseIris": ["http://www.w3.org/1999/02/22-rdf-syntax-ns", "http://www.w3.org/2000/01/rdf-schema", "http://purl.org/dc/terms", "http://www.w3.org/2001/XMLSchema", "http://www.w3.org/2004/03/trix/rdfg-1", "http://xmlns.com/foaf/0.1", "http://rdfs.org/sioc/ns"],
            "iri": "http://rdfs.org/sioc/ns#",
            "version": "Revision: 1.35",
            "other": {
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "Revision: 1.35",
                    "type": "label"
                }],
                "seeAlso": [{
                    "identifier": "seeAlso",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/spec",
                    "type": "iri"
                }]
            }
        },
        "namespace": [],
        "metrics": {
            "classCount": 22,
            "datatypeCount": 30,
            "objectPropertyCount": 90,
            "datatypePropertyCount": 25,
            "propertyCount": 115,
            "nodeCount": 52,
            "individualCount": 1
        },
        "class": [{
            "id": "6",
            "type": "rdfs:Literal"
        }, {
            "id": "7",
            "type": "owl:Class"
        }, {
            "id": "9",
            "type": "owl:Class"
        }, {
            "id": "24",
            "type": "rdfs:Datatype"
        }, {
            "id": "25",
            "type": "rdfs:Literal"
        }, {
            "id": "26",
            "type": "owl:Class"
        }, {
            "id": "29",
            "type": "rdfs:Literal"
        }, {
            "id": "30",
            "type": "rdfs:Literal"
        }, {
            "id": "31",
            "type": "rdfs:Literal"
        }, {
            "id": "34",
            "type": "rdfs:Literal"
        }, {
            "id": "47",
            "type": "rdfs:Literal"
        }, {
            "id": "48",
            "type": "rdfs:Datatype"
        }, {
            "id": "76",
            "type": "rdfs:Literal"
        }, {
            "id": "77",
            "type": "rdfs:Literal"
        }, {
            "id": "78",
            "type": "owl:Thing"
        }, {
            "id": "46",
            "type": "owl:equivalentClass"
        }, {
            "id": "53",
            "type": "owl:Thing"
        }, {
            "id": "23",
            "type": "rdfs:Literal"
        }, {
            "id": "91",
            "type": "owl:Thing"
        }, {
            "id": "56",
            "type": "owl:Thing"
        }, {
            "id": "90",
            "type": "rdfs:Literal"
        }, {
            "id": "92",
            "type": "rdfs:Literal"
        }, {
            "id": "17",
            "type": "owl:Thing"
        }, {
            "id": "11",
            "type": "owl:Thing"
        }, {
            "id": "44",
            "type": "rdfs:Literal"
        }, {
            "id": "100",
            "type": "rdfs:Datatype"
        }, {
            "id": "1",
            "type": "owl:Class"
        }, {
            "id": "104",
            "type": "rdfs:Datatype"
        }, {
            "id": "105",
            "type": "rdfs:Literal"
        }, {
            "id": "106",
            "type": "rdfs:Literal"
        }, {
            "id": "80",
            "type": "rdfs:Literal"
        }, {
            "id": "84",
            "type": "rdfs:Literal"
        }, {
            "id": "107",
            "type": "rdfs:Literal"
        }, {
            "id": "109",
            "type": "rdfs:Datatype"
        }, {
            "id": "110",
            "type": "rdfs:Literal"
        }, {
            "id": "112",
            "type": "rdfs:Literal"
        }, {
            "id": "8",
            "type": "owl:Class"
        }, {
            "id": "99",
            "type": "owl:Class"
        }, {
            "id": "82",
            "type": "owl:Class"
        }, {
            "id": "36",
            "type": "owl:Class"
        }, {
            "id": "126",
            "type": "owl:Class"
        }, {
            "id": "39",
            "type": "owl:equivalentClass"
        }, {
            "id": "62",
            "type": "owl:Class"
        }, {
            "id": "66",
            "type": "owl:Class"
        }, {
            "id": "12",
            "type": "owl:Class"
        }, {
            "id": "43",
            "type": "owl:Class"
        }, {
            "id": "139",
            "type": "owl:Class"
        }],
        "classAttribute": [{
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "6",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://rdfs.org/sioc/ns#Forum",
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Forum",
                "en": "Forum"
            },
            "comment": {
                "en": "A discussion area on which Posts or entries are made."
            },
            "id": "7",
            "superClasses": ["8"]
        }, {
            "iri": "http://xmlns.com/foaf/0.1/Agent",
            "baseIri": "http://xmlns.com/foaf/0.1",
            "instances": 0,
            "label": {
                "IRI-based": "Agent"
            },
            "attributes": ["external"],
            "id": "9"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "24",
            "label": {
                "IRI-based": "nonNegativeInteger"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "25",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://rdfs.org/sioc/ns#Thread",
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Thread",
                "en": "Thread"
            },
            "comment": {
                "en": "A container for a series of threaded discussion Posts or Items."
            },
            "id": "26",
            "superClasses": ["8"]
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "29",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "30",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "31",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "34",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "47",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "48",
            "label": {
                "IRI-based": "nonNegativeInteger"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "id": "76",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "id": "77",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2002/07/owl#Thing",
            "baseIri": "http://owl2vowl.de",
            "id": "78",
            "label": {
                "undefined": "Thing"
            }
        }, {
            "iri": "http://rdfs.org/sioc/ns#User",
            "equivalent": ["39"],
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This class is deprecated. Use sioc:UserAccount from the SIOC ontology instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "User",
                "en": "User"
            },
            "comment": {
                "en": "UserAccount is now preferred. This is a deprecated class for a User in an online community site."
            },
            "attributes": ["equivalent", "deprecated"],
            "id": "46",
            "superClasses": ["82"]
        }, {
            "iri": "http://www.w3.org/2002/07/owl#Thing",
            "baseIri": "http://owl2vowl.de",
            "id": "53",
            "label": {
                "undefined": "Thing"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "id": "23",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2002/07/owl#Thing",
            "baseIri": "http://owl2vowl.de",
            "id": "91",
            "label": {
                "undefined": "Thing"
            }
        }, {
            "iri": "http://www.w3.org/2002/07/owl#Thing",
            "baseIri": "http://owl2vowl.de",
            "id": "56",
            "label": {
                "undefined": "Thing"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "90",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "92",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2002/07/owl#Thing",
            "baseIri": "http://owl2vowl.de",
            "id": "17",
            "label": {
                "undefined": "Thing"
            }
        }, {
            "iri": "http://www.w3.org/2002/07/owl#Thing",
            "baseIri": "http://owl2vowl.de",
            "id": "11",
            "label": {
                "undefined": "Thing"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "44",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "100",
            "label": {
                "IRI-based": "nonNegativeInteger"
            }
        }, {
            "iri": "http://rdfs.org/sioc/ns#Item",
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Item",
                "en": "Item"
            },
            "subClasses": ["43"],
            "comment": {
                "en": "An Item is something which can be in a Container."
            },
            "id": "1"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "104",
            "label": {
                "IRI-based": "nonNegativeInteger"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "105",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "106",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "80",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "84",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "107",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "109",
            "label": {
                "IRI-based": "nonNegativeInteger"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "110",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "112",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://rdfs.org/sioc/ns#Container",
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Container",
                "en": "Container"
            },
            "subClasses": ["7", "26"],
            "comment": {
                "en": "An area in which content Items are contained."
            },
            "id": "8"
        }, {
            "iri": "http://rdfs.org/sioc/ns#Role",
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Role",
                "en": "Role"
            },
            "comment": {
                "en": "A Role is a function of a UserAccount within a scope of a particular Forum, Site, etc."
            },
            "id": "99"
        }, {
            "iri": "http://xmlns.com/foaf/0.1/OnlineAccount",
            "baseIri": "http://xmlns.com/foaf/0.1",
            "instances": 0,
            "label": {
                "IRI-based": "OnlineAccount"
            },
            "subClasses": ["39", "46"],
            "attributes": ["external"],
            "id": "82"
        }, {
            "iri": "http://rdfs.org/sioc/ns#Usergroup",
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Usergroup",
                "en": "Usergroup"
            },
            "comment": {
                "en": "A set of UserAccounts whose owners have a common purpose or interest. Can be used for access control purposes."
            },
            "id": "36"
        }, {
            "iri": "http://rdfs.org/sioc/ns#Community",
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Community",
                "en": "Community"
            },
            "comment": {
                "en": "Community is a high-level concept that defines an online community and what it consists of."
            },
            "id": "126"
        }, {
            "iri": "http://rdfs.org/sioc/ns#UserAccount",
            "equivalent": ["46"],
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "UserAccount",
                "en": "User Account"
            },
            "comment": {
                "en": "A user account in an online community site."
            },
            "attributes": ["equivalent"],
            "id": "39",
            "superClasses": ["82"]
        }, {
            "iri": "http://www.w3.org/2004/03/trix/rdfg-1/Graph",
            "baseIri": "http://www.w3.org/2004/03/trix/rdfg-1",
            "instances": 0,
            "label": {
                "IRI-based": "Graph"
            },
            "attributes": ["external"],
            "id": "62"
        }, {
            "iri": "http://rdfs.org/sioc/ns#Site",
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Site",
                "en": "Site"
            },
            "comment": {
                "en": "A Site can be the location of an online community or set of communities, with UserAccounts and Usergroups creating Items in a set of Containers. It can be thought of as a web-accessible data Space."
            },
            "id": "66",
            "superClasses": ["12"]
        }, {
            "iri": "http://rdfs.org/sioc/ns#Space",
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Space",
                "en": "Space"
            },
            "subClasses": ["66"],
            "comment": {
                "en": "A Space is a place where data resides, e.g. on a website, desktop, fileshare, etc."
            },
            "id": "12"
        }, {
            "iri": "http://rdfs.org/sioc/ns#Post",
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Post",
                "en": "Post"
            },
            "comment": {
                "en": "An article or message that can be posted to a Forum."
            },
            "id": "43",
            "superClasses": ["139", "1"]
        }, {
            "iri": "http://xmlns.com/foaf/0.1/Document",
            "baseIri": "http://xmlns.com/foaf/0.1",
            "instances": 0,
            "label": {
                "IRI-based": "Document"
            },
            "subClasses": ["43"],
            "attributes": ["external"],
            "id": "139"
        }],
        "property": [{
            "id": "0",
            "type": "owl:objectProperty"
        }, {
            "id": "3",
            "type": "owl:objectProperty"
        }, {
            "id": "10",
            "type": "owl:objectProperty"
        }, {
            "id": "14",
            "type": "owl:objectProperty"
        }, {
            "id": "16",
            "type": "owl:objectProperty"
        }, {
            "id": "19",
            "type": "owl:objectProperty"
        }, {
            "id": "22",
            "type": "owl:datatypeProperty"
        }, {
            "id": "20",
            "type": "owl:objectProperty"
        }, {
            "id": "27",
            "type": "owl:objectProperty"
        }, {
            "id": "32",
            "type": "owl:objectProperty"
        }, {
            "id": "35",
            "type": "owl:objectProperty"
        }, {
            "id": "38",
            "type": "owl:disjointWith"
        }, {
            "id": "40",
            "type": "owl:objectProperty"
        }, {
            "id": "42",
            "type": "owl:datatypeProperty"
        }, {
            "id": "45",
            "type": "owl:disjointWith"
        }, {
            "id": "37",
            "type": "owl:objectProperty"
        }, {
            "id": "49",
            "type": "owl:objectProperty"
        }, {
            "id": "51",
            "type": "owl:datatypeProperty"
        }, {
            "id": "52",
            "type": "owl:objectProperty"
        }, {
            "id": "55",
            "type": "owl:objectProperty"
        }, {
            "id": "57",
            "type": "owl:disjointWith"
        }, {
            "id": "58",
            "type": "owl:objectProperty"
        }, {
            "id": "59",
            "type": "owl:disjointWith"
        }, {
            "id": "5",
            "type": "owl:objectProperty"
        }, {
            "id": "61",
            "type": "owl:objectProperty"
        }, {
            "id": "63",
            "type": "owl:disjointWith"
        }, {
            "id": "64",
            "type": "owl:disjointWith"
        }, {
            "id": "65",
            "type": "owl:objectProperty"
        }, {
            "id": "68",
            "type": "owl:disjointWith"
        }, {
            "id": "69",
            "type": "owl:disjointWith"
        }, {
            "id": "4",
            "type": "owl:objectProperty"
        }, {
            "id": "70",
            "type": "owl:disjointWith"
        }, {
            "id": "71",
            "type": "owl:disjointWith"
        }, {
            "id": "72",
            "type": "owl:objectProperty"
        }, {
            "id": "74",
            "type": "owl:disjointWith"
        }, {
            "id": "75",
            "type": "owl:disjointWith"
        }, {
            "id": "79",
            "type": "owl:datatypeProperty"
        }, {
            "id": "81",
            "type": "owl:objectProperty"
        }, {
            "id": "83",
            "type": "owl:datatypeProperty"
        }, {
            "id": "85",
            "type": "owl:objectProperty"
        }, {
            "id": "86",
            "type": "owl:objectProperty"
        }, {
            "id": "87",
            "type": "owl:datatypeProperty"
        }, {
            "id": "88",
            "type": "owl:datatypeProperty"
        }, {
            "id": "89",
            "type": "owl:datatypeProperty"
        }, {
            "id": "54",
            "type": "owl:objectProperty"
        }, {
            "id": "93",
            "type": "owl:objectProperty"
        }, {
            "id": "95",
            "type": "owl:objectProperty"
        }, {
            "id": "96",
            "type": "owl:datatypeProperty"
        }, {
            "id": "97",
            "type": "owl:datatypeProperty"
        }, {
            "id": "98",
            "type": "owl:objectProperty"
        }, {
            "id": "101",
            "type": "owl:datatypeProperty"
        }, {
            "id": "102",
            "type": "owl:objectProperty"
        }, {
            "id": "103",
            "type": "owl:objectProperty"
        }, {
            "id": "94",
            "type": "owl:objectProperty"
        }, {
            "id": "67",
            "type": "owl:objectProperty"
        }, {
            "id": "108",
            "type": "owl:datatypeProperty"
        }, {
            "id": "111",
            "type": "owl:objectProperty"
        }, {
            "id": "113",
            "type": "owl:objectProperty"
        }, {
            "id": "21",
            "type": "owl:objectProperty"
        }, {
            "id": "115",
            "type": "owl:datatypeProperty"
        }, {
            "id": "116",
            "type": "owl:objectProperty"
        }, {
            "id": "117",
            "type": "owl:datatypeProperty"
        }, {
            "id": "118",
            "type": "owl:objectProperty"
        }, {
            "id": "120",
            "type": "owl:objectProperty"
        }, {
            "id": "121",
            "type": "owl:datatypeProperty"
        }, {
            "id": "122",
            "type": "owl:datatypeProperty"
        }, {
            "id": "123",
            "type": "owl:objectProperty"
        }, {
            "id": "124",
            "type": "owl:objectProperty"
        }, {
            "id": "127",
            "type": "owl:datatypeProperty"
        }, {
            "id": "128",
            "type": "owl:objectProperty"
        }, {
            "id": "129",
            "type": "owl:datatypeProperty"
        }, {
            "id": "130",
            "type": "owl:objectProperty"
        }, {
            "id": "131",
            "type": "owl:objectProperty"
        }, {
            "id": "132",
            "type": "owl:datatypeProperty"
        }, {
            "id": "133",
            "type": "owl:datatypeProperty"
        }, {
            "id": "119",
            "type": "owl:objectProperty"
        }, {
            "id": "134",
            "type": "owl:datatypeProperty"
        }, {
            "id": "135",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "136",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "137",
            "type": "owl:datatypeProperty"
        }, {
            "id": "138",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "140",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "141",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "142",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "143",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "2",
            "type": "owl:objectProperty"
        }, {
            "id": "144",
            "type": "owl:objectProperty"
        }, {
            "id": "146",
            "type": "owl:disjointWith"
        }, {
            "id": "41",
            "type": "owl:objectProperty"
        }, {
            "id": "147",
            "type": "owl:disjointWith"
        }, {
            "id": "148",
            "type": "owl:disjointWith"
        }, {
            "id": "149",
            "type": "owl:disjointWith"
        }, {
            "id": "150",
            "type": "owl:disjointWith"
        }, {
            "id": "151",
            "type": "owl:objectProperty"
        }, {
            "id": "152",
            "type": "owl:disjointWith"
        }, {
            "id": "153",
            "type": "owl:disjointWith"
        }, {
            "id": "154",
            "type": "owl:disjointWith"
        }, {
            "id": "155",
            "type": "owl:datatypeProperty"
        }, {
            "id": "15",
            "type": "owl:objectProperty"
        }, {
            "id": "145",
            "type": "owl:objectProperty"
        }, {
            "id": "156",
            "type": "owl:disjointWith"
        }, {
            "id": "157",
            "type": "owl:disjointWith"
        }, {
            "id": "125",
            "type": "owl:objectProperty"
        }, {
            "id": "50",
            "type": "owl:objectProperty"
        }, {
            "id": "18",
            "type": "owl:objectProperty"
        }, {
            "id": "158",
            "type": "owl:datatypeProperty"
        }, {
            "id": "60",
            "type": "owl:objectProperty"
        }, {
            "id": "159",
            "type": "owl:objectProperty"
        }, {
            "id": "13",
            "type": "owl:objectProperty"
        }, {
            "id": "160",
            "type": "owl:datatypeProperty"
        }, {
            "id": "114",
            "type": "owl:objectProperty"
        }, {
            "id": "161",
            "type": "owl:objectProperty"
        }, {
            "id": "73",
            "type": "owl:objectProperty"
        }, {
            "id": "28",
            "type": "owl:objectProperty"
        }, {
            "id": "33",
            "type": "owl:objectProperty"
        }],
        "propertyAttribute": [{
            "iri": "http://rdfs.org/sioc/ns#previous_by_date",
            "inverse": "2",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "previous_by_date",
                "en": "previous by date"
            },
            "domain": "1",
            "comment": {
                "en": "Previous Item or Post in a given Container sorted by date."
            },
            "attributes": ["object"],
            "id": "0"
        }, {
            "iri": "http://rdfs.org/sioc/ns#later_version",
            "inverse": "4",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "later_version",
                "en": "later version"
            },
            "domain": "1",
            "subproperty": ["5"],
            "comment": {
                "en": "Links to a later (newer) revision of this Item or Post."
            },
            "attributes": ["object", "transitive"],
            "id": "3"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_space",
            "inverse": "13",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "12",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_space",
                "en": "has space"
            },
            "domain": "11",
            "comment": {
                "en": "A data Space which this resource is a part of."
            },
            "attributes": ["object"],
            "id": "10"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_parent",
            "inverse": "15",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "8",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_parent",
                "en": "has parent"
            },
            "domain": "8",
            "comment": {
                "en": "A Container or Forum that this Container or Forum is a child of."
            },
            "attributes": ["object"],
            "id": "14"
        }, {
            "iri": "http://rdfs.org/sioc/ns#part_of",
            "inverse": "18",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "17",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This property is deprecated. Use dcterms:isPartOf from the Dublin Core ontology instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "part_of",
                "en": "part of"
            },
            "domain": "17",
            "comment": {
                "en": "A resource that the subject is a part of."
            },
            "attributes": ["object", "deprecated"],
            "id": "16"
        }, {
            "iri": "http://rdfs.org/sioc/ns#reply_of",
            "inverse": "20",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "reply_of",
                "en": "reply of"
            },
            "superproperty": ["21"],
            "domain": "1",
            "comment": {
                "en": "Links to an Item or Post which this Item or Post is a reply to."
            },
            "attributes": ["object"],
            "id": "19"
        }, {
            "iri": "http://purl.org/dc/terms/date",
            "baseIri": "http://purl.org/dc/terms",
            "range": "23",
            "label": {
                "IRI-based": "date"
            },
            "domain": "17",
            "attributes": ["datatype", "external"],
            "id": "22"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_reply",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_reply",
                "en": "has reply"
            },
            "superproperty": ["21"],
            "domain": "1",
            "comment": {
                "en": "Points to an Item or Post that is a reply or response to this Item or Post."
            },
            "attributes": ["object"],
            "id": "20"
        }, {
            "iri": "http://purl.org/dc/terms/subject",
            "baseIri": "http://purl.org/dc/terms",
            "range": "17",
            "label": {
                "IRI-based": "subject"
            },
            "domain": "17",
            "subproperty": ["28"],
            "attributes": ["object", "external"],
            "id": "27"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_group",
            "inverse": "33",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "17",
            "annotations": {
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This property has been renamed. Use sioc:has_usergroup instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "has_group",
                "en": "has group"
            },
            "domain": "17",
            "attributes": ["object", "deprecated"],
            "id": "32"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_usergroup",
            "inverse": "37",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "36",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_usergroup",
                "en": "has usergroup"
            },
            "domain": "12",
            "comment": {
                "en": "Points to a Usergroup that has certain access to this Space."
            },
            "attributes": ["object"],
            "id": "35"
        }, {
            "range": "1",
            "domain": "39",
            "attributes": ["anonymous", "object"],
            "id": "38"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_container",
            "inverse": "41",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "8",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_container",
                "en": "has container"
            },
            "domain": "1",
            "comment": {
                "en": "The Container to which this Item belongs."
            },
            "attributes": ["object"],
            "id": "40"
        }, {
            "iri": "http://rdfs.org/sioc/ns#content_encoded",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "44",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This property is deprecated. Use content:encoded from the RSS 1.0 content module instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "content_encoded",
                "en": "content encoded"
            },
            "domain": "43",
            "comment": {
                "en": "The encoded content of the Post, contained in CDATA areas."
            },
            "attributes": ["datatype", "deprecated"],
            "id": "42"
        }, {
            "range": "1",
            "domain": "46",
            "attributes": ["anonymous", "object"],
            "id": "45"
        }, {
            "iri": "http://rdfs.org/sioc/ns#usergroup_of",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "12",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "usergroup_of",
                "en": "usergroup of"
            },
            "domain": "36",
            "comment": {
                "en": "A Space that the Usergroup has access to."
            },
            "attributes": ["object"],
            "id": "37"
        }, {
            "iri": "http://rdfs.org/sioc/ns#moderator_of",
            "inverse": "50",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "7",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "moderator_of",
                "en": "moderator of"
            },
            "domain": "39",
            "comment": {
                "en": "A Forum that a UserAccount is a moderator of."
            },
            "attributes": ["object"],
            "id": "49"
        }, {
            "iri": "http://rdfs.org/sioc/ns#id",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "25",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "id",
                "en": "id"
            },
            "domain": "17",
            "comment": {
                "en": "An identifier of a SIOC concept instance. For example, a user ID. Must be unique for instances of each type of SIOC concept within the same site."
            },
            "attributes": ["datatype"],
            "id": "51"
        }, {
            "iri": "http://rdfs.org/sioc/ns#avatar",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "53",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "avatar",
                "en": "avatar"
            },
            "superproperty": ["54"],
            "domain": "39",
            "comment": {
                "en": "An image or depiction used to represent this UserAccount."
            },
            "attributes": ["object"],
            "id": "52"
        }, {
            "iri": "http://rdfs.org/sioc/ns#about",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "56",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "about",
                "en": "about"
            },
            "domain": "1",
            "comment": {
                "en": "Specifies that this Item is about a particular resource, e.g. a Post describing a book, hotel, etc."
            },
            "attributes": ["object"],
            "id": "55"
        }, {
            "range": "46",
            "domain": "12",
            "attributes": ["anonymous", "object"],
            "id": "57"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_member",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "39",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_member",
                "en": "has member"
            },
            "domain": "36",
            "comment": {
                "en": "A UserAccount that is a member of this Usergroup."
            },
            "attributes": ["object"],
            "id": "58"
        }, {
            "range": "1",
            "domain": "12",
            "attributes": ["anonymous", "object"],
            "id": "59"
        }, {
            "iri": "http://rdfs.org/sioc/ns#next_version",
            "inverse": "60",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "next_version",
                "en": "next version"
            },
            "superproperty": ["3"],
            "domain": "1",
            "comment": {
                "en": "Links to the next revision of this Item or Post."
            },
            "attributes": ["object"],
            "id": "5"
        }, {
            "iri": "http://rdfs.org/sioc/ns#embeds_knowledge",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "62",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "embeds_knowledge",
                "en": "embeds knowledge"
            },
            "domain": "1",
            "comment": {
                "en": "This links Items to embedded statements, facts and structured content."
            },
            "attributes": ["object"],
            "id": "61"
        }, {
            "range": "12",
            "domain": "39",
            "attributes": ["anonymous", "object"],
            "id": "63"
        }, {
            "range": "8",
            "domain": "39",
            "attributes": ["anonymous", "object"],
            "id": "64"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_host",
            "inverse": "67",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "66",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_host",
                "en": "has host"
            },
            "domain": "7",
            "comment": {
                "en": "The Site that hosts this Forum."
            },
            "attributes": ["object"],
            "id": "65"
        }, {
            "range": "46",
            "domain": "36",
            "attributes": ["anonymous", "object"],
            "id": "68"
        }, {
            "range": "1",
            "domain": "8",
            "attributes": ["anonymous", "object"],
            "id": "69"
        }, {
            "iri": "http://rdfs.org/sioc/ns#earlier_version",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "earlier_version",
                "en": "earlier version"
            },
            "domain": "1",
            "subproperty": ["60"],
            "comment": {
                "en": "Links to a previous (older) revision of this Item or Post."
            },
            "attributes": ["object", "transitive"],
            "id": "4"
        }, {
            "range": "46",
            "domain": "8",
            "attributes": ["anonymous", "object"],
            "id": "70"
        }, {
            "range": "8",
            "domain": "36",
            "attributes": ["anonymous", "object"],
            "id": "71"
        }, {
            "iri": "http://rdfs.org/sioc/ns#owner_of",
            "inverse": "73",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "53",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "owner_of",
                "en": "owner of"
            },
            "domain": "39",
            "comment": {
                "en": "A resource owned by a particular UserAccount, for example, a weblog or image gallery."
            },
            "attributes": ["object"],
            "id": "72"
        }, {
            "range": "1",
            "domain": "36",
            "attributes": ["anonymous", "object"],
            "id": "74"
        }, {
            "range": "39",
            "domain": "36",
            "attributes": ["anonymous", "object"],
            "id": "75"
        }, {
            "iri": "http://rdfs.org/sioc/ns#last_item_date",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "80",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "last_item_date",
                "en": "last item date"
            },
            "domain": "8",
            "comment": {
                "en": "The date and time of the last Post (or Item) in a Forum (or a Container), in ISO 8601 format."
            },
            "attributes": ["datatype"],
            "id": "79"
        }, {
            "iri": "http://rdfs.org/sioc/ns#attachment",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "56",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "attachment",
                "en": "attachment"
            },
            "domain": "1",
            "comment": {
                "en": "The URI of a file attached to an Item."
            },
            "attributes": ["object"],
            "id": "81"
        }, {
            "iri": "http://rdfs.org/sioc/ns#description",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "84",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This property is deprecated. Use sioc:content or other methods (AtomOwl, content:encoded from RSS 1.0, etc.) instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "description",
                "en": "description"
            },
            "domain": "43",
            "comment": {
                "en": "The content of the Post."
            },
            "attributes": ["datatype", "deprecated"],
            "id": "83"
        }, {
            "iri": "http://rdfs.org/sioc/ns#link",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "17",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "link",
                "en": "link"
            },
            "domain": "17",
            "comment": {
                "en": "A URI of a document which contains this SIOC object."
            },
            "attributes": ["object"],
            "id": "85"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_administrator",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "39",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_administrator",
                "en": "has administrator"
            },
            "domain": "66",
            "comment": {
                "en": "A UserAccount that is an administrator of this Site."
            },
            "attributes": ["object"],
            "id": "86"
        }, {
            "iri": "http://rdfs.org/sioc/ns#content",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "31",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "content",
                "en": "content"
            },
            "domain": "1",
            "comment": {
                "en": "The content of the Item in plain text format."
            },
            "attributes": ["datatype"],
            "id": "87"
        }, {
            "iri": "http://rdfs.org/sioc/ns#note",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "34",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "note",
                "en": "note"
            },
            "domain": "17",
            "comment": {
                "en": "A note associated with this resource, for example, if it has been edited by a UserAccount."
            },
            "attributes": ["datatype"],
            "id": "88"
        }, {
            "iri": "http://rdfs.org/sioc/ns#email_sha1",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "90",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "email_sha1",
                "en": "email sha1"
            },
            "domain": "39",
            "comment": {
                "en": "An electronic mail address of the UserAccount, encoded using SHA1."
            },
            "attributes": ["datatype"],
            "id": "89"
        }, {
            "iri": "http://xmlns.com/foaf/0.1/depiction",
            "baseIri": "http://xmlns.com/foaf/0.1",
            "range": "17",
            "label": {
                "IRI-based": "depiction"
            },
            "domain": "17",
            "subproperty": ["52"],
            "attributes": ["object", "external"],
            "id": "54"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_modifier",
            "inverse": "94",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "39",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_modifier",
                "en": "has modifier"
            },
            "domain": "1",
            "comment": {
                "en": "A UserAccount that modified this Item."
            },
            "attributes": ["object"],
            "id": "93"
        }, {
            "iri": "http://rdfs.org/sioc/ns#follows",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "39",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "follows",
                "en": "follows"
            },
            "domain": "39",
            "comment": {
                "en": "Indicates that one UserAccount follows another UserAccount (e.g. for microblog posts or other content item updates)."
            },
            "attributes": ["object"],
            "id": "95"
        }, {
            "iri": "http://rdfs.org/sioc/ns#last_activity_date",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "29",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "last_activity_date",
                "en": "last activity date"
            },
            "domain": "17",
            "comment": {
                "en": "The date and time of the last activity associated with a SIOC concept instance, and expressed in ISO 8601 format. This could be due to a reply Post or Comment, a modification to an Item, etc."
            },
            "attributes": ["datatype"],
            "id": "96"
        }, {
            "iri": "http://rdfs.org/sioc/ns#num_items",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "24",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "num_items",
                "en": "num items"
            },
            "domain": "8",
            "comment": {
                "en": "The number of Posts (or Items) in a Forum (or a Container)."
            },
            "attributes": ["datatype"],
            "id": "97"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_function",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "99",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_function",
                "en": "has function"
            },
            "domain": "91",
            "comment": {
                "en": "A Role that this UserAccount has."
            },
            "attributes": ["object"],
            "id": "98"
        }, {
            "iri": "http://rdfs.org/sioc/ns#last_reply_date",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "30",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "last_reply_date",
                "en": "last reply date"
            },
            "domain": "17",
            "comment": {
                "en": "The date and time of the last reply Post or Comment, which could be associated with a starter Item or Post or with a Thread, and expressed in ISO 8601 format."
            },
            "attributes": ["datatype"],
            "id": "101"
        }, {
            "iri": "http://rdfs.org/sioc/ns#email",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "53",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "email",
                "en": "email"
            },
            "domain": "39",
            "comment": {
                "en": "An electronic mail address of the UserAccount."
            },
            "attributes": ["object"],
            "id": "102"
        }, {
            "iri": "http://xmlns.com/foaf/0.1/account",
            "baseIri": "http://xmlns.com/foaf/0.1",
            "range": "17",
            "label": {
                "IRI-based": "account"
            },
            "domain": "17",
            "attributes": ["object", "external"],
            "id": "103"
        }, {
            "iri": "http://rdfs.org/sioc/ns#modifier_of",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "modifier_of",
                "en": "modifier of"
            },
            "domain": "39",
            "comment": {
                "en": "An Item that this UserAccount has modified."
            },
            "attributes": ["object"],
            "id": "94"
        }, {
            "iri": "http://rdfs.org/sioc/ns#host_of",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "7",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "host_of",
                "en": "host of"
            },
            "domain": "66",
            "comment": {
                "en": "A Forum that is hosted on this Site."
            },
            "attributes": ["object"],
            "id": "67"
        }, {
            "iri": "http://purl.org/dc/terms/title",
            "baseIri": "http://purl.org/dc/terms",
            "range": "76",
            "label": {
                "IRI-based": "title"
            },
            "domain": "17",
            "attributes": ["datatype", "external"],
            "id": "108"
        }, {
            "iri": "http://rdfs.org/sioc/ns#account_of",
            "inverse": "103",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "9",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "account_of",
                "en": "account of"
            },
            "domain": "39",
            "comment": {
                "en": "Refers to the foaf:Agent or foaf:Person who owns this sioc:UserAccount."
            },
            "attributes": ["object"],
            "id": "111"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_subscriber",
            "inverse": "114",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "39",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "seeAlso": [{
                    "identifier": "seeAlso",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#feed",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_subscriber",
                "en": "has subscriber"
            },
            "domain": "8",
            "comment": {
                "en": "A UserAccount that is subscribed to this Container."
            },
            "attributes": ["object"],
            "id": "113"
        }, {
            "iri": "http://rdfs.org/sioc/ns#related_to",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "17",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "related_to",
                "en": "related to"
            },
            "domain": "17",
            "subproperty": ["19", "20"],
            "comment": {
                "en": "Related Posts for this Post, perhaps determined implicitly from topics or references."
            },
            "attributes": ["object"],
            "id": "21"
        }, {
            "iri": "http://rdfs.org/sioc/ns#modified_at",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "112",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This property is deprecated. Use dcterms:modified from the Dublin Core ontology instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "modified_at",
                "en": "modified at"
            },
            "domain": "43",
            "comment": {
                "en": "When this was modified, in ISO 8601 format."
            },
            "attributes": ["datatype", "deprecated"],
            "id": "115"
        }, {
            "iri": "http://rdfs.org/sioc/ns#administrator_of",
            "inverse": "86",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "66",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "administrator_of",
                "en": "administrator of"
            },
            "domain": "39",
            "comment": {
                "en": "A Site that the UserAccount is an administrator of."
            },
            "attributes": ["object"],
            "id": "116"
        }, {
            "iri": "http://rdfs.org/sioc/ns#subject",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "107",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This property is deprecated. Use dcterms:subject from the Dublin Core ontology for text keywords and sioc:topic if the subject can be represented by a URI instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "subject",
                "en": "subject"
            },
            "domain": "43",
            "comment": {
                "en": "Keyword(s) describing subject of the Post."
            },
            "attributes": ["datatype", "deprecated"],
            "id": "117"
        }, {
            "iri": "http://purl.org/dc/terms/references",
            "baseIri": "http://purl.org/dc/terms",
            "range": "17",
            "label": {
                "IRI-based": "references"
            },
            "domain": "17",
            "subproperty": ["119"],
            "attributes": ["object", "external"],
            "id": "118"
        }, {
            "iri": "http://rdfs.org/sioc/ns#reference",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "78",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "Renamed to sioc:links_to.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "reference",
                "en": "reference"
            },
            "domain": "43",
            "comment": {
                "en": "Links either created explicitly or extracted implicitly on the HTML level from the Post."
            },
            "attributes": ["object", "deprecated"],
            "id": "120"
        }, {
            "iri": "http://rdfs.org/sioc/ns#last_name",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "110",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This property is deprecated. Use foaf:name or foaf:surname from the FOAF vocabulary instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "last_name",
                "en": "last name"
            },
            "domain": "39",
            "comment": {
                "en": "Last (real) name of this user. Synonyms include surname or family name."
            },
            "attributes": ["datatype", "deprecated"],
            "id": "121"
        }, {
            "iri": "http://rdfs.org/sioc/ns#first_name",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "47",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This property is deprecated. Use foaf:name or foaf:firstName from the FOAF vocabulary instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "first_name",
                "en": "first name"
            },
            "domain": "39",
            "comment": {
                "en": "First (real) name of this User. Synonyms include given name or christian name."
            },
            "attributes": ["datatype", "deprecated"],
            "id": "122"
        }, {
            "iri": "http://rdfs.org/sioc/ns#member_of",
            "inverse": "58",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "36",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "member_of",
                "en": "member of"
            },
            "domain": "39",
            "comment": {
                "en": "A Usergroup that this UserAccount is a member of."
            },
            "attributes": ["object"],
            "id": "123"
        }, {
            "iri": "http://rdfs.org/sioc/ns#creator_of",
            "inverse": "125",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "53",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "creator_of",
                "en": "creator of"
            },
            "domain": "39",
            "comment": {
                "en": "A resource that the UserAccount is a creator of."
            },
            "attributes": ["object"],
            "id": "124"
        }, {
            "iri": "http://rdfs.org/sioc/ns#num_authors",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "100",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "num_authors",
                "en": "num authors"
            },
            "domain": "17",
            "comment": {
                "en": "The number of unique authors (UserAccounts and unregistered posters) who have contributed to this Item, Thread, Post, etc."
            },
            "attributes": ["datatype"],
            "id": "127"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_discussion",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "56",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_discussion",
                "en": "has discussion"
            },
            "domain": "1",
            "comment": {
                "en": "The discussion that is related to this Item."
            },
            "attributes": ["object"],
            "id": "128"
        }, {
            "iri": "http://rdfs.org/sioc/ns#num_views",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "109",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "num_views",
                "en": "num views"
            },
            "domain": "17",
            "comment": {
                "en": "The number of times this Item, Thread, UserAccount profile, etc. has been viewed."
            },
            "attributes": ["datatype"],
            "id": "129"
        }, {
            "iri": "http://rdfs.org/sioc/ns#sibling",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "sibling",
                "en": "sibling"
            },
            "domain": "1",
            "comment": {
                "en": "An Item may have a sibling or a twin that exists in a different Container, but the siblings may differ in some small way (for example, language, category, etc.). The sibling of this Item should be self-describing (that is, it should contain all available information)."
            },
            "attributes": ["object", "symmetric"],
            "id": "130"
        }, {
            "iri": "http://rdfs.org/sioc/ns#function_of",
            "inverse": "98",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "91",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "function_of",
                "en": "function of"
            },
            "domain": "99",
            "comment": {
                "en": "A UserAccount that has this Role."
            },
            "attributes": ["object"],
            "id": "131"
        }, {
            "iri": "http://rdfs.org/sioc/ns#num_replies",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "48",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "num_replies",
                "en": "num replies"
            },
            "domain": "17",
            "comment": {
                "en": "The number of replies that this Item, Thread, Post, etc. has. Useful for when the reply structure is absent."
            },
            "attributes": ["datatype"],
            "id": "132"
        }, {
            "iri": "http://rdfs.org/sioc/ns#created_at",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "6",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This property is deprecated. Use dcterms:created from the Dublin Core ontology instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "created_at",
                "en": "created at"
            },
            "domain": "43",
            "comment": {
                "en": "When this was created, in ISO 8601 format."
            },
            "attributes": ["datatype", "deprecated"],
            "id": "133"
        }, {
            "iri": "http://rdfs.org/sioc/ns#links_to",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "17",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "links_to",
                "en": "links to"
            },
            "superproperty": ["118"],
            "domain": "17",
            "comment": {
                "en": "Links extracted from hyperlinks within a SIOC concept, e.g. Post or Site."
            },
            "attributes": ["object"],
            "id": "119"
        }, {
            "iri": "http://rdfs.org/sioc/ns#ip_address",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "92",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "ip_address",
                "en": "ip address"
            },
            "domain": "1",
            "comment": {
                "en": "The IP address used when creating this Item. This can be associated with a creator. Some wiki articles list the IP addresses for the creator or modifiers when the usernames are absent."
            },
            "attributes": ["datatype"],
            "id": "134"
        }, {
            "range": "12",
            "domain": "66",
            "attributes": ["anonymous", "object"],
            "id": "135"
        }, {
            "range": "82",
            "domain": "46",
            "attributes": ["anonymous", "object"],
            "id": "136"
        }, {
            "iri": "http://purl.org/dc/terms/description",
            "baseIri": "http://purl.org/dc/terms",
            "range": "77",
            "label": {
                "IRI-based": "description"
            },
            "domain": "17",
            "attributes": ["datatype", "external"],
            "id": "137"
        }, {
            "range": "139",
            "domain": "43",
            "attributes": ["anonymous", "object"],
            "id": "138"
        }, {
            "range": "8",
            "domain": "7",
            "attributes": ["anonymous", "object"],
            "id": "140"
        }, {
            "range": "1",
            "domain": "43",
            "attributes": ["anonymous", "object"],
            "id": "141"
        }, {
            "range": "82",
            "domain": "39",
            "attributes": ["anonymous", "object"],
            "id": "142"
        }, {
            "range": "8",
            "domain": "26",
            "attributes": ["anonymous", "object"],
            "id": "143"
        }, {
            "iri": "http://rdfs.org/sioc/ns#next_by_date",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "next_by_date",
                "en": "next by date"
            },
            "domain": "1",
            "comment": {
                "en": "Next Item or Post in a given Container sorted by date."
            },
            "attributes": ["object"],
            "id": "2"
        }, {
            "iri": "http://rdfs.org/sioc/ns#scope_of",
            "inverse": "145",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "99",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "scope_of",
                "en": "scope of"
            },
            "domain": "91",
            "comment": {
                "en": "A Role that has a scope of this resource."
            },
            "attributes": ["object"],
            "id": "144"
        }, {
            "range": "1",
            "domain": "126",
            "attributes": ["anonymous", "object"],
            "id": "146"
        }, {
            "iri": "http://rdfs.org/sioc/ns#container_of",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "container_of",
                "en": "container of"
            },
            "domain": "8",
            "comment": {
                "en": "An Item that this Container contains."
            },
            "attributes": ["object"],
            "id": "41"
        }, {
            "range": "99",
            "domain": "36",
            "attributes": ["anonymous", "object"],
            "id": "147"
        }, {
            "range": "99",
            "domain": "12",
            "attributes": ["anonymous", "object"],
            "id": "148"
        }, {
            "range": "8",
            "domain": "99",
            "attributes": ["anonymous", "object"],
            "id": "149"
        }, {
            "range": "99",
            "domain": "39",
            "attributes": ["anonymous", "object"],
            "id": "150"
        }, {
            "iri": "http://rdfs.org/sioc/ns#latest_version",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "latest_version",
                "en": "latest version"
            },
            "domain": "1",
            "comment": {
                "en": "Links to the latest revision of this Item or Post."
            },
            "attributes": ["object"],
            "id": "151"
        }, {
            "range": "1",
            "domain": "99",
            "attributes": ["anonymous", "object"],
            "id": "152"
        }, {
            "range": "46",
            "domain": "99",
            "attributes": ["anonymous", "object"],
            "id": "153"
        }, {
            "range": "12",
            "domain": "36",
            "attributes": ["anonymous", "object"],
            "id": "154"
        }, {
            "iri": "http://rdfs.org/sioc/ns#title",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "105",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This property is deprecated. Use dcterms:title from the Dublin Core ontology instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "title",
                "en": "title"
            },
            "domain": "43",
            "comment": {
                "en": "This is the title (subject line) of the Post. Note that for a Post within a threaded discussion that has no parents, it would detail the topic thread."
            },
            "attributes": ["datatype", "deprecated"],
            "id": "155"
        }, {
            "iri": "http://rdfs.org/sioc/ns#parent_of",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "8",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "parent_of",
                "en": "parent of"
            },
            "domain": "8",
            "comment": {
                "en": "A child Container or Forum that this Container or Forum is a parent of."
            },
            "attributes": ["object"],
            "id": "15"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_scope",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "91",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_scope",
                "en": "has scope"
            },
            "domain": "99",
            "comment": {
                "en": "A resource that this Role applies to."
            },
            "attributes": ["object"],
            "id": "145"
        }, {
            "range": "99",
            "domain": "126",
            "attributes": ["anonymous", "object"],
            "id": "156"
        }, {
            "range": "126",
            "domain": "39",
            "attributes": ["anonymous", "object"],
            "id": "157"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_creator",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "39",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_creator",
                "en": "has creator"
            },
            "domain": "53",
            "comment": {
                "en": "This is the UserAccount that made this resource."
            },
            "attributes": ["object"],
            "id": "125"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_moderator",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "39",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_moderator",
                "en": "has moderator"
            },
            "domain": "7",
            "comment": {
                "en": "A UserAccount that is a moderator of this Forum."
            },
            "attributes": ["object"],
            "id": "50"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_part",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "17",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This property is deprecated. Use dcterms:hasPart from the Dublin Core ontology instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "has_part",
                "en": "has part"
            },
            "domain": "17",
            "comment": {
                "en": "An resource that is a part of this subject."
            },
            "attributes": ["object", "deprecated"],
            "id": "18"
        }, {
            "iri": "http://rdfs.org/sioc/ns#name",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "106",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "name",
                "en": "name"
            },
            "domain": "17",
            "comment": {
                "en": "The name of a SIOC concept instance, e.g. a username for a UserAccount, group name for a Usergroup, etc."
            },
            "attributes": ["datatype"],
            "id": "158"
        }, {
            "iri": "http://rdfs.org/sioc/ns#previous_version",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "previous_version",
                "en": "previous version"
            },
            "superproperty": ["4"],
            "domain": "1",
            "comment": {
                "en": "Links to the previous revision of this Item or Post."
            },
            "attributes": ["object"],
            "id": "60"
        }, {
            "iri": "http://rdfs.org/sioc/ns#addressed_to",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "56",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "addressed_to",
                "en": "addressed to"
            },
            "domain": "1",
            "comment": {
                "en": "Refers to who (e.g. a UserAccount, e-mail address, etc.) a particular Item is addressed to."
            },
            "attributes": ["object"],
            "id": "159"
        }, {
            "iri": "http://rdfs.org/sioc/ns#space_of",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "11",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "space_of",
                "en": "space of"
            },
            "domain": "12",
            "comment": {
                "en": "A resource which belongs to this data Space."
            },
            "attributes": ["object"],
            "id": "13"
        }, {
            "iri": "http://rdfs.org/sioc/ns#num_threads",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "104",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "num_threads",
                "en": "num threads"
            },
            "domain": "7",
            "comment": {
                "en": "The number of Threads (AKA discussion topics) in a Forum."
            },
            "attributes": ["datatype"],
            "id": "160"
        }, {
            "iri": "http://rdfs.org/sioc/ns#subscriber_of",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "8",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }],
                "seeAlso": [{
                    "identifier": "seeAlso",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#feed",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "subscriber_of",
                "en": "subscriber of"
            },
            "domain": "39",
            "comment": {
                "en": "A Container that a UserAccount is subscribed to."
            },
            "attributes": ["object"],
            "id": "114"
        }, {
            "iri": "http://rdfs.org/sioc/ns#feed",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "17",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "feed",
                "en": "feed"
            },
            "domain": "17",
            "comment": {
                "en": "A feed (e.g. RSS, Atom, etc.) pertaining to this resource (e.g. for a Forum, Site, UserAccount, etc.)."
            },
            "attributes": ["object"],
            "id": "161"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_owner",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "39",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "has_owner",
                "en": "has owner"
            },
            "domain": "53",
            "comment": {
                "en": "A UserAccount that this resource is owned by."
            },
            "attributes": ["object"],
            "id": "73"
        }, {
            "iri": "http://rdfs.org/sioc/ns#topic",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "17",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://rdfs.org/sioc/ns#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "topic",
                "en": "topic"
            },
            "superproperty": ["27"],
            "domain": "17",
            "comment": {
                "en": "A topic of interest, linking to the appropriate URI, e.g. in the Open Directory Project or of a SKOS category."
            },
            "attributes": ["object"],
            "id": "28"
        }, {
            "iri": "http://rdfs.org/sioc/ns#group_of",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "17",
            "annotations": {
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "This property has been renamed. Use sioc:usergroup_of instead.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "group_of",
                "en": "group of"
            },
            "domain": "17",
            "attributes": ["object", "deprecated"],
            "id": "33"
        }]
    }
}