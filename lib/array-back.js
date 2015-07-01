"use strict";
var t = require("typical");

module.exports = arrayify;

function arrayify(input){
    if (input === undefined){
        return [];
    } else if (t.isArrayLike(input)){
        return Array.prototype.slice.call(input);
    } else {
        return Array.isArray(input) ? input : [ input ];
    }
}
