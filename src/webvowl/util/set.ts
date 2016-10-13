

export class Set {

    private static _d3set;
    static d3set = (array) => {
        Set._d3set = d3.set(array);
    }
    static has = (vowlelement) => {
        return Set._d3set.has(vowlelement.id);
    }

    static add = (vowlelement) => {
        return Set._d3set.add(vowlelement.id)
    }
}