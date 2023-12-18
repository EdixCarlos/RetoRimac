"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPersonajeHandler = exports.getPersonajeHandler = void 0;
const personajeController_1 = require("../controller/personajeController");
const getPersonajeHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('env', process.env.NODE_ENV);
    return yield personajeController_1.PersonajeController.getPersonaje(event);
});
exports.getPersonajeHandler = getPersonajeHandler;
const postPersonajeHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return yield personajeController_1.PersonajeController.postPersonaje(event);
});
exports.postPersonajeHandler = postPersonajeHandler;
