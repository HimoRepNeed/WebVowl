import { Label } from '../elements/links/Label';
import { BaseNode } from '../elements/nodes/BaseNode';
import { DatatypeNode } from '../elements/nodes/DatatypeNode';
import { RDFSSubClassOf } from '../elements/properties/implementation/RdfsSubClassOf';
import { OWLDatatypeProperty } from '../elements/properties/implementation/OwlDatatypeProperty';

export class ElementTools {

    static isLabel = (element): boolean => {
        return element instanceof Label;
    }

    static isNode = (element): boolean => {
        return element instanceof BaseNode;
    }

    static isDatatype = (element): boolean => {
        return element instanceof DatatypeNode;
    }

    static isDatatypeProperty = (element) => {
        return element instanceof OWLDatatypeProperty;
    };

    static isRdfsSubClassOf = (element) => {
        return element instanceof RDFSSubClassOf;
    }

}