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
const axios_1 = __importDefault(require("axios"));
const transformador_1 = require("../utils/transformador");
const personajeDao_1 = __importDefault(require("../dao/personajeDao")); // Importa la clase DAO
class PersonajeService {
    obtenerDatosDeSwapi(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`https://swapi.dev/api/people/${id}/`);
                return response.data;
            }
            catch (error) {
                console.error('Error al obtener datos de SWAPI:', error);
                throw error;
            }
        });
    }
    transformarYExtraerIds(datos) {
        const datosEspañolizados = (0, transformador_1.transformarClaves)(datos);
        datosEspañolizados.peliculas = (0, transformador_1.extraerIdsDeUrls)(datos.films);
        datosEspañolizados.especies = (0, transformador_1.extraerIdsDeUrls)(datos.species);
        datosEspañolizados.vehiculos = (0, transformador_1.extraerIdsDeUrls)(datos.vehicles);
        datosEspañolizados.naves_estelares = (0, transformador_1.extraerIdsDeUrls)(datos.starships);
        return datosEspañolizados;
    }
    obtenerpersonaje(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield personajeDao_1.default.obtenerPersonajeDesdeDb(id);
        });
    }
    obtenerPersonajeYTransformar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield this.obtenerDatosDeSwapi(id);
            if (!datos) {
                return null;
            }
            const datosTransformados = this.transformarYExtraerIds(datos);
            return yield personajeDao_1.default.crearOActualizarPersonaje(id, datosTransformados);
        });
    }
    // Esta función ahora utiliza el DAO para obtener el personaje
    obtenerPersonaje(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let personaje = yield personajeDao_1.default.obtenerPersonajeDesdeDb(id);
            if (!personaje) {
                const datosSwapi = yield this.obtenerPersonajeYTransformar(id);
                if (!datosSwapi) {
                    return null;
                }
                personaje = yield personajeDao_1.default.obtenerPersonajeDesdeDb(id);
            }
            return personaje;
        });
    }
}
exports.default = new PersonajeService();
