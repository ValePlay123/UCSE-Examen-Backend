# Examen: API CRUD de Trailers con Express y MongoDB 🎬

## Descripción del Proyecto 📋

En este examen, deberás desarrollar una **API RESTful** usando **Express** y **MongoDB** para gestionar un catálogo de trailers de series y películas. La API permitirá realizar operaciones de Crear, Leer, Eliminar sobre una colección de trailers. 

Además del CRUD básico, se requerirán endpoints adicionales para filtrar resultados por género, buscar trailers por actor, y realizar búsquedas avanzadas por palabras clave.

> **Instrucciones**: Al finalizar, deberás completar este README.md con la documentación de cada endpoint implementado. Incluye la siguiente información:
> - Método HTTP (GET, POST, DELETE).
> - Ruta del endpoint.
> - Descripción de parámetros o query params.
> - Ejemplo del cuerpo de solicitud (si aplica).
> - Posibles respuestas en formato JSON.
> - Códigos de estado HTTP asociados.

## Entrega 📌

Deberás entregar una API backend documentada que maneje información sobre trailers almacenada en una base de datos MongoDB. La documentación debe estar en el archivo `README.md` del repositorio.

## Datos Proporcionados 📂

A continuación se provee un archivo `trailers.json` con datos de ejemplo de trailers, incluyendo:
- **id**: Identificador único del trailer.
- **poster**: URL de la imagen de portada.
- **titulo**: Título del trailer.
- **categoria**: Tipo de contenido (por ejemplo, "Serie" o "Película").
- **gen**: Género principal.
- **genero**: Lista de géneros.
- **busqueda**: Palabras clave para facilitar búsquedas.
- **resumen**: Breve descripción del trailer.
- **temporadas**: Número de temporadas (solo para series).
- **duracion**: Duración en minutos (solo para películas).
- **reparto**: Lista de actores y actrices destacados.
- **trailer**: URL del video del trailer.

## Modelo de Base de Datos 📊

Utiliza el archivo `trailers.json` para definir el modelo en MongoDB con **Mongoose**. Crea un modelo llamado `Trailer` que incluya los siguientes campos:

- **titulo**: Nombre del trailer (Serie o Película).
- **categoria**: Tipo de contenido (Serie o Película).
- **genero**: Lista de géneros relacionados (ej. "Drama", "Ficción").
- **reparto**: Lista de actores.
- **resumen**: Descripción breve de la trama.
- **trailer**: URL del trailer en video.

## Funcionalidades del CRUD 🚀

La API deberá incluir las siguientes operaciones:

1. **Filtrar trailers** por uno o varios géneros.
2. **Buscar trailers** por actor.
3. **Buscar Trailers** de series que tienen más de X temporadas.
4. **Agregar un nuevo trailer**.
5. **Eliminar un trailer**.

## Estructura del Repositorio 🗂️

```plaintext
/controllers
  - trailerController.js
/data
  - trailers.json
/README.md
/app.js
/config/
  - database.js
/models/
  - trailer.js
/routes/
  - trailerRoutes.js
```

### Descripción de Archivos 📝

- **/data**: Contiene el archivo `trailers.json` con los datos iniciales.
- **/README.md**: Archivo que documenta el proyecto y explica cómo ejecutarlo.
- **/app.js**: Archivo principal de la aplicación Express.
- **/config/database.js**: Configuración para conectar con MongoDB.
- **/models/**: Contiene el modelo `Trailer` de MongoDB.
- **/routes/**: Define las rutas de los endpoints CRUD.

## Instrucciones de Entrega 🚀

1. **Forkea** el repositorio desde [aquí](https://github.com/FabioDrizZt/UCSE-Examen-Backend).
2. **Clona** el repositorio desde [aquí](https://github.com/Tu-Usuario/UCSE-Examen-Backend).
   ```bash
   git clone https://github.com/Tu-Usuario/UCSE-Examen-Backend.git
   ```
3. Desarrolla las funcionalidades requeridas en el repositorio clonado.
4. **Documenta** todos los endpoints en el archivo `README.md`.
5. **Sube** tus cambios y compártelos en el repositorio.
   ```bash
   git add .
   git commit -m "Implementación de funcionalidades y documentación"
   git push origin main
   ```

Aquí tienes una versión más sencilla y resumida de la documentación de la API para la gestión de trailers:

---

# Documentación API de Trailers

Esta API permite gestionar trailers con operaciones para obtener, buscar, agregar, actualizar y eliminar trailers en la base de datos.

# Endpoints

# 1. Obtener todos los trailers
- **Ruta:** `GET /api/trailer`
- **Descripción:** Devuelve todos los trailers.
- **Ejemplo:** 
  ```
  GET http://localhost:3000/api/trailer
  ```

# 2. Obtener trailer por ID
- **Ruta:** `GET /api/trailer/:id`
- **Descripción:** Devuelve un trailer específico por su ID.
- **Ejemplo:** 
  ```
  GET http://localhost:3000/api/trailer/3
  ```
- **Error si no existe:** 
  ```json
  { "message": "Trailer no encontrado" }
  ```

# 3. Filtrar trailers por género
- **Ruta:** `GET /api/trailer/search/genero`
- **Descripción:** Filtra trailers por género.
- **Parámetro:** `genero` (por ejemplo, `Drama`)
- **Ejemplo:** 
  ```
  GET http://localhost:3000/api/trailer/search/genero?genero=Drama
  ```

# 4. Buscar trailers por actor
- **Ruta:** `GET /api/trailer/search/actor`
- **Descripción:** Filtra trailers que incluyen al actor especificado.
- **Parámetro:** `actor` (por ejemplo, `Pedro Pascal`)
- **Ejemplo:** 
  ```
  GET http://localhost:3000/api/trailer/search/actor?actor=Pedro+Pascal
  ```

# 5. Agregar un nuevo trailer
- **Ruta:** `POST /api/trailer`
- **Descripción:** Agrega un nuevo trailer.
- **Cuerpo:** Información del trailer en formato JSON.
- **Ejemplo:** 
  ```json
  {
    "titulo": "The Mandalorian",
    "genero": ["Sci-Fi", "Fantasía"],
    "reparto": ["Pedro Pascal"]
  }
  ```

# 6. Actualizar un trailer
- **Ruta:** `PUT /api/trailer/:id`
- **Descripción:** Actualiza los datos de un trailer por ID.
- **Ejemplo:** 
  ```json
  {
    "titulo": "Nuevo título"
  }
  ```
- **Error si no existe:** 
  ```json
  { "message": "Trailer no encontrado" }
  ```

# 7. Eliminar un trailer
- **Ruta:** `DELETE /api/trailer/:id`
- **Descripción:** Elimina un trailer por ID.
- **Ejemplo:** 
  ```
  DELETE http://localhost:3000/api/trailer/3
  ```
- **Respuesta exitosa:**
  ```json
  { "message": "Trailer eliminado correctamente" }
  ```