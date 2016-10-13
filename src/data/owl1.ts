export var owl1 = {
  "_comment" : "Created with OWL2VOWL (version 0.2.0), http://vowl.visualdataweb.org",
  "namespace" : [ ],
  "header" : {
    "languages" : [ "IRI-based" ],
    "iri" : "http://ontology.onesourcetax.com/core/"
  },
  "metrics" : {
    "classCount" : 12,
    "datatypeCount" : 5,
    "objectPropertyCount" : 6,
    "datatypePropertyCount" : 5,
    "propertyCount" : 11,
    "nodeCount" : 17,
    "axiomCount" : 55,
    "individualCount" : 0
  },
  "class" : [ {
    "id" : "class11",
    "type" : "owl:Class"
  }, {
    "id" : "class3",
    "type" : "owl:Class"
  }, {
    "id" : "class1",
    "type" : "owl:Class"
  }, {
    "id" : "class10",
    "type" : "owl:Class"
  }, {
    "id" : "class6",
    "type" : "owl:Class"
  }, {
    "id" : "class9",
    "type" : "owl:Class"
  }, {
    "id" : "class4",
    "type" : "owl:Class"
  }, {
    "id" : "class8",
    "type" : "owl:Class"
  }, {
    "id" : "class12",
    "type" : "owl:Class"
  }, {
    "id" : "class7",
    "type" : "owl:Class"
  }, {
    "id" : "class5",
    "type" : "owl:Class"
  }, {
    "id" : "class2",
    "type" : "owl:Class"
  } ],
  "classAttribute" : [ {
    "id" : "class11",
    "label" : {
      "IRI-based" : "Deliverable"
    },
    "iri" : "http://ontology.onesourcetax.com/core/Deliverable",
    "instances" : 0
  }, {
    "id" : "class3",
    "label" : {
      "IRI-based" : "Customer"
    },
    "iri" : "http://ontology.onesourcetax.com/core/Customer",
    "instances" : 0
  }, {
    "id" : "class1",
    "label" : {
      "IRI-based" : "SourceProduct"
    },
    "iri" : "http://ontology.onesourcetax.com/core/SourceProduct",
    "instances" : 0
  }, {
    "id" : "class10",
    "label" : {
      "IRI-based" : "Time"
    },
    "iri" : "http://ontology.onesourcetax.com/core/Time",
    "subClasses" : [ "class2", "class9", "class8", "class4" ],
    "instances" : 0
  }, {
    "id" : "class6",
    "label" : {
      "IRI-based" : "TaxType"
    },
    "iri" : "http://ontology.onesourcetax.com/core/TaxType",
    "instances" : 0
  }, {
    "id" : "class9",
    "label" : {
      "IRI-based" : "Period"
    },
    "iri" : "http://ontology.onesourcetax.com/core/Period",
    "superClasses" : [ "class10" ],
    "instances" : 0
  }, {
    "id" : "class4",
    "label" : {
      "IRI-based" : "StartDate"
    },
    "iri" : "http://ontology.onesourcetax.com/core/StartDate",
    "superClasses" : [ "class10" ],
    "instances" : 0
  }, {
    "id" : "class8",
    "label" : {
      "IRI-based" : "Quarter"
    },
    "iri" : "http://ontology.onesourcetax.com/core/Quarter",
    "superClasses" : [ "class10" ],
    "instances" : 0
  }, {
    "id" : "class12",
    "label" : {
      "IRI-based" : "UnitProperties"
    },
    "iri" : "http://ontology.onesourcetax.com/core/UnitProperties",
    "instances" : 0
  }, {
    "id" : "class7",
    "label" : {
      "IRI-based" : "Purpose"
    },
    "iri" : "http://ontology.onesourcetax.com/core/Purpose",
    "instances" : 0
  }, {
    "id" : "class5",
    "label" : {
      "IRI-based" : "Unit"
    },
    "iri" : "http://ontology.onesourcetax.com/core/Unit",
    "instances" : 0
  }, {
    "id" : "class2",
    "label" : {
      "IRI-based" : "EndDate"
    },
    "iri" : "http://ontology.onesourcetax.com/core/EndDate",
    "superClasses" : [ "class10" ],
    "instances" : 0
  } ],
  "datatype" : [ {
    "id" : "datatype1",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "datatype2",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "datatype3",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "datatype5",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "datatype4",
    "type" : "rdfs:Datatype"
  } ],
  "datatypeAttribute" : [ {
    "id" : "datatype1",
    "label" : {
      "IRI-based" : "string"
    },
    "iri" : "http://www.w3.org/2001/XMLSchema#string"
  }, {
    "id" : "datatype2",
    "label" : {
      "IRI-based" : "string"
    },
    "iri" : "http://www.w3.org/2001/XMLSchema#string"
  }, {
    "id" : "datatype3",
    "label" : {
      "IRI-based" : "string"
    },
    "iri" : "http://www.w3.org/2001/XMLSchema#string"
  }, {
    "id" : "datatype5",
    "label" : {
      "IRI-based" : "dateTime"
    },
    "iri" : "http://www.w3.org/2001/XMLSchema#dateTime"
  }, {
    "id" : "datatype4",
    "label" : {
      "IRI-based" : "string"
    },
    "iri" : "http://www.w3.org/2001/XMLSchema#string"
  } ],
  "property" : [ {
    "id" : "property8",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property4",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property3",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property2",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property1",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property7",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property15",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property6",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property5",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property14",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property13",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property10",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property12",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property11",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property9",
    "type" : "owl:objectProperty"
  } ],
  "propertyAttribute" : [ {
    "id" : "property8",
    "label" : {
      "IRI-based" : "relatesToUnit"
    },
    "iri" : "http://ontology.onesourcetax.com/core/relatesToUnit",
    "domain" : "class12",
    "range" : "class5",
    "minCardinality" : 1
  }, {
    "id" : "property4",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class4",
    "range" : "class10"
  }, {
    "id" : "property3",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class8",
    "range" : "class10"
  }, {
    "id" : "property2",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class9",
    "range" : "class10"
  }, {
    "id" : "property1",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class2",
    "range" : "class10"
  }, {
    "id" : "property7",
    "label" : {
      "IRI-based" : "hasTaxType"
    },
    "iri" : "http://ontology.onesourcetax.com/core/hasTaxType",
    "domain" : "class11",
    "range" : "class6"
  }, {
    "id" : "property15",
    "label" : {
      "IRI-based" : "asOf"
    },
    "iri" : "http://ontology.onesourcetax.com/core/asOf",
    "domain" : "class12",
    "range" : "datatype5"
  }, {
    "id" : "property6",
    "label" : {
      "IRI-based" : "sourcedFromApp"
    },
    "iri" : "http://ontology.onesourcetax.com/core/sourcedFromApp",
    "domain" : "class5",
    "range" : "class1",
    "minCardinality" : 0,
    "maxCardinality" : 1
  }, {
    "id" : "property5",
    "label" : {
      "IRI-based" : "assignToDeliverable"
    },
    "iri" : "http://ontology.onesourcetax.com/core/assignToDeliverable",
    "domain" : "class7",
    "range" : "class11",
    "minCardinality" : 1
  }, {
    "id" : "property14",
    "label" : {
      "IRI-based" : "hasCode"
    },
    "iri" : "http://ontology.onesourcetax.com/core/hasCode",
    "domain" : "class12",
    "range" : "datatype4"
  }, {
    "id" : "property13",
    "label" : {
      "IRI-based" : "hasUnitType"
    },
    "iri" : "http://ontology.onesourcetax.com/core/hasUnitType",
    "domain" : "class12",
    "range" : "datatype3"
  }, {
    "id" : "property10",
    "label" : {
      "IRI-based" : "relatesToUnitProperties"
    },
    "iri" : "http://ontology.onesourcetax.com/core/relatesToUnitProperties",
    "domain" : "class11",
    "range" : "class12",
    "minCardinality" : 1
  }, {
    "id" : "property12",
    "label" : {
      "IRI-based" : "hasName"
    },
    "iri" : "http://ontology.onesourcetax.com/core/hasName",
    "domain" : "class12",
    "range" : "datatype2"
  }, {
    "id" : "property11",
    "label" : {
      "IRI-based" : "isLocatedIn"
    },
    "iri" : "http://ontology.onesourcetax.com/core/isLocatedIn",
    "domain" : "class12",
    "range" : "datatype1"
  }, {
    "id" : "property9",
    "label" : {
      "IRI-based" : "hasPurpose"
    },
    "iri" : "http://ontology.onesourcetax.com/core/hasPurpose",
    "domain" : "class3",
    "range" : "class7",
    "minCardinality" : 0
  } ]
}
