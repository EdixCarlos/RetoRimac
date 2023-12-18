# API de Personajes

## Descripción
Esta API permite obtener personajes de SWAPI con las claves españolizadas.

## Endpoints

### GET /api/people/{id}
Obtiene la información detallada de un personaje específico.

#### Parámetros
- `id` (path): ID del personaje

#### Respuestas
- 200: Detalle del personaje
- 500: Error al obtener el personaje

### POST /api/people/{id}
Crea o actualiza la información de un personaje.

#### Parámetros
- `id` (path): ID del personaje

#### Respuestas
- 200: Personaje creado o actualizado con éxito

## Uso

### Obtener un Personaje
Para obtener un personaje, realiza una solicitud GET a `/api/people/{id}`, reemplazando `{id}` con el ID del personaje.

#### Ejemplo de solicitud
```bash
curl --location 'https://7jwcksk68h.execute-api.us-east-1.amazonaws.com/dev/api/people/1'
