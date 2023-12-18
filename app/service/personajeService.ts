import axios from 'axios';
import { PersonajeDtoResponse } from '../dto/response/PersonajeDtoResponse';
import { extraerIdsDeUrls, transformarClaves } from '../utils/transformador';
import PersonajeDao from '../dao/personajeDao'; 

class PersonajeService {
    async obtenerDatosDeSwapi(id: number): Promise<PersonajeDtoResponse> {
        try {
            const response = await axios.get<PersonajeDtoResponse>(`https://swapi.dev/api/people/${id}/`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener datos de SWAPI:', error);
            throw error;
        }
    }

    transformarYExtraerIds(datos: any): any {
        const datosEspañolizados = transformarClaves(datos);
  
        datosEspañolizados.peliculas = extraerIdsDeUrls(datos.films);
        datosEspañolizados.especies = extraerIdsDeUrls(datos.species);
        datosEspañolizados.vehiculos = extraerIdsDeUrls(datos.vehicles);
        datosEspañolizados.naves_estelares = extraerIdsDeUrls(datos.starships);
  
        return datosEspañolizados;
    }

    async obtenerpersonaje(id: number): Promise<any> {
        return await PersonajeDao.obtenerPersonajeDesdeDb(id);
    }
    async obtenerPersonajeYTransformar(id: number): Promise<any> {
        const datos = await this.obtenerDatosDeSwapi(id);
        if (!datos) {
            return null;
        }

        const datosTransformados = this.transformarYExtraerIds(datos);
        return await PersonajeDao.crearOActualizarPersonaje(id, datosTransformados);
    }

    async obtenerPersonaje(id: number): Promise<any> {
        let personaje = await PersonajeDao.obtenerPersonajeDesdeDb(id);
        if (!personaje) {
            const datosSwapi = await this.obtenerPersonajeYTransformar(id);
            if (!datosSwapi) {
                return null;
            }
            personaje = await PersonajeDao.obtenerPersonajeDesdeDb(id);
        }
        return personaje;
    }
}

export default new PersonajeService();
