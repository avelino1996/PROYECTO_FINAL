El proyecto, "Silexbikers", se divide en dos, frontend y backend. Por el lado del frontend he utilizado React, axios, bootstrap, reactstrap entre otras tecnologías y librerias. Por otro lado, para el backend he usado, mongoose, express, jsonwebtoken, bcrypt, morgan, cors, etc. Para la base de datos he usado mongoDb.

## Prerequisitos

1. Clonar el repositorio del proyecto en una carpeta desde:
   - https://github.com/avelino1996/PROYECTO_FINAL.git
2. Descargar o tener descargado:
   - NodeJS 16.13.2
3. Ejecutar el siguiente script en la carpeta BACKEND, para instalar docker:
    (Asegurarse de no tener instalado docker-compose antes de ejecutar este script ya que, de ser así, no funcionará)
   - sh docker-install.sh (Este sript actualizará docker y docker-compose a las últimas versiones del repositorio oficial, ya que  las versiones que se instalan del repositorio de linux-mint están obsoletas)
4. Reiniciar la máquina virtual 

### ADVERTENCIA

Si se usa Windows, hay un bug con las últimas versiones de node LTS y no ejecuta correctamente el comando npm install.

Se recomienda usar una versión más baja de node, como la 16.13.2

## Como ejecutar

### Backend

Abrir una consola en la carpeta BACKEND y ejecutar los siguientes comandos:

- `npm install`
  - Nos instalará todas las dependencias necesarias para ejecutar el backend.
- `npm run db`
  - Creará un contenedor de docker que contiene una instancia de MongoDB, configurada automáticamente.
- `npm run seed`
  - Ejecutará un proceso de inicialización de datos en la instancia de MongoDB creada anteriormente, importando las colecciones de la carpeta seed, para así tener un conjuntos de datos mínimo para ejecutar el servidor.
- `npm run dev`
  - Lanzará el servidor en modo desarrollo.

### Frontend

Abrir una consola en la carpeta FRONTEND y ejecutar los siguientes comandos:

- `npm install`
  - Nos instalará todas las dependencias necesarias para ejecutar el backend.
- `npm run dev`
  - Lanzará el frontend en modo desarrollo.

# Uso

Una vez se haya inicializado el proyecto se deberá entrar con unas credenciales. Para el caso de un usuario con el rol de USER se debe usar el siguiente email: user@test.com y contraseña: 1234

Para el caso de un usuario con rol de ADMIN: test@gmail.com y contraseña: 1234.

De este modo se pueden ver tanto las páginas públicas como las privadas dentro del rol de ADMIN.

# Base de datos

## Colecciones

Se alojan en la carpeta seed del proyecto de BACKEND, y son las siguientes:

### `comments`

```json
{
  "_id": {
    "$oid": "634677b3a14283d9ae61314c"
  },
  "name": "TEST",
  "email": "test1@hotmail.es",
  "surname": "1",
  "description": "Esto es un test de prueba para probar la app",
  "__v": 0
}
```

### `publications`

```json
{
  "_id": {
    "$oid": "6345430706bc12a57493f62d"
  },
  "createAt": {
    "$date": "2022-10-11T10:18:47.320Z"
  },
  "title": "Primera publicación de esta página",
  "description": "Esta es la primera presentación de los silexbiker, una imagen que muestra como acabamos cuando andamos en bicicleta",
  "distance": "25km",
  "createBy": "Avelino",
  "photo": "public/upload/publications/6345430706bc12a57493f62d.jpg",
  "__v": 0
}
```

### `routes`

```json
{
  "_id": {
    "$oid": "631784e993b736d14ecb7de9"
  },
  "title": "Silextrem",
  "description": "Ruta estrella del club. Esta ruta es la más conocida de nuestro club ya que es con la que se nos conoce. Es una ruta en la que participan muchos clubs de toda España y es de tiempo libre, es decir, se viene a disfrutar, no a competir. Tiene varias paradas para hidratarse y un recorrido para aprovechar al máximo cada tramo de la ruta.",
  "distance": "28 Km aproximadamente ",
  "photo": "public/upload/routes/631784e993b736d14ecb7de9.jpg",
  "__v": 0,
  "routeNumber": "1"
}
```

### `users`

```json
{
  "_id": {
    "$oid": "6356bf2b5e9f21acb44b5d71"
  },
  "username": "test",
  "email": "test@gmail.com",
  "password": "$2b$10$zuU7YUYkefkDLfKz7yUHFO4BckpHifxG42XxBEulAh09r5BUVEFOC",
  "role": "ADMIN",
  "active": true,
  "__v": 0
}
```

# Endpoints

## Users

| URL                                   | TIPO   | DESCRIPCIÓN        | ROLE         |
| ------------------------------------- | ------ | ------------------ | ------------ |
| 127.0.0.1:4005/api/users/login/       | GET    | login              | USER y ADMIN |
| 127.0.0.1:4005/api/users/logOut       | POST   | Cierra sesión      | USER y ADMIN |
| 127.0.0.1:4005/api/users/users/list   | GET    | Lista los usuarios | ADMIN        |
| 127.0.0.1:4005/api/users/users/create | POST   | Crea un usuario    | ADMIN        |
| 127.0.0.1:4005/api/users/users/id     | PUT    | Edita un usuario   | ADMIN        |
| 127.0.0.1:4005/api/users/users/id     | DELETE | Borra un usuario   | ADMIN        |


## Publications


| URL                                               | TIPO   | DESCRIPCIÓN             | ROLE         |
| ------------------------------------------------- | ------ | ----------------------- | ------------ |
| 127.0.0.1:4005/api/publications/publicationsList  | GET    | Lista las publicaciones | USER y ADMIN |
| 127.0.0.1:4005/api/publications/createPublication | POST   | Crea una publicación    | ADMIN        |
| 127.0.0.1:4005/api/publications/id                | DELETE | Borra una publicación   | ADMIN        |


## Routes


| URL                                  | TIPO   | DESCRIPCIÓN          | ROLE         |
| ------------------------------------ | ------ | -------------------- | ------------ |
| 127.0.0.1:4005/api/routes/routesList | GET    | Lista todas la rutas | USER y ADMIN |
| 127.0.0.1:4005/api/routes/createRout | POST   | Crea una ruta        | ADMIN        |
| 127.0.0.1:4005/api/routes/id         | DELETE | Borra una ruta       | ADMIN        |


## Comment


| URL                                    | TIPO   | DESCRIPCIÓN           | ROLE         |
| -------------------------------------- | ------ | --------------------- | ------------ |
| 127.0.0.1:4005/api/coment/comentList   | GET    | Lista los comentarios | USER y ADMIN |
| 127.0.0.1:4005/api/coment/createComent | POST   | Crea un comentario    | ADMIN        |
| 127.0.0.1:4005/api/coment/id           | DELETE | Borra un comentario   | ADMIN        |
