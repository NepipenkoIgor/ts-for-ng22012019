/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.color = this.color || { red: 255, green: 0, blue: 0, alpha: 255 };
    }
    draw(canvas) {
        const index = (this.x + this.y * 500) * 4;
        canvas.data[index] = this.color.red;
        canvas.data[index + 1] = this.color.green;
        canvas.data[index + 2] = this.color.blue;
        canvas.data[index + 3] = this.color.alpha;
    }
}
class Line {
    constructor(firstPoint, secondPoint, color) {
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
        this.color = color;
        this.color = this.color || { red: 255, green: 0, blue: 0, alpha: 255 };
    }
    getPoint(type) {
        return (type === 'first') ? this.firstPoint : this.secondPoint;
    }
    setPoint(type, point) {
        (type === 'first') ? this.firstPoint = point : this.secondPoint = point;
    }
    BRLine(canvasData) {
        const p1 = this.firstPoint;
        const p2 = this.secondPoint;
        const currentP = jQuery.extend(true, {}, this.firstPoint);
        // длина по горизонтали
        let dX = Math.abs(p2.x - p1.x);
        // длина по веритикали
        let dY = Math.abs(p2.y - p1.y);
        const s1 = Math.sign(p2.x - p1.x);
        const s2 = Math.sign(p2.y - p1.y);
        // меняем переменные местами
        const change = (dY > dX);
        dX = (change) ? dX * dY / (dY = dX) : dX;
        // ошибка
        let e = 2 * dY - dX;
        // основной цикл
        for (let i = 0; i < dX; i++) {
            new Point(Math.trunc(currentP.x), Math.trunc(currentP.y), this.color).draw(canvasData);
            while (e >= 0) {
                (change) ? currentP.x += s1 : currentP.y += s2;
                e = e - 2 * dX;
            }
            (change) ? currentP.y += s2 : currentP.x += s1;
            e = e + 2 * dY;
        }
    }
    CDALine(canvasData) {
        const p1 = this.firstPoint;
        const p2 = this.secondPoint;
        /*считаем максимальную длину  по вертикали и горизонтали*/
        const l1 = Math.abs(p2.x - p1.x);
        const l2 = Math.abs(p2.y - p1.y);
        /*что длинее то и выбираем*/
        const length = (l1 >= l2) ? l1 : l2;
        /*считаем на сколько пикселей надо сдвигаться по горизонтали за 1 шаг*/
        const dx = (p2.x - p1.x) / length;
        /*считаем на сколько пикселей надо сдвигаться по вертикали за 1 шаг*/
        const dy = (p2.y - p1.y) / length;
        /*текущие значения ставим в точку начала*/
        let x = p1.x;
        let y = p1.y;
        let i = 1;
        while (i <= length) {
            new Point(Math.trunc(x), Math.trunc(y), this.color).draw(canvasData);
            x += dx;
            y += dy;
            i += 1;
        }
    }
}
class DrawClass {
    constructor(canvas) {
        this.canvas = canvas;
        this.line = new Line();
        this.alg = 'br';
        this.click = (event) => {
            const rect = this.canvas.getBoundingClientRect();
            const pX = (event.clientX - rect.left) / rect.width * this.canvas.width;
            const pY = (event.clientY - rect.top) / rect.height * this.canvas.height;
            if ((this.line.getPoint('first') && this.line.getPoint('second')) || !this.line.getPoint('first')) {
                this.line.setPoint('first', new Point(pX, pY));
                this.line.setPoint('second', undefined);
            }
            else {
                this.line.setPoint('second', new Point(pX, pY));
                console.time('test');
                (this.alg === 'br') ? this.line.BRLine(this.canvasData) : this.line.CDALine(this.canvasData);
                this.refresh();
                console.timeEnd('test');
            }
            event.preventDefault();
        };
        canvas.addEventListener('mousedown', this.click, false);
        this.ctx = canvas.getContext('2d');
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.canvasData = this.ctx.getImageData(0, 10, this.canvasWidth, this.canvasHeight);
        //  this.canvasDataTmp = this.ctx.getImageData(0, 10, this.canvasWidth, this.canvasHeight);
        window.requestAnimationFrame(() => this.refresh());
    }
    setAlg(name) {
        this.alg = name;
        console.log(`сменили алгоритм на ${name}`);
    }
    //  //-----------------------------------------------
    refresh(canvas = this.canvasData) {
        this.ctx.putImageData(canvas, 0, 0);
        window.requestAnimationFrame(() => this.refresh());
    }
}
exports.DrawClass = DrawClass;
const drClass = new DrawClass(document.getElementById('canvas'));
document.getElementById('cda').addEventListener('mousedown', () => {
    drClass.setAlg('cda');
});
document.getElementById('br').addEventListener('mousedown', () => {
    drClass.setAlg('br');
});


/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map