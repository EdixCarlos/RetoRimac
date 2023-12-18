import PersonajeService from '../service/personajeService';
import { MessageUtil } from '../utils/MessageUtil';

export class PersonajeController {
    static async getPersonaje(event: any): Promise<any> {
        try {
            const id = event.pathParameters?.id;
            if (!id) {
                return MessageUtil.error(400, 'No se proporcionó el ID del personaje.');
            }

            const personaje = await PersonajeService.obtenerpersonaje(parseInt(id));
            if (!personaje) {
                return MessageUtil.error(404, 'Personaje no encontrado.');
            }

            return MessageUtil.success(personaje);
        } catch (error) {
            console.error('Error al obtener el personaje:', error);
            return MessageUtil.error(500, 'Error al obtener el personaje');
        }
    }

    static async postPersonaje(event: any): Promise<any> {
        try {
            const id = event.pathParameters?.id;
            if (!id) {
                return MessageUtil.error(400, 'Se requiere el ID del personaje para la operación POST.');
            }

            const datosTransformados = await PersonajeService.obtenerPersonajeYTransformar(parseInt(id));

            return MessageUtil.success(datosTransformados);
        } catch (error) {
            console.error('Error en la operación POST:', error);
            return MessageUtil.error(500, 'Error al realizar la operación POST');
        }
    }
}
