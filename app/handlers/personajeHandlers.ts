import { APIGatewayProxyHandler } from 'aws-lambda';
import { PersonajeController } from '../controller/personajeController';
export const getPersonajeHandler: APIGatewayProxyHandler = async (event) => {
    console.log('env', process.env.NODE_ENV);
    return await PersonajeController.getPersonaje(event);
};

export const postPersonajeHandler: APIGatewayProxyHandler = async (event) => {
    return await PersonajeController.postPersonaje(event);
};
