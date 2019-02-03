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
var input1 = document.querySelector('input');
var Log = /** @class */ (function () {
    function Log() {
    }
    // @ts-ignore
    Log.prototype.getDetails = function (query) {
        console.log(query);
    };
    return Log;
}());
var log = new Log();
input1.addEventListener('input', function (event) {
    log.getDetails(event.target.value);
});
function debounceMethod(_target, methodName, descriptor) {
    var originalDescriptorValue = descriptor.value;
    var timerId;
    return __assign({}, descriptor, { value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalDescriptorValue.apply(void 0, args);
            clearTimeout(timerId);
            timerId = setTimeout(function () {
                result();
            }, delay);
        } });
}
