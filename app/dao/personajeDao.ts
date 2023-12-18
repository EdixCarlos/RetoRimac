import { query } from '../utils/database';

class PersonajeDao {
    async crearOActualizarPersonaje(id: number, datos: any): Promise<any> {
        try {
            console.log('Datos recibidos:', datos);
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
    
            const [resultadoSp]  = await query('CALL CrearOActualizarPersonaje(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @mensaje)', [
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
    
            const mensaje = resultadoSp[0]?.mensaje;
    
            return { mensaje };
        } catch (error) {
            console.error('Error al crear o actualizar el personaje:', error);
            throw error;
        }
    }

    async obtenerPersonajeDesdeDb(id: number): Promise<any> {
        try {
            const resultadoSp = await query('CALL ObtenerPersonaje(?, @existe)', [id]);
            const [personajeDb] = resultadoSp[0];
            const [resultadoExiste] = await query('SELECT @existe AS existe');
    
            if (resultadoExiste.existe) {
                return personajeDb;
            } else {
                return null; // Indica que el personaje no se encuentra en la base de datos
            }
        } catch (error) {
            console.error('Error al obtener el personaje:', error);
            throw error;
        }
    }
}

export default new PersonajeDao();
