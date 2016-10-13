
import { VOWL } from './vowl.component';

angular.module("vowl", [])

    .component('vowl', new VOWL());

angular.bootstrap(document, ["vowl"], { strictDi: true });