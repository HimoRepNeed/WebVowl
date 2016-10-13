import { LanguageTools } from '../util/languageTools';

export interface IBaseElement {
    equivalents: any[];
    id: string;
    label: string;
    type: string;
    iri: string;
    baseIri: string;

    // Additional attributes
    backgroundColor
    comment: string;
    description: string;
    equivalentBase;
    visualAttributes: any[];
    // Style attributes
    focused: boolean;
    indications: any[];
    mouseEntered: boolean;
    styleClass: string;
    visible: boolean;

    attributes: any[];
    annotations;
}

export class BaseElement implements IBaseElement {

    equivalents: any[] = [];
    id: string;
    label: string;
    type: string;
    iri: string;
    baseIri: string;

    // Additional attributes
    backgroundColor
    comment: string;
    description: string;
    equivalentBase;
    visualAttributes: any[] = [];
    // Style attributes
    focused: boolean = false;
    indications: any[] = [];
    mouseEntered: boolean = false;
    styleClass: string;
    visible: boolean = true;

    attributes: any[] = [];
    annotations;

    constructor(protected graph) {

    }

    commentForCurrentLanguage = () => {
        return LanguageTools.textInLanguage(this.comment, this.graph.language);
    }

    cssClassOfNode() {
        return 'node' + this.id;
    }

    descriptionForCurrentLanguage = () => {
        return LanguageTools.textInLanguage(this.description, this.graph.language);
    };

    defaultLabel = () => {
        return LanguageTools.textInLanguage(this.label, "default");
    };

    indicationString() {
        return this.indications.join(', ');
    }

    labelForCurrentLanguage() {
        var preferredLanguage = this.graph && this.graph.language ? this.graph.language : null;
        return LanguageTools.textInLanguage(this.label, preferredLanguage);
    }

    equals = (other: any): boolean => {
        return other instanceof BaseElement && this.id === other.id;
    }

    toString = (): string => {
        return this.labelForCurrentLanguage() + ' (' + this.type + ')';
    }

}

// export interface IBaseNode extends IBase {
//     complement;
//     disjointUnion;
//     disjointWith;
//     individuals;
//     intersection;
//     union;
//     links;
// }

// export class BaseNode extends Base implements IBaseNode {

//     complement;
//     disjointUnion;
//     disjointWith;
//     individuals = [];
//     intersection;
//     union;
//     links;

//     constructor(graph) {
//         super(graph);
//     }
// }

// export class RectangularNode extends BaseNode {

//     private height: number = 20;
//     private width: number = 60;
//     private pinGroupElement;
//     private smallestRadius: number = this.height / 2;

//     constructor(graph) {
//         super(graph);
//     }
// }

// export interface IRoundNode extends IBaseNode {
//     collapsible: boolean;
//     radius: number;
//     collapsingGroupElement;
//     pinGroupElement;
//     textBlock;
// }

// export class RoundNode extends BaseNode implements IRoundNode  {

//     collapsible: boolean = false;
//     radius: number = 50;
//     collapsingGroupElement;
//     pinGroupElement;
//     textBlock;

//     constructor(graph) {
//         super(graph);
//     }
// }