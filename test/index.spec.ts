import lambdaTester from 'lambda-tester';
import { expect } from 'chai';
import sinon from 'sinon';
import { PersonajeController } from '../app/controller/personajeController';
import PersonajeService from '../app/service/personajeService';
import { MessageUtil } from '../app/utils/MessageUtil';

const mockPersonajeData = {};

describe('PersonajeController', () => {
    describe('postPersonaje [POST]', () => {
        it('success', () => {
            const mockEvent = { pathParameters: { id: '1' } };
            sinon.stub(PersonajeService, 'obtenerPersonajeYTransformar').resolves(mockPersonajeData);

            return lambdaTester(PersonajeController.postPersonaje)
                .event(mockEvent)
                .expectResult((result: any) => {
                    expect(result.statusCode).to.equal(200);
                    sinon.restore();
                });
        });

    });

});
