export var owl2 =
{
  "_comment" : "Created with OWL2VOWL (version 0.2.0), http://vowl.visualdataweb.org",
  "namespace" : [ ],
  "header" : {
    "languages" : [ "IRI-based", "undefined" ],
    "title" : {
      "undefined" : "Friend of a Friend (FOAF) vocabulary"
    },
    "iri" : "http://xmlns.com/foaf/0.1/",
    "version" : "0.99",	
    "author" : [ "Dan Brickley", "Libby Miller" ],		
    "description" : {
      "undefined" : "The Friend of a Friend (FOAF) RDF vocabulary, described using W3C RDF Schema and the Web Ontology Language."
    }
  },
  "metrics" : {
    "classCount" : 22,
    "datatypeCount" : 27,
    "objectPropertyCount" : 40,
    "datatypePropertyCount" : 27,
    "propertyCount" : 67,
    "nodeCount" : 49,
    "axiomCount" : 551,
    "individualCount" : 0
  },
  "class" : [ {
    "id" : "class3",
    "type" : "owl:equivalentClass"
  }, {
    "id" : "class5",
    "type" : "owl:Class"
  }, {
    "id" : "class14",
    "type" : "owl:equivalentClass"
  }, {
    "id" : "class7",
    "type" : "owl:equivalentClass"
  }, {
    "id" : "class8",
    "type" : "owl:equivalentClass"
  }, {
    "id" : "class13",
    "type" : "owl:Class"
  }, {
    "id" : "class16",
    "type" : "owl:Class"
  }, {
    "id" : "class15",
    "type" : "owl:equivalentClass"
  }, {
    "id" : "class1",
    "type" : "owl:equivalentClass"
  }, {
    "id" : "class20",
    "type" : "owl:Class"
  }, {
    "id" : "class19",
    "type" : "externalclass"
  }, {
    "id" : "class11",
    "type" : "externalclass"
  }, {
    "id" : "class9",
    "type" : "owl:equivalentClass"
  }, {
    "id" : "class10",
    "type" : "externalclass"
  }, {
    "id" : "class21",
    "type" : "owl:equivalentClass"
  }, {
    "id" : "class2",
    "type" : "owl:Class"
  }, {
    "id" : "class12",
    "type" : "owl:Class"
  }, {
    "id" : "class17",
    "type" : "owl:Class"
  }, {
    "id" : "class4",
    "type" : "owl:Class"
  }, {
    "id" : "class18",
    "type" : "owl:Class"
  }, {
    "id" : "class6",
    "type" : "owl:equivalentClass"
  }, {
    "id" : "thing6",
    "type" : "owl:Thing"
  }, {
    "id" : "thing1",
    "type" : "owl:Thing"
  }, {
    "id" : "thing4",
    "type" : "owl:Thing"
  }, {
    "id" : "thing5",
    "type" : "owl:Thing"
  }, {
    "id" : "thing2",
    "type" : "owl:Thing"
  }, {
    "id" : "thing3",
    "type" : "owl:Thing"
  } ],
  "classAttribute" : [ {
    "id" : "class3",
    "label" : {
      "IRI-based" : "Agent",
      "undefined" : "Agent"
    },
    "iri" : "http://xmlns.com/foaf/0.1/Agent",
    "comment" : {
      "undefined" : "An agent (eg. person, group, software or physical artifact)."
    },
    "attributes" : [ "equivalent" ],
    "subClasses" : [ "class17", "class16", "class15" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "instances" : 0,
    "equivalent" : [ "class14" ]
  }, {
    "id" : "class5",
    "label" : {
      "IRI-based" : "OnlineAccount",
      "undefined" : "Online Account"
    },
    "iri" : "http://xmlns.com/foaf/0.1/OnlineAccount",
    "comment" : {
      "undefined" : "An online account."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "subClasses" : [ "class20", "class12", "class13" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "instances" : 0
  }, {
    "id" : "class14",
    "label" : {
      "IRI-based" : "Agent"
    },
    "iri" : "http://purl.org/dc/terms/Agent",
    "attributes" : [ "external", "equivalent" ],
    "instances" : 0
  }, {
    "id" : "class7",
    "label" : {
      "IRI-based" : "CreativeWork"
    },
    "iri" : "http://schema.org/CreativeWork",
    "attributes" : [ "external", "equivalent" ],
    "instances" : 0
  }, {
    "id" : "class8",
    "label" : {
      "IRI-based" : "Person"
    },
    "iri" : "http://schema.org/Person",
    "attributes" : [ "external", "equivalent" ],
    "instances" : 0
  }, {
    "id" : "class13",
    "label" : {
      "IRI-based" : "OnlineGamingAccount",
      "undefined" : "Online Gaming Account"
    },
    "iri" : "http://xmlns.com/foaf/0.1/OnlineGamingAccount",
    "comment" : {
      "undefined" : "An online gaming account."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "superClasses" : [ "class5" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "unstable",
        "type" : "label"
      } ]
    },
    "instances" : 0
  }, {
    "id" : "class16",
    "label" : {
      "IRI-based" : "Organization",
      "undefined" : "Organization"
    },
    "iri" : "http://xmlns.com/foaf/0.1/Organization",
    "comment" : {
      "undefined" : "An organization."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "superClasses" : [ "class3" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "instances" : 0
  }, {
    "id" : "class15",
    "label" : {
      "IRI-based" : "Person",
      "undefined" : "Person"
    },
    "iri" : "http://xmlns.com/foaf/0.1/Person",
    "comment" : {
      "undefined" : "A person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "equivalent" ],
    "superClasses" : [ "class10", "class3" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "instances" : 0,
    "equivalent" : [ "class6", "class8" ]
  }, {
    "id" : "class1",
    "label" : {
      "IRI-based" : "ImageObject"
    },
    "iri" : "http://schema.org/ImageObject",
    "attributes" : [ "external", "equivalent" ],
    "instances" : 0
  }, {
    "id" : "class20",
    "label" : {
      "IRI-based" : "OnlineChatAccount",
      "undefined" : "Online Chat Account"
    },
    "iri" : "http://xmlns.com/foaf/0.1/OnlineChatAccount",
    "comment" : {
      "undefined" : "An online chat account."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "superClasses" : [ "class5" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "unstable",
        "type" : "label"
      } ]
    },
    "instances" : 0
  }, {
    "id" : "class19",
    "label" : {
      "IRI-based" : "Class"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Class",
    "attributes" : [ "external" ],
    "instances" : 0
  }, {
    "id" : "class11",
    "label" : {
      "IRI-based" : "Concept",
      "undefined" : "Concept"
    },
    "iri" : "http://www.w3.org/2004/02/skos/core#Concept",
    "attributes" : [ "external" ],
    "instances" : 0
  }, {
    "id" : "class9",
    "label" : {
      "IRI-based" : "Document",
      "undefined" : "Document"
    },
    "iri" : "http://xmlns.com/foaf/0.1/Document",
    "comment" : {
      "undefined" : "A document."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "equivalent" ],
    "subClasses" : [ "class21", "class18" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "instances" : 0,
    "equivalent" : [ "class7" ]
  }, {
    "id" : "class10",
    "label" : {
      "IRI-based" : "SpatialThing",
      "undefined" : "Spatial Thing"
    },
    "iri" : "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
    "attributes" : [ "external" ],
    "subClasses" : [ "class15" ],
    "instances" : 0
  }, {
    "id" : "class21",
    "label" : {
      "IRI-based" : "Image",
      "undefined" : "Image"
    },
    "iri" : "http://xmlns.com/foaf/0.1/Image",
    "comment" : {
      "undefined" : "An image."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "equivalent" ],
    "superClasses" : [ "class9" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "instances" : 0,
    "equivalent" : [ "class1" ]
  }, {
    "id" : "class2",
    "label" : {
      "IRI-based" : "LabelProperty",
      "undefined" : "Label Property"
    },
    "iri" : "http://xmlns.com/foaf/0.1/LabelProperty",
    "comment" : {
      "undefined" : "A foaf:LabelProperty is any RDF property with texual values that serve as labels."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "unstable",
        "type" : "label"
      } ]
    },
    "instances" : 0
  }, {
    "id" : "class12",
    "label" : {
      "IRI-based" : "OnlineEcommerceAccount",
      "undefined" : "Online E-commerce Account"
    },
    "iri" : "http://xmlns.com/foaf/0.1/OnlineEcommerceAccount",
    "comment" : {
      "undefined" : "An online e-commerce account."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "superClasses" : [ "class5" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "unstable",
        "type" : "label"
      } ]
    },
    "instances" : 0
  }, {
    "id" : "class17",
    "label" : {
      "IRI-based" : "Group",
      "undefined" : "Group"
    },
    "iri" : "http://xmlns.com/foaf/0.1/Group",
    "comment" : {
      "undefined" : "A class of Agents."
    },
    "superClasses" : [ "class3" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "instances" : 0
  }, {
    "id" : "class4",
    "label" : {
      "IRI-based" : "Project",
      "undefined" : "Project"
    },
    "iri" : "http://xmlns.com/foaf/0.1/Project",
    "comment" : {
      "undefined" : "A project (a collective endeavour of some kind)."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "instances" : 0
  }, {
    "id" : "class18",
    "label" : {
      "IRI-based" : "PersonalProfileDocument",
      "undefined" : "PersonalProfileDocument"
    },
    "iri" : "http://xmlns.com/foaf/0.1/PersonalProfileDocument",
    "comment" : {
      "undefined" : "A personal profile RDF document."
    },
    "superClasses" : [ "class9" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "instances" : 0
  }, {
    "id" : "class6",
    "label" : {
      "IRI-based" : "Person"
    },
    "iri" : "http://www.w3.org/2000/10/swap/pim/contact#Person",
    "attributes" : [ "external", "equivalent" ],
    "instances" : 0
  }, {
    "id" : "thing6",
    "label" : {
      "undefined" : "Thing"
    },
    "iri" : "http://www.w3.org/2002/07/owl#Thing",
    "instances" : 0
  }, {
    "id" : "thing1",
    "label" : {
      "undefined" : "Thing"
    },
    "iri" : "http://www.w3.org/2002/07/owl#Thing",
    "instances" : 0
  }, {
    "id" : "thing4",
    "label" : {
      "undefined" : "Thing"
    },
    "iri" : "http://www.w3.org/2002/07/owl#Thing",
    "instances" : 0
  }, {
    "id" : "thing5",
    "label" : {
      "undefined" : "Thing"
    },
    "iri" : "http://www.w3.org/2002/07/owl#Thing",
    "instances" : 0
  }, {
    "id" : "thing2",
    "label" : {
      "undefined" : "Thing"
    },
    "iri" : "http://www.w3.org/2002/07/owl#Thing",
    "instances" : 0
  }, {
    "id" : "thing3",
    "label" : {
      "undefined" : "Thing"
    },
    "iri" : "http://www.w3.org/2002/07/owl#Thing",
    "instances" : 0
  } ],
  "datatype" : [ {
    "id" : "literal26",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal25",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal24",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal23",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal27",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal21",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal22",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal20",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal8",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal7",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal9",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal13",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal4",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal12",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal3",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal6",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal15",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal5",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal14",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal17",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal16",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal2",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal19",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal1",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal18",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal10",
    "type" : "rdfs:Literal"
  }, {
    "id" : "literal11",
    "type" : "rdfs:Literal"
  } ],
  "datatypeAttribute" : [ {
    "id" : "literal26",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal25",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal24",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal23",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal27",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal21",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal22",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal20",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal8",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal7",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal9",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal13",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal4",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal12",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal3",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal6",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal15",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal5",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal14",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal17",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal16",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal2",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal19",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal1",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal18",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal10",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  }, {
    "id" : "literal11",
    "label" : {
      "IRI-based" : "Literal"
    },
    "iri" : "http://www.w3.org/2000/01/rdf-schema#Literal"
  } ],
  "property" : [ {
    "id" : "property27",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property39",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property43",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property55",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property29",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property33",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property31",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property37",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property79",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property21",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property46",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property41",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property80",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property68",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property58",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property22",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property77",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property45",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property78",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property61",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property56",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property65",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property4",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property26",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property3",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property2",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property38",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property1",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property84",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property59",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property67",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property34",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property15",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property76",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property9",
    "type" : "owl:disjointWith"
  }, {
    "id" : "property60",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property8",
    "type" : "owl:disjointWith"
  }, {
    "id" : "property7",
    "type" : "owl:disjointWith"
  }, {
    "id" : "property63",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property6",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property5",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property70",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property54",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property18",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property13",
    "type" : "owl:disjointWith"
  }, {
    "id" : "property30",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property12",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property83",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property11",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "property49",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property71",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property47",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property32",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property62",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property19",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property81",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property50",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property42",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property82",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property51",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property64",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property35",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property44",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property74",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property25",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property72",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property73",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property23",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property40",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property28",
    "type" : "owl:objectProperty"
  }, {
    "id" : "property69",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property75",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property66",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "property53",
    "type" : "owl:objectProperty"
  } ],
  "propertyAttribute" : [ {
    "id" : "property27",
    "label" : {
      "IRI-based" : "workplaceHomepage",
      "undefined" : "workplace homepage"
    },
    "iri" : "http://xmlns.com/foaf/0.1/workplaceHomepage",
    "comment" : {
      "undefined" : "A workplace homepage of some person; the homepage of an organization they work for."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "class9"
  }, {
    "id" : "property39",
    "label" : {
      "IRI-based" : "tipjar",
      "undefined" : "tipjar"
    },
    "iri" : "http://xmlns.com/foaf/0.1/tipjar",
    "comment" : {
      "undefined" : "A tipjar document for this agent, describing means for payment and reward."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "class9",
    "superproperty" : [ "property31" ]
  }, {
    "id" : "property43",
    "label" : {
      "IRI-based" : "maker",
      "undefined" : "maker"
    },
    "iri" : "http://xmlns.com/foaf/0.1/maker",
    "comment" : {
      "undefined" : "An agent that  made this thing."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "domain" : "thing1",
    "range" : "class3",
    "inverse" : "property37"
  }, {
    "id" : "property55",
    "label" : {
      "IRI-based" : "based_near",
      "undefined" : "based near"
    },
    "iri" : "http://xmlns.com/foaf/0.1/based_near",
    "comment" : {
      "undefined" : "A location that something is based near, for some broadly human notion of near."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class10",
    "range" : "class10"
  }, {
    "id" : "property29",
    "label" : {
      "IRI-based" : "depiction",
      "undefined" : "depiction"
    },
    "iri" : "http://xmlns.com/foaf/0.1/depiction",
    "comment" : {
      "undefined" : "A depiction of some thing."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing3",
    "range" : "class21",
    "inverse" : "property26",
    "subproperty" : [ "property40" ]
  }, {
    "id" : "property33",
    "label" : {
      "IRI-based" : "logo",
      "undefined" : "logo"
    },
    "iri" : "http://xmlns.com/foaf/0.1/logo",
    "comment" : {
      "undefined" : "A logo representing some thing."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "inverse functional" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "thing4"
  }, {
    "id" : "property31",
    "label" : {
      "IRI-based" : "page",
      "undefined" : "page"
    },
    "iri" : "http://xmlns.com/foaf/0.1/page",
    "comment" : {
      "undefined" : "A page or document about this thing."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "domain" : "thing2",
    "range" : "class9",
    "inverse" : "property21",
    "subproperty" : [ "property22", "property41", "property39", "property38" ]
  }, {
    "id" : "property37",
    "label" : {
      "IRI-based" : "made",
      "undefined" : "made"
    },
    "iri" : "http://xmlns.com/foaf/0.1/made",
    "comment" : {
      "undefined" : "Something that was made by this agent."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "thing1",
    "inverse" : "property43"
  }, {
    "id" : "property79",
    "label" : {
      "IRI-based" : "birthday",
      "undefined" : "birthday"
    },
    "iri" : "http://xmlns.com/foaf/0.1/birthday",
    "comment" : {
      "undefined" : "The birthday of this Agent, represented in mm-dd string form, eg. '12-31'."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "functional" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "unstable",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "literal22"
  }, {
    "id" : "property21",
    "label" : {
      "IRI-based" : "topic",
      "undefined" : "topic"
    },
    "iri" : "http://xmlns.com/foaf/0.1/topic",
    "comment" : {
      "undefined" : "A topic of some page or document."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class9",
    "range" : "thing2",
    "inverse" : "property31"
  }, {
    "id" : "property46",
    "label" : {
      "IRI-based" : "holdsAccount",
      "undefined" : "account"
    },
    "iri" : "http://xmlns.com/foaf/0.1/holdsAccount",
    "comment" : {
      "undefined" : "Indicates an account held by this agent."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "archaic",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "class5"
  }, {
    "id" : "property41",
    "label" : {
      "IRI-based" : "isPrimaryTopicOf",
      "undefined" : "is primary topic of"
    },
    "iri" : "http://xmlns.com/foaf/0.1/isPrimaryTopicOf",
    "comment" : {
      "undefined" : "A document that this thing is the primary topic of."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "inverse functional" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "domain" : "thing2",
    "range" : "class9",
    "inverse" : "property54",
    "subproperty" : [ "property22", "property28" ],
    "superproperty" : [ "property31" ]
  }, {
    "id" : "property80",
    "label" : {
      "IRI-based" : "familyName",
      "undefined" : "familyName"
    },
    "iri" : "http://xmlns.com/foaf/0.1/familyName",
    "comment" : {
      "undefined" : "The family name of some person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "literal23"
  }, {
    "id" : "property68",
    "label" : {
      "IRI-based" : "firstName",
      "undefined" : "firstName"
    },
    "iri" : "http://xmlns.com/foaf/0.1/firstName",
    "comment" : {
      "undefined" : "The first name of a person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "literal11"
  }, {
    "id" : "property58",
    "label" : {
      "IRI-based" : "status",
      "undefined" : "status"
    },
    "iri" : "http://xmlns.com/foaf/0.1/status",
    "comment" : {
      "undefined" : "A string expressing what the user is happy for the general public (normally) to know about their current activity."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "unstable",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "literal1"
  }, {
    "id" : "property22",
    "label" : {
      "IRI-based" : "homepage",
      "undefined" : "homepage"
    },
    "iri" : "http://xmlns.com/foaf/0.1/homepage",
    "comment" : {
      "undefined" : "A homepage for some thing."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "inverse functional" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "domain" : "thing2",
    "range" : "class9",
    "superproperty" : [ "property41", "property31" ]
  }, {
    "id" : "property77",
    "label" : {
      "IRI-based" : "title",
      "undefined" : "title"
    },
    "iri" : "http://xmlns.com/foaf/0.1/title",
    "comment" : {
      "undefined" : "Title (Mr, Mrs, Ms, Dr. etc)"
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "literal20"
  }, {
    "id" : "property45",
    "label" : {
      "IRI-based" : "currentProject",
      "undefined" : "current project"
    },
    "iri" : "http://xmlns.com/foaf/0.1/currentProject",
    "comment" : {
      "undefined" : "A current project this person works on."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "thing5"
  }, {
    "id" : "property78",
    "label" : {
      "IRI-based" : "aimChatID",
      "undefined" : "AIM chat ID"
    },
    "iri" : "http://xmlns.com/foaf/0.1/aimChatID",
    "comment" : {
      "undefined" : "An AIM chat ID"
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "literal21",
    "superproperty" : [ "property81" ]
  }, {
    "id" : "property61",
    "label" : {
      "IRI-based" : "dnaChecksum",
      "undefined" : "DNA checksum"
    },
    "iri" : "http://xmlns.com/foaf/0.1/dnaChecksum",
    "comment" : {
      "undefined" : "A checksum for the DNA of some thing. Joke."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "archaic",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "literal4"
  }, {
    "id" : "property56",
    "label" : {
      "IRI-based" : "topic_interest",
      "undefined" : "topic_interest"
    },
    "iri" : "http://xmlns.com/foaf/0.1/topic_interest",
    "comment" : {
      "undefined" : "A thing of interest to this person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "thing1"
  }, {
    "id" : "property65",
    "label" : {
      "IRI-based" : "sha1",
      "undefined" : "sha1sum (hex)"
    },
    "iri" : "http://xmlns.com/foaf/0.1/sha1",
    "comment" : {
      "undefined" : "A sha1sum hash, in hex."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "unstable",
        "type" : "label"
      } ]
    },
    "domain" : "class9",
    "range" : "literal8"
  }, {
    "id" : "property4",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class20",
    "range" : "class5"
  }, {
    "id" : "property26",
    "label" : {
      "IRI-based" : "depicts",
      "undefined" : "depicts"
    },
    "iri" : "http://xmlns.com/foaf/0.1/depicts",
    "comment" : {
      "undefined" : "A thing depicted in this representation."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class21",
    "range" : "thing3",
    "inverse" : "property29"
  }, {
    "id" : "property3",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class15",
    "range" : "class3"
  }, {
    "id" : "property2",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class16",
    "range" : "class3"
  }, {
    "id" : "property38",
    "label" : {
      "IRI-based" : "weblog",
      "undefined" : "weblog"
    },
    "iri" : "http://xmlns.com/foaf/0.1/weblog",
    "comment" : {
      "undefined" : "A weblog of some thing (whether person, group, company etc.)."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "inverse functional" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "class9",
    "superproperty" : [ "property31" ]
  }, {
    "id" : "property1",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class17",
    "range" : "class3"
  }, {
    "id" : "property84",
    "label" : {
      "IRI-based" : "gender",
      "undefined" : "gender"
    },
    "iri" : "http://xmlns.com/foaf/0.1/gender",
    "comment" : {
      "undefined" : "The gender of this Agent (typically but not necessarily 'male' or 'female')."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "functional" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "literal27"
  }, {
    "id" : "property59",
    "label" : {
      "IRI-based" : "name",
      "undefined" : "name"
    },
    "iri" : "http://xmlns.com/foaf/0.1/name",
    "comment" : {
      "undefined" : "A name for some thing."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "literal2"
  }, {
    "id" : "property67",
    "label" : {
      "IRI-based" : "surname",
      "undefined" : "Surname"
    },
    "iri" : "http://xmlns.com/foaf/0.1/surname",
    "comment" : {
      "undefined" : "The surname of some person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "archaic",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "literal10"
  }, {
    "id" : "property34",
    "label" : {
      "IRI-based" : "member",
      "undefined" : "member"
    },
    "iri" : "http://xmlns.com/foaf/0.1/member",
    "comment" : {
      "undefined" : "Indicates a member of a Group"
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "domain" : "class17",
    "range" : "class3"
  }, {
    "id" : "property15",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class15",
    "range" : "class10"
  }, {
    "id" : "property76",
    "label" : {
      "IRI-based" : "msnChatID",
      "undefined" : "MSN chat ID"
    },
    "iri" : "http://xmlns.com/foaf/0.1/msnChatID",
    "comment" : {
      "undefined" : "An MSN chat ID"
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "literal19",
    "superproperty" : [ "property81" ]
  }, {
    "id" : "property9",
    "label" : {
      "IRI-based" : "Disjoint With"
    },
    "domain" : "class4",
    "range" : "class15"
  }, {
    "id" : "property60",
    "label" : {
      "IRI-based" : "family_name",
      "undefined" : "family_name"
    },
    "iri" : "http://xmlns.com/foaf/0.1/family_name",
    "comment" : {
      "undefined" : "The family name of some person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "archaic",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "literal3"
  }, {
    "id" : "property8",
    "label" : {
      "IRI-based" : "Disjoint With"
    },
    "domain" : "class9",
    "range" : "class16"
  }, {
    "id" : "property7",
    "label" : {
      "IRI-based" : "Disjoint With"
    },
    "domain" : "class15",
    "range" : "class16"
  }, {
    "id" : "property63",
    "label" : {
      "IRI-based" : "skypeID",
      "undefined" : "Skype ID"
    },
    "iri" : "http://xmlns.com/foaf/0.1/skypeID",
    "comment" : {
      "undefined" : "A Skype ID"
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "literal6",
    "superproperty" : [ "property81" ]
  }, {
    "id" : "property6",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class13",
    "range" : "class5"
  }, {
    "id" : "property5",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class12",
    "range" : "class5"
  }, {
    "id" : "property70",
    "label" : {
      "IRI-based" : "givenName",
      "undefined" : "Given name"
    },
    "iri" : "http://xmlns.com/foaf/0.1/givenName",
    "comment" : {
      "undefined" : "The given name of some person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "literal13"
  }, {
    "id" : "property54",
    "label" : {
      "IRI-based" : "primaryTopic",
      "undefined" : "primary topic"
    },
    "iri" : "http://xmlns.com/foaf/0.1/primaryTopic",
    "comment" : {
      "undefined" : "The primary topic of some page or document."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "functional" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "domain" : "class9",
    "range" : "thing2",
    "inverse" : "property41"
  }, {
    "id" : "property18",
    "label" : {
      "IRI-based" : "accountServiceHomepage",
      "undefined" : "account service homepage"
    },
    "iri" : "http://xmlns.com/foaf/0.1/accountServiceHomepage",
    "comment" : {
      "undefined" : "Indicates a homepage of the service provide for this online account."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class5",
    "range" : "class9"
  }, {
    "id" : "property13",
    "label" : {
      "IRI-based" : "Disjoint With"
    },
    "domain" : "class4",
    "range" : "class9"
  }, {
    "id" : "property30",
    "label" : {
      "IRI-based" : "theme",
      "undefined" : "theme"
    },
    "iri" : "http://xmlns.com/foaf/0.1/theme",
    "comment" : {
      "undefined" : "A theme."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "archaic",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "thing4"
  }, {
    "id" : "property12",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class18",
    "range" : "class9"
  }, {
    "id" : "property83",
    "label" : {
      "IRI-based" : "age",
      "undefined" : "age"
    },
    "iri" : "http://xmlns.com/foaf/0.1/age",
    "comment" : {
      "undefined" : "The age in years of some agent."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "functional" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "unstable",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "literal26"
  }, {
    "id" : "property11",
    "label" : {
      "IRI-based" : "Subclass Of"
    },
    "domain" : "class21",
    "range" : "class9"
  }, {
    "id" : "property49",
    "label" : {
      "IRI-based" : "mbox",
      "undefined" : "personal mailbox"
    },
    "iri" : "http://xmlns.com/foaf/0.1/mbox",
    "comment" : {
      "undefined" : "A  personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox. This is a 'static inverse functional property', in that  there is (across time and change) at most one individual that ever has any particular value for foaf:mbox."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "inverse functional" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "thing1"
  }, {
    "id" : "property71",
    "label" : {
      "IRI-based" : "lastName",
      "undefined" : "lastName"
    },
    "iri" : "http://xmlns.com/foaf/0.1/lastName",
    "comment" : {
      "undefined" : "The last name of a person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "literal14"
  }, {
    "id" : "property47",
    "label" : {
      "IRI-based" : "workInfoHomepage",
      "undefined" : "work info homepage"
    },
    "iri" : "http://xmlns.com/foaf/0.1/workInfoHomepage",
    "comment" : {
      "undefined" : "A work info homepage of some person; a page about their work for some organization."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "class9"
  }, {
    "id" : "property32",
    "label" : {
      "IRI-based" : "pastProject",
      "undefined" : "past project"
    },
    "iri" : "http://xmlns.com/foaf/0.1/pastProject",
    "comment" : {
      "undefined" : "A project this person has previously worked on."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "thing5"
  }, {
    "id" : "property62",
    "label" : {
      "IRI-based" : "yahooChatID",
      "undefined" : "Yahoo chat ID"
    },
    "iri" : "http://xmlns.com/foaf/0.1/yahooChatID",
    "comment" : {
      "undefined" : "A Yahoo chat ID"
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "literal5",
    "superproperty" : [ "property81" ]
  }, {
    "id" : "property19",
    "label" : {
      "IRI-based" : "thumbnail",
      "undefined" : "thumbnail"
    },
    "iri" : "http://xmlns.com/foaf/0.1/thumbnail",
    "comment" : {
      "undefined" : "A derived thumbnail image."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class21",
    "range" : "class21"
  }, {
    "id" : "property81",
    "label" : {
      "IRI-based" : "nick",
      "undefined" : "nickname"
    },
    "iri" : "http://xmlns.com/foaf/0.1/nick",
    "comment" : {
      "undefined" : "A short informal nickname characterising an agent (includes login identifiers, IRC and other chat nicknames)."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "literal24",
    "subproperty" : [ "property48", "property57", "property24", "property63", "property36" ]
  }, {
    "id" : "property50",
    "label" : {
      "IRI-based" : "focus",
      "undefined" : "focus"
    },
    "iri" : "http://xmlns.com/foaf/0.1/focus",
    "comment" : {
      "undefined" : "The underlying or 'focal' entity associated with some SKOS-described concept."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class11",
    "range" : "thing6"
  }, {
    "id" : "property42",
    "label" : {
      "IRI-based" : "knows",
      "undefined" : "knows"
    },
    "iri" : "http://xmlns.com/foaf/0.1/knows",
    "comment" : {
      "undefined" : "A person known by this person (indicating some level of reciprocated interaction between the parties)."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "stable",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "class15"
  }, {
    "id" : "property82",
    "label" : {
      "IRI-based" : "plan",
      "undefined" : "plan"
    },
    "iri" : "http://xmlns.com/foaf/0.1/plan",
    "comment" : {
      "undefined" : "A .plan comment, in the tradition of finger and '.plan' files."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "literal25"
  }, {
    "id" : "property51",
    "label" : {
      "IRI-based" : "phone",
      "undefined" : "phone"
    },
    "iri" : "http://xmlns.com/foaf/0.1/phone",
    "comment" : {
      "undefined" : "A phone,  specified using fully qualified tel: URI scheme (refs: http://www.w3.org/Addressing/schemes.html#tel)."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "thing4"
  }, {
    "id" : "property64",
    "label" : {
      "IRI-based" : "mbox_sha1sum",
      "undefined" : "sha1sum of a personal mailbox URI name"
    },
    "iri" : "http://xmlns.com/foaf/0.1/mbox_sha1sum",
    "comment" : {
      "undefined" : "The sha1sum of the URI of an Internet mailbox associated with exactly one owner, the  first owner of the mailbox."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "literal7"
  }, {
    "id" : "property35",
    "label" : {
      "IRI-based" : "fundedBy",
      "undefined" : "funded by"
    },
    "iri" : "http://xmlns.com/foaf/0.1/fundedBy",
    "comment" : {
      "undefined" : "An organization funding a project or person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "archaic",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "thing4"
  }, {
    "id" : "property44",
    "label" : {
      "IRI-based" : "account",
      "undefined" : "account"
    },
    "iri" : "http://xmlns.com/foaf/0.1/account",
    "comment" : {
      "undefined" : "Indicates an account held by this agent."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "class5"
  }, {
    "id" : "property74",
    "label" : {
      "IRI-based" : "geekcode",
      "undefined" : "geekcode"
    },
    "iri" : "http://xmlns.com/foaf/0.1/geekcode",
    "comment" : {
      "undefined" : "A textual geekcode for this person, see http://www.geekcode.com/geek.html"
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "archaic",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "literal17"
  }, {
    "id" : "property25",
    "label" : {
      "IRI-based" : "publications",
      "undefined" : "publications"
    },
    "iri" : "http://xmlns.com/foaf/0.1/publications",
    "comment" : {
      "undefined" : "A link to the publications of this person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "class9"
  }, {
    "id" : "property72",
    "label" : {
      "IRI-based" : "accountName",
      "undefined" : "account name"
    },
    "iri" : "http://xmlns.com/foaf/0.1/accountName",
    "comment" : {
      "undefined" : "Indicates the name (identifier) associated with this online account."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class5",
    "range" : "literal15"
  }, {
    "id" : "property73",
    "label" : {
      "IRI-based" : "icqChatID",
      "undefined" : "ICQ chat ID"
    },
    "iri" : "http://xmlns.com/foaf/0.1/icqChatID",
    "comment" : {
      "undefined" : "An ICQ chat ID"
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "literal16",
    "superproperty" : [ "property81" ]
  }, {
    "id" : "property23",
    "label" : {
      "IRI-based" : "interest",
      "undefined" : "interest"
    },
    "iri" : "http://xmlns.com/foaf/0.1/interest",
    "comment" : {
      "undefined" : "A page about a topic of interest to this person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "class9"
  }, {
    "id" : "property40",
    "label" : {
      "IRI-based" : "img",
      "undefined" : "image"
    },
    "iri" : "http://xmlns.com/foaf/0.1/img",
    "comment" : {
      "undefined" : "An image that can be used to represent some thing (ie. those depictions which are particularly representative of something, eg. one's photo on a homepage)."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "class21",
    "superproperty" : [ "property29" ]
  }, {
    "id" : "property28",
    "label" : {
      "IRI-based" : "openid",
      "undefined" : "openid"
    },
    "iri" : "http://xmlns.com/foaf/0.1/openid",
    "comment" : {
      "undefined" : "An OpenID for an Agent."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "attributes" : [ "inverse functional" ],
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class3",
    "range" : "class9",
    "superproperty" : [ "property41" ]
  }, {
    "id" : "property69",
    "label" : {
      "IRI-based" : "givenname",
      "undefined" : "Given name"
    },
    "iri" : "http://xmlns.com/foaf/0.1/givenname",
    "comment" : {
      "undefined" : "The given name of some person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "archaic",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "literal12"
  }, {
    "id" : "property75",
    "label" : {
      "IRI-based" : "myersBriggs",
      "undefined" : "myersBriggs"
    },
    "iri" : "http://xmlns.com/foaf/0.1/myersBriggs",
    "comment" : {
      "undefined" : "A Myers Briggs (MBTI) personality classification."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "literal18"
  }, {
    "id" : "property66",
    "label" : {
      "IRI-based" : "jabberID",
      "undefined" : "jabber ID"
    },
    "iri" : "http://xmlns.com/foaf/0.1/jabberID",
    "comment" : {
      "undefined" : "A jabber ID for something."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "thing4",
    "range" : "literal9"
  }, {
    "id" : "property53",
    "label" : {
      "IRI-based" : "schoolHomepage",
      "undefined" : "schoolHomepage"
    },
    "iri" : "http://xmlns.com/foaf/0.1/schoolHomepage",
    "comment" : {
      "undefined" : "A homepage of a school attended by the person."
    },
    "isDefinedBy" : "http://xmlns.com/foaf/0.1/",
    "annotations" : {
      "term_status" : [ {
        "identifier" : "term_status",
        "language" : "undefined",
        "value" : "testing",
        "type" : "label"
      } ]
    },
    "domain" : "class15",
    "range" : "class9"
  } ]
}