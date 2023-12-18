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
const database_1 = require("../utils/database");
class PersonajeDao {
    crearOActualizarPersonaje(id, datos) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('Datos recibidos:', datos);
                // Preparar los datos para el Stored Procedure
                const datosParaSp = {
                    p_id: id,
                    p_nombre: datos.nombre,
                    p_altura: datos.altura,
                    p_masa: datos.masa,
                    p_color_de_cabello: datos.color_de_cabello,
                    p_color_de_piel: datos.color_de_piel,
                    p_color_de_ojos: datos.color_de_ojos,
                    p_año_de_nacimiento: datos.año_de_nacimiento,
                    p_género: datos.género,
                    p_mundo_natal: datos.mundo_natal,
                    p_peliculas: JSON.stringify(datos.peliculas),
                    p_especies: JSON.stringify(datos.especies),
                    p_vehiculos: JSON.stringify(datos.vehiculos),
                    p_naves_estelares: JSON.stringify(datos.naves_estelares),
                    p_creado: datos.creado,
                    p_editado: datos.editado,
                    p_url: datos.url
                };
                // Llamar al Stored Procedure
                const [resultadoSp] = yield (0, database_1.query)('CALL CrearOActualizarPersonaje(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @mensaje)', [
                    datosParaSp.p_id,
                    datosParaSp.p_nombre,
                    datosParaSp.p_altura,
                    datosParaSp.p_masa,
                    datosParaSp.p_color_de_cabello,
                    datosParaSp.p_color_de_piel,
                    datosParaSp.p_color_de_ojos,
                    datosParaSp.p_año_de_nacimiento,
                    datosParaSp.p_género,
                    datosParaSp.p_mundo_natal,
                    datosParaSp.p_peliculas,
                    datosParaSp.p_especies,
                    datosParaSp.p_vehiculos,
                    datosParaSp.p_naves_estelares,
                    datosParaSp.p_creado,
                    datosParaSp.p_editado,
                    datosParaSp.p_url
                ]);
                // Comprobar si resultadoSp es un array y tiene la estructura esperada
                const mensaje = (_a = resultadoSp[0]) === null || _a === void 0 ? void 0 : _a.mensaje;
                return { mensaje };
            }
            catch (error) {
                console.error('Error al crear o actualizar el personaje:', error);
                throw error;
            }
        });
    }
    obtenerPersonajeDesdeDb(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resultadoSp = yield (0, database_1.query)('CALL ObtenerPersonaje(?, @existe)', [id]);
                const [personajeDb] = resultadoSp[0];
                const [resultadoExiste] = yield (0, database_1.query)('SELECT @existe AS existe');
                if (resultadoExiste.existe) {
                    return personajeDb;
                }
                else {
                    return null; // Indica que el personaje no se encuentra en la base de datos
                }
            }
            catch (error) {
                console.error('Error al obtener el personaje:', error);
                throw error;
            }
        });
    }
}
exports.default = new PersonajeDao();
