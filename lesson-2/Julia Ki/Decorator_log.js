var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MathLib = /** @class */ (function () {
    function MathLib() {
    }
    MathLib.prototype.areaOfCircle = function (r) {
        return Math.PI * Math.pow(r, 2);
    };
    __decorate([
        logMethod
    ], MathLib.prototype, "areaOfCircle");
    return MathLib;
}());
// @ts-ignore
function logMethod(_target, methodName, descriptor) {
    var originalDescriptorValue = descriptor.value;
    return __assign({}, descriptor, { 
        // tslint:disable-next-line
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var strArgs = args
                .map(function (arg) {
                // tslint:disable-next-line
                console.log(arg);
                return JSON.stringify(arg);
            })
                .join('');
            // tslint:disable-next-line
            var result = originalDescriptorValue.apply(void 0, args);
            var r = JSON.stringify(result);
            // tslint:disable-next-line
            console.log("Call: " + methodName + " (" + strArgs + ") => " + r);
            return result;
        } });
}
var lib = new MathLib();
// tslint:disable-next-line
console.log(lib.areaOfCircle(10));
// tslint:disable-next-line
console.log(lib.areaOfCircle(2));

