import { PersonajeController } from '../../app/controller/personajeController';
import PersonajeService from '../../app/service/personajeService';
import { MessageUtil } from '../../app/utils/MessageUtil';

describe('PersonajeController', () => {
    let mockEvent: { pathParameters: { id: string; }; };

    beforeEach(() => {
        mockEvent = {
            pathParameters: { id: '1' }
        };

        spyOn(MessageUtil, 'error').and.callThrough();
    });

    it('should handle getPersonaje successfully', async () => {
        const response = await PersonajeController.getPersonaje(mockEvent);

        expect(PersonajeService.obtenerPersonaje).toHaveBeenCalled();
        expect(MessageUtil.success).toHaveBeenCalled();
    });

    it('should handle postPersonaje successfully', async () => {
        const response = await PersonajeController.postPersonaje(mockEvent);

        expect(PersonajeService.obtenerPersonajeYTransformar).toHaveBeenCalled();
        expect(MessageUtil.success).toHaveBeenCalled();
    });

});
