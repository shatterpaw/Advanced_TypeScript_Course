"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writable = exports.logger = exports.sealed = void 0;
function sealed(name) {
    return function sealed(target) {
        console.log(`Sealing the constructor: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}
exports.sealed = sealed;
function logger(target) {
    let newConstructor = function () {
        console.log(`Creating a new instance.`);
        console.log(target);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
exports.logger = logger;
function writable(isWritable) {
    return function (target, propertyKey, descriptor) {
        console.log(`Setting ${propertyKey}`);
        descriptor.writable = isWritable;
    };
}
exports.writable = writable;
//# sourceMappingURL=decorators.js.map