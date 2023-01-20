"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso() {
    }
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "comision", {
        get: function () {
            return this._comision;
        },
        set: function (comision) {
            this._comision = comision;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "profesor", {
        get: function () {
            return this._profesor;
        },
        set: function (profesor) {
            this._profesor = profesor;
        },
        enumerable: false,
        configurable: true
    });
    return Curso;
}());
exports.Curso = Curso;
