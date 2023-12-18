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
exports.postPersonaje = exports.getPersonaje = void 0;
const personajeService_1 = require("../service/personajeService");
const getPersonaje = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id;
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'No se proporcionó el ID del personaje.' })
            };
        }
        // Intenta obtener el personaje desde la base de datos o la API SWAPI
        const personaje = yield (0, personajeService_1.obtenerPersonajeDesdeDb)(parseInt(id));
        if (!personaje) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'Personaje no encontrado.' })
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify(personaje)
        };
    }
    catch (error) {
        console.error('Error al obtener el personaje:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al obtener el personaje' })
        };
    }
});
exports.getPersonaje = getPersonaje;
const postPersonaje = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const id = (_b = event.pathParameters) === null || _b === void 0 ? void 0 : _b.id;
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Se requiere el ID del personaje para la operación POST.' })
            };
        }
        // Obtener y transformar los datos del personaje desde SWAPI
        const datosTransformados = yield (0, personajeService_1.obtenerPersonajeYTransformar)(parseInt(id));
        console.log('Datos transformados:', datosTransformados);
        // Crear o actualizar el personaje en la base de datos
        const resultado = yield (0, personajeService_1.crearOActualizarPersonaje)(parseInt(id), datosTransformados);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Personaje creado/actualizado con éxito', data: resultado })
        };
    }
    catch (error) {
        console.error('Error en la operación POST:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al realizar la operación POST' })
        };
    }
});
exports.postPersonaje = postPersonaje;
function obtenerPersonajeDesdeDbOApi(arg0) {
    throw new Error('Function not implemented.');
}
