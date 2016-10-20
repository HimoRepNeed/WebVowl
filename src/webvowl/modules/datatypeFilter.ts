/// <reference path="../util/elementTools.ts" />
/// <reference path="../util/filterTools.ts" />

namespace TRVOWL.modules {
    export class DatatypeFilter {
        static nodes;
        static properties;
        static enabled: boolean = false;
        static filteredNodes;
        static filteredProperties;

        static filter(untouchedNodes, untouchedProperties) {
            DatatypeFilter.nodes = untouchedNodes;
            DatatypeFilter.properties = untouchedProperties;

            if (DatatypeFilter.enabled) {
                DatatypeFilter.removeDatatypesAndLiterals();
            }

            DatatypeFilter.filteredNodes = DatatypeFilter.nodes;
            DatatypeFilter.filteredProperties = DatatypeFilter.properties;
        }

        private static removeDatatypesAndLiterals() {
            var filteredData = TRVOWL.util.FilterTools.filterNodesAndTidy(DatatypeFilter.nodes, DatatypeFilter.properties, DatatypeFilter.isNoDatatypeOrLiteral);

            DatatypeFilter.nodes = filteredData.nodes;
            DatatypeFilter.properties = filteredData.properties;
        }

        private static isNoDatatypeOrLiteral(node) {
            return !TRVOWL.util.ElementTools.isDatatype(node);
        }
    }
}