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
const personajeController_1 = require("../../app/controller/personajeController");
const personajeService_1 = __importDefault(require("../../app/service/personajeService"));
const MessageUtil_1 = require("../../app/utils/MessageUtil");
describe('PersonajeController', () => {
    let mockEvent;
    beforeEach(() => {
        mockEvent = {
            pathParameters: { id: '1' }
        };
        spyOn(personajeService_1.default, 'obtenerPersonaje').and.returnValue(Promise.resolve({ /* mock data */}));
        spyOn(personajeService_1.default, 'obtenerPersonajeYTransformar').and.returnValue(Promise.resolve({ /* mock data */}));
        spyOn(MessageUtil_1.MessageUtil, 'success').and.callThrough();
        spyOn(MessageUtil_1.MessageUtil, 'error').and.callThrough();
    });
    it('should handle getPersonaje successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield personajeController_1.PersonajeController.getPersonaje(mockEvent);
        expect(personajeService_1.default.obtenerPersonaje).toHaveBeenCalled();
        expect(MessageUtil_1.MessageUtil.success).toHaveBeenCalled();
    }));
    it('should handle postPersonaje successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield personajeController_1.PersonajeController.postPersonaje(mockEvent);
        expect(personajeService_1.default.obtenerPersonajeYTransformar).toHaveBeenCalled();
        expect(MessageUtil_1.MessageUtil.success).toHaveBeenCalled();
    }));
});
