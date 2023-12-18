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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonajeController = void 0;
const personajeService_1 = __importDefault(require("../service/personajeService"));
const MessageUtil_1 = require("../utils/MessageUtil");
class PersonajeController {
    static getPersonaje(event) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = (_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id;
                if (!id) {
                    return MessageUtil_1.MessageUtil.error(400, 'No se proporcionó el ID del personaje.');
                }
                const personaje = yield personajeService_1.default.obtenerpersonaje(parseInt(id));
                if (!personaje) {
                    return MessageUtil_1.MessageUtil.error(404, 'Personaje no encontrado.');
                }
                return MessageUtil_1.MessageUtil.success(personaje);
            }
            catch (error) {
                console.error('Error al obtener el personaje:', error);
                return MessageUtil_1.MessageUtil.error(500, 'Error al obtener el personaje');
            }
        });
    }
    static postPersonaje(event) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = (_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id;
                if (!id) {
                    return MessageUtil_1.MessageUtil.error(400, 'Se requiere el ID del personaje para la operación POST.');
                }
                const datosTransformados = yield personajeService_1.default.obtenerPersonajeYTransformar(parseInt(id));
                return MessageUtil_1.MessageUtil.success(datosTransformados);
            }
            catch (error) {
                console.error('Error en la operación POST:', error);
                return MessageUtil_1.MessageUtil.error(500, 'Error al realizar la operación POST');
            }
        });
    }
}
exports.PersonajeController = PersonajeController;
