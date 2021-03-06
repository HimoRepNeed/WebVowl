// import { IVowl } from '.././model/vowl.interface'
/// <reference path=".././model/vowl.interface.ts" />

namespace TRVOWL {
    export class Options {
        static data: TRVOWL.model.IVowl;
        static graphContainerSelector: string;
        static classDistance: number = 200;
        static datatypeDistance: number = 120;
        static loopDistance: number = 100;
        static charge: number = -500;
        static gravity: number = 0.025;
        static linkStrength: number = 1;
        static height: number = 940;
        static width: number = 1890;
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
        static force;
        static dragBehaviour;
        static nodeElements;
    }
}