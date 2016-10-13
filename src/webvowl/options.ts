import { IVowl } from '.././model/vowl.interface'

export class Options {
    static data: IVowl;
    static graphContainerSelector: string;
    static classDistance: number = 200;
    static datatypeDistance: number = 120;
    static loopDistance: number = 100;
    static charge: number = -500;
    static gravity: number = 0.025;
    static linkStrength: number = 1;
    static height: number = 1050;
    static width: number = 1400;
    static selectionModules = [];
    static filterModules = [];
    static minMagnification: number = 0.1;
    static maxMagnification: number = 4;
    static compactNotation: boolean = false;
    static scaleNodesByIndividuals: boolean = false;

    static classNodes;
    static labelNodes;
    static links;
    static properties;
    static unfilteredData;

    static nodeElements;
}