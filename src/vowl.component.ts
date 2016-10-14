//import { Math } from './webvowl/util/math';
import { Graph } from './webvowl/graph';
import { owl1 } from '././data/owl1';
import { owl2 } from '././data/owl2';
import { benchmark } from '././data/benchMark'
import { goodrelation } from '././data/goodRelation'
import { sioc } from '././data/sioc'
import { muto } from '././data/muto'
import { cust_w_ann } from '././data/cust_with_annotations'
import { Vowl } from './model/vowl.interface'
import { context1, graph1 } from '././data/customer'
import { marcos } from '././data/CustomerCox_from Marcos'
//import * as jsonld from 'jsonld';
import * as rdflib from 'rdflib'


export class VowlController {

  vowldata;
  graph: Graph;

  data = `<?xml version="1.0" encoding="UTF-8"?>
    <rdf:RDF
   xmlns:owl="http://www.w3.org/2002/07/owl#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
    >
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/hasPurpose">
    <rdfs:range rdf:resource="http://ontology.onesourcetax.com/core/Purpose"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#ObjectProperty"/>
    <rdfs:domain rdf:resource="http://ontology.onesourcetax.com/core/Customer"/>
  </rdf:Description>
  <rdf:Description rdf:nodeID="Nc49301d7b81a454ab6e67374043b93ad">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Restriction"/>
    <owl:maxQualifiedCardinality rdf:datatype="http://www.w3.org/2001/XMLSchema#nonNegativeInteger">1</owl:maxQualifiedCardinality>
    <owl:onClass rdf:resource="http://ontology.onesourcetax.com/core/SourceProduct"/>
    <owl:onProperty rdf:resource="http://ontology.onesourcetax.com/core/sourcedFromApp"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/asOf">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#DatatypeProperty"/>
    <rdfs:domain rdf:resource="http://ontology.onesourcetax.com/core/UnitProperties"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#dateTime"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Ontology"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/hasUnitType">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#DatatypeProperty"/>
    <rdfs:domain rdf:resource="http://ontology.onesourcetax.com/core/UnitProperties"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/hasCode">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#DatatypeProperty"/>
    <rdfs:domain rdf:resource="http://ontology.onesourcetax.com/core/UnitProperties"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>
  </rdf:Description>
  <rdf:Description rdf:nodeID="N8c9d2c4c93a14d43a94bd25723f07391">
    <owl:onProperty rdf:resource="http://ontology.onesourcetax.com/core/sourcedFromApp"/>
    <owl:minQualifiedCardinality rdf:datatype="http://www.w3.org/2001/XMLSchema#nonNegativeInteger">0</owl:minQualifiedCardinality>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Restriction"/>
    <owl:onClass rdf:resource="http://ontology.onesourcetax.com/core/SourceProduct"/>
  </rdf:Description>
  <rdf:Description rdf:nodeID="Ncc776e565eb748888773dacb995171d4">
    <owl:onProperty rdf:resource="http://ontology.onesourcetax.com/core/relatesToUnit"/>
    <owl:onClass rdf:resource="http://ontology.onesourcetax.com/core/Unit"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Restriction"/>
    <owl:minQualifiedCardinality rdf:datatype="http://www.w3.org/2001/XMLSchema#nonNegativeInteger">1</owl:minQualifiedCardinality>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/relatesToUnit">
    <rdfs:range rdf:resource="http://ontology.onesourcetax.com/core/Unit"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#ObjectProperty"/>
    <rdfs:domain rdf:resource="http://ontology.onesourcetax.com/core/UnitProperties"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/hasName">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#DatatypeProperty"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>
    <rdfs:domain rdf:resource="http://ontology.onesourcetax.com/core/UnitProperties"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/Unit">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Class"/>
    <rdfs:subClassOf rdf:nodeID="Nc49301d7b81a454ab6e67374043b93ad"/>
    <rdfs:subClassOf rdf:nodeID="N8c9d2c4c93a14d43a94bd25723f07391"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/isLocatedIn">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#DatatypeProperty"/>
    <rdfs:domain rdf:resource="http://ontology.onesourcetax.com/core/UnitProperties"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/sourcedFromApp">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#ObjectProperty"/>
    <rdfs:domain rdf:resource="http://ontology.onesourcetax.com/core/Unit"/>
    <rdfs:range rdf:resource="http://ontology.onesourcetax.com/core/SourceProduct"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/assignToDeliverable">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#ObjectProperty"/>
    <rdfs:domain rdf:resource="http://ontology.onesourcetax.com/core/Purpose"/>
    <rdfs:range rdf:resource="http://ontology.onesourcetax.com/core/Deliverable"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/Customer">
    <rdfs:subClassOf rdf:nodeID="N5dd0d0126fdf4081873ae1a026f002b6"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Class"/>
  </rdf:Description>
  <rdf:Description rdf:nodeID="N5dd0d0126fdf4081873ae1a026f002b6">
    <owl:onClass rdf:resource="http://ontology.onesourcetax.com/core/Purpose"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Restriction"/>
    <owl:onProperty rdf:resource="http://ontology.onesourcetax.com/core/hasPurpose"/>
    <owl:minQualifiedCardinality rdf:datatype="http://www.w3.org/2001/XMLSchema#nonNegativeInteger">0</owl:minQualifiedCardinality>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/hasTaxType">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#ObjectProperty"/>
    <rdfs:range rdf:resource="http://ontology.onesourcetax.com/core/TaxType"/>
    <rdfs:domain rdf:resource="http://ontology.onesourcetax.com/core/Deliverable"/>
  </rdf:Description>
  <rdf:Description rdf:nodeID="N8a44f81144014453a1b76f4fbcf96d51">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Restriction"/>
    <owl:onClass rdf:resource="http://ontology.onesourcetax.com/core/Deliverable"/>
    <owl:minQualifiedCardinality rdf:datatype="http://www.w3.org/2001/XMLSchema#nonNegativeInteger">1</owl:minQualifiedCardinality>
    <owl:onProperty rdf:resource="http://ontology.onesourcetax.com/core/assignToDeliverable"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/EndDate">
    <rdfs:subClassOf rdf:resource="http://ontology.onesourcetax.com/core/Time"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Class"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/relatesToUnitProperties">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#ObjectProperty"/>
    <rdfs:domain rdf:resource="http://ontology.onesourcetax.com/core/Deliverable"/>
    <rdfs:range rdf:resource="http://ontology.onesourcetax.com/core/UnitProperties"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/Deliverable">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Class"/>
    <rdfs:subClassOf rdf:nodeID="N69cbcc023b854e2b8e270e0a56256797"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/UnitProperties">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Class"/>
    <rdfs:subClassOf rdf:nodeID="Ncc776e565eb748888773dacb995171d4"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/TaxType">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Class"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/Quarter">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Class"/>
    <rdfs:subClassOf rdf:resource="http://ontology.onesourcetax.com/core/Time"/>
  </rdf:Description>
  <rdf:Description rdf:nodeID="N69cbcc023b854e2b8e270e0a56256797">
    <owl:onProperty rdf:resource="http://ontology.onesourcetax.com/core/relatesToUnitProperties"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Restriction"/>
    <owl:minQualifiedCardinality rdf:datatype="http://www.w3.org/2001/XMLSchema#nonNegativeInteger">1</owl:minQualifiedCardinality>
    <owl:onClass rdf:resource="http://ontology.onesourcetax.com/core/UnitProperties"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/SourceProduct">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Class"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/StartDate">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Class"/>
    <rdfs:subClassOf rdf:resource="http://ontology.onesourcetax.com/core/Time"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/Purpose">
    <rdfs:subClassOf rdf:nodeID="N8a44f81144014453a1b76f4fbcf96d51"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Class"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/Period">
    <rdfs:subClassOf rdf:resource="http://ontology.onesourcetax.com/core/Time"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Class"/>
  </rdf:Description>
  <rdf:Description rdf:about="http://ontology.onesourcetax.com/core/Time">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Class"/>
  </rdf:Description>
</rdf:RDF>

`

  constructor() {
    // var contentType = 'application/rdf+xml';
    // var baseUrl = "";
    // var store = rdflib.graph();
    // rdflib.parse(this.data, store, baseUrl, contentType);
    // var stms = store.statementsMatching(undefined, undefined, undefined);
    // jsonld.compact(graph1, context1, function (err, comp) {
    //     console.log(JSON.stringify(comp))
    // });
    this.vowldata = marcos; //Vowl.FromJSON((owl2));
  }

  $onInit = () => {
    this.graph = new Graph('#graph', this.vowldata);
    this.graph.start();
  }
}

export class VOWL implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      vowldata: '<'
    };
    this.controller = VowlController;
    this.template = require("./vowl.tpl.html");
  }
}