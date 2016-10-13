//import { Math } from './webvowl/util/math';
import { Graph } from './webvowl/graph';
import { owl1 } from '././data/owl1';
import { owl2 } from '././data/owl2';
import { benchmark } from '././data/benchMark'
import { goodrelation } from '././data/goodRelation'
import { sioc } from '././data/sioc'
import { muto } from '././data/muto'
import { Vowl } from './model/vowl.interface'
export class VowlController {

    vowldata;
    graph: Graph;


    constructor() {
        this.vowldata = muto; //Vowl.FromJSON((owl2));
    }

    $onInit = () => {
        this.graph = new Graph('#graph', this.vowldata);
        this.graph.start();
    }
}

export class VOWL implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public template: string;

    constructor() {
        this.bindings = {
            vowldata: '<'
        };
        this.controller = VowlController;
        this.template = require("./vowl.tpl.html");
    }
}