//import { Math } from './webvowl/util/math';

// import { owl1 } from '././data/owl1';
// import { owl2 } from '././data/owl2';
// import { benchmark } from '././data/benchMark'
// import { goodrelation } from '././data/goodRelation'
// import { sioc } from '././data/sioc'
// import { muto } from '././data/muto'
// import { cust_w_ann } from '././data/cust_with_annotations'
// import { Vowl } from './model/vowl.interface'
// import { context1, graph1 } from '././data/customer'

// import { cust_jsonld } from '././data/customer_jsonld'
// import * as jsonld from 'jsonld';
// //import * as rdflib from 'rdflib'

// export class VowlController {

//   vowldata;
//   graph: Graph;
//   constructor() {
//     this.vowldata = marcos;
//   }

//   $onInit = () => {
//     this.graph = new Graph('#graph', this.vowldata);
//     this.graph.start();
//   }
// }



// export class VOWL implements ng.IComponentOptions {
//   public bindings: any;
//   public controller: any;
//   public template: string;

//   constructor() {
//     this.bindings = {
//       vowldata: '<'
//     };
//     this.controller = VowlController;
//     this.template = require("./vowl.tpl.html");
//   }
// }


/// <reference path="./webvowl/graph.ts" />
/// <reference path="././data/CustomerCox_from Marcos.ts" />
/// <reference path="./vowl.tpl.html.ts" />

namespace TRVOWL.component {
  export class VowlController {

    vowldata;
    graph: Graph;
    constructor() {
      this.vowldata = TRVOWL.data.marcos;
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
      this.template = TRVOWL.template.graphTemplate;
    }
  }
}