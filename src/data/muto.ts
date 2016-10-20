namespace TRVOWL.data {
    export var muto = {
        "_comment": "Created with OWL2VOWL (version 0.2.2-SNAPSHOT), http://vowl.visualdataweb.org",
        "header": {
            "languages": ["en", "undefined"],
            "baseIris": ["http://purl.org/muto/core", "http://www.w3.org/1999/02/22-rdf-syntax-ns", "http://www.w3.org/2000/01/rdf-schema", "http://purl.org/dc/terms", "http://www.w3.org/2001/XMLSchema", "http://rdfs.org/sioc/ns", "http://www.w3.org/2004/02/skos/core"],
            "title": {
                "undefined": "Modular Unified Tagging Ontology (MUTO)"
            },
            "iri": "http://purl.org/muto/core",
            "version": "Version 1.0 - Global changes (compared to earlier versions): Some properties have been renamed; cardinality constraints in class descriptions (owl:Restriction) have been replaced by global cardinality constraints (owl:FunctionalProperty).",
            "author": ["Steffen Lohmann"],
            "description": {
                "undefined": "The Modular and Unified Tagging Ontology (MUTO) is an ontology for tagging and folksonomies. It is based on a thorough review of earlier tagging ontologies and unifies core concepts in one consistent schema. It supports different forms of tagging, such as common, semantic, group, private, and automatic tagging, and is easily extensible."
            },
            "labels": {
                "en": "MUTO Core Ontology"
            },
            "other": {
                "licence": [{
                    "identifier": "licence",
                    "language": "undefined",
                    "value": "http://creativecommons.org/licenses/by/3.0/",
                    "type": "label"
                }],
                "creator": [{
                    "identifier": "creator",
                    "language": "undefined",
                    "value": "Steffen Lohmann",
                    "type": "label"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "Version 1.0 - Global changes (compared to earlier versions): Some properties have been renamed; cardinality constraints in class descriptions (owl:Restriction) have been replaced by global cardinality constraints (owl:FunctionalProperty).",
                    "type": "label"
                }],
                "issued": [{
                    "identifier": "issued",
                    "language": "undefined",
                    "value": "2011-11-16",
                    "type": "label"
                }],
                "title": [{
                    "identifier": "title",
                    "language": "undefined",
                    "value": "Modular Unified Tagging Ontology (MUTO)",
                    "type": "label"
                }],
                "seeAlso": [{
                    "identifier": "seeAlso",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "label"
                }],
                "depiction": [{
                    "identifier": "depiction",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core/muto-UML.png",
                    "type": "label"
                }, {
                    "identifier": "depiction",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core/muto-compact.png",
                    "type": "label"
                }],
                "homepage": [{
                    "identifier": "homepage",
                    "language": "undefined",
                    "value": "http://purl.org/muto",
                    "type": "label"
                }]
            }
        },
        "namespace": [],
        "metrics": {
            "classCount": 10,
            "datatypeCount": 10,
            "objectPropertyCount": 20,
            "datatypePropertyCount": 6,
            "propertyCount": 26,
            "nodeCount": 20,
            "individualCount": 0
        },
        "class": [{
            "id": "4",
            "type": "owl:Class"
        }, {
            "id": "5",
            "type": "owl:Class"
        }, {
            "id": "7",
            "type": "rdfs:Datatype"
        }, {
            "id": "15",
            "type": "rdfs:Datatype"
        }, {
            "id": "2",
            "type": "owl:Thing"
        }, {
            "id": "13",
            "type": "owl:Thing"
        }, {
            "id": "14",
            "type": "rdfs:Literal"
        }, {
            "id": "18",
            "type": "owl:Thing"
        }, {
            "id": "19",
            "type": "rdfs:Literal"
        }, {
            "id": "23",
            "type": "owl:Class"
        }, {
            "id": "24",
            "type": "rdfs:Datatype"
        }, {
            "id": "25",
            "type": "rdfs:Literal"
        }, {
            "id": "6",
            "type": "owl:Class"
        }, {
            "id": "33",
            "type": "owl:Class"
        }, {
            "id": "9",
            "type": "owl:Class"
        }, {
            "id": "1",
            "type": "owl:Class"
        }],
        "classAttribute": [{
            "iri": "http://purl.org/muto/core#Tag",
            "baseIri": "http://purl.org/muto/core",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "Version 1.0: The owl:disjointWith statement was removed to make MUTO conform to OWL Lite (the statement is not essential in this case).",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "Tag",
                "en": "Tag"
            },
            "subClasses": ["6"],
            "comment": {
                "en": "A Tag consists of an arbitrary text label. Note that tags with the same label are NOT merged in the ontology."
            },
            "id": "4",
            "superClasses": ["5"]
        }, {
            "iri": "http://www.w3.org/2004/02/skos/core#Concept",
            "baseIri": "http://www.w3.org/2004/02/skos/core",
            "instances": 0,
            "label": {
                "IRI-based": "Concept"
            },
            "subClasses": ["4"],
            "attributes": ["external"],
            "id": "5"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#dateTime",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "7",
            "label": {
                "IRI-based": "dateTime"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#dateTime",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "15",
            "label": {
                "IRI-based": "dateTime"
            }
        }, {
            "iri": "http://www.w3.org/2002/07/owl#Thing",
            "baseIri": "http://owl2vowl.de",
            "id": "2",
            "label": {
                "IRI-based": "Thing"
            }
        }, {
            "iri": "http://www.w3.org/2002/07/owl#Thing",
            "baseIri": "http://owl2vowl.de",
            "id": "13",
            "label": {
                "IRI-based": "Thing"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "id": "14",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2002/07/owl#Thing",
            "baseIri": "http://owl2vowl.de",
            "id": "18",
            "label": {
                "IRI-based": "Thing"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "id": "19",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://purl.org/muto/core#PrivateTagging",
            "baseIri": "http://purl.org/muto/core",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "PrivateTagging",
                "en": "Private Tagging"
            },
            "comment": {
                "en": "A private tagging is a tagging that is only visible to its creator (unless the creator has not granted access to others via muto:grantAccess). Every tagging that is not an instance of muto:PrivateTagging is public by default."
            },
            "id": "23",
            "superClasses": ["1"]
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#dateTime",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "24",
            "label": {
                "IRI-based": "dateTime"
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
            "iri": "http://purl.org/muto/core#AutoTag",
            "baseIri": "http://purl.org/muto/core",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "Version 1.0: muto:AutoTag was a subclass of muto:Tagging (called muto:autoTagging) in earlier versions. Defining it as a subclass of muto:Tag is more appropriate and allows for taggings that contain a combination of manually and automatically created tags.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "AutoTag",
                "en": "Automatic Tag"
            },
            "comment": {
                "en": "An automatic tag is a tag that is automatically associated with a resource (e.g. by a tagging system), i.e. it is not entered by a human being."
            },
            "id": "6",
            "superClasses": ["4"]
        }, {
            "iri": "http://rdfs.org/sioc/ns#Item",
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "label": {
                "IRI-based": "Item"
            },
            "subClasses": ["1"],
            "attributes": ["external"],
            "id": "33"
        }, {
            "iri": "http://rdfs.org/sioc/ns#UserAccount",
            "baseIri": "http://rdfs.org/sioc/ns",
            "instances": 0,
            "label": {
                "IRI-based": "UserAccount"
            },
            "attributes": ["external"],
            "id": "9"
        }, {
            "iri": "http://purl.org/muto/core#Tagging",
            "baseIri": "http://purl.org/muto/core",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Tagging",
                "en": "Tagging"
            },
            "subClasses": ["23"],
            "comment": {
                "en": "A tagging links a resource to a user account and one or more tags."
            },
            "id": "1",
            "superClasses": ["33"]
        }],
        "property": [{
            "id": "0",
            "type": "owl:objectProperty"
        }, {
            "id": "8",
            "type": "owl:objectProperty"
        }, {
            "id": "12",
            "type": "owl:datatypeProperty"
        }, {
            "id": "16",
            "type": "owl:objectProperty"
        }, {
            "id": "20",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "21",
            "type": "owl:objectProperty"
        }, {
            "id": "26",
            "type": "owl:objectProperty"
        }, {
            "id": "27",
            "type": "owl:objectProperty"
        }, {
            "id": "10",
            "type": "owl:objectProperty"
        }, {
            "id": "28",
            "type": "owl:objectProperty"
        }, {
            "id": "17",
            "type": "owl:objectProperty"
        }, {
            "id": "29",
            "type": "owl:objectProperty"
        }, {
            "id": "11",
            "type": "owl:objectProperty"
        }, {
            "id": "31",
            "type": "owl:datatypeProperty"
        }, {
            "id": "22",
            "type": "owl:objectProperty"
        }, {
            "id": "34",
            "type": "owl:datatypeProperty"
        }, {
            "id": "3",
            "type": "owl:objectProperty"
        }, {
            "id": "32",
            "type": "owl:objectProperty"
        }, {
            "id": "30",
            "type": "owl:objectProperty"
        }, {
            "id": "35",
            "type": "owl:datatypeProperty"
        }, {
            "id": "36",
            "type": "owl:datatypeProperty"
        }, {
            "id": "37",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "38",
            "type": "owl:objectProperty"
        }, {
            "id": "39",
            "type": "owl:datatypeProperty"
        }, {
            "id": "40",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "41",
            "type": "rdfs:SubClassOf"
        }],
        "propertyAttribute": [{
            "iri": "http://purl.org/muto/core#taggedResource",
            "baseIri": "http://purl.org/muto/core",
            "range": "2",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "taggedResource",
                "en": "tagged resource"
            },
            "superproperty": ["3"],
            "domain": "1",
            "comment": {
                "en": "Every tagging is linked to exactly one resource. This can be any kind of resource (i.e. all subclasses of rdfs:Resource), including tags and taggings."
            },
            "attributes": ["object", "functional"],
            "id": "0"
        }, {
            "iri": "http://purl.org/muto/core#creatorOf",
            "inverse": "10",
            "baseIri": "http://purl.org/muto/core",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "creatorOf",
                "en": "creator of"
            },
            "superproperty": ["11"],
            "domain": "9",
            "comment": {
                "en": "A user account can have a (theoretically unlimited) number of taggings. Use sioc:member_of to define groups for group tagging or link to foaf:Agent, foaf:Person, or foaf:Group via sioc:account_of."
            },
            "attributes": ["object"],
            "id": "8"
        }, {
            "iri": "http://purl.org/dc/terms/modified",
            "baseIri": "http://purl.org/dc/terms",
            "range": "14",
            "label": {
                "IRI-based": "modified"
            },
            "domain": "13",
            "attributes": ["datatype", "external"],
            "id": "12"
        }, {
            "iri": "http://purl.org/muto/core#hasAccess",
            "inverse": "17",
            "baseIri": "http://purl.org/muto/core",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "Version 1.0: see muto:grantAccess",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "hasAccess",
                "en": "has access"
            },
            "domain": "2",
            "comment": {
                "en": "A user account or user group can have access to a private tagging from another user if the access is explicitly permitted by the creator of the tagging. This property can also be used in public tagging to link a user account or user group to a tagging (e.g. if the creator of a tagging has suggested the tagging to another user)."
            },
            "attributes": ["object"],
            "id": "16"
        }, {
            "range": "4",
            "domain": "6",
            "attributes": ["anonymous", "object"],
            "id": "20"
        }, {
            "iri": "http://purl.org/muto/core#meaningOf",
            "inverse": "22",
            "baseIri": "http://purl.org/muto/core",
            "range": "4",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "meaningOf",
                "en": "meaning of"
            },
            "domain": "18",
            "comment": {
                "en": "The number of tags that can be linked to one and the same meaning is theoretically unlimited."
            },
            "attributes": ["object"],
            "id": "21"
        }, {
            "iri": "http://rdfs.org/sioc/ns#has_creator",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "13",
            "label": {
                "IRI-based": "has_creator"
            },
            "domain": "13",
            "subproperty": ["10"],
            "attributes": ["object", "external"],
            "id": "26"
        }, {
            "iri": "http://purl.org/muto/core#tagOf",
            "inverse": "28",
            "baseIri": "http://purl.org/muto/core",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "tagOf",
                "en": "tag of"
            },
            "domain": "4",
            "comment": {
                "en": "Every tag is linked to exactly one tagging. This results from the fact that tags with same labels are NOT merged in the ontology."
            },
            "attributes": ["object", "functional"],
            "id": "27"
        }, {
            "iri": "http://purl.org/muto/core#hasCreator",
            "baseIri": "http://purl.org/muto/core",
            "range": "9",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasCreator",
                "en": "has creator"
            },
            "superproperty": ["26"],
            "domain": "1",
            "comment": {
                "en": "Every tagging is linked to at most one user account. This property can be omitted for automatic taggings. In contrast to its superproperty sioc:has_creator, it is functional and with an explicit domain. Use sioc:member_of to define groups for group tagging or link to foaf:Agent, foaf:Person, or foaf:Group via sioc:account_of."
            },
            "attributes": ["object", "functional"],
            "id": "10"
        }, {
            "iri": "http://purl.org/muto/core#hasTag",
            "baseIri": "http://purl.org/muto/core",
            "range": "4",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasTag",
                "en": "has tag"
            },
            "domain": "1",
            "comment": {
                "en": "A tagging consists of a (theoretically unlimited) number of tags. A tagging may also consist of no tags, e.g. if the system allows its users to mark a resource first and add tags later."
            },
            "attributes": ["object"],
            "id": "28"
        }, {
            "iri": "http://purl.org/muto/core#grantAccess",
            "baseIri": "http://purl.org/muto/core",
            "range": "2",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "Version 1.0: The range information has been removed for greater flexibility and OWL Lite conformance (no longer owl:unionOf). Classes from different vocabularies can now be used here - such as sioc:UserAccount, sioc:Usergroup, foaf:OnlineAccount, foaf:Group, or dcterms:Agent -, though we recommend the use of sioc:UserAccount or sioc:Usergroup to remain in the SIOC namespace.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "grantAccess",
                "en": "grant access"
            },
            "domain": "1",
            "comment": {
                "en": "A (usually private) tagging can be linked to one or more user accounts or user groups that should have access to it (apart from the creator). This property can also be used in public tagging to link a user account or user group to a tagging (e.g. if the creator of a tagging wants to suggest the tagging to another user)."
            },
            "attributes": ["object"],
            "id": "17"
        }, {
            "iri": "http://purl.org/muto/core#previousTag",
            "inverse": "30",
            "baseIri": "http://purl.org/muto/core",
            "range": "4",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "Version 1.0: see muto:nextTag",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "previousTag",
                "en": "previous tag"
            },
            "domain": "4",
            "comment": {
                "en": "This property indicates the tag that is preceding in the list of tags. It can be used to describe the order in which the tags have been entered by the user."
            },
            "attributes": ["object", "functional"],
            "id": "29"
        }, {
            "iri": "http://rdfs.org/sioc/ns#creator_of",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "13",
            "label": {
                "IRI-based": "creator_of"
            },
            "domain": "13",
            "subproperty": ["8"],
            "attributes": ["object", "external"],
            "id": "11"
        }, {
            "iri": "http://purl.org/muto/core#tagLabel",
            "baseIri": "http://purl.org/muto/core",
            "range": "25",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "Version 1.0: The subproperty relation to rdfs:label has been removed for OWL DL conformance (rdfs:label is an annotation property and one cannot define subproperties for annotation properties in OWL DL).",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "tagLabel",
                "en": "tag label"
            },
            "domain": "4",
            "comment": {
                "en": "Every tag has exactly one label (usually the one given by the user) - otherwise it is not a tag. Additional labels can be defined in the resource that is linked via muto:tagMeaning."
            },
            "attributes": ["datatype", "functional"],
            "id": "31"
        }, {
            "iri": "http://purl.org/muto/core#tagMeaning",
            "baseIri": "http://purl.org/muto/core",
            "range": "18",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "tagMeaning",
                "en": "tag meaning"
            },
            "domain": "4",
            "subproperty": ["32"],
            "comment": {
                "en": "The meaning of a tag can be expressed by a link to a well-defined resource. This can be any resource that clarifies the meaning of the tag (e.g. some DBpedia resource)."
            },
            "attributes": ["object"],
            "id": "22"
        }, {
            "iri": "http://purl.org/muto/core#taggingModified",
            "baseIri": "http://purl.org/muto/core",
            "range": "24",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "taggingModified",
                "en": "tagging modified"
            },
            "domain": "1",
            "comment": {
                "en": "A tagging can have multiple modification dates, as the number of times a tagging can be edited (e.g. to add or remove tags) is theoretically unlimited. The datatype of this property is xsd:dateTime (in contrast to it superproperty dcterms:created which has range rdfs:Literal)."
            },
            "attributes": ["datatype"],
            "id": "34"
        }, {
            "iri": "http://rdfs.org/sioc/ns#about",
            "baseIri": "http://rdfs.org/sioc/ns",
            "range": "13",
            "label": {
                "IRI-based": "about"
            },
            "domain": "13",
            "subproperty": ["0"],
            "attributes": ["object", "external"],
            "id": "3"
        }, {
            "iri": "http://purl.org/muto/core#autoMeaning",
            "baseIri": "http://purl.org/muto/core",
            "range": "18",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "autoMeaning",
                "en": "automatic tag meaning"
            },
            "superproperty": ["22"],
            "domain": "4",
            "comment": {
                "en": "This subproperty indicates that the meaning of a tag has been automatically defined (e.g. by a tagging system), i.e. it has not been defined by a human being. The default case is disambiguation by users via muto:tagMeaning."
            },
            "attributes": ["object"],
            "id": "32"
        }, {
            "iri": "http://purl.org/muto/core#nextTag",
            "baseIri": "http://purl.org/muto/core",
            "range": "4",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "undefined",
                    "value": "Version 1.0: Earlier versions of MUTO defined a datatype property muto:tagPosition with integer values which has some drawbacks compared to this solution.",
                    "type": "label"
                }]
            },
            "label": {
                "IRI-based": "nextTag",
                "en": "next tag"
            },
            "domain": "4",
            "comment": {
                "en": "This property indicates the tag that follows next in the list of tags. It can be used to describe the order in which the tags have been entered by the user."
            },
            "attributes": ["object", "functional"],
            "id": "30"
        }, {
            "iri": "http://purl.org/muto/core#taggingCreated",
            "baseIri": "http://purl.org/muto/core",
            "range": "7",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "taggingCreated",
                "en": "tagging created"
            },
            "domain": "1",
            "comment": {
                "en": "Every tagging has exactly one creation date and time. The datatype of this property is xsd:dateTime (in contrast to its superproperty dcterms:created which has range rdfs:Literal)."
            },
            "attributes": ["datatype", "functional"],
            "id": "35"
        }, {
            "iri": "http://purl.org/dc/terms/created",
            "baseIri": "http://purl.org/dc/terms",
            "range": "19",
            "label": {
                "IRI-based": "created"
            },
            "domain": "13",
            "attributes": ["datatype", "external"],
            "id": "36"
        }, {
            "range": "5",
            "domain": "4",
            "attributes": ["anonymous", "object"],
            "id": "37"
        }, {
            "iri": "http://purl.org/muto/core#taggedWith",
            "inverse": "0",
            "baseIri": "http://purl.org/muto/core",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "taggedWith",
                "en": "tagged with"
            },
            "domain": "2",
            "comment": {
                "en": "A resource can have several taggings from different users. Tags are never directly linked to resources but can be inferred from the taggings."
            },
            "attributes": ["object"],
            "id": "38"
        }, {
            "iri": "http://purl.org/muto/core#tagCreated",
            "baseIri": "http://purl.org/muto/core",
            "range": "15",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/muto/core#",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "tagCreated",
                "en": "tag created"
            },
            "domain": "4",
            "comment": {
                "en": "The creation date and time of a tag. This property can be omitted if muto:taggingCreated = muto:tagCreated (i.e. in the common case that a tag has been created along with a tagging, not in a later edit of the tagging). The datatype of this property is xsd:dateTime (in contrast to it superproperty dcterms:created which has range rdfs:Literal)."
            },
            "attributes": ["datatype", "functional"],
            "id": "39"
        }, {
            "range": "1",
            "domain": "23",
            "attributes": ["anonymous", "object"],
            "id": "40"
        }, {
            "range": "33",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "41"
        }]
    }
}