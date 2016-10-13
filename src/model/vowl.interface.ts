export interface IObject {
    id: string;
    type: string;
}

export interface IClass extends IObject { }

export class Class implements IClass {
    id: string;
    type: string;

    constructor() { }

    static FromJSON = (data: any): Class => {
        let model = new Class();
        if (data) {
            model.id = data.id;
            model.type = data.type;
        }
        return model;
    }
}

export interface IDataType extends IObject { }

export class DataType implements IDataType {
    id: string;
    type: string;

    constructor() { }

    static FromJSON = (data: any): DataType => {
        let model = new DataType();
        if (data) {
            model.id = data.id;
            model.type = data.type;
        }
        return model;
    }
}
export interface IProperty extends IObject { }

export class Property implements IProperty {
    id: string;
    type: string;

    constructor() { }

    static FromJSON = (data: any): Property => {
        let model = new Property();
        if (data) {
            model.id = data.id;
            model.type = data.type;
        }
        return model;
    }
}

export interface ILabel {
    iri_based: string;
}

export class Label implements ILabel { 
    iri_based: string;

    constructor() { }

    static FromJSON = (data: any): Label => { 
        let model = new Label();
        if (data) { 
            model.iri_based = data.IRI_BASED;
        }
        return model;
    }
}

export interface IAttribute {
    id: string;
    label: ILabel;
    iri: string;
    instance: number;
    superClasses: string[];
    domain: string;
    range: string;
    minCardinality: number;
    maxCardinality: number;
    equivalent: string[]
}

export interface IClassAttribute extends IAttribute { }

export class ClassAttribute implements IClassAttribute {
    id: string;
    label: ILabel;
    iri: string;
    instance: number;
    superClasses: string[];
    domain: string;
    range: string;
    minCardinality: number;
    maxCardinality: number;
    equivalent: string[];

    constructor() { }

    static FromJSON = (data: any): ClassAttribute => {
        let model = new ClassAttribute();
        if (data) {
            model.id = data.id;
            model.label = Label.FromJSON(model.label);
            model.iri = data.iri;
            model.instance = data.instance;
            model.superClasses = data.superClassses && data.superClasses.length > 0 ? data.superClasses.map(function (s: string) { return s; }) : [];
            model.domain = data.domain;
            model.range = data.range;
            model.minCardinality =data.minCardinality;
            model.maxCardinality = data.maxCardinality;
            model.equivalent = model.equivalent && model.equivalent, length > 0 ? model.equivalent.map(function (e) { return e; }) : [];
        }
        return model;
    }
}
export interface IDatatypeAttribute extends IAttribute { }

export class DatatypeAttribute implements IDatatypeAttribute { 
    id: string;
    label: ILabel;
    iri: string;
    instance: number;
    superClasses: string[];
    domain: string;
    range: string;
    minCardinality: number;
    maxCardinality: number;

    constructor() { }

    static FromJSON = (data: any): DatatypeAttribute => {
        let model = new DatatypeAttribute();
        if (data) {
            model.id = data.id;
            model.label = Label.FromJSON(model.label);
            model.iri = data.iri;
            model.instance = data.instance;
            model.superClasses = data.superClassses && data.superClasses.length > 0 ? data.superClasses.map(function (s: string) { return s; }) : [];
            model.domain = data.domain;
            model.range = data.range;
            model.minCardinality =data.minCardinality;
            model.maxCardinality = data.maxCardinality;
        }
        return model;
    }
}

export interface IPropertyAttribute extends IAttribute { }

export class PropertyAttribute implements IPropertyAttribute { 
     id: string;
    label: ILabel;
    iri: string;
    instance: number;
    superClasses: string[];
    domain: string;
    range: string;
    minCardinality: number;
    maxCardinality: number;

    constructor() { }

    static FromJSON = (data: any): PropertyAttribute => {
        let model = new PropertyAttribute();
        if (data) {
            model.id = data.id;
            model.label = Label.FromJSON(model.label);
            model.iri = data.iri;
            model.instance = data.instance;
            model.superClasses = data.superClassses && data.superClasses.length > 0 ? data.superClasses.map(function (s: string) { return s; }) : [];
            model.domain = data.domain;
            model.range = data.range;
            model.minCardinality =data.minCardinality;
            model.maxCardinality = data.maxCardinality;
        }
        return model;
    }
}

export interface IHeader {
    languages: string[];
    iri: string;
}

export class Header implements IHeader {
    languages: string[];
    iri: string;

    constructor() { }

    static FromJSON = (data: any): Header => {
        let model = new Header();
        if (data) {
            model.iri = data.iri;
            model.languages = data.languages && data.languages.length > 0 ? data.languages.map(function (l: string) { return l; }) : [];
        }
        return model;
    }
}

export interface IMetrics {
    classCount: number;
    datatypeCount: number;
    objectPropertyCount: number;
    datatypePropertyCount: number;
    propertyCount: number;
    nodeCount: number;
    axiomCount: number;
    individualCount: number;
}

export class Metrics implements IMetrics {
    classCount: number;
    datatypeCount: number;
    objectPropertyCount: number;
    datatypePropertyCount: number;
    propertyCount: number;
    nodeCount: number;
    axiomCount: number;
    individualCount: number;

    constructor() { }

    static FromJSON = (data: any): Metrics => {
        let model = new Metrics();
        if (data) {
            model.classCount = data.classCount;
            model.datatypeCount = data.datatypeCount;
            model.objectPropertyCount = data.objectPropertyCount;
            model.datatypePropertyCount = data.datatypePropertyCount;
            model.propertyCount = data.propertyCount;
            model.nodeCount = data.nodeCount;
            model.axiomCount = data.axiomCount;
            model.individualCount = data.individualCount;
        }
        return model;
    }
}

export interface IVowl {
    _comment: string;
    namespace?: string[];
    header: IHeader;
    metrics: IMetrics;
    class: IClass[];
    classAttribute: IClassAttribute[];
    datatype: IDataType[];
    datatypeAttribute: IDatatypeAttribute[];
    property: IProperty[];
    propertyAttribute: IPropertyAttribute[];
}

export class Vowl implements IVowl {
    _comment: string;
    namespace?: string[];
    header: IHeader;
    metrics: IMetrics;
    class: IClass[];
    classAttribute: IClassAttribute[];
    datatype: IDataType[];
    datatypeAttribute: IDatatypeAttribute[];
    property: IProperty[];
    propertyAttribute: IPropertyAttribute[];

    constructor() {

    }

    static FromJSON = (data: any): Vowl => {
        let model = new Vowl();
        if (data) {
            model._comment = data._comment;
            model.namespace = data.namespace && data.namespace.length > 0 ? data.namespace.map(function (n: string) {
                return n;
            }) : [];
            model.header = Header.FromJSON(data.header);
            model.metrics = Metrics.FromJSON(data.metrics);
            model.class = data.class && data.class.length > 0 ? data.class.map(Class.FromJSON) : [];
            model.classAttribute = data.classsAttribute && data.classAttribute.length > 0 ? data.classAttribute.map(ClassAttribute.FromJSON) : [];
            model.datatype = data.datatype && data.datatype.length.length > 0 ? data.datatype.map(DataType.FromJSON) : [];
            model.datatypeAttribute = data.datatypeAttribute && data.datatypeAttribute.length > 0 ? data.datatypeAttribute.map(DatatypeAttribute.FromJSON) : [];
            model.property = data.property && data.property.length > 0 ? data.property.map(Property.FromJSON) : [];
            model.propertyAttribute = data.propertyAttribute && data.propertyAttribute.length > 0 ? data.propertyAttribute.map(PropertyAttribute.FromJSON) : [];
        }
        return model;
    }
}