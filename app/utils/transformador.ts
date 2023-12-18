const keyMap: { [key: string]: string } = {
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
  
  function transformarClaves(objeto: any): any {
    if (Array.isArray(objeto)) {
      return objeto.map(item => transformarClaves(item));
    } else if (objeto !== null && typeof objeto === 'object') {
      const objetoTransformado: { [key: string]: any } = {};
      Object.keys(objeto).forEach(key => {
        const nuevaClave = keyMap[key] || key;
        objetoTransformado[nuevaClave] = transformarClaves(objeto[key]);
      });
      return objetoTransformado;
    }
    return objeto;
  }
function extraerIdsDeUrls(urls: string[]): number[] {
    return urls.map(url => {
        const match = url.match(/\/(\d+)\/$/);
        return match ? parseInt(match[1]) : null;
    }).filter((id): id is number => id !== null); 
}
  
  
  export { transformarClaves, extraerIdsDeUrls };
  