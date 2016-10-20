namespace TRVOWL.data {
    export var goodrelation = {
        "_comment": "Created with OWL2VOWL (version 0.2.2-SNAPSHOT), http://vowl.visualdataweb.org",
        "header": {
            "languages": ["en", "undefined"],
            "baseIris": ["http://www.w3.org/1999/02/22-rdf-syntax-ns", "http://schema.org", "http://purl.org/goodrelations/v1", "http://www.w3.org/2000/01/rdf-schema", "http://www.w3.org/2001/XMLSchema", "http://xmlns.com/foaf/0.1"],
            "title": {
                "en": "The GoodRelations Vocabulary for Semantic Web-based E-Commerce"
            },
            "iri": "http://purl.org/goodrelations/v1",
            "version": "V 1.0, Release 2011-10-01",
            "author": ["Martin Hepp"],
            "labels": {
                "en": "GoodRelations Ontology"
            },
            "comments": {
                "en": "The GoodRelations ontology provides the vocabulary for annotating e-commerce offerings (1) to sell, lease, repair, dispose, or maintain commodity products and (2) to provide commodity services.\n\nGoodRelations allows describing the relationship between (1) Web resources, (2) offerings made by those Web resources, (3) legal entities, (4) prices, (5) terms and conditions, and the aforementioned ontologies for products and services (6).\n \nFor more information, see http://purl.org/goodrelations/\n\nNote: The base URI of GoodRelations is http://purl.org/goodrelations/v1. Please make sure you are only using element identifiers in this namespace, e.g. http://purl.org/goodrelations/v1#BusinessEntity. There may be copies of the ontology file on the Web which can be retrieved from other locations, BUT THOSE LOCATIONS MUST NOT BE USED AS THE BASIS OF IDENTIFIERS.\n\nIf you use GoodRelations for scientific purposes, please cite our paper:\n\nHepp, Martin: GoodRelations: An Ontology for Describing Products and Services Offers on the Web, Proceedings of the 16th International Conference on Knowledge Engineering and Knowledge Management (EKAW2008), September 29 - October 3, 2008, Acitrezza, Italy, Springer LNCS, Vol. 5268, pp. 332-347.\n\nPDF at http://www.heppnetz.de/publications/"
            },
            "other": {
                "license": [{
                    "identifier": "license",
                    "language": "undefined",
                    "value": "http://creativecommons.org/licenses/by/3.0/",
                    "type": "iri"
                }],
                "creator": [{
                    "identifier": "creator",
                    "language": "en",
                    "value": "Martin Hepp",
                    "type": "label"
                }],
                "contributor": [{
                    "identifier": "contributor",
                    "language": "en",
                    "value": "Work on the GoodRelations ontology and related research and development has been partly supported by the Austrian BMVIT/FFG under the FIT-IT Semantic Systems project myOntology (grant no. 812515/9284), by a Young Researcher's Grant (Nachwuchsfoerderung 2005-2006) from the Leopold-Franzens-Universitaet Innsbruck, by the European Commission under the project SUPER (FP6-026850), and by the German Federal Ministry of Research (BMBF) by a grant under the KMU Innovativ program as part of the Intelligent Match project (FKZ 01IS10022B). The",
                    "type": "label"
                }],
                "subject": [{
                    "identifier": "subject",
                    "language": "en",
                    "value": "E-Commerce, E-Business, GoodRelations, Microdata, Ontology, Semantic SEO, RDFa, Linked Data, RDF, Semantic Web, Recommender Systems",
                    "type": "label"
                }],
                "rights": [{
                    "identifier": "rights",
                    "language": "en",
                    "value": "The GoodRelations ontology is available under the Creative Commons Attribution 3.0 Unported license; see http://creativecommons.org/licenses/by/3.0/. In a nutshell, you are free to copy, distribute and transmit the work; to remix/adapt the work (e.g. to import the ontology and create specializations of its elements), as long as you attribute the work in the manner specified by the author or licensor (but not in any way that suggests that they endorse you or your use of the work). Proper Attribution: Simply include the statement \"This work is based on the GoodRelations ontology, developed by Martin Hepp\" and link back to http://purl.org/goodrelations/",
                    "type": "label"
                }],
                "versionInfo": [{
                    "identifier": "versionInfo",
                    "language": "en",
                    "value": "V 1.0, Release 2011-10-01",
                    "type": "label"
                }],
                "title": [{
                    "identifier": "title",
                    "language": "en",
                    "value": "The GoodRelations Vocabulary for Semantic Web-based E-Commerce",
                    "type": "label"
                }],
                "homepage": [{
                    "identifier": "homepage",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/",
                    "type": "iri"
                }]
            }
        },
        "namespace": [],
        "metrics": {
            "classCount": 98,
            "datatypeCount": 58,
            "objectPropertyCount": 201,
            "datatypePropertyCount": 49,
            "propertyCount": 250,
            "nodeCount": 156,
            "individualCount": 46
        },
        "class": [{
            "id": "3",
            "type": "owl:unionOf"
        }, {
            "id": "8",
            "type": "rdfs:Literal"
        }, {
            "id": "11",
            "type": "owl:Thing"
        }, {
            "id": "13",
            "type": "rdfs:Literal"
        }, {
            "id": "16",
            "type": "rdfs:Literal"
        }, {
            "id": "18",
            "type": "rdfs:Literal"
        }, {
            "id": "30",
            "type": "rdfs:Datatype"
        }, {
            "id": "32",
            "type": "owl:unionOf"
        }, {
            "id": "36",
            "type": "rdfs:Datatype"
        }, {
            "id": "39",
            "type": "rdfs:Datatype"
        }, {
            "id": "42",
            "type": "rdfs:Datatype"
        }, {
            "id": "44",
            "type": "rdfs:Datatype"
        }, {
            "id": "46",
            "type": "owl:unionOf"
        }, {
            "id": "52",
            "type": "rdfs:Datatype"
        }, {
            "id": "54",
            "type": "owl:unionOf"
        }, {
            "id": "58",
            "type": "rdfs:Datatype"
        }, {
            "id": "60",
            "type": "rdfs:Datatype"
        }, {
            "id": "68",
            "type": "rdfs:Datatype"
        }, {
            "id": "70",
            "type": "owl:unionOf"
        }, {
            "id": "72",
            "type": "rdfs:Datatype"
        }, {
            "id": "73",
            "type": "owl:unionOf"
        }, {
            "id": "74",
            "type": "rdfs:Datatype"
        }, {
            "id": "75",
            "type": "rdfs:Datatype"
        }, {
            "id": "76",
            "type": "rdfs:Datatype"
        }, {
            "id": "41",
            "type": "owl:Class"
        }, {
            "id": "77",
            "type": "owl:unionOf"
        }, {
            "id": "79",
            "type": "rdfs:Datatype"
        }, {
            "id": "83",
            "type": "rdfs:Datatype"
        }, {
            "id": "84",
            "type": "owl:unionOf"
        }, {
            "id": "5",
            "type": "owl:equivalentClass"
        }, {
            "id": "90",
            "type": "rdfs:Literal"
        }, {
            "id": "91",
            "type": "owl:unionOf"
        }, {
            "id": "92",
            "type": "rdfs:Literal"
        }, {
            "id": "93",
            "type": "rdfs:Literal"
        }, {
            "id": "95",
            "type": "owl:unionOf"
        }, {
            "id": "97",
            "type": "rdfs:Datatype"
        }, {
            "id": "98",
            "type": "owl:unionOf"
        }, {
            "id": "102",
            "type": "rdfs:Literal"
        }, {
            "id": "48",
            "type": "owl:Class"
        }, {
            "id": "103",
            "type": "rdfs:Literal"
        }, {
            "id": "104",
            "type": "rdfs:Datatype"
        }, {
            "id": "105",
            "type": "owl:unionOf"
        }, {
            "id": "10",
            "type": "owl:Class"
        }, {
            "id": "51",
            "type": "owl:Class"
        }, {
            "id": "119",
            "type": "owl:unionOf"
        }, {
            "id": "120",
            "type": "owl:unionOf"
        }, {
            "id": "121",
            "type": "owl:unionOf"
        }, {
            "id": "122",
            "type": "owl:unionOf"
        }, {
            "id": "106",
            "type": "owl:Class"
        }, {
            "id": "127",
            "type": "owl:unionOf"
        }, {
            "id": "24",
            "type": "owl:unionOf"
        }, {
            "id": "129",
            "type": "owl:unionOf"
        }, {
            "id": "130",
            "type": "owl:unionOf"
        }, {
            "id": "131",
            "type": "owl:unionOf"
        }, {
            "id": "132",
            "type": "owl:unionOf"
        }, {
            "id": "133",
            "type": "owl:unionOf"
        }, {
            "id": "135",
            "type": "owl:unionOf"
        }, {
            "id": "126",
            "type": "owl:unionOf"
        }, {
            "id": "124",
            "type": "owl:unionOf"
        }, {
            "id": "115",
            "type": "owl:unionOf"
        }, {
            "id": "25",
            "type": "owl:Class"
        }, {
            "id": "141",
            "type": "owl:unionOf"
        }, {
            "id": "142",
            "type": "owl:unionOf"
        }, {
            "id": "143",
            "type": "owl:unionOf"
        }, {
            "id": "144",
            "type": "owl:unionOf"
        }, {
            "id": "145",
            "type": "owl:unionOf"
        }, {
            "id": "146",
            "type": "owl:unionOf"
        }, {
            "id": "148",
            "type": "owl:unionOf"
        }, {
            "id": "117",
            "type": "owl:unionOf"
        }, {
            "id": "151",
            "type": "owl:unionOf"
        }, {
            "id": "152",
            "type": "owl:unionOf"
        }, {
            "id": "153",
            "type": "owl:unionOf"
        }, {
            "id": "100",
            "type": "owl:unionOf"
        }, {
            "id": "160",
            "type": "owl:unionOf"
        }, {
            "id": "163",
            "type": "owl:unionOf"
        }, {
            "id": "165",
            "type": "owl:unionOf"
        }, {
            "id": "180",
            "type": "owl:unionOf"
        }, {
            "id": "113",
            "type": "owl:Class"
        }, {
            "id": "7",
            "type": "owl:unionOf"
        }, {
            "id": "198",
            "type": "owl:Class"
        }, {
            "id": "96",
            "type": "owl:Class"
        }, {
            "id": "33",
            "type": "owl:Class"
        }, {
            "id": "86",
            "type": "owl:equivalentClass"
        }, {
            "id": "4",
            "type": "owl:equivalentClass"
        }, {
            "id": "111",
            "type": "owl:Class"
        }, {
            "id": "71",
            "type": "owl:Class"
        }, {
            "id": "110",
            "type": "owl:Class"
        }, {
            "id": "101",
            "type": "owl:Class"
        }, {
            "id": "87",
            "type": "owl:equivalentClass"
        }, {
            "id": "109",
            "type": "owl:Class"
        }, {
            "id": "332",
            "type": "owl:equivalentClass"
        }, {
            "id": "85",
            "type": "owl:equivalentClass"
        }, {
            "id": "78",
            "type": "owl:equivalentClass"
        }, {
            "id": "1",
            "type": "owl:Class"
        }, {
            "id": "107",
            "type": "owl:Class"
        }, {
            "id": "22",
            "type": "owl:equivalentClass"
        }, {
            "id": "63",
            "type": "owl:Class"
        }, {
            "id": "55",
            "type": "owl:Class"
        }, {
            "id": "15",
            "type": "owl:Class"
        }, {
            "id": "29",
            "type": "owl:Class"
        }, {
            "id": "2",
            "type": "owl:Class"
        }, {
            "id": "20",
            "type": "owl:Class"
        }, {
            "id": "138",
            "type": "rdfs:Datatype"
        }, {
            "id": "352",
            "type": "rdfs:Datatype"
        }, {
            "id": "353",
            "type": "owl:unionOf"
        }, {
            "id": "108",
            "type": "owl:Class"
        }, {
            "id": "354",
            "type": "rdfs:Datatype"
        }, {
            "id": "343",
            "type": "owl:unionOf"
        }, {
            "id": "344",
            "type": "rdfs:Datatype"
        }, {
            "id": "355",
            "type": "rdfs:Datatype"
        }, {
            "id": "218",
            "type": "rdfs:Datatype"
        }, {
            "id": "184",
            "type": "owl:unionOf"
        }, {
            "id": "185",
            "type": "rdfs:Datatype"
        }, {
            "id": "137",
            "type": "owl:unionOf"
        }, {
            "id": "112",
            "type": "owl:Class"
        }, {
            "id": "202",
            "type": "rdfs:Literal"
        }, {
            "id": "220",
            "type": "rdfs:Datatype"
        }, {
            "id": "65",
            "type": "rdfs:Datatype"
        }, {
            "id": "319",
            "type": "owl:unionOf"
        }, {
            "id": "320",
            "type": "rdfs:Datatype"
        }, {
            "id": "324",
            "type": "rdfs:Datatype"
        }, {
            "id": "359",
            "type": "owl:unionOf"
        }, {
            "id": "360",
            "type": "rdfs:Datatype"
        }, {
            "id": "347",
            "type": "rdfs:Datatype"
        }, {
            "id": "310",
            "type": "rdfs:Datatype"
        }, {
            "id": "201",
            "type": "owl:unionOf"
        }, {
            "id": "81",
            "type": "owl:Class"
        }, {
            "id": "327",
            "type": "rdfs:Datatype"
        }, {
            "id": "367",
            "type": "owl:unionOf"
        }, {
            "id": "368",
            "type": "rdfs:Literal"
        }, {
            "id": "335",
            "type": "rdfs:Literal"
        }, {
            "id": "82",
            "type": "rdfs:Datatype"
        }, {
            "id": "369",
            "type": "owl:unionOf"
        }, {
            "id": "370",
            "type": "rdfs:Literal"
        }, {
            "id": "309",
            "type": "owl:unionOf"
        }, {
            "id": "329",
            "type": "owl:unionOf"
        }, {
            "id": "330",
            "type": "rdfs:Datatype"
        }, {
            "id": "326",
            "type": "owl:unionOf"
        }, {
            "id": "361",
            "type": "owl:unionOf"
        }, {
            "id": "182",
            "type": "owl:unionOf"
        }, {
            "id": "376",
            "type": "owl:unionOf"
        }, {
            "id": "254",
            "type": "owl:unionOf"
        }, {
            "id": "266",
            "type": "owl:unionOf"
        }, {
            "id": "267",
            "type": "rdfs:Datatype"
        }, {
            "id": "340",
            "type": "rdfs:Datatype"
        }, {
            "id": "38",
            "type": "owl:equivalentClass"
        }, {
            "id": "34",
            "type": "owl:Class"
        }],
        "classAttribute": [{
            "instances": 0,
            "union": ["4", "5"],
            "attributes": ["union", "anonymous"],
            "id": "3"
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "8",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
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
            "id": "13",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "id": "16",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "id": "18",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#time",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "30",
            "label": {
                "IRI-based": "time"
            }
        }, {
            "instances": 0,
            "union": ["20", "29", "33", "34", "2"],
            "attributes": ["union", "anonymous"],
            "id": "32"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#dateTime",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "36",
            "label": {
                "IRI-based": "dateTime"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "39",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "42",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#boolean",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "44",
            "label": {
                "IRI-based": "boolean"
            }
        }, {
            "instances": 0,
            "union": ["4", "20", "33", "5"],
            "attributes": ["union", "anonymous"],
            "id": "46"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "52",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "instances": 0,
            "union": ["55", "7"],
            "attributes": ["union", "anonymous"],
            "id": "54"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#int",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "58",
            "label": {
                "IRI-based": "int"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#int",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "60",
            "label": {
                "IRI-based": "int"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "68",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "instances": 0,
            "union": ["55", "7", "71"],
            "attributes": ["union", "anonymous"],
            "id": "70"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#int",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "72",
            "label": {
                "IRI-based": "int"
            }
        }, {
            "instances": 0,
            "union": ["20", "29", "33", "34", "2"],
            "attributes": ["union", "anonymous"],
            "id": "73"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#dateTime",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "74",
            "label": {
                "IRI-based": "dateTime"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#float",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "75",
            "label": {
                "IRI-based": "float"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#float",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "76",
            "label": {
                "IRI-based": "float"
            }
        }, {
            "iri": "http://purl.org/goodrelations/v1#TypeAndQuantityNode",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "TypeAndQuantityNode",
                "en": "Type and quantity node"
            },
            "comment": {
                "en": "This class collates all the information about a gr:ProductOrService included in a bundle. If a gr:Offering contains just one item, you can directly link from the gr:Offering to the gr:ProductOrService using gr:includes. If the offering contains multiple items, use an instance of this class for each component to indicate the quantity, unit of measurement, and type of product, and link from the gr:Offering via gr:includesObject.\n\nExample: An offering may include of 100g of Butter and 1 kg of potatoes, or 1 cell phone and 2 headsets."
            },
            "id": "41"
        }, {
            "instances": 0,
            "union": ["38", "78", "55", "7"],
            "attributes": ["union", "anonymous"],
            "id": "77"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#int",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "79",
            "label": {
                "IRI-based": "int"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#float",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "83",
            "label": {
                "IRI-based": "float"
            }
        }, {
            "instances": 0,
            "union": ["4", "20", "5"],
            "attributes": ["union", "anonymous"],
            "id": "84"
        }, {
            "iri": "http://purl.org/goodrelations/v1#ProductOrService",
            "equivalent": ["4"],
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "ProductOrService",
                "en": "Product or service"
            },
            "subClasses": ["22", "85", "48", "86", "87"],
            "comment": {
                "en": "The superclass of all classes describing products or services types, either by nature or purpose. Examples for such subclasses are \"TV set\", \"vacuum cleaner\", etc. An instance of this class can be either an actual product or service (gr:Individual), a placeholder instance for unknown instances of a mass-produced commodity (gr:SomeItems), or a model / prototype specification (gr:ProductOrServiceModel). When in doubt, use gr:SomeItems.\n\nExamples: \na) MyCellphone123, i.e. my personal, tangible cell phone (gr:Individual)\nb) Siemens1234, i.e. the Siemens cell phone make and model 1234 (gr:ProductOrServiceModel)\nc) dummyCellPhone123 as a placeholder for actual instances of a certain kind of cell phones (gr:SomeItems)\n\t\nNote: Your first choice for specializations of gr:ProductOrService should be http://www.productontology.org.\n\nCompatibility with schema.org: This class is (approximately) equivalent to http://schema.org/Product."
            },
            "attributes": ["equivalent"],
            "id": "5"
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "90",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "instances": 0,
            "union": ["4", "5"],
            "attributes": ["union", "anonymous"],
            "id": "91"
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "92",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "93",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "instances": 0,
            "union": ["20", "96", "33", "34"],
            "attributes": ["union", "anonymous"],
            "id": "95"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "97",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "instances": 0,
            "union": ["4", "20", "5"],
            "attributes": ["union", "anonymous"],
            "id": "98"
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "102",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://purl.org/goodrelations/v1#ProductOrServiceModel",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "ProductOrServiceModel",
                "en": "Product or service model"
            },
            "comment": {
                "en": "A product or service model is a intangible entity that specifies some characteristics of a group of similar, usually mass-produced products, in the sense of a prototype. In case of mass-produced products, there exists a relation gr:hasMakeAndModel between the actual product or service (gr:Individual or gr:SomeItems) and the prototype (gr:ProductOrServiceModel). GoodRelations treats product or service models as \"prototypes\" instead of a completely separate kind of entities, because this allows using the same domain-specific properties (e.g. gr:weight) for describing makes and models and for describing actual products.\n\nExamples: Ford T, Volkswagen Golf, Sony Ericsson W123 cell phone\n\nNote: An actual product or service (gr:Individual) by default shares the features of its model (e.g. the weight). However, this requires non-standard reasoning. See http://wiki.goodrelations-vocabulary.org/Axioms for respective rule sets.\n\t\nCompatibility with schema.org: This class is (approximately) a subclass of http://schema.org/Product."
            },
            "id": "48",
            "superClasses": ["4", "5"]
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "103",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#float",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "104",
            "label": {
                "IRI-based": "float"
            }
        }, {
            "instances": 0,
            "union": ["106", "41", "81", "7", "5", "107", "22", "20", "29", "108", "96", "63", "109", "110", "101", "38", "85", "111", "48", "25", "112", "10", "2", "15", "1", "51", "113"],
            "attributes": ["union", "anonymous"],
            "id": "105"
        }, {
            "iri": "http://purl.org/goodrelations/v1#DayOfWeek",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "DayOfWeek",
                "en": "Day of week"
            },
            "individuals": [{
                "iri": "http://purl.org/goodrelations/v1#Thursday",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }],
                    "displayPosition": [{
                        "identifier": "displayPosition",
                        "language": "undefined",
                        "value": "4",
                        "type": "label"
                    }]
                },
                "comment": {
                    "en": "Thursday as a day of the week."
                },
                "labels": {
                    "IRI-based": "Thursday",
                    "en": "Thursday (day of week)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Sunday",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }],
                    "displayPosition": [{
                        "identifier": "displayPosition",
                        "language": "undefined",
                        "value": "7",
                        "type": "label"
                    }]
                },
                "comment": {
                    "en": "Sunday as a day of the week."
                },
                "labels": {
                    "IRI-based": "Sunday",
                    "en": "Sunday (day of week)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Monday",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }],
                    "displayPosition": [{
                        "identifier": "displayPosition",
                        "language": "undefined",
                        "value": "1",
                        "type": "label"
                    }]
                },
                "comment": {
                    "en": "Monday as a day of the week."
                },
                "labels": {
                    "IRI-based": "Monday",
                    "en": "Monday (day of week)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Tuesday",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }],
                    "displayPosition": [{
                        "identifier": "displayPosition",
                        "language": "undefined",
                        "value": "2",
                        "type": "label"
                    }]
                },
                "comment": {
                    "en": "Tuesday as a day of the week."
                },
                "labels": {
                    "IRI-based": "Tuesday",
                    "en": "Tuesday (day of week)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Friday",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }],
                    "displayPosition": [{
                        "identifier": "displayPosition",
                        "language": "undefined",
                        "value": "5",
                        "type": "label"
                    }]
                },
                "comment": {
                    "en": "Friday as a day of the week."
                },
                "labels": {
                    "IRI-based": "Friday",
                    "en": "Friday (day of week)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#PublicHolidays",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }],
                    "displayPosition": [{
                        "identifier": "displayPosition",
                        "language": "undefined",
                        "value": "8",
                        "type": "label"
                    }]
                },
                "comment": {
                    "en": "A placeholder for all official public holidays at the gr:Location. This allows specifying the opening hours on public holidays. If a given day is a public holiday, this specification supersedes the opening hours for the respective day of the week."
                },
                "labels": {
                    "IRI-based": "PublicHolidays",
                    "en": "Public holidays (day of week)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Saturday",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }],
                    "displayPosition": [{
                        "identifier": "displayPosition",
                        "language": "undefined",
                        "value": "6",
                        "type": "label"
                    }]
                },
                "comment": {
                    "en": "Saturday as a day of the week."
                },
                "labels": {
                    "IRI-based": "Saturday",
                    "en": "Saturday (day of week)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Wednesday",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }],
                    "displayPosition": [{
                        "identifier": "displayPosition",
                        "language": "undefined",
                        "value": "3",
                        "type": "label"
                    }]
                },
                "comment": {
                    "en": "Wednesday as a day of the week."
                },
                "labels": {
                    "IRI-based": "Wednesday",
                    "en": "Wednesday (day of week)"
                }
            }],
            "comment": {
                "en": "The day of the week, used to specify  to which day the opening hours of a gr:OpeningHoursSpecification refer.\n\nExamples: Monday, Tuesday, Wednesday,..."
            },
            "id": "10"
        }, {
            "iri": "http://purl.org/goodrelations/v1#QualitativeValue",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "QualitativeValue",
                "en": "Qualitative value"
            },
            "comment": {
                "en": "A qualitative value is a predefined value for a product characteristic. \n\t\nExamples: the color \"green\" or the power cord plug type \"US\"; the garment sizes \"S\", \"M\", \"L\", and \"XL\".\n\t\nNote: Value sets are supported by creating subclasses of this class. Ordinal relations between values (gr:greater, gr:lesser, ...) are provided directly by GoodRelations.\n\nCompatibility with schema.org: This class is equivalent to http://schema.org/Enumeration."
            },
            "id": "51"
        }, {
            "instances": 0,
            "union": ["25", "51"],
            "attributes": ["union", "anonymous"],
            "id": "119"
        }, {
            "instances": 0,
            "union": ["25", "51"],
            "attributes": ["union", "anonymous"],
            "id": "120"
        }, {
            "instances": 0,
            "union": ["20", "41", "33"],
            "attributes": ["union", "anonymous"],
            "id": "121"
        }, {
            "instances": 0,
            "union": ["4", "5"],
            "attributes": ["union", "anonymous"],
            "id": "122"
        }, {
            "iri": "http://purl.org/goodrelations/v1#PaymentMethod",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "PaymentMethod",
                "en": "Payment method"
            },
            "individuals": [{
                "iri": "http://purl.org/goodrelations/v1#CheckInAdvance",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment by sending a check in advance, i.e., the offering gr:BusinessEntity will deliver the goods upon receipt of a check over the due amount. There are variations in handling payment by check - sometimes, shipment will be upon receipt of the check as a document, sometimes the shipment will take place only upon successful crediting of the check."
                },
                "labels": {
                    "IRI-based": "CheckInAdvance",
                    "en": "Check in advance (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#PayPal",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment via the PayPal payment service."
                },
                "labels": {
                    "IRI-based": "PayPal",
                    "en": "PayPal (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Cash",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment by cash upon delivery or pickup."
                },
                "labels": {
                    "IRI-based": "Cash",
                    "en": "Cash (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#COD",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Collect on delivery / Cash on delivery - A payment method where the recipient of goods pays at the time of delivery. Usually, the amount of money is collected by the transportation company handling the goods."
                },
                "labels": {
                    "IRI-based": "COD",
                    "en": "COD (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#ByInvoice",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment by bank transfer after delivery, i.e., the offering gr:BusinessEntity will deliver first, inform the buying party about the due amount and their bank account details, and expect payment shortly after delivery."
                },
                "labels": {
                    "IRI-based": "ByInvoice",
                    "en": "By invoice (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#GoogleCheckout",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment via the Google Checkout payment service."
                },
                "labels": {
                    "IRI-based": "GoogleCheckout",
                    "en": "Google Checkout (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#ByBankTransferInAdvance",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment by bank transfer in advance, i.e., the offering gr:BusinessEntity will inform the buying party about their bank account details and will deliver the goods upon receipt of the due amount.\nThis is equivalent to payment by wire transfer."
                },
                "labels": {
                    "IRI-based": "ByBankTransferInAdvance",
                    "en": "By bank transfer in advance (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#PaySwarm",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment via the PaySwarm distributed micropayment service."
                },
                "labels": {
                    "IRI-based": "PaySwarm",
                    "en": "PaySwarm (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#DirectDebit",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment by direct debit, i.e., the buying party will inform the offering gr:BusinessEntity about its bank account details and authorizes the gr:BusinessEntity to collect the agreed amount directly from that account."
                },
                "labels": {
                    "IRI-based": "DirectDebit",
                    "en": "Direct debit (payment method)"
                }
            }],
            "subClasses": ["113"],
            "comment": {
                "en": "A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction. This element is mostly used for specifying the types of payment accepted by a gr:BusinessEntity.\n\nExamples: VISA, MasterCard, Diners, cash, or bank transfer in advance."
            },
            "id": "106"
        }, {
            "instances": 0,
            "union": ["20", "33", "2"],
            "attributes": ["union", "anonymous"],
            "id": "127"
        }, {
            "instances": 0,
            "union": ["4", "5"],
            "attributes": ["union", "anonymous"],
            "id": "24"
        }, {
            "instances": 0,
            "union": ["20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "129"
        }, {
            "instances": 0,
            "union": ["20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "130"
        }, {
            "instances": 0,
            "union": ["20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "131"
        }, {
            "instances": 0,
            "union": ["20", "33", "2"],
            "attributes": ["union", "anonymous"],
            "id": "132"
        }, {
            "instances": 0,
            "union": ["4", "5"],
            "attributes": ["union", "anonymous"],
            "id": "133"
        }, {
            "instances": 0,
            "union": ["4", "5"],
            "attributes": ["union", "anonymous"],
            "id": "135"
        }, {
            "instances": 0,
            "union": ["20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "126"
        }, {
            "instances": 0,
            "union": ["20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "124"
        }, {
            "instances": 0,
            "union": ["55", "7", "71"],
            "attributes": ["union", "anonymous"],
            "id": "115"
        }, {
            "iri": "http://purl.org/goodrelations/v1#QuantitativeValue",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "QuantitativeValue",
                "en": "Quantitative value"
            },
            "subClasses": ["101", "63"],
            "comment": {
                "en": "A quantitative value is a numerical interval that represents the range of a certain gr:quantitativeProductOrServiceProperty in terms of the lower and upper bounds for a particular gr:ProductOrService. It is to be interpreted in combination with the respective unit of measurement. Most quantitative values are intervals even if they are in practice often treated as a single point value.\n\t\nExample: a weight between 10 and 25 kilogramms, a length between 10 and 15 milimeters.\n\nCompatibility with schema.org: This class is equivalent to http://schema.org/Quantity."
            },
            "id": "25"
        }, {
            "instances": 0,
            "union": ["4", "5"],
            "attributes": ["union", "anonymous"],
            "id": "141"
        }, {
            "instances": 0,
            "union": ["4", "5"],
            "attributes": ["union", "anonymous"],
            "id": "142"
        }, {
            "instances": 0,
            "union": ["4", "5"],
            "attributes": ["union", "anonymous"],
            "id": "143"
        }, {
            "instances": 0,
            "union": ["4", "22", "85"],
            "attributes": ["union", "anonymous"],
            "id": "144"
        }, {
            "instances": 0,
            "union": ["38", "78"],
            "attributes": ["union", "anonymous"],
            "id": "145"
        }, {
            "instances": 0,
            "union": ["4", "5"],
            "attributes": ["union", "anonymous"],
            "id": "146"
        }, {
            "instances": 0,
            "union": ["20", "33", "34"],
            "attributes": ["union", "anonymous"],
            "id": "148"
        }, {
            "instances": 0,
            "union": ["20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "117"
        }, {
            "instances": 0,
            "union": ["22", "85"],
            "attributes": ["union", "anonymous"],
            "id": "151"
        }, {
            "instances": 0,
            "union": ["20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "152"
        }, {
            "instances": 0,
            "union": ["20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "153"
        }, {
            "instances": 0,
            "union": ["22", "20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "100"
        }, {
            "instances": 0,
            "union": ["55", "7", "71"],
            "attributes": ["union", "anonymous"],
            "id": "160"
        }, {
            "instances": 0,
            "union": ["20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "163"
        }, {
            "instances": 0,
            "union": ["55", "7"],
            "attributes": ["union", "anonymous"],
            "id": "165"
        }, {
            "instances": 0,
            "union": ["20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "180"
        }, {
            "iri": "http://purl.org/goodrelations/v1#PaymentMethodCreditCard",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "PaymentMethodCreditCard",
                "en": "Payment method credit card"
            },
            "individuals": [{
                "iri": "http://purl.org/goodrelations/v1#DinersClub",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment by credit or debit cards issued by the Diner's Club network."
                },
                "labels": {
                    "IRI-based": "DinersClub",
                    "en": "Diners Club (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#MasterCard",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment by credit or debit cards issued by the MasterCard network."
                },
                "labels": {
                    "IRI-based": "MasterCard",
                    "en": "MasterCard (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#AmericanExpress",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment by credit or debit cards issued by the American Express network."
                },
                "labels": {
                    "IRI-based": "AmericanExpress",
                    "en": "American Express (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#VISA",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment by credit or debit cards issued by the VISA network."
                },
                "labels": {
                    "IRI-based": "VISA",
                    "en": "VISA (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#JCB",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment by credit or debit cards issued by the JCB network."
                },
                "labels": {
                    "IRI-based": "JCB",
                    "en": "JCB (payment method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Discover",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Payment by credit or debit cards issued by the Discover network."
                },
                "labels": {
                    "IRI-based": "Discover",
                    "en": "Discover (payment method)"
                }
            }],
            "comment": {
                "en": "The subclass of gr:PaymentMethod represents all variants and brands of credit or debit cards as a standardized procedure for transferring the monetary amount for a purchase. It is mostly used for specifying the types of payment accepted by a gr:Business Entity.\n\nExamples: VISA, MasterCard, or American Express."
            },
            "id": "113",
            "superClasses": ["106"]
        }, {
            "iri": "http://purl.org/goodrelations/v1#BusinessEntity",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "BusinessEntity",
                "en": "Business entity"
            },
            "union": ["55", "71"],
            "subClasses": ["55", "71"],
            "comment": {
                "en": "An instance of this class represents the legal agent making (or seeking) a particular offering. This can be a legal body or a person. A business entity has at least a primary mailing address and contact details. For this, typical address standards (vCard) and location data (geo, WGS84) can be attached. Note that the location of the business entity is not necessarily the location from which the product or service is being available (e.g. the branch or store). Use gr:Location for stores and branches.\n\t\t\nExample: Siemens Austria AG, Volkswagen Ltd., Peter Miller's Cell phone Shop LLC\n\nCompatibility with schema.org: This class is equivalent to the union of http://schema.org/Person and http://schema.org/Organization.\t\t\n"
            },
            "attributes": ["union"],
            "id": "7"
        }, {
            "iri": "http://purl.org/goodrelations/v1#N-Ary-Relations",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "N-Ary-Relations",
                "en": "N-ary relations (DEPRECATED)"
            },
            "comment": {
                "en": "This is the superclass for all classes that are placeholders for n-ary relations, which OWL cannot represent.\nDEPRECATED. Do not use this class in data or queries."
            },
            "attributes": ["deprecated"],
            "id": "198"
        }, {
            "iri": "http://purl.org/goodrelations/v1#DeliveryChargeSpecification",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "DeliveryChargeSpecification",
                "en": "Delivery charge specification"
            },
            "comment": {
                "en": "A delivery charge specification is a conceptual entity that specifies the additional costs asked for the delivery of a given gr:Offering using a particular gr:DeliveryMethod by the respective gr:BusinessEntity. A delivery charge specification is characterized by (1) a monetary amount per order, specified as a literal value of type float in combination with a currency, (2) the delivery method, (3) the target country or region, and (4)  whether this charge includes local sales taxes, namely VAT.\nA gr:Offering may be linked to multiple gr:DeliveryChargeSpecification nodes that specify alternative charges for disjoint combinations of target countries or regions, and delivery methods.\n\nExamples: Delivery by direct download is free of charge worldwide, delivery by UPS to Germany is 10 Euros per order, delivery by mail within the US is 5 Euros per order.\n\nThe total amount of this charge is specified as a float value of the gr:hasCurrencyValue property. The currency is specified via the gr:hasCurrency datatype property. Whether the price includes VAT or not is indicated by the gr:valueAddedTaxIncluded property. The gr:DeliveryMethod to which this charge applies is specified using the gr:appliesToDeliveryMethod object property. The region or regions to which this charge applies is specified using the gr:eligibleRegions property, which uses ISO 3166-1 and ISO 3166-2 codes.\n\nIf the price can only be given as a range, use gr:hasMaxCurrencyValue and gr:hasMinCurrencyValue for the upper and lower bounds.\n\nImportant: When querying for the price, always use gr:hasMaxCurrencyValue and gr:hasMinCurrencyValue."
            },
            "id": "96",
            "superClasses": ["2"]
        }, {
            "iri": "http://schema.org/Offer",
            "baseIri": "http://schema.org",
            "instances": 0,
            "label": {
                "IRI-based": "Offer"
            },
            "attributes": ["external"],
            "id": "33",
            "superClasses": ["20"]
        }, {
            "iri": "http://purl.org/goodrelations/v1#ProductOrServicesSomeInstancesPlaceholder",
            "equivalent": ["22"],
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "ProductOrServicesSomeInstancesPlaceholder",
                "en": "Product or services some instances placeholder (DEPRECATED)"
            },
            "comment": {
                "en": "DEPRECATED - This class is superseded by gr:SomeItems. Replace all occurrences of gr:ProductOrServicesSomeInstancesPlaceholder by gr:SomeItems, if possible."
            },
            "attributes": ["equivalent", "deprecated"],
            "id": "86",
            "superClasses": ["5"]
        }, {
            "iri": "http://schema.org/Product",
            "baseIri": "http://schema.org",
            "instances": 0,
            "label": {
                "IRI-based": "Product"
            },
            "subClasses": ["22", "85", "48"],
            "attributes": ["equivalent", "external"],
            "id": "4"
        }, {
            "iri": "http://purl.org/goodrelations/v1#DeliveryModeParcelService",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "DeliveryModeParcelService",
                "en": "Delivery mode parcel service"
            },
            "individuals": [{
                "iri": "http://purl.org/goodrelations/v1#UPS",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Delivery via the parcel service UPS."
                },
                "labels": {
                    "IRI-based": "UPS",
                    "en": "UPS (delivery method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#DHL",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Delivery via the parcel service DHL."
                },
                "labels": {
                    "IRI-based": "DHL",
                    "en": "DHL (delivery method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#FederalExpress",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Delivery via the parcel service Federal Express."
                },
                "labels": {
                    "IRI-based": "FederalExpress",
                    "en": "Federal Express (delivery method)"
                }
            }],
            "comment": {
                "en": "A private parcel service as the delivery mode available for a certain offering.\n\nExamples: UPS, DHL"
            },
            "id": "111",
            "superClasses": ["15"]
        }, {
            "iri": "http://schema.org/Person",
            "baseIri": "http://schema.org",
            "instances": 0,
            "label": {
                "IRI-based": "Person"
            },
            "attributes": ["external"],
            "id": "71",
            "superClasses": ["7"]
        }, {
            "iri": "http://purl.org/goodrelations/v1#Brand",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Brand",
                "en": "Brand"
            },
            "comment": {
                "en": "A brand is the identity of a specific product, service, or business. Use foaf:logo for attaching a brand logo and gr:name or rdfs:label for attaching the brand name.\t\n\n(Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Brand)"
            },
            "id": "110"
        }, {
            "iri": "http://purl.org/goodrelations/v1#QuantitativeValueFloat",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "QuantitativeValueFloat",
                "en": "Quantitative value float"
            },
            "comment": {
                "en": "An instance of this class is an actual float value for a quantitative property of a product. This instance is usually characterized by a minimal value, a maximal value, and a unit of measurement.\n\nExamples: The intervals \"between 10.0  and 25.4 kilogramms\" or \"10.2 and 15.5 milimeters\".\n\nCompatibility with schema.org: This class is a subclass of http://schema.org/Quantity."
            },
            "id": "101",
            "superClasses": ["25"]
        }, {
            "iri": "http://purl.org/goodrelations/v1#ActualProductOrServiceInstance",
            "equivalent": ["85"],
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "ActualProductOrServiceInstance",
                "en": "Actual product or service instance (DEPRECATED)"
            },
            "comment": {
                "en": "DEPRECATED - This class is superseded by gr:Individual. Replace all occurrences of gr:ActualProductOrServiceInstance by gr:Individual, if possible."
            },
            "attributes": ["equivalent", "deprecated"],
            "id": "87",
            "superClasses": ["5"]
        }, {
            "iri": "http://purl.org/goodrelations/v1#WarrantyScope",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "WarrantyScope",
                "en": "Warranty scope"
            },
            "individuals": [{
                "iri": "http://purl.org/goodrelations/v1#PartsAndLabor-PickUp",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "In case of a defect or malfunction, the buying party has the right to request from the selling gr:Business Entity to pick-up the good from its current location to a suitable service location, where the functionality of the good will be restored. All transportation, labor, parts, and materials needed to fix the problem will be covered by the selling business entity or one of its partnering business entities.\n  \nNote: This is just a rough classification for filtering offers. It is up to the buying party to check the exact scope and terms and conditions of the gr:WarrantyPromise."
                },
                "labels": {
                    "IRI-based": "PartsAndLabor-PickUp",
                    "en": "Parts and labor / pick up (warranty scope)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#PartsAndLabor-BringIn",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "In case of a defect or malfunction, the buying party has the right to transport the good to a service location determined by the the selling gr:BusinessEntity and will not be be charged for labor, parts, and materials needed to fix the problem. All those costs will be covered by the selling business entity or one of its partnering business entities.\n\nNote: This is just a rough classification for filtering offers. It is up to the buying party to check the exact scope and terms and conditions of the gr:WarrantyPromise."
                },
                "labels": {
                    "IRI-based": "PartsAndLabor-BringIn",
                    "en": "Parts and labor / bring-in (warranty scope)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Labor-BringIn",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "In case of a defect or malfunction, the buying party has the right to transport the good to a service location determined by the the selling gr:BusinessEntity and will be charged only for parts and materials needed to fix the problem. Labor will be covered by the selling business entity or one of its partnering business entities.\n\nNote: This is just a rough classification for filtering offers. It is up to the buying party to check the exact scope and terms and conditions of the gr:WarrantyPromise."
                },
                "labels": {
                    "IRI-based": "Labor-BringIn",
                    "en": "Labor / bring-in (warranty scope)"
                }
            }],
            "comment": {
                "en": "The warranty scope represents types of services that will be provided free of charge by the vendor or manufacturer in the case of a defect (e.g. labor and parts, just parts), as part of the warranty included in an gr:Offering. The actual services may be provided by the gr:BusinessEntity making the offering, by the manufacturer of the product, or by a third party. \n\nExamples: Parts and Labor, Parts"
            },
            "id": "109"
        }, {
            "iri": "http://purl.org/goodrelations/v1#LocationOfSalesOrServiceProvisioning",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "LocationOfSalesOrServiceProvisioning",
                "en": "Location of sales or service provisioning (DEPRECATED)"
            },
            "comment": {
                "en": "DEPRECATED - This class is superseded by gr:Location. Replace all occurrences of gr:LocationOfSalesOrServiceProvisioning by gr:Location, if possible."
            },
            "attributes": ["equivalent", "deprecated"],
            "id": "332"
        }, {
            "iri": "http://purl.org/goodrelations/v1#Individual",
            "equivalent": ["87"],
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Individual",
                "en": "Individual"
            },
            "comment": {
                "en": "A gr:Individual is an actual product or service instance, i.e., a single identifiable object or action that creates some increase in utility (in the economic sense) for the individual possessing or using this very object (product) or for the individual in whose favor this very action is being taken (service). Products or services are types of goods in the economic sense. For an overview of goods and commodities in economics, see Milgate (1987).\n\nExamples: MyThinkpad T60, the pint of beer standing in front of me, my Volkswagen Golf, the haircut that I received or will be receiving at a given date and time.\n\nNote 1: In many cases, product or service instances are not explicitly exposed on the Web but only claimed to exist (i.e. existentially quantified). In this case, use gr:SomeItems.\nNote 2: This class is the new, shorter form of the former gr:ActualProductOrServiceInstance.\n\nCompatibility with schema.org: This class is a subclass of http://schema.org/Product."
            },
            "attributes": ["equivalent"],
            "id": "85",
            "superClasses": ["4", "5"]
        }, {
            "iri": "http://schema.org/Place",
            "baseIri": "http://schema.org",
            "instances": 0,
            "label": {
                "IRI-based": "Place"
            },
            "attributes": ["equivalent", "external"],
            "id": "78"
        }, {
            "iri": "http://purl.org/goodrelations/v1#WarrantyPromise",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "WarrantyPromise",
                "en": "Warranty promise"
            },
            "comment": {
                "en": "This is a conceptual entity that holds together all aspects of the n-ary relation gr:hasWarrantyPromise.\n\nA Warranty promise is an entity representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of the gr:ProductOrService. A warranty promise is characterized by its temporal duration (usually starting with the date of purchase) and its gr:WarrantyScope. The warranty scope represents the types of services provided (e.g. labor and parts, just parts) of the warranty included in an gr:Offering. The actual services may be provided by the gr:BusinessEntity making the offering, by the manufacturer of the product, or by a third party. There may be multiple warranty promises associated with a particular offering, which differ in duration and scope (e.g. pick-up service during the first 12 months, just parts and labor for 36 months).\n\nExamples: 12 months parts and labor, 36 months parts"
            },
            "id": "1"
        }, {
            "iri": "http://purl.org/goodrelations/v1#PaymentChargeSpecification",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "PaymentChargeSpecification",
                "en": "Payment charge specification"
            },
            "comment": {
                "en": "A payment charge specification is a conceptual entity that specifies the additional costs asked for settling the payment after accepting a given gr:Offering using a particular gr:PaymentMethod. A payment charge specification is characterized by (1) a monetary amount per order specified as a literal value of type float in combination with a Currency, (2) the payment method, and (3) a whether this charge includes local sales taxes, namely VAT.\nA gr:Offering may be linked to multiple payment charge specifications that specify alternative charges for various payment methods.\n\nExamples: Payment by VISA or Mastercard costs a fee of 3 Euros including VAT, payment by bank transfer in advance is free of charge.\n\nThe total amount of this surcharge is specified as a float value of the gr:hasCurrencyValue property. The currency is specified via the gr:hasCurrency datatype property. Whether the price includes VAT or not is indicated by the gr:valueAddedTaxIncluded datatype property. The gr:PaymentMethod to which this charge applies is specified using the gr:appliesToPaymentMethod object property.\n\nIf the price can only be given as a range, use gr:hasMaxCurrencyValue and gr:hasMinCurrencyValue for the upper and lower bounds.\n\nImportant: When querying for the price, always use gr:hasMaxCurrencyValue and gr:hasMinCurrencyValue."
            },
            "id": "107",
            "superClasses": ["2"]
        }, {
            "iri": "http://purl.org/goodrelations/v1#SomeItems",
            "equivalent": ["86"],
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "SomeItems",
                "en": "Some items"
            },
            "comment": {
                "en": "A placeholder instance for unknown instances of a mass-produced commodity. This is used as a computationally cheap work-around for such instances that are not individually exposed on the Web but just stated to exist (i.e., which are existentially quantified).\n\nExample: An instance of this class can represent an anonymous set of green Siemens1234 phones. It is different from the gr:ProductOrServiceModel Siemens1234, since this refers to the make and model, and it is different from a particular instance of this make and model (e.g. my individual phone) since the latter can be sold only once.\n\nNote: This class is the new, shorter form of the former gr:ProductOrServicesSomeInstancesPlaceholder.\n\t\t\nCompatibility with schema.org: This class is (approximately) a subclass of http://schema.org/Product."
            },
            "attributes": ["equivalent"],
            "id": "22",
            "superClasses": ["4", "5"]
        }, {
            "iri": "http://purl.org/goodrelations/v1#QuantitativeValueInteger",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "QuantitativeValueInteger",
                "en": "Quantitative value integer"
            },
            "comment": {
                "en": "An instance of this class is an actual integer value for a quantitative property of a product. This instance is usually characterized by a minimal value, a maximal value, and a unit of measurement. \n\nExample: A seating capacity between 1 and 8 persons.\n\nNote: Users must keep in mind that ranges in here mean that ALL possible values in this interval are covered. (Sometimes, the actual commitment may be less than that: \"We sell cars from 2 - 12 seats\" does often not really mean that they have cars with 2,3,4,...12 seats.). Someone renting out two types of rowing boats, one that fits for 1 or 2 people, and another that must be operated by 4 people cannot claim to rent boats with a seating capacity between 1 and 4 people. He or she is offering two boat types for 1-2 and 4 persons.\n\t\t\nCompatibility with schema.org: This class is a subclass of http://schema.org/Quantity."
            },
            "id": "63",
            "superClasses": ["25"]
        }, {
            "iri": "http://schema.org/Organization",
            "baseIri": "http://schema.org",
            "instances": 0,
            "label": {
                "IRI-based": "Organization"
            },
            "attributes": ["external"],
            "id": "55",
            "superClasses": ["7"]
        }, {
            "iri": "http://purl.org/goodrelations/v1#DeliveryMethod",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "DeliveryMethod",
                "en": "Delivery method"
            },
            "individuals": [{
                "iri": "http://purl.org/goodrelations/v1#DeliveryModePickUp",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Delivery of the goods by picking them up at one of the stores etc. (gr:Location) during the opening hours as specified by respective instances of gr:OpeningHoursSpecification."
                },
                "labels": {
                    "IRI-based": "DeliveryModePickUp",
                    "en": "Delivery mode pick up (delivery method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#DeliveryModeDirectDownload",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Delivery of the goods via direct download from the Internet, i.e., the offering gr:BusinessEntity provides the buying party with details on how to retrieve the goods online. Connection fees and other costs of using the infrastructure are to be carried by the buying party."
                },
                "labels": {
                    "IRI-based": "DeliveryModeDirectDownload",
                    "en": "Delivery mode direct download (delivery method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Delivery of the goods by using a fleet of vehicles either owned and operated or subcontracted by the gr:BusinessEntity."
                },
                "labels": {
                    "IRI-based": "DeliveryModeOwnFleet",
                    "en": "Delivery mode own fleet (delivery method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#DeliveryModeFreight",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Delivery by an unspecified air, sea, or ground freight carrier or cargo company."
                },
                "labels": {
                    "IRI-based": "DeliveryModeFreight",
                    "en": "Delivery mode freight (delivery method)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#DeliveryModeMail",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "Delivery via regular mail service (private or public postal services)."
                },
                "labels": {
                    "IRI-based": "DeliveryModeMail",
                    "en": "Delivery mode mail (delivery method)"
                }
            }],
            "subClasses": ["111"],
            "comment": {
                "en": "A delivery method is a standardized procedure for transferring the product or service to the destination of fulfilment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending gr:BusinessEntity (this is important, since the contracted party may subcontract the fulfilment to smaller, regional businesses).\n\nExamples: Delivery by mail, delivery by direct download, delivery by UPS"
            },
            "id": "15"
        }, {
            "iri": "http://purl.org/goodrelations/v1#OpeningHoursSpecification",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "OpeningHoursSpecification",
                "en": "Opening hours specification"
            },
            "comment": {
                "en": "This is a conceptual entity that holds together all information about the opening hours on a given day (gr:DayOfWeek)."
            },
            "id": "29"
        }, {
            "iri": "http://purl.org/goodrelations/v1#PriceSpecification",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "PriceSpecification",
                "en": "Price specification"
            },
            "subClasses": ["81", "96", "107"],
            "comment": {
                "en": "The superclass of all price specifications."
            },
            "id": "2"
        }, {
            "iri": "http://purl.org/goodrelations/v1#Offering",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Offering",
                "en": "Offering"
            },
            "subClasses": ["33"],
            "comment": {
                "en": "An offering represents the public, not necessarily binding, not necessarily exclusive, announcement by a gr:BusinessEntity to provide (or seek) a certain gr:BusinessFunction for a certain gr:ProductOrService to a specified target audience. An offering is specified by the type of product or service or bundle it refers to, what business function is being offered (sales, rental, ...), and a set of commercial properties. It can either refer to \n(1) a clearly specified instance (gr:Individual),\n(2) to a set of anonymous instances of a given type (gr:SomeItems),\n(3) a product model specification (gr:ProductOrServiceModel), see also section 3.3.3 of the GoodRelations Technical Report. \n\nAn offering may be constrained in terms of the eligible type of business partner, countries, quantities, and other commercial properties. The definition of the commercial properties, the type of product offered, and the business function are explained in other parts of this vocabulary in more detail.\n\nExample: Peter Miller offers to repair TV sets made by Siemens, Volkswagen Innsbruck sells a particular instance of a Volkswagen Golf at $10,000.\n\nCompatibility with schema.org: This class is a superclass to http://schema.org/Offer, since gr:Offering can also represent demand."
            },
            "id": "20"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "138",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#float",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "352",
            "label": {
                "IRI-based": "float"
            }
        }, {
            "instances": 0,
            "union": ["20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "353"
        }, {
            "iri": "http://purl.org/goodrelations/v1#BusinessEntityType",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "BusinessEntityType",
                "en": "Business entity type"
            },
            "individuals": [{
                "iri": "http://purl.org/goodrelations/v1#Reseller",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "The gr:BusinessEntityType representing such agents that are purchasing the scope of products included in the gr:Offering for resale on the market. Resellers are also businesses, i.e., they are officially registered with the public administration and strive for profits by their activities."
                },
                "labels": {
                    "IRI-based": "Reseller",
                    "en": "Reseller (business entity type)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#PublicInstitution",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "The gr:BusinessEntityType representing such agents that are part of the adminstration or owned by the public."
                },
                "labels": {
                    "IRI-based": "PublicInstitution",
                    "en": "Public institution (business entity type)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Enduser",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "The gr:BusinessEntityType representing such agents that are purchasing the good or service for private consumption, in particular not for resale or for usage within an industrial enterprise. By default, a Business Entity is an Enduser."
                },
                "labels": {
                    "IRI-based": "Enduser",
                    "en": "Enduser (business entity type)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Business",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "The gr:BusinessEntityType representing such agents that are themselves offering commercial services or products on the market. Usually, businesses are characterized by the fact that they are officially registered with the public administration and strive for profits by their activities."
                },
                "labels": {
                    "IRI-based": "Business",
                    "en": "Business (business entity type)"
                }
            }],
            "comment": {
                "en": "A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of a gr:BusinessEntity. From the ontological point of view, business entity types are mostly roles that a business entity has in the market. Business entity types are important for specifying eligible customers, since a gr:Offering is often valid only for business entities of a certain size, legal structure, or role in the value chain. \n\nExamples: Consumers, Retailers, Wholesalers, or Public Institutions"
            },
            "id": "108"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#dateTime",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "354",
            "label": {
                "IRI-based": "dateTime"
            }
        }, {
            "instances": 0,
            "union": ["55", "7", "71"],
            "attributes": ["union", "anonymous"],
            "id": "343"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "344",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#int",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "355",
            "label": {
                "IRI-based": "int"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#float",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "218",
            "label": {
                "IRI-based": "float"
            }
        }, {
            "instances": 0,
            "union": ["4", "20", "5"],
            "attributes": ["union", "anonymous"],
            "id": "184"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "185",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "instances": 0,
            "union": ["4", "20", "5"],
            "attributes": ["union", "anonymous"],
            "id": "137"
        }, {
            "iri": "http://purl.org/goodrelations/v1#BusinessFunction",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "BusinessFunction",
                "en": "Business function"
            },
            "individuals": [{
                "iri": "http://purl.org/goodrelations/v1#ProvideService",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "This gr:BusinessFunction indicates that the gr:BusinessEntity offers (or seeks) the respective type of service.\n\nNote: Maintain and Repair are also types of Services. However, products and services ontologies often provide classes for tangible products as well as for types of services. The business function gr:ProvideService is to be used with such goods that are services, while gr:Maintain and gr:Repair can be used with goods for which only the class of product exists in the ontology, but not the respective type of service.\n\nExample: Car maintenance could be expressed both as \"provide the service car maintenance\" or \"maintain cars\"."
                },
                "labels": {
                    "IRI-based": "ProvideService",
                    "en": "Provide service (business function)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#ConstructionInstallation",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "This gr:BusinessFunction indicates that the gr:BusinessEntity offers (or seeks) the construction and/or installation of the specified gr:ProductOrService at the customer's location."
                },
                "labels": {
                    "IRI-based": "ConstructionInstallation",
                    "en": "Construction / installation (business function)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Repair",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "This gr:BusinessFunction indicates that the gr:BusinessEntity offers (or seeks) the evaluation of the chances for repairing, and, if positive, repair of the specified gr:ProductOrService. Repairing means actions that restore the originally intended function of a product that suffers from outage or malfunction."
                },
                "labels": {
                    "IRI-based": "Repair",
                    "en": "Repair (business function)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Sell",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "This gr:BusinessFunction indicates that the gr:BusinessEntity offers to permanently transfer all property rights on the specified gr:ProductOrService."
                },
                "labels": {
                    "IRI-based": "Sell",
                    "en": "Sell (business function)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Maintain",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "This gr:BusinessFunction indicates that the gr:BusinessEntity offers (or seeks) typical maintenance tasks for the specified gr:ProductOrService. Maintenance tasks are actions that undo or compensate for wear or other deterioriation caused by regular usage, in order to restore the originally intended function of the product, or to prevent outage or malfunction."
                },
                "labels": {
                    "IRI-based": "Maintain",
                    "en": "Maintain (business function)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Buy",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "This gr:BusinessFunction indicates that the gr:BusinessEntity is in general interested in purchasing the specified gr:ProductOrService.\nDEPRECATED. Use gr:seeks instead."
                },
                "labels": {
                    "IRI-based": "Buy",
                    "en": "Buy (business function, DEPRECATED)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#Dispose",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "This gr:BusinessFunction indicates that the gr:BusinessEntity offers (or seeks) the acceptance of the specified gr:ProductOrService for proper disposal, recycling, or any other kind of allowed usages, freeing the current owner from all rights and obligations of ownership."
                },
                "labels": {
                    "IRI-based": "Dispose",
                    "en": "Dispose (business function)"
                }
            }, {
                "iri": "http://purl.org/goodrelations/v1#LeaseOut",
                "baseIri": "http://purl.org/goodrelations/v1",
                "annotations": {
                    "isDefinedBy": [{
                        "identifier": "isDefinedBy",
                        "language": "undefined",
                        "value": "http://purl.org/goodrelations/v1",
                        "type": "iri"
                    }]
                },
                "comment": {
                    "en": "This gr:BusinessFunction indicates that the gr:BusinessEntity offers (or seeks) the temporary right to use the specified gr:ProductOrService."
                },
                "labels": {
                    "IRI-based": "LeaseOut",
                    "en": "Lease Out (business function)"
                }
            }],
            "subClasses": ["34"],
            "comment": {
                "en": "The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the gr:BusinessEntity on the gr:ProductOrService through the gr:Offering. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation.\n\nLicenses and other proprietary specifications of access rights are also instances of this class.\n\nExamples: A particular offering made by Miller Rentals Ltd. says that they (1) sell Volkswagen Golf convertibles, (2) lease out a particular Ford pick-up truck, and (3) dispose car wrecks of any make and model."
            },
            "id": "112"
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "202",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#int",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "220",
            "label": {
                "IRI-based": "int"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#float",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "65",
            "label": {
                "IRI-based": "float"
            }
        }, {
            "instances": 0,
            "union": ["4", "20", "5"],
            "attributes": ["union", "anonymous"],
            "id": "319"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "320",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#float",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "324",
            "label": {
                "IRI-based": "float"
            }
        }, {
            "instances": 0,
            "union": ["55", "7"],
            "attributes": ["union", "anonymous"],
            "id": "359"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "360",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "347",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "310",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "instances": 0,
            "union": ["4", "38", "20", "78", "55", "7", "33", "5"],
            "attributes": ["union", "anonymous"],
            "id": "201"
        }, {
            "iri": "http://purl.org/goodrelations/v1#UnitPriceSpecification",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "UnitPriceSpecification",
                "en": "Unit price specification"
            },
            "comment": {
                "en": "A unit price specification is a conceptual entity that specifies the price asked for a given gr:Offering by the respective gr:Business Entity. An offering may be linked to multiple unit price specifications that specify alternative prices for non-overlapping sets of conditions (e.g. quantities or sales regions) or with differing validity periods. \n\nA unit price specification is characterized by (1) the lower and upper limits and the unit of measurement of the eligible quantity, (2) by a monetary amount per unit of the product or service, and (3)  whether this prices includes local sales taxes, namely VAT.\n\t\nExample: The price, including VAT, for 1 kg of a given material is 5 Euros per kg for 0 - 5 kg and 4 Euros for quantities above 5 kg.\n\nThe eligible quantity interval for a given price is specified using the object property gr:hasEligibleQuantity, which points to an instance of gr:QuantitativeValue. The currency is specified using the gr:hasCurrency property, which points to an ISO 4217 currency code. The unit of measurement for the eligible quantity is specified using the gr:hasUnitOfMeasurement datatype property, which points to an UN/CEFACT Common Code (3 characters).\n\t\nIn most cases, the appropriate unit of measurement is the UN/CEFACT Common Code \"C62\" for \"Unit or piece\", since a gr:Offering is defined by the quantity and unit of measurement of all items included (e.g. \"1 kg of bananas plus a 2 kg of apples\"). As long at the offering consists of only one item, it is also possible to use an unit of measurement of choice for specifying the price per unit. For bundles, however, only  \"C62\" for \"Unit or piece\" is a valid unit of measurement.\n\nYou can assume that the price is given per unit or piece if there is no gr:hasUnitOfMeasurement property attached to the price.\n\t\nWhether VAT and sales taxes are included in this price is specified using the property gr:valueAddedTaxIncluded (xsd:boolean).\n\t\nThe price per unit of measurement is specified as a float value of the gr:hasCurrencyValue property. The currency is specified via the gr:hasCurrency datatype property. Whether the price includes VAT or not is indicated by the gr:valueAddedTaxIncluded datatype property.\n\nThe property priceType can be used to indicate that the price is a retail price recommendation only (i.e. a list price). \n\nIf the price can only be given as a range, use gr:hasMaxCurrencyValue and gr:hasMinCurrencyValue for the upper and lower bounds.\n\nImportant: When querying for the price, always use gr:hasMaxCurrencyValue and gr:hasMinCurrencyValue.\n\nNote 1: Due to the complexity of pricing scenarios in various industries, it may be necessary to create extensions of this fundamental model of price specifications. Such can be done easily by importing and refining the GoodRelations ontology.\n\nNote 2: For Google, attaching a gr:validThrough statement to a gr:UnitPriceSpecification is mandatory. \n"
            },
            "id": "81",
            "superClasses": ["2"]
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "327",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "instances": 0,
            "union": ["106", "41", "81", "7", "5", "107", "22", "20", "29", "108", "96", "63", "109", "110", "101", "38", "85", "111", "48", "25", "112", "10", "2", "15", "1", "51", "113"],
            "attributes": ["union", "anonymous"],
            "id": "367"
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "368",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "335",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#boolean",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "82",
            "label": {
                "IRI-based": "boolean"
            }
        }, {
            "instances": 0,
            "union": ["55", "7"],
            "attributes": ["union", "anonymous"],
            "id": "369"
        }, {
            "iri": "http://www.w3.org/2000/01/rdf-schema#Literal",
            "baseIri": "http://www.w3.org/2000/01/rdf-schema",
            "id": "370",
            "label": {
                "IRI-based": "Literal",
                "undefined": "Literal"
            }
        }, {
            "instances": 0,
            "union": ["4", "20", "85"],
            "attributes": ["union", "anonymous"],
            "id": "309"
        }, {
            "instances": 0,
            "union": ["20", "33"],
            "attributes": ["union", "anonymous"],
            "id": "329"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#dateTime",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "330",
            "label": {
                "IRI-based": "dateTime"
            }
        }, {
            "instances": 0,
            "union": ["41", "25", "81"],
            "attributes": ["union", "anonymous"],
            "id": "326"
        }, {
            "instances": 0,
            "union": ["4", "5"],
            "attributes": ["union", "anonymous"],
            "id": "361"
        }, {
            "instances": 0,
            "union": ["4", "5"],
            "attributes": ["union", "anonymous"],
            "id": "182"
        }, {
            "instances": 0,
            "union": ["55", "7"],
            "attributes": ["union", "anonymous"],
            "id": "376"
        }, {
            "instances": 0,
            "union": ["4", "55", "7", "5"],
            "attributes": ["union", "anonymous"],
            "id": "254"
        }, {
            "instances": 0,
            "union": ["38", "78", "55", "7"],
            "attributes": ["union", "anonymous"],
            "id": "266"
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#string",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "267",
            "label": {
                "IRI-based": "string"
            }
        }, {
            "iri": "http://www.w3.org/2001/XMLSchema#time",
            "baseIri": "http://www.w3.org/2001/XMLSchema",
            "id": "340",
            "label": {
                "IRI-based": "time"
            }
        }, {
            "iri": "http://purl.org/goodrelations/v1#Location",
            "equivalent": ["78", "332"],
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "Location",
                "en": "Location"
            },
            "comment": {
                "en": "A location is a point or area of interest from which a particular product or service is available, e.g. a store, a bus stop, a gas station, or a ticket booth. The difference to gr:BusinessEntity is that the gr:BusinessEntity is the legal entity (e.g. a person or corporation) making the offer, while gr:Location is the store, office, or place. A chain restaurant will e.g. have one legal entity but multiple restaurant locations. Locations are characterized by an address or geographical position and a set of opening hour specifications for various days of the week.\n\t\t\nExample: A rental car company may offer the Business Function Lease Out of cars from two locations, one in Fort Myers, Florida, and one in Boston, Massachussetts. Both stations are open 7:00 - 23:00 Mondays through Saturdays.\n\nNote: Typical address standards (vcard) and location data (geo, WGC84) should be attached to a gr:Location node. Since there already exist established vocabularies for this, the GoodRelations ontology does not provide respective attributes. Instead, the use of respective vocabularies is recommended. However, the gr:hasGlobalLocationNumber property is  provided for linking to public identifiers for business locations.\n\t\t\nCompatibility with schema.org: This class is equivalent to http://schema.org/Place."
            },
            "attributes": ["equivalent"],
            "id": "38"
        }, {
            "iri": "http://purl.org/goodrelations/v1#License",
            "baseIri": "http://purl.org/goodrelations/v1",
            "instances": 0,
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "License",
                "en": "License"
            },
            "comment": {
                "en": "A license is the specification of a bundle of rights that determines the type of activity or access offered by the gr:BusinessEntity on the gr:ProductOrService through the gr:Offering.\n\t\nLicenses can be standardized (e.g. LPGL, Creative Commons, ...), vendor-specific, or individually defined for a single offer or product. Whether there is a fee for obtaining the license is specified using the gr:UnitPriceSpecification attached to the gr:Offering. Use foaf:page for linking to a document containing the license, e.g. in PDF or HTML."
            },
            "id": "34",
            "superClasses": ["112"]
        }],
        "property": [{
            "id": "0",
            "type": "owl:disjointWith"
        }, {
            "id": "6",
            "type": "owl:disjointWith"
        }, {
            "id": "9",
            "type": "owl:disjointWith"
        }, {
            "id": "12",
            "type": "owl:disjointWith"
        }, {
            "id": "14",
            "type": "owl:disjointWith"
        }, {
            "id": "17",
            "type": "owl:disjointWith"
        }, {
            "id": "19",
            "type": "owl:disjointWith"
        }, {
            "id": "21",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "23",
            "type": "owl:objectProperty"
        }, {
            "id": "27",
            "type": "owl:disjointWith"
        }, {
            "id": "28",
            "type": "owl:datatypeProperty"
        }, {
            "id": "31",
            "type": "owl:disjointWith"
        }, {
            "id": "35",
            "type": "owl:disjointWith"
        }, {
            "id": "37",
            "type": "owl:disjointWith"
        }, {
            "id": "40",
            "type": "owl:disjointWith"
        }, {
            "id": "43",
            "type": "owl:disjointWith"
        }, {
            "id": "45",
            "type": "owl:disjointWith"
        }, {
            "id": "47",
            "type": "owl:objectProperty"
        }, {
            "id": "50",
            "type": "owl:disjointWith"
        }, {
            "id": "53",
            "type": "owl:disjointWith"
        }, {
            "id": "56",
            "type": "owl:datatypeProperty"
        }, {
            "id": "57",
            "type": "owl:disjointWith"
        }, {
            "id": "59",
            "type": "owl:disjointWith"
        }, {
            "id": "61",
            "type": "owl:disjointWith"
        }, {
            "id": "62",
            "type": "owl:datatypeProperty"
        }, {
            "id": "64",
            "type": "owl:datatypeProperty"
        }, {
            "id": "66",
            "type": "owl:objectProperty"
        }, {
            "id": "69",
            "type": "owl:disjointWith"
        }, {
            "id": "80",
            "type": "owl:datatypeProperty"
        }, {
            "id": "88",
            "type": "owl:objectProperty"
        }, {
            "id": "94",
            "type": "owl:objectProperty"
        }, {
            "id": "99",
            "type": "owl:objectProperty"
        }, {
            "id": "49",
            "type": "owl:objectProperty"
        }, {
            "id": "114",
            "type": "owl:objectProperty"
        }, {
            "id": "116",
            "type": "owl:objectProperty"
        }, {
            "id": "118",
            "type": "owl:objectProperty"
        }, {
            "id": "123",
            "type": "owl:objectProperty"
        }, {
            "id": "125",
            "type": "owl:objectProperty"
        }, {
            "id": "128",
            "type": "owl:datatypeProperty"
        }, {
            "id": "134",
            "type": "owl:objectProperty"
        }, {
            "id": "136",
            "type": "owl:datatypeProperty"
        }, {
            "id": "139",
            "type": "owl:datatypeProperty"
        }, {
            "id": "140",
            "type": "owl:datatypeProperty"
        }, {
            "id": "147",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "149",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "150",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "154",
            "type": "owl:objectProperty"
        }, {
            "id": "155",
            "type": "owl:objectProperty"
        }, {
            "id": "156",
            "type": "owl:objectProperty"
        }, {
            "id": "157",
            "type": "owl:objectProperty"
        }, {
            "id": "158",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "159",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "161",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "162",
            "type": "owl:datatypeProperty"
        }, {
            "id": "164",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "166",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "167",
            "type": "owl:disjointWith"
        }, {
            "id": "168",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "169",
            "type": "owl:disjointWith"
        }, {
            "id": "170",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "171",
            "type": "owl:objectProperty"
        }, {
            "id": "172",
            "type": "owl:disjointWith"
        }, {
            "id": "173",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "174",
            "type": "owl:disjointWith"
        }, {
            "id": "175",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "176",
            "type": "owl:disjointWith"
        }, {
            "id": "177",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "178",
            "type": "owl:disjointWith"
        }, {
            "id": "179",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "181",
            "type": "owl:objectProperty"
        }, {
            "id": "183",
            "type": "owl:datatypeProperty"
        }, {
            "id": "186",
            "type": "owl:objectProperty"
        }, {
            "id": "187",
            "type": "owl:objectProperty"
        }, {
            "id": "188",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "189",
            "type": "owl:disjointWith"
        }, {
            "id": "190",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "191",
            "type": "owl:disjointWith"
        }, {
            "id": "192",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "193",
            "type": "owl:disjointWith"
        }, {
            "id": "194",
            "type": "rdfs:SubClassOf"
        }, {
            "id": "195",
            "type": "owl:disjointWith"
        }, {
            "id": "196",
            "type": "owl:objectProperty"
        }, {
            "id": "197",
            "type": "owl:datatypeProperty"
        }, {
            "id": "199",
            "type": "owl:objectProperty"
        }, {
            "id": "200",
            "type": "owl:datatypeProperty"
        }, {
            "id": "203",
            "type": "owl:disjointWith"
        }, {
            "id": "204",
            "type": "owl:disjointWith"
        }, {
            "id": "205",
            "type": "owl:datatypeProperty"
        }, {
            "id": "206",
            "type": "owl:disjointWith"
        }, {
            "id": "207",
            "type": "owl:disjointWith"
        }, {
            "id": "208",
            "type": "owl:disjointWith"
        }, {
            "id": "209",
            "type": "owl:disjointWith"
        }, {
            "id": "210",
            "type": "owl:objectProperty"
        }, {
            "id": "212",
            "type": "owl:disjointWith"
        }, {
            "id": "213",
            "type": "owl:disjointWith"
        }, {
            "id": "214",
            "type": "owl:disjointWith"
        }, {
            "id": "215",
            "type": "owl:disjointWith"
        }, {
            "id": "216",
            "type": "owl:datatypeProperty"
        }, {
            "id": "217",
            "type": "owl:datatypeProperty"
        }, {
            "id": "219",
            "type": "owl:datatypeProperty"
        }, {
            "id": "221",
            "type": "owl:datatypeProperty"
        }, {
            "id": "222",
            "type": "owl:disjointWith"
        }, {
            "id": "223",
            "type": "owl:disjointWith"
        }, {
            "id": "224",
            "type": "owl:datatypeProperty"
        }, {
            "id": "225",
            "type": "owl:disjointWith"
        }, {
            "id": "226",
            "type": "owl:disjointWith"
        }, {
            "id": "227",
            "type": "owl:disjointWith"
        }, {
            "id": "228",
            "type": "owl:disjointWith"
        }, {
            "id": "229",
            "type": "owl:objectProperty"
        }, {
            "id": "230",
            "type": "owl:disjointWith"
        }, {
            "id": "231",
            "type": "owl:objectProperty"
        }, {
            "id": "232",
            "type": "owl:disjointWith"
        }, {
            "id": "233",
            "type": "owl:disjointWith"
        }, {
            "id": "234",
            "type": "owl:disjointWith"
        }, {
            "id": "235",
            "type": "owl:disjointWith"
        }, {
            "id": "236",
            "type": "owl:disjointWith"
        }, {
            "id": "237",
            "type": "owl:disjointWith"
        }, {
            "id": "238",
            "type": "owl:disjointWith"
        }, {
            "id": "239",
            "type": "owl:disjointWith"
        }, {
            "id": "240",
            "type": "owl:disjointWith"
        }, {
            "id": "241",
            "type": "owl:disjointWith"
        }, {
            "id": "242",
            "type": "owl:disjointWith"
        }, {
            "id": "243",
            "type": "owl:datatypeProperty"
        }, {
            "id": "244",
            "type": "owl:disjointWith"
        }, {
            "id": "245",
            "type": "owl:disjointWith"
        }, {
            "id": "246",
            "type": "owl:disjointWith"
        }, {
            "id": "247",
            "type": "owl:disjointWith"
        }, {
            "id": "248",
            "type": "owl:disjointWith"
        }, {
            "id": "249",
            "type": "owl:disjointWith"
        }, {
            "id": "250",
            "type": "owl:disjointWith"
        }, {
            "id": "251",
            "type": "owl:disjointWith"
        }, {
            "id": "252",
            "type": "owl:disjointWith"
        }, {
            "id": "253",
            "type": "owl:objectProperty"
        }, {
            "id": "255",
            "type": "owl:disjointWith"
        }, {
            "id": "256",
            "type": "owl:disjointWith"
        }, {
            "id": "257",
            "type": "owl:disjointWith"
        }, {
            "id": "258",
            "type": "owl:disjointWith"
        }, {
            "id": "259",
            "type": "owl:disjointWith"
        }, {
            "id": "260",
            "type": "owl:disjointWith"
        }, {
            "id": "261",
            "type": "owl:disjointWith"
        }, {
            "id": "262",
            "type": "owl:disjointWith"
        }, {
            "id": "263",
            "type": "owl:disjointWith"
        }, {
            "id": "264",
            "type": "owl:disjointWith"
        }, {
            "id": "265",
            "type": "owl:datatypeProperty"
        }, {
            "id": "268",
            "type": "owl:disjointWith"
        }, {
            "id": "269",
            "type": "owl:disjointWith"
        }, {
            "id": "211",
            "type": "owl:objectProperty"
        }, {
            "id": "270",
            "type": "owl:objectProperty"
        }, {
            "id": "271",
            "type": "owl:disjointWith"
        }, {
            "id": "272",
            "type": "owl:disjointWith"
        }, {
            "id": "273",
            "type": "owl:disjointWith"
        }, {
            "id": "274",
            "type": "owl:disjointWith"
        }, {
            "id": "275",
            "type": "owl:disjointWith"
        }, {
            "id": "276",
            "type": "owl:disjointWith"
        }, {
            "id": "277",
            "type": "owl:disjointWith"
        }, {
            "id": "278",
            "type": "owl:disjointWith"
        }, {
            "id": "279",
            "type": "owl:disjointWith"
        }, {
            "id": "280",
            "type": "owl:disjointWith"
        }, {
            "id": "281",
            "type": "owl:disjointWith"
        }, {
            "id": "282",
            "type": "owl:disjointWith"
        }, {
            "id": "283",
            "type": "owl:disjointWith"
        }, {
            "id": "284",
            "type": "owl:disjointWith"
        }, {
            "id": "285",
            "type": "owl:disjointWith"
        }, {
            "id": "286",
            "type": "owl:disjointWith"
        }, {
            "id": "287",
            "type": "owl:disjointWith"
        }, {
            "id": "288",
            "type": "owl:disjointWith"
        }, {
            "id": "289",
            "type": "owl:disjointWith"
        }, {
            "id": "290",
            "type": "owl:disjointWith"
        }, {
            "id": "291",
            "type": "owl:disjointWith"
        }, {
            "id": "292",
            "type": "owl:disjointWith"
        }, {
            "id": "293",
            "type": "owl:objectProperty"
        }, {
            "id": "294",
            "type": "owl:disjointWith"
        }, {
            "id": "295",
            "type": "owl:disjointWith"
        }, {
            "id": "296",
            "type": "owl:disjointWith"
        }, {
            "id": "297",
            "type": "owl:disjointWith"
        }, {
            "id": "298",
            "type": "owl:disjointWith"
        }, {
            "id": "299",
            "type": "owl:disjointWith"
        }, {
            "id": "300",
            "type": "owl:disjointWith"
        }, {
            "id": "301",
            "type": "owl:disjointWith"
        }, {
            "id": "302",
            "type": "owl:disjointWith"
        }, {
            "id": "303",
            "type": "owl:disjointWith"
        }, {
            "id": "304",
            "type": "owl:objectProperty"
        }, {
            "id": "305",
            "type": "owl:disjointWith"
        }, {
            "id": "306",
            "type": "owl:disjointWith"
        }, {
            "id": "307",
            "type": "owl:disjointWith"
        }, {
            "id": "308",
            "type": "owl:datatypeProperty"
        }, {
            "id": "311",
            "type": "owl:disjointWith"
        }, {
            "id": "312",
            "type": "owl:disjointWith"
        }, {
            "id": "313",
            "type": "owl:objectProperty"
        }, {
            "id": "314",
            "type": "owl:datatypeProperty"
        }, {
            "id": "315",
            "type": "owl:objectProperty"
        }, {
            "id": "316",
            "type": "owl:datatypeProperty"
        }, {
            "id": "317",
            "type": "owl:disjointWith"
        }, {
            "id": "318",
            "type": "owl:datatypeProperty"
        }, {
            "id": "321",
            "type": "owl:disjointWith"
        }, {
            "id": "322",
            "type": "owl:disjointWith"
        }, {
            "id": "323",
            "type": "owl:datatypeProperty"
        }, {
            "id": "325",
            "type": "owl:datatypeProperty"
        }, {
            "id": "328",
            "type": "owl:datatypeProperty"
        }, {
            "id": "331",
            "type": "owl:datatypeProperty"
        }, {
            "id": "333",
            "type": "owl:datatypeProperty"
        }, {
            "id": "334",
            "type": "owl:datatypeProperty"
        }, {
            "id": "336",
            "type": "owl:objectProperty"
        }, {
            "id": "337",
            "type": "owl:objectProperty"
        }, {
            "id": "338",
            "type": "owl:objectProperty"
        }, {
            "id": "339",
            "type": "owl:datatypeProperty"
        }, {
            "id": "341",
            "type": "owl:objectProperty"
        }, {
            "id": "342",
            "type": "owl:datatypeProperty"
        }, {
            "id": "67",
            "type": "owl:objectProperty"
        }, {
            "id": "345",
            "type": "owl:objectProperty"
        }, {
            "id": "346",
            "type": "owl:datatypeProperty"
        }, {
            "id": "348",
            "type": "owl:objectProperty"
        }, {
            "id": "349",
            "type": "owl:objectProperty"
        }, {
            "id": "350",
            "type": "owl:datatypeProperty"
        }, {
            "id": "351",
            "type": "owl:datatypeProperty"
        }, {
            "id": "356",
            "type": "owl:objectProperty"
        }, {
            "id": "357",
            "type": "owl:datatypeProperty"
        }, {
            "id": "358",
            "type": "owl:datatypeProperty"
        }, {
            "id": "26",
            "type": "owl:objectProperty"
        }, {
            "id": "362",
            "type": "owl:datatypeProperty"
        }, {
            "id": "363",
            "type": "owl:datatypeProperty"
        }, {
            "id": "364",
            "type": "owl:objectProperty"
        }, {
            "id": "89",
            "type": "owl:objectProperty"
        }, {
            "id": "365",
            "type": "owl:objectProperty"
        }, {
            "id": "366",
            "type": "owl:datatypeProperty"
        }, {
            "id": "371",
            "type": "owl:objectProperty"
        }, {
            "id": "372",
            "type": "owl:datatypeProperty"
        }, {
            "id": "373",
            "type": "owl:datatypeProperty"
        }, {
            "id": "374",
            "type": "owl:datatypeProperty"
        }, {
            "id": "375",
            "type": "owl:objectProperty"
        }, {
            "id": "377",
            "type": "owl:datatypeProperty"
        }, {
            "id": "378",
            "type": "owl:objectProperty"
        }, {
            "id": "379",
            "type": "owl:objectProperty"
        }, {
            "id": "380",
            "type": "owl:datatypeProperty"
        }, {
            "id": "381",
            "type": "owl:datatypeProperty"
        }, {
            "id": "382",
            "type": "owl:disjointWith"
        }, {
            "id": "383",
            "type": "owl:disjointWith"
        }, {
            "id": "384",
            "type": "owl:datatypeProperty"
        }, {
            "id": "385",
            "type": "owl:datatypeProperty"
        }, {
            "id": "386",
            "type": "owl:disjointWith"
        }, {
            "id": "387",
            "type": "owl:disjointWith"
        }, {
            "id": "388",
            "type": "owl:disjointWith"
        }, {
            "id": "389",
            "type": "owl:disjointWith"
        }, {
            "id": "390",
            "type": "owl:disjointWith"
        }, {
            "id": "391",
            "type": "owl:disjointWith"
        }, {
            "id": "392",
            "type": "owl:objectProperty"
        }, {
            "id": "393",
            "type": "owl:disjointWith"
        }, {
            "id": "394",
            "type": "owl:disjointWith"
        }, {
            "id": "395",
            "type": "owl:objectProperty"
        }, {
            "id": "396",
            "type": "owl:objectProperty"
        }],
        "propertyAttribute": [{
            "range": "2",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "0"
        }, {
            "range": "2",
            "domain": "7",
            "attributes": ["anonymous", "object"],
            "id": "6"
        }, {
            "range": "10",
            "domain": "2",
            "attributes": ["anonymous", "object"],
            "id": "9"
        }, {
            "range": "10",
            "domain": "7",
            "attributes": ["anonymous", "object"],
            "id": "12"
        }, {
            "range": "15",
            "domain": "10",
            "attributes": ["anonymous", "object"],
            "id": "14"
        }, {
            "range": "10",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "17"
        }, {
            "range": "10",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "19"
        }, {
            "range": "5",
            "domain": "22",
            "attributes": ["anonymous", "object"],
            "id": "21"
        }, {
            "iri": "http://purl.org/goodrelations/v1#depth",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "25",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "depth",
                "en": "depth (0..1)"
            },
            "superproperty": ["26"],
            "domain": "24",
            "comment": {
                "en": "The depth of the product.\nTypical unit code(s): CMT for centimeters, INH for inches"
            },
            "attributes": ["object"],
            "id": "23"
        }, {
            "range": "15",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "27"
        }, {
            "iri": "http://purl.org/goodrelations/v1#opens",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "30",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "opens",
                "en": "opens (1..1)"
            },
            "domain": "29",
            "comment": {
                "en": "The opening hour of the gr:Location on the given gr:DayOfWeek.\nIf no time-zone suffix is included, the time is given in the local time valid at the gr:Location.\n\nFor a time in GMT/UTC, simply add a \"Z\" following the time:\n\n09:30:10Z.\n\nAlternatively, you can specify an offset from the UTC time by adding a positive or negative time following the time:\n\n09:30:10-09:00\n\nor\n\n09:30:10+09:00.\n\nNote 1: Use 00:00:00 for the first second of the respective day and 23:59:59 for the last second of that day.\nNote 2: If a store opens at 17:00 on Saturdays and closes at 03:00:00 a.m. next morning, use 17:00:00 - 23:59:59 for Saturday and 00:00:00 - 03:00:00 for Sunday.\nNote 3: If the shop re-opens on the same day of the week or set of days of the week, you must create a second instance of gr:OpeningHoursSpecification."
            },
            "attributes": ["datatype"],
            "id": "28"
        }, {
            "range": "2",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "31"
        }, {
            "range": "15",
            "domain": "2",
            "attributes": ["anonymous", "object"],
            "id": "35"
        }, {
            "range": "10",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "37"
        }, {
            "range": "41",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "40"
        }, {
            "range": "41",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "43"
        }, {
            "range": "10",
            "domain": "41",
            "attributes": ["anonymous", "object"],
            "id": "45"
        }, {
            "iri": "http://purl.org/goodrelations/v1#successorOf",
            "inverse": "49",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "48",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "successorOf",
                "en": "successor of (0..*)"
            },
            "domain": "48",
            "comment": {
                "en": "This property indicates that the subject is a newer, often updated or improved variant of the gr:ProductOrServiceModel used as the object.\n\nExample: Golf III successorOf Golf II\n\nThis relation is transitive."
            },
            "attributes": ["object", "transitive"],
            "id": "47"
        }, {
            "range": "51",
            "domain": "41",
            "attributes": ["anonymous", "object"],
            "id": "50"
        }, {
            "range": "15",
            "domain": "41",
            "attributes": ["anonymous", "object"],
            "id": "53"
        }, {
            "iri": "http://schema.org/description",
            "baseIri": "http://schema.org",
            "range": "13",
            "label": {
                "IRI-based": "description"
            },
            "domain": "11",
            "attributes": ["datatype", "external"],
            "id": "56"
        }, {
            "range": "2",
            "domain": "41",
            "attributes": ["anonymous", "object"],
            "id": "57"
        }, {
            "range": "41",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "59"
        }, {
            "range": "7",
            "domain": "41",
            "attributes": ["anonymous", "object"],
            "id": "61"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasValueInteger",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "60",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasValueInteger",
                "en": "has value integer (0..1)"
            },
            "domain": "63",
            "comment": {
                "en": "This subproperty specifies that the upper and lower limit of the given gr:QuantitativeValueInteger are identical and have the respective integer value. It is a shortcut for such cases where a quantitative property is (at least practically) a single point value and not an interval."
            },
            "attributes": ["datatype"],
            "id": "62"
        }, {
            "iri": "http://purl.org/goodrelations/v1#amountOfThisGood",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "65",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "amountOfThisGood",
                "en": "amount of this good (1..1)"
            },
            "domain": "41",
            "comment": {
                "en": "This property specifies the quantity of the goods included in the gr:Offering via this gr:TypeAndQuantityNode. The quantity is given in the unit of measurement attached to the gr:TypeAndQuantityNode."
            },
            "attributes": ["datatype"],
            "id": "64"
        }, {
            "iri": "http://purl.org/goodrelations/v1#lesserOrEqual",
            "inverse": "67",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "51",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "lesserOrEqual",
                "en": "lesser or equal (0..*)"
            },
            "domain": "51",
            "comment": {
                "en": "This ordering relation for gr:QualitativeValue pairs indicates that the subject is lesser than or equal to the object."
            },
            "attributes": ["object", "transitive"],
            "id": "66"
        }, {
            "range": "7",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "69"
        }, {
            "iri": "http://purl.org/goodrelations/v1#isListPrice",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "82",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "isListPrice",
                "en": "is list price (DEPRECATED)"
            },
            "domain": "81",
            "comment": {
                "en": "This boolean attribute indicates whether a gr:UnitPriceSpecification is a list price (usually a vendor recommendation) or not. \"true\"  indicates it is a list price, \"false\" indicates it is not.\nDEPRECATED. Use the gr:priceType property instead."
            },
            "attributes": ["datatype", "deprecated"],
            "id": "80"
        }, {
            "iri": "http://xmlns.com/foaf/0.1/depiction",
            "equivalent": ["89"],
            "baseIri": "http://xmlns.com/foaf/0.1",
            "range": "11",
            "label": {
                "IRI-based": "depiction"
            },
            "domain": "11",
            "attributes": ["object", "external"],
            "id": "88"
        }, {
            "iri": "http://purl.org/goodrelations/v1#equal",
            "inverse": "94",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "51",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "equal",
                "en": "equal (0..*)"
            },
            "domain": "51",
            "comment": {
                "en": "This ordering relation for qualitative values indicates that the subject is equal to the object."
            },
            "attributes": ["object", "symmetric", "transitive"],
            "id": "94"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasInventoryLevel",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "101",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasInventoryLevel",
                "en": "has inventory level (0..1)"
            },
            "domain": "100",
            "comment": {
                "en": "This property specifies the current approximate inventory level for gr:SomeItems. The unit of measurement and the point value or interval are indicated using the attached gr:QuantitativeValueFloat instance.\n\nThis property can also be attached to a gr:Offering in cases where the included products are not modeled in more detail."
            },
            "attributes": ["object"],
            "id": "99"
        }, {
            "iri": "http://purl.org/goodrelations/v1#predecessorOf",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "48",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "predecessorOf",
                "en": "predecessor of (0..*)"
            },
            "domain": "48",
            "comment": {
                "en": "This property indicates that the subject is a previous, often discontinued variant of the gr:ProductOrServiceModel used as the object.\n\nExample: Golf III predecessorOf Golf IV\n\nThis relation is transitive."
            },
            "attributes": ["object", "transitive"],
            "id": "49"
        }, {
            "iri": "http://purl.org/goodrelations/v1#owns",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "85",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "owns",
                "en": "owns (0..*)"
            },
            "domain": "115",
            "comment": {
                "en": "This property indicates that a particular person or business owns a particular product. It can be used to expose the products in one's posession in order to empower recommender systems to suggest matching offers.\n\nNote that the product must be an instance of the class gr:Individual.\n\nThis property can also be safely applied to foaf:Agent instances."
            },
            "attributes": ["object"],
            "id": "114"
        }, {
            "iri": "http://purl.org/goodrelations/v1#addOn",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "20",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "addOn",
                "en": "add-on (0..*)"
            },
            "domain": "117",
            "comment": {
                "en": "This property points from a gr:Offering to additional offerings that can only be obtained in combination with the first offering. This can be used to model supplements and extensions that are available for a surcharge. Any gr:PriceSpecification attached to the secondary offering is to be understood as an additional charge."
            },
            "attributes": ["object"],
            "id": "116"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasWarrantyScope",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "109",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasWarrantyScope",
                "en": "has warranty scope (0..1)"
            },
            "domain": "1",
            "comment": {
                "en": "This states the gr:WarrantyScope of a given gr:WarrantyPromise."
            },
            "attributes": ["object"],
            "id": "118"
        }, {
            "iri": "http://purl.org/goodrelations/v1#eligibleCustomerTypes",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "108",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "eligibleCustomerTypes",
                "en": "eligible customer types (0..*)"
            },
            "domain": "124",
            "comment": {
                "en": "The types of customers (gr:BusinessEntityType) for which the given gr:Offering is valid."
            },
            "attributes": ["object"],
            "id": "123"
        }, {
            "iri": "http://purl.org/goodrelations/v1#availableAtOrFrom",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "38",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "availableAtOrFrom",
                "en": "available at or from (0..*)"
            },
            "domain": "126",
            "comment": {
                "en": "This states that a particular gr:Offering is available at or from the given gr:Location (e.g. shop or branch)."
            },
            "attributes": ["object"],
            "id": "125"
        }, {
            "iri": "http://purl.org/goodrelations/v1#durationOfWarrantyInMonths",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "72",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "durationOfWarrantyInMonths",
                "en": "duration of warranty in months (0..1)"
            },
            "domain": "1",
            "comment": {
                "en": "This property specifies the duration of the gr:WarrantyPromise in months."
            },
            "attributes": ["datatype"],
            "id": "128"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasOpeningHoursDayOfWeek",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "10",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasOpeningHoursDayOfWeek",
                "en": "has opening hours day of week (1..*)"
            },
            "domain": "29",
            "comment": {
                "en": "This specifies the gr:DayOfWeek to which the gr:OpeningHoursSpecification is related.\n\nNote: Use multiple instances of gr:OpeningHoursSpecification for specifying the opening hours for multiple days if the opening hours differ."
            },
            "attributes": ["object"],
            "id": "134"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasGTIN-8",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "138",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasGTIN-8",
                "en": "has GTIN-8 (0..*)"
            },
            "domain": "137",
            "comment": {
                "en": "The 8-digit Global Trade Item Number (GTIN-8) of the given gr:ProductOrService or gr:Offering, also known as EAN/UCC-8 (8-digit EAN)."
            },
            "attributes": ["datatype"],
            "id": "136"
        }, {
            "iri": "http://schema.org/name",
            "baseIri": "http://schema.org",
            "range": "18",
            "label": {
                "IRI-based": "name"
            },
            "domain": "11",
            "attributes": ["datatype", "external"],
            "id": "139"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasMaxCurrencyValue",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "75",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasMaxCurrencyValue",
                "en": "has max currency value (1..1)"
            },
            "domain": "2",
            "comment": {
                "en": "This property specifies the UPPER BOUND of the amount of money for a price RANGE per unit, shipping charges, or payment charges. The currency and other relevant details are attached to the respective gr:PriceSpecification etc.\nFor a gr:UnitPriceSpecification, this is the UPPER BOUND for the price for one unit or bundle (as specified in the unit of measurement of the unit price specification) of the respective gr:ProductOrService. For a gr:DeliveryChargeSpecification or a gr:PaymentChargeSpecification, it is the UPPER BOUND of the price per delivery or payment.\n\nUsing gr:hasCurrencyValue sets the upper and lower bounds to the same given value, i.e., x gr:hasCurrencyValue y implies x gr:hasMinCurrencyValue y, x gr:hasMaxCurrencyValue y."
            },
            "attributes": ["datatype"],
            "id": "140"
        }, {
            "range": "2",
            "domain": "107",
            "attributes": ["anonymous", "object"],
            "id": "147"
        }, {
            "range": "20",
            "domain": "33",
            "attributes": ["anonymous", "object"],
            "id": "149"
        }, {
            "range": "112",
            "domain": "34",
            "attributes": ["anonymous", "object"],
            "id": "150"
        }, {
            "iri": "http://purl.org/goodrelations/v1#eligibleTransactionVolume",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "2",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "eligibleTransactionVolume",
                "en": "eligible transaction volume (0..1)"
            },
            "domain": "132",
            "comment": {
                "en": "This property can be used to indicate the transaction volume, in a monetary unit, for which the gr:Offering or gr:PriceSpecification is valid. This is mostly used to specify a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases above a certain amount.\n\nThe object is a gr:PriceSpecification that uses the properties gr:hasMaxCurrencyValue and gr:hasMinCurrencyValue to indicate the lower and upper boundaries and gr:hasCurrency to indicate the currency using the ISO 4217 standard (3 characters)."
            },
            "attributes": ["object"],
            "id": "154"
        }, {
            "iri": "http://purl.org/goodrelations/v1#advanceBookingRequirement",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "63",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "advanceBookingRequirement",
                "en": "advance booking requirement (0..1)"
            },
            "domain": "152",
            "comment": {
                "en": "The minimal and maximal amount of time that is required between accepting the gr:Offering and the actual usage of the resource or service. This is mostly relevant for offers regarding hotel rooms, the rental of objects, or the provisioning of services. The duration is specified relatively to the beginning of the usage of the contracted object. It is represented by attaching an instance of the class gr:QuantitativeValueInteger. The lower and upper boundaries are specified using the properties gr:hasMinValueInteger and gr:hasMaxValueInteger to that instance. The unit of measurement is specified using the property gr:hasUnitOfMeasurement with a string holding a UN/CEFACT code suitable for durations, e.g. MON (months), DAY (days), HUR (hours), or MIN (minutes).\n\nThe difference to the gr:validFrom and gr:validThrough properties is that those specify the interval during which the gr:Offering is valid, while gr:advanceBookingRequirement specifies the acceptable relative amount of time between accepting the offer and the fulfilment or usage."
            },
            "attributes": ["object"],
            "id": "155"
        }, {
            "iri": "http://purl.org/goodrelations/v1#isVariantOf",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "48",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "isVariantOf",
                "en": "is variant of (0..1)"
            },
            "domain": "48",
            "comment": {
                "en": "This states that a particular gr:ProductOrServiceModel is a variant of another product or service model. It is pretty safe to infer that the variant inherits all gr:quantitativeProductOrServiceProperty, gr:qualitativeProductOrServiceProperty, and gr:datatypeProductOrServiceProperty values that are defined for the first gr:ProductOrServiceModel.\n\nExample:\nfoo:Red_Ford_T_Model gr:isVariantOf foo:Ford_T_Model"
            },
            "attributes": ["object"],
            "id": "156"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasWarrantyPromise",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "1",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasWarrantyPromise",
                "en": "has warranty promise (0..*)"
            },
            "domain": "153",
            "comment": {
                "en": "This specifies the gr:WarrantyPromise made by the gr:BusinessEntity for the given gr:Offering."
            },
            "attributes": ["object"],
            "id": "157"
        }, {
            "range": "4",
            "domain": "85",
            "attributes": ["anonymous", "object"],
            "id": "158"
        }, {
            "range": "4",
            "domain": "48",
            "attributes": ["anonymous", "object"],
            "id": "159"
        }, {
            "range": "15",
            "domain": "111",
            "attributes": ["anonymous", "object"],
            "id": "161"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasMinValue",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "103",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasMinValue",
                "en": "has min value (0..1)"
            },
            "domain": "25",
            "comment": {
                "en": "This property captures the lower limit of a gr:QuantitativeValue instance."
            },
            "attributes": ["datatype"],
            "id": "162"
        }, {
            "range": "2",
            "domain": "81",
            "attributes": ["anonymous", "object"],
            "id": "164"
        }, {
            "range": "2",
            "domain": "96",
            "attributes": ["anonymous", "object"],
            "id": "166"
        }, {
            "range": "1",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "167"
        }, {
            "range": "106",
            "domain": "113",
            "attributes": ["anonymous", "object"],
            "id": "168"
        }, {
            "range": "7",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "169"
        }, {
            "range": "25",
            "domain": "101",
            "attributes": ["anonymous", "object"],
            "id": "170"
        }, {
            "iri": "http://purl.org/goodrelations/v1#height",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "25",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "height",
                "en": "height (0..1)"
            },
            "superproperty": ["26"],
            "domain": "133",
            "comment": {
                "en": "The height of the product.\nTypical unit code(s): CMT for centimeters, INH for inches"
            },
            "attributes": ["object"],
            "id": "171"
        }, {
            "range": "7",
            "domain": "48",
            "attributes": ["anonymous", "object"],
            "id": "172"
        }, {
            "range": "25",
            "domain": "63",
            "attributes": ["anonymous", "object"],
            "id": "173"
        }, {
            "range": "22",
            "domain": "48",
            "attributes": ["anonymous", "object"],
            "id": "174"
        }, {
            "range": "7",
            "domain": "55",
            "attributes": ["anonymous", "object"],
            "id": "175"
        }, {
            "range": "63",
            "domain": "101",
            "attributes": ["anonymous", "object"],
            "id": "176"
        }, {
            "range": "7",
            "domain": "71",
            "attributes": ["anonymous", "object"],
            "id": "177"
        }, {
            "range": "7",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "178"
        }, {
            "range": "4",
            "domain": "22",
            "attributes": ["anonymous", "object"],
            "id": "179"
        }, {
            "iri": "http://purl.org/goodrelations/v1#isConsumableFor",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "5",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "isConsumableFor",
                "en": "is consumable for (0..*)"
            },
            "domain": "182",
            "comment": {
                "en": "This states that a particular gr:ProductOrService is a consumable for another product or service."
            },
            "attributes": ["object"],
            "id": "181"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasGTIN-14",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "185",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasGTIN-14",
                "en": "has GTIN-14 (0..*)"
            },
            "domain": "184",
            "comment": {
                "en": "The Global Trade Item Number (GTIN-14) of the given gr:ProductOrService or gr:Offering."
            },
            "attributes": ["datatype"],
            "id": "183"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasPriceSpecification",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "2",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasPriceSpecification",
                "en": "has price specification (0..*)"
            },
            "domain": "131",
            "comment": {
                "en": "This links a gr:Offering to a gr:PriceSpecification or specifications. There can be unit price specifications, payment charge specifications, and delivery charge specifications. For each type, multiple specifications for the same gr:Offering are possible, e.g. for different quantity ranges or for different currencies, or for different combinations of gr:DeliveryMethod and target destinations.\n\nRecommended retail prices etc. can be marked by the gr:priceType property of the gr:UnitPriceSpecification."
            },
            "attributes": ["object"],
            "id": "186"
        }, {
            "iri": "http://purl.org/goodrelations/v1#includesObject",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "41",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "includesObject",
                "en": "includes object (0..*)"
            },
            "domain": "180",
            "comment": {
                "en": "This object property links a gr:Offering to one or multiple gr:TypeAndQuantityNode or nodes that specify the components that are included in the respective offer."
            },
            "attributes": ["object"],
            "id": "187"
        }, {
            "range": "5",
            "domain": "85",
            "attributes": ["anonymous", "object"],
            "id": "188"
        }, {
            "range": "15",
            "domain": "7",
            "attributes": ["anonymous", "object"],
            "id": "189"
        }, {
            "range": "5",
            "domain": "48",
            "attributes": ["anonymous", "object"],
            "id": "190"
        }, {
            "range": "15",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "191"
        }, {
            "range": "5",
            "domain": "86",
            "attributes": ["anonymous", "object"],
            "id": "192"
        }, {
            "range": "51",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "193"
        }, {
            "range": "5",
            "domain": "87",
            "attributes": ["anonymous", "object"],
            "id": "194"
        }, {
            "range": "29",
            "domain": "110",
            "attributes": ["anonymous", "object"],
            "id": "195"
        }, {
            "iri": "http://purl.org/goodrelations/v1#isSimilarTo",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "5",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "isSimilarTo",
                "en": "is similar to (0..*)"
            },
            "domain": "143",
            "comment": {
                "en": "This states that a given gr:ProductOrService is similar to another product or service. Of course, this is a subjective statement; when interpreting it, the trust in the origin of the statement should be taken into account."
            },
            "attributes": ["object"],
            "id": "196"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasMinValueFloat",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "76",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasMinValueFloat",
                "en": "has min value float (1..1)"
            },
            "domain": "101",
            "comment": {
                "en": "This property captures the lower limit of a gr:QuantitativeValueFloat instance."
            },
            "attributes": ["datatype"],
            "id": "197"
        }, {
            "iri": "http://purl.org/goodrelations/v1#nonEqual",
            "inverse": "199",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "51",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "nonEqual",
                "en": "non equal (0..*)"
            },
            "domain": "51",
            "comment": {
                "en": "This ordering relation for gr:QualitativeValue pairs indicates that the subject is not equal to the object."
            },
            "attributes": ["object", "symmetric"],
            "id": "199"
        }, {
            "iri": "http://purl.org/goodrelations/v1#category",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "202",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "category",
                "en": "category (0..*)"
            },
            "domain": "201",
            "comment": {
                "en": "The name of a category to which this gr:ProductOrService, gr:Offering, gr:BusinessEntity, or gr:Location belongs.\n\t\nNote 1: For products, it is better to add an rdf:type statement referring to a GoodRelations-compliant ontology for vertical industries instead, but if you just have a short text label, gr:category is simpler.\nNote 2: You can use greater signs or slashes to informally indicate a category hierarchy, e.g. \"restaurants/asian_restaurants\" or \"cables > usb_cables\"\n"
            },
            "attributes": ["datatype"],
            "id": "200"
        }, {
            "range": "110",
            "domain": "2",
            "attributes": ["anonymous", "object"],
            "id": "203"
        }, {
            "range": "110",
            "domain": "41",
            "attributes": ["anonymous", "object"],
            "id": "204"
        }, {
            "iri": "http://purl.org/goodrelations/v1#validThrough",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "36",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "validThrough",
                "en": "valid through (0..1)"
            },
            "domain": "32",
            "comment": {
                "en": "This property specifies the end of the validity of the gr:Offering, gr:PriceSpecification, gr:License, or gr:OpeningHoursSpecification.\nA time-zone should be specified. For a time in GMT/UTC, simply add a \"Z\" following the time:\n\n2008-05-30T09:30:10Z.\n\nAlternatively, you can specify an offset from the UTC time by adding a positive or negative time following the time:\n\n2008-05-30T09:30:10-09:00\n\nor\n2008-05-30T09:30:10+09:00.\n\nNote 1: If multiple contradicting instances of a gr:Offering, gr:PriceSpecification, or gr:OpeningHoursSpecification exist, it is a good heuristics to assume that\n1. Information with validity information for the respective period of time ranks higher than information without validity information.\n2. Among conflicting nodes both having validity information, the one with the shorter validity span ranks higher.\nNote 2: For Google, attaching a gr:validThrough statement to a gr:UnitPriceSpecification is mandatory. \n"
            },
            "attributes": ["datatype"],
            "id": "205"
        }, {
            "range": "110",
            "domain": "5",
            "attributes": ["anonymous", "object"],
            "id": "206"
        }, {
            "range": "110",
            "domain": "106",
            "attributes": ["anonymous", "object"],
            "id": "207"
        }, {
            "range": "109",
            "domain": "110",
            "attributes": ["anonymous", "object"],
            "id": "208"
        }, {
            "range": "110",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "209"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasManufacturer",
            "equivalent": ["211"],
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "7",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasManufacturer",
                "en": "has manufacturer (0..1)"
            },
            "domain": "141",
            "comment": {
                "en": "This object property links a gr:ProductOrService to the gr:BusinessEntity that produces it. Mostly used with gr:ProductOrServiceModel."
            },
            "attributes": ["object"],
            "id": "210"
        }, {
            "range": "110",
            "domain": "112",
            "attributes": ["anonymous", "object"],
            "id": "212"
        }, {
            "range": "10",
            "domain": "110",
            "attributes": ["anonymous", "object"],
            "id": "213"
        }, {
            "range": "110",
            "domain": "48",
            "attributes": ["anonymous", "object"],
            "id": "214"
        }, {
            "range": "110",
            "domain": "108",
            "attributes": ["anonymous", "object"],
            "id": "215"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasCurrencyValue",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "83",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasCurrencyValue",
                "en": "has currency value (0..1)"
            },
            "domain": "2",
            "comment": {
                "en": "This property specifies the amount of money for a price per unit, shipping charges, or payment charges. The currency and other relevant details are attached to the respective gr:PriceSpecification etc.\n\nFor a gr:UnitPriceSpecification, this is the price for one unit or bundle (as specified in the unit of measurement of the unit price specification) of the respective gr:ProductOrService. For a gr:DeliveryChargeSpecification or a gr:PaymentChargeSpecification, it is the price per delivery or payment.\n\nGoodRelations also supports giving price information as intervals only. If this is needed, use gr:hasMaxCurrencyValue for the upper bound and gr:hasMinCurrencyValue for the lower bound. \n\nUsing gr:hasCurrencyValue sets the upper and lower bounds to the same given value, i.e., x gr:hasCurrencyValue y implies x gr:hasMinCurrencyValue y, x gr:hasMaxCurrencyValue y."
            },
            "attributes": ["datatype"],
            "id": "216"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasValueFloat",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "218",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasValueFloat",
                "en": "has value float (0..1)"
            },
            "domain": "101",
            "comment": {
                "en": "This subproperty specifies that the upper and lower limit of the given gr:QuantitativeValueFloat are identical and have the respective float value. It is a shortcut for such cases where a quantitative property is (at least practically) a single point value and not an interval."
            },
            "attributes": ["datatype"],
            "id": "217"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasMaxValueInteger",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "220",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasMaxValueInteger",
                "en": "has max value integer (1..1)"
            },
            "domain": "63",
            "comment": {
                "en": "This property captures the upper limit of a gr:QuantitativeValueInteger instance."
            },
            "attributes": ["datatype"],
            "id": "219"
        }, {
            "iri": "http://purl.org/goodrelations/v1#billingIncrement",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "104",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "billingIncrement",
                "en": "billing increment (0..1)"
            },
            "domain": "81",
            "comment": {
                "en": "This property specifies the minimal quantity and rounding increment that will be the basis for the billing. \nThe unit of measurement is specified by the UN/CEFACT code attached to the gr:UnitPriceSpecification via the gr:hasUnitOfMeasurement property.\n\nExamples: \n- The price for gasoline is 4 USD per gallon at the pump, but you will be charged in units of 0.1 gallons.\n- The price for legal consulting is 100 USD per hour, but you will be charged in units of 15 minutes.\n\nThis property makes sense only for instances of gr:Offering that include not more than one type of good or service."
            },
            "attributes": ["datatype"],
            "id": "221"
        }, {
            "range": "107",
            "domain": "96",
            "attributes": ["anonymous", "object"],
            "id": "222"
        }, {
            "range": "29",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "223"
        }, {
            "iri": "http://purl.org/goodrelations/v1#validFrom",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "74",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "validFrom",
                "en": "valid from (0..1)"
            },
            "domain": "73",
            "comment": {
                "en": "This property specifies the beginning of the validity of the gr:Offering, gr:PriceSpecification, gr:License, or gr:OpeningHoursSpecification.\nA time-zone should be specified. For a time in GMT/UTC, simply add a \"Z\" following the time:\n\n2008-05-30T09:30:10Z.\n\nAlternatively, you can specify an offset from the UTC time by adding a positive or negative time following the time:\n\n2008-05-30T09:30:10-09:00\n\nor\n\n2008-05-30T09:30:10+09:00.\n\nNote: If multiple contradicting instances of a gr:Offering, gr:PriceSpecification, or gr:OpeningHoursSpecification exist, it is a good heuristics to assume that\n1. Information with validity information for the respective period of time ranks higher than information without validity information.\n2. Among conflicting nodes both having validity information, the one with the shorter validity span ranks higher."
            },
            "attributes": ["datatype"],
            "id": "224"
        }, {
            "range": "15",
            "domain": "110",
            "attributes": ["anonymous", "object"],
            "id": "225"
        }, {
            "range": "10",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "226"
        }, {
            "range": "25",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "227"
        }, {
            "range": "15",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "228"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasOpeningHoursSpecification",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "29",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasOpeningHoursSpecification",
                "en": "has opening hours specification (0..*)"
            },
            "domain": "145",
            "comment": {
                "en": "This property links a gr:Location to a gr:OpeningHoursSpecification."
            },
            "attributes": ["object"],
            "id": "229"
        }, {
            "range": "110",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "230"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasPrevious",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "10",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasPrevious",
                "en": "has previous (0..1)"
            },
            "domain": "10",
            "comment": {
                "en": "This ordering relation for gr:DayOfWeek indicates that the subject is directly preceeded by the object.\n\nExample: Tuesday hasPrevious Monday\n\nSince days of the week are a cycle, this property is not transitive."
            },
            "attributes": ["object"],
            "id": "231"
        }, {
            "range": "2",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "232"
        }, {
            "range": "51",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "233"
        }, {
            "range": "112",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "234"
        }, {
            "range": "106",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "235"
        }, {
            "range": "10",
            "domain": "106",
            "attributes": ["anonymous", "object"],
            "id": "236"
        }, {
            "range": "7",
            "domain": "106",
            "attributes": ["anonymous", "object"],
            "id": "237"
        }, {
            "range": "108",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "238"
        }, {
            "range": "108",
            "domain": "41",
            "attributes": ["anonymous", "object"],
            "id": "239"
        }, {
            "range": "2",
            "domain": "106",
            "attributes": ["anonymous", "object"],
            "id": "240"
        }, {
            "range": "2",
            "domain": "108",
            "attributes": ["anonymous", "object"],
            "id": "241"
        }, {
            "range": "29",
            "domain": "108",
            "attributes": ["anonymous", "object"],
            "id": "242"
        }, {
            "iri": "http://purl.org/goodrelations/v1#name",
            "equivalent": ["139"],
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "90",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "name",
                "en": "name (0..1)"
            },
            "domain": "105",
            "comment": {
                "en": "A short text describing the respective resource.\n\nThis property is semantically equivalent to dcterms:title and rdfs:label and just meant as a handy shortcut for marking up data."
            },
            "attributes": ["datatype"],
            "id": "243"
        }, {
            "range": "108",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "244"
        }, {
            "range": "112",
            "domain": "108",
            "attributes": ["anonymous", "object"],
            "id": "245"
        }, {
            "range": "108",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "246"
        }, {
            "range": "109",
            "domain": "108",
            "attributes": ["anonymous", "object"],
            "id": "247"
        }, {
            "range": "108",
            "domain": "7",
            "attributes": ["anonymous", "object"],
            "id": "248"
        }, {
            "range": "5",
            "domain": "108",
            "attributes": ["anonymous", "object"],
            "id": "249"
        }, {
            "range": "15",
            "domain": "108",
            "attributes": ["anonymous", "object"],
            "id": "250"
        }, {
            "range": "22",
            "domain": "85",
            "attributes": ["anonymous", "object"],
            "id": "251"
        }, {
            "range": "108",
            "domain": "106",
            "attributes": ["anonymous", "object"],
            "id": "252"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasBrand",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "110",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasBrand",
                "en": "has brand (0..*)"
            },
            "domain": "254",
            "comment": {
                "en": "This specifies the brand or brands (gr:Brand) associated with a gr:ProductOrService, or the brand or brands maintained by a gr:BusinessEntity."
            },
            "attributes": ["object"],
            "id": "253"
        }, {
            "range": "10",
            "domain": "108",
            "attributes": ["anonymous", "object"],
            "id": "255"
        }, {
            "range": "110",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "256"
        }, {
            "range": "110",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "257"
        }, {
            "range": "48",
            "domain": "85",
            "attributes": ["anonymous", "object"],
            "id": "258"
        }, {
            "range": "110",
            "domain": "7",
            "attributes": ["anonymous", "object"],
            "id": "259"
        }, {
            "range": "112",
            "domain": "2",
            "attributes": ["anonymous", "object"],
            "id": "260"
        }, {
            "range": "112",
            "domain": "5",
            "attributes": ["anonymous", "object"],
            "id": "261"
        }, {
            "range": "112",
            "domain": "41",
            "attributes": ["anonymous", "object"],
            "id": "262"
        }, {
            "range": "112",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "263"
        }, {
            "range": "29",
            "domain": "41",
            "attributes": ["anonymous", "object"],
            "id": "264"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasGlobalLocationNumber",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "267",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasGlobalLocationNumber",
                "en": "has Global Location Number (0..1)"
            },
            "domain": "266",
            "comment": {
                "en": "The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective gr:BusinessEntity or gr:Location.\nThe Global Location Number is a thirteen-digit number used to identify parties and physical locations."
            },
            "attributes": ["datatype"],
            "id": "265"
        }, {
            "range": "29",
            "domain": "5",
            "attributes": ["anonymous", "object"],
            "id": "268"
        }, {
            "range": "109",
            "domain": "29",
            "attributes": ["anonymous", "object"],
            "id": "269"
        }, {
            "iri": "http://schema.org/manufacturer",
            "baseIri": "http://schema.org",
            "range": "11",
            "label": {
                "IRI-based": "manufacturer"
            },
            "domain": "11",
            "attributes": ["object", "external"],
            "id": "211"
        }, {
            "iri": "http://purl.org/goodrelations/v1#seeks",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "20",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "seeks",
                "en": "seeks (0..*)"
            },
            "domain": "160",
            "comment": {
                "en": "This links a gr:BusinessEntity to gr:Offering nodes that describe what the business entity is interested in (i.e., the buy side). If you want to express interest in offering something, use gr:offers instead. Note that this substitutes the former gr:BusinessFunction gr:Buy, which is now deprecated."
            },
            "attributes": ["object"],
            "id": "270"
        }, {
            "range": "29",
            "domain": "2",
            "attributes": ["anonymous", "object"],
            "id": "271"
        }, {
            "range": "29",
            "domain": "112",
            "attributes": ["anonymous", "object"],
            "id": "272"
        }, {
            "range": "29",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "273"
        }, {
            "range": "29",
            "domain": "7",
            "attributes": ["anonymous", "object"],
            "id": "274"
        }, {
            "range": "29",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "275"
        }, {
            "range": "29",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "276"
        }, {
            "range": "15",
            "domain": "29",
            "attributes": ["anonymous", "object"],
            "id": "277"
        }, {
            "range": "29",
            "domain": "10",
            "attributes": ["anonymous", "object"],
            "id": "278"
        }, {
            "range": "106",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "279"
        }, {
            "range": "15",
            "domain": "106",
            "attributes": ["anonymous", "object"],
            "id": "280"
        }, {
            "range": "112",
            "domain": "106",
            "attributes": ["anonymous", "object"],
            "id": "281"
        }, {
            "range": "109",
            "domain": "106",
            "attributes": ["anonymous", "object"],
            "id": "282"
        }, {
            "range": "106",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "283"
        }, {
            "range": "41",
            "domain": "106",
            "attributes": ["anonymous", "object"],
            "id": "284"
        }, {
            "range": "29",
            "domain": "106",
            "attributes": ["anonymous", "object"],
            "id": "285"
        }, {
            "range": "10",
            "domain": "5",
            "attributes": ["anonymous", "object"],
            "id": "286"
        }, {
            "range": "5",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "287"
        }, {
            "range": "38",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "288"
        }, {
            "range": "15",
            "domain": "5",
            "attributes": ["anonymous", "object"],
            "id": "289"
        }, {
            "range": "5",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "290"
        }, {
            "range": "5",
            "domain": "2",
            "attributes": ["anonymous", "object"],
            "id": "291"
        }, {
            "range": "5",
            "domain": "41",
            "attributes": ["anonymous", "object"],
            "id": "292"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasEligibleQuantity",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "25",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasEligibleQuantity",
                "en": "has eligible quantity (0..1)"
            },
            "domain": "127",
            "comment": {
                "en": "This specifies the interval and unit of measurement of ordering quantities for which the gr:Offering or gr:PriceSpecification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.\nNote that if an offering is a bundle, i.e. it consists of more than one unit of a single type of good, or if the unit of measurement for the good is different from unit (Common Code C62), then gr:hasEligibleQuantity refers to units of this bundle. In other words, \"C62\" for \"Units or pieces\" is usually the appropriate unit of measurement."
            },
            "attributes": ["object"],
            "id": "293"
        }, {
            "range": "109",
            "domain": "5",
            "attributes": ["anonymous", "object"],
            "id": "294"
        }, {
            "range": "109",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "295"
        }, {
            "range": "109",
            "domain": "41",
            "attributes": ["anonymous", "object"],
            "id": "296"
        }, {
            "range": "109",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "297"
        }, {
            "range": "109",
            "domain": "2",
            "attributes": ["anonymous", "object"],
            "id": "298"
        }, {
            "range": "109",
            "domain": "10",
            "attributes": ["anonymous", "object"],
            "id": "299"
        }, {
            "range": "15",
            "domain": "109",
            "attributes": ["anonymous", "object"],
            "id": "300"
        }, {
            "range": "109",
            "domain": "7",
            "attributes": ["anonymous", "object"],
            "id": "301"
        }, {
            "range": "109",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "302"
        }, {
            "range": "10",
            "domain": "112",
            "attributes": ["anonymous", "object"],
            "id": "303"
        }, {
            "iri": "http://purl.org/goodrelations/v1#weight",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "25",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "weight",
                "en": "weight (0..1)"
            },
            "superproperty": ["26"],
            "domain": "142",
            "comment": {
                "en": "The weight of the gr:ProductOrService.\nTypical unit code(s): GRM for gram, KGM for kilogram, LBR for pound"
            },
            "attributes": ["object"],
            "id": "304"
        }, {
            "range": "109",
            "domain": "112",
            "attributes": ["anonymous", "object"],
            "id": "305"
        }, {
            "range": "15",
            "domain": "112",
            "attributes": ["anonymous", "object"],
            "id": "306"
        }, {
            "range": "112",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "307"
        }, {
            "iri": "http://purl.org/goodrelations/v1#serialNumber",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "310",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "serialNumber",
                "en": "serial number (0..*)"
            },
            "domain": "309",
            "comment": {
                "en": "The serial number or any alphanumeric identifier of a particular product. Note that serial number are unique only for the same brand or the same model, so you cannot infer from two occurrences of the same serial number that the objects to which they are attached are identical.\n\nThis property can also be attached to a gr:Offering in cases where the included products are not modeled in more detail."
            },
            "attributes": ["datatype"],
            "id": "308"
        }, {
            "range": "112",
            "domain": "7",
            "attributes": ["anonymous", "object"],
            "id": "311"
        }, {
            "range": "112",
            "domain": "1",
            "attributes": ["anonymous", "object"],
            "id": "312"
        }, {
            "iri": "http://purl.org/goodrelations/v1#width",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "25",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "width",
                "en": "width (0..1)"
            },
            "superproperty": ["26"],
            "domain": "135",
            "comment": {
                "en": "The width of the gr:ProductOrService.\nTypical unit code(s): CMT for centimeters, INH for inches"
            },
            "attributes": ["object"],
            "id": "313"
        }, {
            "iri": "http://purl.org/goodrelations/v1#datatypeProductOrServiceProperty",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "8",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "datatypeProductOrServiceProperty",
                "en": "datatype product or service property (0..*)"
            },
            "domain": "3",
            "comment": {
                "en": "This property is the super property for all pure datatype properties that can be used to describe a gr:ProductOrService.\n\nIn products and services ontologies, only such properties that are no quantitative properties and that have no predefined gr:QualitativeValue instances are subproperties of this property. In practice, this refers to a few integer properties for which the integer value represents qualitative aspects, for string datatypes (as long as no predefined values exist), for boolean datatype properties, and for dates and times."
            },
            "attributes": ["datatype"],
            "id": "314"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasNext",
            "inverse": "231",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "10",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasNext",
                "en": "has next (0..1)"
            },
            "domain": "10",
            "comment": {
                "en": "This ordering relation for gr:DayOfWeek indicates that the subject is directly followed by the object.\n\nExample: Monday hasNext Tuesday\n\nSince days of the week are a cycle, this property is not transitive."
            },
            "attributes": ["object"],
            "id": "315"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasMPN",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "68",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasMPN",
                "en": "has MPN (0..*)"
            },
            "domain": "84",
            "comment": {
                "en": "The Manufacturer Part Number or MPN is a unique identifier for a product, service, or bundle from the perspective of a particular manufacturer. MPNs can be assigned to products or product datasheets, or bundles. Accordingly, the domain of this property is the union of gr:ProductOrService (the common superclass of goods and datasheets), and gr:Offering.\n\nImportant: Be careful when assuming two products or services instances or offering instances to be identical based on the MPN. Since MPNs are unique only for the same gr:BusinessEntity, this holds only when the two MPN values refer to the same gr:BusinessEntity. Such can be done by taking into account the provenance of the data. \n\nUsually, the properties gr:hasEAN_UCC-13 and gr:hasGTIN-14 are much more reliable identifiers, because they are globally unique.\n\nSee also http://en.wikipedia.org/wiki/Part_number"
            },
            "attributes": ["datatype"],
            "id": "316"
        }, {
            "range": "2",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "317"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasEAN_UCC-13",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "320",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasEAN_UCC-13",
                "en": "has EAN/UCC-13 (0..*)"
            },
            "domain": "319",
            "comment": {
                "en": "The EAN·UCC-13 code of the given gr:ProductOrService or gr:Offering. This code is now officially called GTIN-13 (Global Trade Identifier Number) or EAN·UCC-13. Former 12-digit UPC codes can be converted into EAN·UCC-13 code by simply adding a preceeding zero.\n\nNote 1: When using this property for searching by 12-digit UPC codes, you must add a preceeding zero digit.\nNote 2: As of January 1, 2007, the former ISBN numbers for books etc. have been integrated into the EAN·UCC-13 code. For each old ISBN-10 code, there exists a proper translation into EAN·UCC-13 by adding \"978\" or \"979\" as prefix. Since the old ISBN-10 is now deprecated, GoodRelations does not provide a property for ISBNs."
            },
            "attributes": ["datatype"],
            "id": "318"
        }, {
            "range": "15",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "321"
        }, {
            "range": "1",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "322"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasMaxValueFloat",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "324",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasMaxValueFloat",
                "en": "has max value float (1..1)"
            },
            "domain": "101",
            "comment": {
                "en": "This property captures the upper limit of a gr:QuantitativeValueFloat instance."
            },
            "attributes": ["datatype"],
            "id": "323"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasUnitOfMeasurement",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "327",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasUnitOfMeasurement",
                "en": "has unit of measurement (1..1)"
            },
            "domain": "326",
            "comment": {
                "en": "The unit of measurement for a gr:QuantitativeValue, a gr:UnitPriceSpecification, or a gr:TypeAndQuantityNode given using the UN/CEFACT Common Code (3 characters)."
            },
            "attributes": ["datatype"],
            "id": "325"
        }, {
            "iri": "http://purl.org/goodrelations/v1#availabilityEnds",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "330",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "availabilityEnds",
                "en": "availability ends (0..1)"
            },
            "domain": "329",
            "comment": {
                "en": "This property specifies the end of the availability of the gr:ProductOrService included in the gr:Offering.\nThe difference to the properties gr:validFrom and gr:validThrough is that those specify the period of time during which the offer is valid and can be accepted.\n\nExample: I offer to lease my boat for the period of August 1 - August 31, 2010, but you must accept by offer no later than July 15.\n\nA time-zone should be specified. For a time in GMT/UTC, simply add a \"Z\" following the time:\n\n2008-05-30T09:30:10Z.\n\nAlternatively, you can specify an offset from the UTC time by adding a positive or negative time following the time:\n\n2008-05-30T09:30:10-09:00\n\nor\n\n2008-05-30T09:30:10+09:00.\n\nNote: There is another property gr:availableAtOrFrom, which is used to indicate the gr:Location (e.g. store or shop) from which the goods would be available."
            },
            "attributes": ["datatype"],
            "id": "328"
        }, {
            "iri": "http://purl.org/goodrelations/v1#vatID",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "39",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "vatID",
                "en": "VAT ID (0..1)"
            },
            "domain": "70",
            "comment": {
                "en": "The Value-added Tax ID of the gr:BusinessEntity. See http://en.wikipedia.org/wiki/Value_added_tax_identification_number for details."
            },
            "attributes": ["datatype"],
            "id": "331"
        }, {
            "iri": "http://schema.org/productID",
            "baseIri": "http://schema.org",
            "range": "16",
            "label": {
                "IRI-based": "productID"
            },
            "domain": "11",
            "attributes": ["datatype", "external"],
            "id": "333"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasValue",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "335",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasValue",
                "en": "has value (0..1)"
            },
            "domain": "25",
            "comment": {
                "en": "This subproperty specifies that the upper and lower limit of the given gr:QuantitativeValue are identical and have the respective value. It is a shortcut for such cases where a quantitative property is (at least practically) a single point value and not an interval."
            },
            "attributes": ["datatype"],
            "id": "334"
        }, {
            "iri": "http://purl.org/goodrelations/v1#greater",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "51",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "greater",
                "en": "greater (0..*)"
            },
            "domain": "51",
            "comment": {
                "en": "This ordering relation for qualitative values indicates that the subject is greater than the object."
            },
            "attributes": ["object", "transitive"],
            "id": "336"
        }, {
            "iri": "http://purl.org/goodrelations/v1#typeOfGood",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "151",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "typeOfGood",
                "en": "type of good (1..1)"
            },
            "domain": "41",
            "comment": {
                "en": "This specifies the gr:ProductOrService that the gr:TypeAndQuantityNode is referring to."
            },
            "attributes": ["object"],
            "id": "337"
        }, {
            "iri": "http://purl.org/goodrelations/v1#deliveryLeadTime",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "63",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "deliveryLeadTime",
                "en": "delivery lead time (0..1)"
            },
            "domain": "129",
            "comment": {
                "en": "This property can be used to indicate the promised delay between the receipt of the order and the goods leaving the warehouse.\n\nThe duration is specified by attaching an instance of gr:QuantitativeValueInteger. The lower and upper boundaries are specified using the properties gr:hasMinValueInteger and gr:hasMaxValueInteger to that instance. A point value can be modeled with the gr:hasValueInteger property. The unit of measurement is specified using the property gr:hasUnitOfMeasurement with a string holding a UN/CEFACT code suitable for durations, e.g. MON (months), DAY (days), HUR (hours), or MIN (minutes)."
            },
            "attributes": ["object"],
            "id": "338"
        }, {
            "iri": "http://purl.org/goodrelations/v1#closes",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "340",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "closes",
                "en": "closes (1..1)"
            },
            "domain": "29",
            "comment": {
                "en": "The closing  hour of the gr:Location on the given gr:DayOfWeek.\nIf no time-zone suffix is included, the time is given in the local time valid at the gr:Location.\n\nFor a time in GMT/UTC, simply add a \"Z\" following the time:\n\n09:30:10Z.\n\nAlternatively, you can specify an offset from the UTC time by adding a positive or negative time following the time:\n\n09:30:10-09:00\n\n09:30:10+09:00.\n\nNote 1: Use 00:00:00 for the first second of the respective day and 23:59:59 for the last second of that day.\nNote 2: If a store opens at 17:00 on Saturdays and closes at 03:00:00 a.m. next morning, use two instances of this class, one with 17:00:00 - 23:59:59 for Saturday and another one with 00:00:00 - 03:00:00 for Sunday.\nNote 3: If the shop re-opens on the same day of the week or set of days of the week, you must create a second instance of gr:OpeningHoursSpecification."
            },
            "attributes": ["datatype"],
            "id": "339"
        }, {
            "iri": "http://purl.org/goodrelations/v1#includes",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "5",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "includes",
                "en": "includes (0..1)"
            },
            "domain": "20",
            "comment": {
                "en": "This object property is a shortcut for the original gr:includesObject property for the common case of having exactly one single gr:ProductOrService instance included in an Offering. \n\nWhen linking to an instance of gr:SomeItems or gr:Individual, it is equivalent to using a gr:TypeAndQuantityNode with gr:hasUnitOfMeasurement=\"C62\"^^xsd:string and gr:amountOfThisGood=\"1.0\"^^xsd:float for that good.\n\nWhen linking to a gr:ProductOrServiceModel, it is equivalent to \n1. defining an blank node for a gr:SomeItems\n2. linking that blank node via gr:hasMakeAndModel to the gr:ProductOrServiceModel, and\n3. linking from the gr:Offering to that blank node using another blank node of type gr:TypeAndQuantityNode with gr:hasUnitOfMeasurement=\"C62\"^^xsd:string and gr:amountOfThisGood=\"1.0\"^^xsd:float for that good."
            },
            "attributes": ["object"],
            "id": "341"
        }, {
            "iri": "http://purl.org/goodrelations/v1#taxID",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "344",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "taxID",
                "en": "Tax ID (0..1)"
            },
            "domain": "343",
            "comment": {
                "en": "The Tax / Fiscal ID of the gr:BusinessEntity, e.g. the TIN in the US or the CIF/NIF in Spain. It is usually assigned by the country of residence"
            },
            "attributes": ["datatype"],
            "id": "342"
        }, {
            "iri": "http://purl.org/goodrelations/v1#greaterOrEqual",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "51",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "greaterOrEqual",
                "en": "greater or equal (0..*)"
            },
            "domain": "51",
            "comment": {
                "en": "This ordering relation for qualitative values indicates that the subject is greater than or equal to the object."
            },
            "attributes": ["object", "transitive"],
            "id": "67"
        }, {
            "iri": "http://purl.org/goodrelations/v1#appliesToPaymentMethod",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "106",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "appliesToPaymentMethod",
                "en": "applies to payment method (1..*)"
            },
            "domain": "107",
            "comment": {
                "en": "This property specifies the gr:PaymentMethod to which the gr:PaymentChargeSpecification applies."
            },
            "attributes": ["object"],
            "id": "345"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasCurrency",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "347",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasCurrency",
                "en": "has currency (1..1)"
            },
            "domain": "2",
            "comment": {
                "en": "The currency for all prices in the gr:PriceSpecification given using the ISO 4217 standard (3 characters)."
            },
            "attributes": ["datatype"],
            "id": "346"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasPOS",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "38",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasPOS",
                "en": "has POS (0..*)"
            },
            "domain": "165",
            "comment": {
                "en": "This property states that the respective gr:Location is a point of sale for the respective gr:BusinessEntity. It allows linking those two types of entities without the need for a particular gr:Offering."
            },
            "attributes": ["object"],
            "id": "348"
        }, {
            "iri": "http://purl.org/goodrelations/v1#qualitativeProductOrServiceProperty",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "51",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "qualitativeProductOrServiceProperty",
                "en": "qualitative product or service property (0..*)"
            },
            "domain": "146",
            "comment": {
                "en": "This is the super property of all qualitative properties for products and services. All properties in product or service ontologies for which gr:QualitativeValue instances are specified are subproperties of this property."
            },
            "attributes": ["object"],
            "id": "349"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasMaxValue",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "93",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasMaxValue",
                "en": "has max value (0..1)"
            },
            "domain": "25",
            "comment": {
                "en": "This property captures the upper limit of a gr:QuantitativeValue instance."
            },
            "attributes": ["datatype"],
            "id": "350"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasStockKeepingUnit",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "52",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasStockKeepingUnit",
                "en": "has Stock Keeping Unit (0..*)"
            },
            "domain": "46",
            "comment": {
                "en": "The Stock Keeping Unit, or SKU is a unique identifier for a product, service, or bundle from the perspective of a particular supplier, i.e. SKUs are mostly assigned and serialized at the merchant level. \nExamples of SKUs are the ordering or parts numbers used by a particular Web shop or catalog.\n\nConsequently, the domain of gr:hasStockKeepingUnit is the union of the classes gr:Offering and gr:ProductOrService. \nIf attached to a gr:Offering, the SKU will usually reflect a merchant-specific identifier, i.e. one valid only for that particular retailer or shop. \nIf attached to a gr:ProductOrServiceModel, the SKU can reflect either the identifier used by the merchant or the part number used by the official manufacturer of that part. For the latter, gr:hasMPN is a better choice.\n\nImportant: Be careful when assuming two products or services instances or offering instances to be identical based on the SKU. Since SKUs are unique only for the same gr:BusinessEntity, this can be assumed only when you are sure that the two SKU values refer to the same business entity. Such can be done by taking into account the provenance of the data. As long as instances of gr:Offering are concerned, you can also check that the offerings are being offered by the same gr:Business Entity.\n\nUsually, the properties gr:hasEAN_UCC-13 and gr:hasGTIN-14 are much more reliable identifiers, because they are globally unique.\n\nSee also http://en.wikipedia.org/wiki/Stock_Keeping_Unit."
            },
            "attributes": ["datatype"],
            "id": "351"
        }, {
            "iri": "http://purl.org/goodrelations/v1#availableDeliveryMethods",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "15",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "availableDeliveryMethods",
                "en": "available delivery methods (0..*)"
            },
            "domain": "130",
            "comment": {
                "en": "This specifies the gr:DeliveryMethod or methods available for a given gr:Offering."
            },
            "attributes": ["object"],
            "id": "356"
        }, {
            "iri": "http://purl.org/goodrelations/v1#valueAddedTaxIncluded",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "44",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "valueAddedTaxIncluded",
                "en": "value added tax included (0..1)"
            },
            "domain": "2",
            "comment": {
                "en": "This property specifies whether the applicable value-added tax (VAT)  is included in the price of the gr:PriceSpecification or not.\n\nNote: This is a simple representation which may not properly reflect all details of local taxation."
            },
            "attributes": ["datatype"],
            "id": "357"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasDUNS",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "360",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasDUNS",
                "en": "has DUNS (0..1)"
            },
            "domain": "359",
            "comment": {
                "en": "The Dun & Bradstreet DUNS number for identifying a gr:BusinessEntity. The Dun & Bradstreet DUNS is a nine-digit number used to identify legal entities (but usually not branches or locations of logistical importance only)."
            },
            "attributes": ["datatype"],
            "id": "358"
        }, {
            "iri": "http://purl.org/goodrelations/v1#quantitativeProductOrServiceProperty",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "25",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "quantitativeProductOrServiceProperty",
                "en": "quantitative product or service property (0..*)"
            },
            "domain": "361",
            "subproperty": ["171", "313", "23", "304"],
            "comment": {
                "en": "This is the super property of all quantitative  properties for products and services. All properties in product or service ontologies that specify quantitative characteristics, for which an interval is at least theoretically an appropriate value, are subproperties of this property."
            },
            "attributes": ["object"],
            "id": "26"
        }, {
            "iri": "http://purl.org/goodrelations/v1#eligibleRegions",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "97",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "eligibleRegions",
                "en": "eligible regions (0..*)"
            },
            "domain": "95",
            "comment": {
                "en": "This property specifies the geo-political region or regions for which the gr:Offering, gr:License, or gr:DeliveryChargeSpecification is valid using the two-character version of ISO 3166-1 (ISO 3166-1 alpha-2)  for regions or ISO 3166-2 , which breaks down the countries from ISO 3166-1 into administrative subdivisions.\n\nImportant: Do NOT use 3-letter ISO 3166-1 codes!"
            },
            "attributes": ["datatype"],
            "id": "362"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasMinCurrencyValue",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "352",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasMinCurrencyValue",
                "en": "has min currency value (1..1)"
            },
            "domain": "2",
            "comment": {
                "en": "This property specifies the LOWER BOUND of the amount of money for a price RANGE per unit, shipping charges, or payment charges. The currency and other relevant details are attached to the respective gr:PriceSpecification etc.\nFor a gr:UnitPriceSpecification, this is the LOWER BOUND for the price for one unit or bundle (as specified in the unit of measurement of the unit price specification) of the respective gr:ProductOrService. For a gr:DeliveryChargeSpecification or a gr:PaymentChargeSpecification, it is the LOWER BOUND of the price per delivery or payment.\n\nUsing gr:hasCurrencyValue sets the upper and lower bounds to the same given value, i.e., x gr:hasCurrencyValue y implies x gr:hasMinCurrencyValue y, x gr:hasMaxCurrencyValue y."
            },
            "attributes": ["datatype"],
            "id": "363"
        }, {
            "iri": "http://purl.org/goodrelations/v1#lesser",
            "inverse": "336",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "51",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "lesser",
                "en": "lesser (0..*)"
            },
            "domain": "51",
            "comment": {
                "en": "This ordering relation for gr:QualitativeValue pairs indicates that the subject is lesser than the object."
            },
            "attributes": ["object", "transitive"],
            "id": "364"
        }, {
            "iri": "http://schema.org/image",
            "equivalent": ["88"],
            "baseIri": "http://schema.org",
            "range": "11",
            "label": {
                "IRI-based": "image"
            },
            "domain": "11",
            "attributes": ["object", "external"],
            "id": "89"
        }, {
            "iri": "http://purl.org/goodrelations/v1#appliesToDeliveryMethod",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "15",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "appliesToDeliveryMethod",
                "en": "applies to delivery method (0..*)"
            },
            "domain": "96",
            "comment": {
                "en": "This property specifies the gr:DeliveryMethod to which the gr:DeliveryChargeSpecification applies."
            },
            "attributes": ["object"],
            "id": "365"
        }, {
            "iri": "http://purl.org/goodrelations/v1#color",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "92",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "color",
                "en": "color (0..1)"
            },
            "domain": "91",
            "comment": {
                "en": "The color of the product."
            },
            "attributes": ["datatype"],
            "id": "366"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasBusinessFunction",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "112",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasBusinessFunction",
                "en": "has business function (1..*)"
            },
            "domain": "121",
            "comment": {
                "en": "This specifies the business function of the gr:Offering, i.e. whether the gr:BusinessEntity is offering to sell, to lease, or to repair the particular type of product. In the case of bundles, it is also possible to attach individual business functions to each gr:TypeAndQuantityNode. The business function of the main gr:Offering determines the business function for all included objects or services, unless a business function attached to a gr:TypeAndQuantityNode overrides it.\n\t\nNote: While it is possible that an entity is offering multiple types of business functions for the same set of objects (e.g. rental and sales), this should usually not be stated by attaching multiple business functions to the same gr:Offering, since the gr:UnitPriceSpecification for the varying business functions will typically be very different."
            },
            "attributes": ["object"],
            "id": "371"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasNAICS",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "58",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasNAICS",
                "en": "has NAICS (0..*)"
            },
            "domain": "54",
            "comment": {
                "en": "The North American Industry Classification System (NAICS) code for a particular gr:BusinessEntity.\nSee http://www.census.gov/eos/www/naics/ for more details.\n\nNote: While NAICS codes are sometimes misused for classifying products or services, they are designed and suited only for classifying business establishments."
            },
            "attributes": ["datatype"],
            "id": "372"
        }, {
            "iri": "http://purl.org/goodrelations/v1#legalName",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "370",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "legalName",
                "en": "legal name (0..1)"
            },
            "domain": "369",
            "comment": {
                "en": "The legal name of the gr:BusinessEntity."
            },
            "attributes": ["datatype"],
            "id": "373"
        }, {
            "iri": "http://purl.org/goodrelations/v1#condition",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "102",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "condition",
                "en": "condition (0..1)"
            },
            "domain": "98",
            "comment": {
                "en": "A textual description of the condition of the product or service, or the products or services included in the offer (when attached to a gr:Offering)"
            },
            "attributes": ["datatype"],
            "id": "374"
        }, {
            "iri": "http://purl.org/goodrelations/v1#offers",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "20",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "offers",
                "en": "offers (0..*)"
            },
            "domain": "376",
            "comment": {
                "en": "This links a gr:BusinessEntity to the offers (gr:Offering) it makes. If you want to express interest in receiving offers, use gr:seeks instead."
            },
            "attributes": ["object"],
            "id": "375"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasMinValueInteger",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "355",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasMinValueInteger",
                "en": "has min value integer (1..1)"
            },
            "domain": "63",
            "comment": {
                "en": "This property captures the lower limit of a gr:QuantitativeValueInteger instance."
            },
            "attributes": ["datatype"],
            "id": "377"
        }, {
            "iri": "http://purl.org/goodrelations/v1#acceptedPaymentMethods",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "106",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "acceptedPaymentMethods",
                "en": "accepted payment methods (0..*)"
            },
            "domain": "163",
            "comment": {
                "en": "The gr:PaymentMethod or methods accepted by the gr:BusinessEntity for the given gr:Offering."
            },
            "attributes": ["object"],
            "id": "378"
        }, {
            "iri": "http://purl.org/goodrelations/v1#eligibleDuration",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "25",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "eligibleDuration",
                "en": "eligible duration (0..1)"
            },
            "domain": "148",
            "comment": {
                "en": "The minimal and maximal duration for which the given gr:Offering or gr:License is valid. This is mostly used for offers regarding accommodation, the rental of objects, or software licenses. The duration is specified by attaching an instance of gr:QuantitativeValue. The lower and upper boundaries are specified using the properties gr:hasMinValue and gr:hasMaxValue to that instance. If they are the same, use the gr:hasValue property. The unit of measurement is specified using the property gr:hasUnitOfMeasurement with a string holding a UN/CEFACT code suitable for durations, e.g. MON (months), DAY (days), HUR (hours), or MIN (minutes).\n\nThe difference to the gr:validFrom and gr:validThrough properties is that those specify the absiolute interval during which the gr:Offering or gr:License is valid, while gr:eligibleDuration specifies the acceptable duration of the contract or usage."
            },
            "attributes": ["object"],
            "id": "379"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasISICv4",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "79",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasISICv4",
                "en": "has ISIC v4 (0..*)"
            },
            "domain": "77",
            "comment": {
                "en": "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular gr:BusinessEntity or gr:Location. See http://unstats.un.org/unsd/cr/registry/isic-4.asp for more information.\n\nNote: While ISIC codes are sometimes misused for classifying products or services, they are designed and suited only for classifying business establishments."
            },
            "attributes": ["datatype"],
            "id": "380"
        }, {
            "iri": "http://purl.org/goodrelations/v1#availabilityStarts",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "354",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "availabilityStarts",
                "en": "availability starts (0..1)"
            },
            "domain": "353",
            "comment": {
                "en": "This property specifies the beginning of the availability of the gr:ProductOrService included in the gr:Offering.\nThe difference to the properties gr:validFrom and gr:validThrough is that those specify the period of time during which the offer is valid and can be accepted.\n\nExample: I offer to lease my boat for the period of August 1 - August 31, 2010, but you must accept by offer no later than July 15.\n\nA time-zone should be specified. For a time in GMT/UTC, simply add a \"Z\" following the time:\n\n2008-05-30T09:30:10Z.\n\nAlternatively, you can specify an offset from the UTC time by adding a positive or negative time following the time:\n\n2008-05-30T09:30:10-09:00\n\nor\n\n2008-05-30T09:30:10+09:00.\n\nNote: There is another property gr:availableAtOrFrom, which is used to indicate the gr:Location (e.g. store or shop) from which the goods would be available."
            },
            "attributes": ["datatype"],
            "id": "381"
        }, {
            "range": "106",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "382"
        }, {
            "range": "7",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "383"
        }, {
            "iri": "http://purl.org/goodrelations/v1#priceType",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "42",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "priceType",
                "en": "price type (0..1)"
            },
            "domain": "81",
            "comment": {
                "en": "This attribute can be used to distinguish multiple different price specifications for the same gr:Offering. It supersedes the former gr:isListPrice property. The following values are recommended:\n\nThe absence of this property marks the actual sales price.\n\nSRP: \"suggested retail price\" - applicable for all sorts of a non-binding retail price recommendations, e.g. such published by the manufacturer or the distributor. This value replaces the former gr:isListPrice property.\n\nINVOICE: The invoice price, mostly used in the car industry - this is the price a dealer pays to the manufacturer, excluding rebates and charges."
            },
            "attributes": ["datatype"],
            "id": "384"
        }, {
            "iri": "http://purl.org/goodrelations/v1#description",
            "equivalent": ["56"],
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "368",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "description",
                "en": "description (0..1)"
            },
            "domain": "367",
            "comment": {
                "en": "A short textual description of the resource. \n\nThis property is semantically equivalent to rdfs:comment and just meant as a handy shortcut for marking up data."
            },
            "attributes": ["datatype"],
            "id": "385"
        }, {
            "range": "5",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "386"
        }, {
            "range": "25",
            "domain": "38",
            "attributes": ["anonymous", "object"],
            "id": "387"
        }, {
            "range": "108",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "388"
        }, {
            "range": "109",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "389"
        }, {
            "range": "25",
            "domain": "20",
            "attributes": ["anonymous", "object"],
            "id": "390"
        }, {
            "range": "41",
            "domain": "25",
            "attributes": ["anonymous", "object"],
            "id": "391"
        }, {
            "iri": "http://purl.org/goodrelations/v1#valueReference",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "120",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "valueReference",
                "en": "value reference (0..*)"
            },
            "domain": "119",
            "comment": {
                "en": "The superclass of properties that link a gr:QuantitativeValue or a gr:QualitativeValue to a second gr:QuantitativeValue or a gr:QualitativeValue that provides additional information on the original value. A good modeling practice is to define specializations of this property (e.g. foo:referenceTemperature) for your particular domain."
            },
            "attributes": ["object"],
            "id": "392"
        }, {
            "range": "107",
            "domain": "81",
            "attributes": ["anonymous", "object"],
            "id": "393"
        }, {
            "range": "81",
            "domain": "96",
            "attributes": ["anonymous", "object"],
            "id": "394"
        }, {
            "iri": "http://purl.org/goodrelations/v1#isAccessoryOrSparePartFor",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "5",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "isAccessoryOrSparePartFor",
                "en": "is accessory or spare part for (0..*)"
            },
            "domain": "122",
            "comment": {
                "en": "This states that a particular gr:ProductOrService is an accessory or spare part for another product or service."
            },
            "attributes": ["object"],
            "id": "395"
        }, {
            "iri": "http://purl.org/goodrelations/v1#hasMakeAndModel",
            "baseIri": "http://purl.org/goodrelations/v1",
            "range": "48",
            "annotations": {
                "isDefinedBy": [{
                    "identifier": "isDefinedBy",
                    "language": "undefined",
                    "value": "http://purl.org/goodrelations/v1",
                    "type": "iri"
                }]
            },
            "label": {
                "IRI-based": "hasMakeAndModel",
                "en": "has make and model (0..1)"
            },
            "domain": "144",
            "comment": {
                "en": "This states that an actual product instance (gr:Individual) or a placeholder instance for multiple, unidentified such instances (gr:SomeItems) is one occurence of a particular gr:ProductOrServiceModel.\n\nExample: myFordT hasMakeAndModel FordT."
            },
            "attributes": ["object"],
            "id": "396"
        }]
    }
}