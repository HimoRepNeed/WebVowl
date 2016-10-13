import { OWLObjectProperty } from './implementation/OwlObjectProperty'
import { OWLDisjointWith } from './implementation/OwlDisjointWith'
import { OWLDatatypeProperty } from './implementation/OwlDatatypeProperty'
import { SetOperatorProperty } from './implementation/SetOperatorProperty'
import { RDFSSubClassOf } from './implementation/RdfsSubClassOf'
import { OWLAllValuesFromProperty } from './implementation/OwlAllValuesFromProperty'
import { OWLDeprecatedProperty } from './implementation/OwlDeprecatedProperty'
import { OWLEquivalentProperty } from './implementation/OwlEquivalentProperty'
import { OWLFunctionalProperty } from './implementation/OwlFunctionalProperty'
import { OWLInverseFunctionalProperty } from './implementation/OwlInverFunctionalProperty'
import { OWLSymmetricProperty } from './implementation/OwlSymmetricproperty'
import { OWLSomeValuesFromProperty } from './implementation/OwlSomeValuesFromProperty'
import { OWLTransitiveProperty } from './implementation/OwlTransitiveProperty'
import { RDFProperty } from './implementation/RdfProperty'


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
        }

    }
}