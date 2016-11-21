/// <reference path="../util/languageTools.ts" />

namespace TRVOWL.elements {
    export interface IBaseElement {
        equivalents: IBaseElement[];
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

        equivalents: IBaseElement[] = [];
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
        active: boolean = true;
        attributes: string[] = [];
        annotations;

        constructor(protected graph) {

        }

        commentForCurrentLanguage = () => {
            return TRVOWL.util.LanguageTools.textInLanguage(this.comment, this.graph.language);
        }

        cssClassOfNode() {
            return 'node' + this.id;
        }

        descriptionForCurrentLanguage = () => {
            return TRVOWL.util.LanguageTools.textInLanguage(this.description, this.graph.language);
        };

        defaultLabel = () => {
            return TRVOWL.util.LanguageTools.textInLanguage(this.label, "default");
        };

        indicationString() {
            return this.indications.join(', ');
        }

        labelForCurrentLanguage() {
            var preferredLanguage = this.graph && this.graph.language ? this.graph.language : 'default';
            return TRVOWL.util.LanguageTools.textInLanguage(this.label, preferredLanguage);
        }

        equals = (other: any): boolean => {
            return other instanceof BaseElement && this.id === other.id;
        }

        toString = (): string => {
            return this.labelForCurrentLanguage() + ' (' + this.type + ')';
        }

    }
}