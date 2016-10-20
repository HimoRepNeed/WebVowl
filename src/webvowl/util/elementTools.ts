/// <reference path="../elements/links/Label.ts" />
/// <reference path="../elements/nodes/BaseNode.ts" />
/// <reference path="../elements/nodes/DatatypeNode.ts" />
/// <reference path="../elements/nodes/implementation/OwlThing.ts" />
/// <reference path="../elements/properties/baseProperty.ts" />
/// <reference path="../elements/properties/implementation/OwlObjectProperty.ts" />
/// <reference path="../elements/properties/implementation/RdfsSubClassOf.ts" />
/// <reference path="../elements/properties/implementation/OwlDatatypeProperty.ts" />

namespace TRVOWL.util {
    export class ElementTools {

        static isLabel = (element): boolean => {
            return element instanceof TRVOWL.elements.Label;
        }

        static isNode = (element): boolean => {
            return element instanceof TRVOWL.elements.BaseNode;
        }

        static isDatatype = (element): boolean => {
            return element instanceof TRVOWL.elements.DatatypeNode;
        }

        static isDatatypeProperty = (element) => {
            return element instanceof TRVOWL.elements.OWLDatatypeProperty;
        };

        static isRdfsSubClassOf = (element) => {
            return element instanceof TRVOWL.elements.RDFSSubClassOf;
        }

        static isThing = (element) => {
            return element instanceof TRVOWL.elements.OWLThing;
        }

        static isProperty = function (element) {
            return element instanceof TRVOWL.elements.BaseProperty;
        };

        isObjectProperty = function (element) {
            return element instanceof TRVOWL.elements.OWLObjectProperty;
        };
    }
}