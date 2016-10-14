import { BaseNode } from './baseNode'
import { ExternalClass } from './implementation/ExternalClass';
import { OwlClass } from './implementation/owlClass';
import { OWLComplementOf } from './implementation/owlComplementOf';
import { OWLDeprecatedClass } from './implementation/OWLDeprecatedClass';
import { OWLEquivalentClass } from './implementation/OwlEquivalentClass';
import { OWLThing } from './implementation/OwlThing';
import { RDFSLiteralNode } from './implementation/RdfsLiteral';
import { RDFSDatatypeNode } from './implementation/RdfsDatatype';
import { OWLDisojointUnionOf } from './implementation/OwlDisjointUnionOf'
import { OWLInterSectionOf } from './implementation/OwlIntersectionOf'
import { OWLUnionOf } from './implementation/OwlunionOf'
import { OWLNothing } from './implementation/OwlNothing'
import { RDFSClass } from './implementation/RdfsClass'
import { RDFSResourceClass } from './implementation/RdfsResource'
import { OWLInstanceClass } from './implementation/OwlinstanceClass'

export class NodeFactory {
    static GetNode(graph, type: string): any {
        type = type.toLowerCase();
        if (type === 'externalclass') {
            let externalClass = new ExternalClass(graph);
            return externalClass;
        } else if (type === 'owl:class') {
            let owlClass = new OwlClass(graph);
            return owlClass;
        }
        else if (type === 'owl:complementof') {
            let owlComplementOf = new OWLComplementOf(graph);
            return owlComplementOf;
        }
        else if (type === 'owl:deprecatedclass') {
            let owlDeprecatedClass = new OWLDeprecatedClass(graph);
            return owlDeprecatedClass;
        }
        else if (type === 'owl:equivalentclass') {
            let owlEquivalentClass = new OWLEquivalentClass(graph);
            return owlEquivalentClass;
        }
        else if (type === 'owl:thing') {
            let owlthing = new OWLThing(graph);
            return owlthing;
        }//
        else if (type === 'rdfs:literal') {
            let rdfsLiteralNode = new RDFSLiteralNode(graph);
            return rdfsLiteralNode;
        }//
        else if (type === 'rdfs:datatype') {
            let rdfsDatatypeNode = new RDFSDatatypeNode(graph);
            return rdfsDatatypeNode;
        }//
        else if (type === 'owl:disjointunionof') {
            let owldisjointUnionOf = new OWLDisojointUnionOf(graph);
            return owldisjointUnionOf;
        }//

        else if (type === 'owl:intersectionof') {
            let owlintersectionOf = new OWLInterSectionOf(graph);
            return owlintersectionOf;
        }//
        else if (type === 'owl:unionof') {
            let owlunionOf = new OWLUnionOf(graph);
            return owlunionOf;
        }//
        else if (type === 'owl:nothing') {
            let owlNothing = new OWLNothing(graph);
            return owlNothing;
        }//
        else if (type === 'rdfs:class') {
            let rdfsClass = new RDFSClass(graph);
            return rdfsClass;
        }//
        else if (type === 'rdfs:resource') {
            let rdfsResource = new RDFSResourceClass(graph);
            return rdfsResource;
        }
        //
        else if (type === 'owl:instanceclass') {
            let owlinstanceClass = new OWLInstanceClass(graph);
            return owlinstanceClass;
        }
    }
}