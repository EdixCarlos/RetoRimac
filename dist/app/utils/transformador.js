"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extraerIdsDeUrls = exports.transformarClaves = void 0;
const keyMap = {
    name: 'nombre',
    height: 'altura',
    mass: 'masa',
    hair_color: 'color_de_cabello',
    skin_color: 'color_de_piel',
    eye_color: 'color_de_ojos',
    birth_year: 'año_de_nacimiento',
    gender: 'género',
    homeworld: 'mundo_natal',
    films: 'peliculas',
    species: 'especies',
    vehicles: 'vehiculos',
    starships: 'naves_estelares',
    created: 'creado',
    edited: 'editado',
    url: 'url'
};
function transformarClaves(objeto) {
    if (Array.isArray(objeto)) {
        return objeto.map(item => transformarClaves(item));
    }
    else if (objeto !== null && typeof objeto === 'object') {
        const objetoTransformado = {};
        Object.keys(objeto).forEach(key => {
            const nuevaClave = keyMap[key] || key;
            objetoTransformado[nuevaClave] = transformarClaves(objeto[key]);
        });
        return objetoTransformado;
    }
    return objeto;
}
exports.transformarClaves = transformarClaves;
function extraerIdsDeUrls(urls) {
    return urls.map(url => {
        const match = url.match(/\/(\d+)\/$/);
        return match ? parseInt(match[1]) : null;
    }).filter((id) => id !== null);
}
exports.extraerIdsDeUrls = extraerIdsDeUrls;
