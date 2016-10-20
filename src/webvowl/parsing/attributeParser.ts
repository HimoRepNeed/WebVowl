namespace TRVOWL.parsing {
    export class AttributeParser {

        // Style
        private static ANONYMOUS: string = "anonymous";
        private static DATATYPE: any = "datatype";
        private static DEPRECATED: any = "deprecated";
        private static EXTERNAL: any = "external";
        private static OBJECT: any = "object";
        private static RDF: any = "rdf";
        // Representations
        private static ASYMMETRIC: any = "asymmetric";
        private static FUNCTIONAL: any = "functional";
        private static INVERSE_FUNCTIONAL: any = "inverse functional";
        private static IRREFLEXIVE: any = "irreflexive";
        private static KEY: any = "key";
        private static REFLEXIVE: any = "reflexive";
        private static SYMMETRIC: any = "symmetric";
        private static TRANSITIVE: any = "transitive";
        // Attribute groups
        private static VISUAL_ATTRIBUTE_GROUPS = [
            [AttributeParser.DEPRECATED, AttributeParser.DATATYPE, AttributeParser.OBJECT, AttributeParser.RDF],
            [AttributeParser.ANONYMOUS]
        ];
        private static CLASS_INDICATIONS = [AttributeParser.DEPRECATED, AttributeParser.EXTERNAL]
        private static PROPERTY_INDICATIONS = [AttributeParser.ASYMMETRIC, AttributeParser.FUNCTIONAL, AttributeParser.INVERSE_FUNCTIONAL, AttributeParser.IRREFLEXIVE, AttributeParser.KEY, AttributeParser.REFLEXIVE, AttributeParser.SYMMETRIC,
        AttributeParser.TRANSITIVE];

        static parseClassAttributes = (clazz) => {
            if (!(clazz.attributes instanceof Array)) {
                return;
            }

            AttributeParser.parseVisualAttributes(clazz);
            AttributeParser.parseClassIndications(clazz);
        };

        private static parseVisualAttributes = (element) => {
            AttributeParser.VISUAL_ATTRIBUTE_GROUPS.forEach(function (attributeGroup) {
                AttributeParser.setVisualAttributeOfGroup(element, attributeGroup);
            });
        }

        private static parseClassIndications = (clazz: any) => {
            var i, l, indication;

            for (i = 0, l = AttributeParser.CLASS_INDICATIONS.length; i < l; i++) {
                indication = AttributeParser.CLASS_INDICATIONS[i];

                if (clazz.attributes.indexOf(indication) >= 0) {
                    clazz.indications.push(indication);
                }
            }
        }

        private static parsePropertyIndications = (property: any) => {
            var i, l, indication;

            for (i = 0, l = AttributeParser.PROPERTY_INDICATIONS.length; i < l; i++) {
                indication = AttributeParser.PROPERTY_INDICATIONS[i];

                if (property.attributes.indexOf(indication) >= 0) {
                    property.indications.push(indication);
                }
            }
        }

        private static setVisualAttributeOfGroup = (element, group) => {
            var i, l, attribute;

            for (i = 0, l = group.length; i < l; i++) {
                attribute = group[i];
                if (element.attributes.indexOf(attribute) >= 0) {
                    element.visualAttributes.push(attribute);

                    // Just a single attribute is possible
                    break;
                }
            }
        }

        static parsePropertyAttributes = (property) => {
            if (!(property.attributes instanceof Array)) {
                return;
            }

            AttributeParser.parseVisualAttributes(property);
            AttributeParser.parsePropertyIndications(property);
        };
    }
}