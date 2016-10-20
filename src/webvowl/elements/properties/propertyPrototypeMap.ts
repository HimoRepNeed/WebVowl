/// <reference path="./implementation/OwlObjectProperty.ts" />
/// <reference path="./implementation/OwlDisjointWith.ts" />
/// <reference path="./implementation/OwlDatatypeProperty.ts" />
/// <reference path="./implementation/SetOperatorProperty.ts" />
/// <reference path="./implementation/RdfsSubClassOf.ts" />
/// <reference path="./implementation/OwlAllValuesFromProperty.ts" />
/// <reference path="./implementation/OwlDeprecatedProperty.ts" />
/// <reference path="./implementation/OwlEquivalentProperty.ts" />
/// <reference path="./implementation/OwlFunctionalProperty.ts" />
/// <reference path="./implementation/OwlInverFunctionalProperty.ts" />
/// <reference path="./implementation/OwlSymmetricproperty.ts" />
/// <reference path="./implementation/OwlSomeValuesFromProperty.ts" />
/// <reference path="./implementation/OwlTransitiveProperty.ts" />
/// <reference path="./implementation/RdfProperty.ts" />
/// <reference path="./implementation/OwlIndividualProperty.ts" />

namespace TRVOWL.elements {
    export class PropertyFactory {

        static GetProperty(graph, type: string) {
            type = type.toLowerCase();
            if (type === 'owl:objectproperty') {
                return new OWLObjectProperty(graph);
            }
            else if (type === 'owl:disjointwith') {
                return new OWLDisjointWith(graph);
            }
            else if (type === 'owl:datatypeproperty') {
                return new OWLDatatypeProperty(graph);
            }
            else if (type === 'setoperatorproperty') {
                return new SetOperatorProperty(graph);
            }
            else if (type === 'rdfs:subclassof') {
                return new RDFSSubClassOf(graph);
            }
            else if (type === 'owl:allvaluesfrom') {
                return new OWLAllValuesFromProperty(graph);
            }
            else if (type === 'owl:deprecatedproperty') {
                return new OWLDeprecatedProperty(graph);
            }
            else if (type === 'owl:equivalentproperty') {
                return new OWLEquivalentProperty(graph);
            }
            else if (type === 'owl:functionalproperty') {
                return new OWLFunctionalProperty(graph);
            }
            else if (type === 'owl:inversefunctionalproperty') {
                return new OWLInverseFunctionalProperty(graph);
            }// //  
            else if (type === 'owl:symmetricproperty') {
                return new OWLSymmetricProperty(graph);
            }//
            else if (type === 'owl:somevaluesfrom') {
                return new OWLSomeValuesFromProperty(graph);
            }//
            else if (type === 'owl:transitiveproperty') {
                return new OWLTransitiveProperty(graph);
            }//
            else if (type === 'rdf:property') {
                return new RDFProperty(graph);
            }//
            else if (type === 'owl:individualproperty') {
                return new OWLIndividualProperty(graph);
            }

        }
    }
}