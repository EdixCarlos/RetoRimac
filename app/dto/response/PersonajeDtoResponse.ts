export interface PersonajeDtoResponse {
    id: number;
    nombre: string;
    altura: string;
    masa: string;
    color_de_cabello: string;
    color_de_piel: string;
    color_de_ojos: string;
    año_de_nacimiento: string;
    género: string;
    mundo_natal: string;
    peliculas: string[];
    especies: string[];
    vehiculos: string[];
    naves_estelares: string[];
    creado: Date;
    editado: Date;
    url: string;
}
