/// <reference path="./baseNode.ts" />
/// <reference path="./implementation/ExternalClass.ts" />
/// <reference path="./implementation/owlClass.ts" />
/// <reference path="./implementation/owlComplementOf.ts" />
/// <reference path="./implementation/OWLDeprecatedClass.ts" />
/// <reference path="./implementation/OwlEquivalentClass.ts" />
/// <reference path="./implementation/OwlThing.ts" />
/// <reference path="./implementation/RdfsLiteral.ts" />
/// <reference path="./implementation/RdfsDatatype.ts" />
/// <reference path="./implementation/OwlDisjointUnionOf.ts" />
/// <reference path="./implementation/OwlIntersectionOf.ts" />
/// <reference path="./implementation/OwlunionOf.ts" />
/// <reference path="./implementation/OwlNothing.ts" />
/// <reference path="./implementation/RdfsClass.ts" />
/// <reference path="./implementation/RdfsResource.ts" />
/// <reference path="./implementation/OwlinstanceClass.ts" />

namespace TRVOWL.elements {
    export class NodeFactory {
        static GetNode(graph, type: string): BaseNode {
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
}