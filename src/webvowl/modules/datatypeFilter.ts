import { ElementTools } from '../util/elementTools'
import { FilterTools } from '../util/filterTools'

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
        var filteredData = FilterTools.filterNodesAndTidy(DatatypeFilter.nodes, DatatypeFilter.properties, DatatypeFilter.isNoDatatypeOrLiteral);

        DatatypeFilter.nodes = filteredData.nodes;
        DatatypeFilter.properties = filteredData.properties;
    }

    private static isNoDatatypeOrLiteral(node) {
        return !ElementTools.isDatatype(node);
    }
}