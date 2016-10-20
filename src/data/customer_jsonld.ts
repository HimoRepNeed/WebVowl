namespace TRVOWL.data {
    export var cust_jsonld = {
        "@context": {
            "core": "http://ontology.onesourcetax.com/core/",
            "owl": "http://www.w3.org/2002/07/owl#",
            "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
            "xsd": "http://www.w3.org/2001/XMLSchema#"
        },
        "@graph": [
            {
                "@id": "core:assignedToTime",
                "@type": "owl:AnnotationProperty"
            },
            {
                "@id": "core:assignedToProduct",
                "@type": "owl:AnnotationProperty"
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:TaxProvision",
                "@type": [
                    "owl:NamedIndividual",
                    "core:Purpose"
                ]
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:Deliverable-1",
                "@type": [
                    "core:Deliverable",
                    "owl:NamedIndividual"
                ],
                "core:hasName": "Income Tax Return",
                "core:relatesToUnitProperties": {
                    "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-1"
                }
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:EstimatedPayment",
                "@type": [
                    "owl:NamedIndividual",
                    "core:Purpose"
                ]
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:IncomeTax",
                "@type": [
                    "core:Purpose",
                    "owl:NamedIndividual"
                ],
                "core:assignToDeliverable": {
                    "@id": "http://data.onesourcetax.com/customer-1:Deliverable-1"
                }
            },
            {
                "@id": "_:Na72899c208524215a881c42ff5303d9a",
                "rdfs:resource": "http://ontology.onesourcetax.com/core/"
            },
            {
                "@id": "core:hasName",
                "@type": "owl:AnnotationProperty"
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1",
                "@type": "owl:Ontology",
                "owl:imports": {
                    "@id": "_:Na72899c208524215a881c42ff5303d9a"
                }
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:Deliverable-7",
                "@type": [
                    "owl:NamedIndividual",
                    "core:Deliverable"
                ],
                "core:relatesToUnitProperties": {
                    "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-7"
                }
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:Deliverable-6",
                "@type": [
                    "core:Deliverable",
                    "owl:NamedIndividual"
                ],
                "core:relatesToUnitProperties": {
                    "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-6"
                }
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:Deliverable-5",
                "@type": [
                    "core:Deliverable",
                    "owl:NamedIndividual"
                ],
                "core:relatesToUnitProperties": {
                    "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-5"
                }
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:Deliverable-4",
                "@type": [
                    "core:Deliverable",
                    "owl:NamedIndividual"
                ],
                "core:relatesToUnitProperties": {
                    "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-4"
                }
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:Deliverable-3",
                "@type": [
                    "owl:NamedIndividual",
                    "core:Deliverable"
                ],
                "core:relatesToUnitProperties": {
                    "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-3"
                }
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:Deliverable-2",
                "@type": [
                    "owl:NamedIndividual",
                    "core:Deliverable"
                ],
                "core:relatesToUnitProperties": {
                    "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-2"
                }
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-10",
                "@type": [
                    "owl:NamedIndividual",
                    "core:UnitProperties"
                ]
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:Cox",
                "@type": [
                    "owl:NamedIndividual",
                    "core:Customer"
                ],
                "core:hasName": "Cox",
                "core:hasPurpose": [
                    {
                        "@id": "http://data.onesourcetax.com/customer-1:TaxProvision"
                    },
                    {
                        "@id": "http://data.onesourcetax.com/customer-1:EstimatedPayment"
                    },
                    {
                        "@id": "http://data.onesourcetax.com/customer-1:IncomeTax"
                    }
                ]
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-4",
                "@type": [
                    "core:UnitProperties",
                    "owl:NamedIndividual"
                ],
                "core:asOf": {
                    "@type": "xsd:dateTime",
                    "@value": "2015-01-01"
                },
                "core:hasCode": "1AG0000010",
                "core:hasName": "Greater Orlando Auto Auction, Inc.",
                "core:isLocatedIn": "Domestic"
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-5",
                "@type": [
                    "owl:NamedIndividual",
                    "core:UnitProperties"
                ],
                "core:asOf": {
                    "@type": "xsd:dateTime",
                    "@value": "2015-01-01"
                },
                "core:hasCode": "0000000004",
                "core:hasName": "XTIME - CAP Audit Company",
                "core:hasUnitType": "Subsidiary"
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-6",
                "@type": [
                    "core:UnitProperties",
                    "owl:NamedIndividual"
                ],
                "core:asOf": {
                    "@type": "xsd:dateTime",
                    "@value": "2015-01-01"
                },
                "core:hasCode": "AI363L",
                "core:hasName": "NextGear Capital UK Limited",
                "core:isLocatedIn": "Foreign"
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-7",
                "@type": [
                    "owl:NamedIndividual",
                    "core:UnitProperties"
                ],
                "core:asOf": {
                    "@type": "xsd:dateTime",
                    "@value": "2014-01-01"
                },
                "core:hasCode": "0000000001",
                "core:hasName": "CEI - CAP Audit Company",
                "core:hasUnitType": "Subsidiary",
                "core:relatesToUnit": {
                    "@id": "http://data.onesourcetax.com/customer-1:Unit-1"
                }
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-1",
                "@type": [
                    "core:UnitProperties",
                    "owl:NamedIndividual"
                ],
                "core:asOf": {
                    "@type": "xsd:dateTime",
                    "@value": "2015"
                },
                "core:hasCode": "0000000001",
                "core:hasName": "CEI - CAP Audit Company",
                "core:hasUnitType": "Subsidiary",
                "core:relatesToUnit": {
                    "@id": "http://data.onesourcetax.com/customer-1:Unit-1"
                }
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-2",
                "@type": [
                    "owl:NamedIndividual",
                    "core:UnitProperties"
                ],
                "core:asOf": {
                    "@type": "xsd:dateTime",
                    "@value": "2015"
                },
                "core:hasCode": "1AD1110009",
                "core:hasName": "Manheim's Pennsylvania Auction Services, Inc.",
                "core:isLocatedIn": "Domestic"
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-3",
                "@type": [
                    "owl:NamedIndividual",
                    "core:UnitProperties"
                ],
                "core:asOf": {
                    "@type": "xsd:dateTime",
                    "@value": "2015"
                },
                "core:hasCode": "0000000003",
                "core:hasName": "CAP - NonConsolidated",
                "core:hasUnitType": "Subsidiary"
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:Unit-1",
                "@type": [
                    "owl:NamedIndividual",
                    "core:Unit"
                ]
            },
            {
                "@id": "core:assignedToBusiness",
                "@type": "owl:AnnotationProperty"
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-8",
                "@type": [
                    "owl:NamedIndividual",
                    "core:UnitProperties"
                ],
                "core:asOf": {
                    "@type": "xsd:dateTime",
                    "@value": "2015-01-01"
                },
                "core:hasCode": "AI364L",
                "core:hasName": "Cox Automotive International S.a.r.l.",
                "core:isLocatedIn": "Foreign"
            },
            {
                "@id": "core:hasBusinessType",
                "@type": "owl:AnnotationProperty"
            },
            {
                "@id": "core:isLocatedIn",
                "@type": "owl:AnnotationProperty"
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:Deliverable-8",
                "@type": [
                    "owl:NamedIndividual",
                    "core:Deliverable"
                ],
                "core:relatesToUnitProperties": {
                    "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-8"
                }
            },
            {
                "@id": "core:hasPurpose",
                "@type": "owl:AnnotationProperty"
            },
            {
                "@id": "core:assignToDeliverable",
                "@type": "owl:AnnotationProperty"
            },
            {
                "@id": "http://data.onesourcetax.com/customer-1:Deliverable-10",
                "@type": [
                    "owl:NamedIndividual",
                    "core:Deliverable"
                ],
                "core:relatesToUnitProperties": {
                    "@id": "http://data.onesourcetax.com/customer-1:UnitProperties-10"
                }
            },
            {
                "@id": "core:hasCode",
                "@type": "owl:AnnotationProperty"
            }
        ]
    }
}