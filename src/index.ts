// import { VOWL } from './vowl.component';
/// <reference path="./vowl.component.ts" />

// angular.module("vowl", [])
//     .component('vowl', new VOWL());

//angular.bootstrap(document, x, { strictDi: true });


namespace TRVOWL {
    export class app {
        private static _module: ng.IModule;
        constructor() {

        }

        public static get module(): ng.IModule {
            if (this._module) { return this._module; }
            this._module = angular.module('vowl', []);
            this._module.component('vowl', new TRVOWL.component.VOWL());
            return this._module;
        }
    }
}

var x = TRVOWL.app.module;