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
// spec/getIntegrationSpec.ts
const axios_1 = __importDefault(require("axios"));
describe('GET endpoint integration test', () => {
    it('should successfully connect to the database and retrieve data', (done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Suponiendo que estás ejecutando serverless offline o que tienes una URL de API Gateway
            const response = yield axios_1.default.get('http://localhost:3000/get'); // Reemplaza con la URL correcta
            expect(response.status).toBe(200);
            expect(response.data).toBeDefined();
            // Más aserciones según tus expectativas
            done();
        }
        catch (error) {
            done.fail(error);
        }
    }));
});
