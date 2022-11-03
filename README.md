El proyecto, "Silexbikers", se divide en dos, frontend y backend. Por el lado del frontend he utilizado React, axios, bootstrap, reactstrap entre otras tecnologías y librerias. Por otro lado, para el backend he usado, mongoose, express, jsonwebtoken, bcrypt, morgan, cors, etc. Para la base de datos he usado mongoDb.

Para poder poner en funcionamiento el proyecto se necesitan varios prerequisitos:

1º => Descargar o tener descargado:
- Node 16.16.0
- Docker

2º => Como ejecutar (seguir los pasos según la lista):

- Instalar node
- Instalar docker
- Iniciar docker

3º => Abrir dos terminales con las carpetas BACKEND por un lado y la carpeta FRONTEND por otro lado.

4º => Ejecutar los siguientes comandos en las consolas correspondientes de las carpetas BACKEND y FRONTEND:

"ADVERTENCIA"
Si se usa Windows, hay un bug con las ultimas versiones de node LTS y no ejecuta correctamente npm install.
Se recomienda usar una versión más baja de node, como la 16.13.2

En la terminal con la carpeta BACKEND ejecutaremos los siguientes comandos (seguir los pasos según la lista)
_ npm install
_ npm run db
_ npm run seed
_ npm run dev

En la terminal con la carpeta FRONTEND ejecutaremos los siguientes comandos (seguir los pasos según la lista)
_ npm install
_ npm run dev

Con todo esto debe ser suficiente para usar libremente el proyecto.

Para enfacitar más en la parte de Backend, cabe destacar que son cuatro las colecciones que uso en la base de datos, estas son: comments, publications, routes, users.

Un ejemplo de como sería cada colección y sus respectivos endpoints:

- users:
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
-------------------------- -------------------------------------------------------------------------
          URL                            |  TIPO    |     DESCRIPCIÓN      |          ROLE
-------------------------- -------------------------------------------------------------------------
  127.0.0.1:4005/api/users/login/        |   GET    |        login         |       USER y ADMIN
----------------------------------------------------------------------------------------------------  
  127.0.0.1:4005/api/users/logOut        |  POST    |    Cierra sesión     |       USER y ADMIN
  --------------------------------------------------------------------------------------------------
  127.0.0.1:4005/api/users/users/list    |   GET    |  Lista los usuarios  |           ADMIN
  --------------------------------------------------------------------------------------------------
  127.0.0.1:4005/api/users/users/create  |   POST   |   Crea un usuario    |           ADMIN
  --------------------------------------------------------------------------------------------------
  127.0.0.1:4005/api/users/users/id      |   PUT    |   Edita un usuario   |           ADMIN
  --------------------------------------------------------------------------------------------------
  127.0.0.1:4005/api/users/users/id      |  DELETE  |   Borra un usuario   |           ADMIN
------------------------- --------------------------------------------------------------------------



- publication: 
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

------------------------------------------------------------------------------------------------------
                         URL                       |  TIPO  |       DESCRIPCIÓN        |    ROLE
------------------------------------------------------------------------------------------------------
127.0.0.1:4005/api/publications/publicationsList       GET     Lista las publicaciones   USER y ADMIN
127.0.0.1:4005/api/publications/createPublication     POST      Crea una publicación        ADMIN
127.0.0.1:4005/api/publications/id                   DELETE     Borra una publicación       ADMIN
------------------------------------------------------------------------------------------------------



- route: 
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
-------------------------------------------------------------------------------------------------------
                         URL                       |  TIPO  |       DESCRIPCIÓN        |    ROLE
-------------------------------------------------------------------------------------------------------
127.0.0.1:4005/api/routes/routesList                   GET      Lista todas la rutas      USER y ADMIN
127.0.0.1:4005/api/routes/createRout                  POST         Crea una ruta            ADMIN
127.0.0.1:4005/api/routes/id                         DELETE       Borra una ruta            ADMIN
-------------------------------------------------------------------------------------------------------




- coment:
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
----------------------------------------------------------------------------------------------------
                         URL                       |  TIPO  |       DESCRIPCIÓN        |    ROLE
----------------------------------------------------------------------------------------------------
127.0.0.1:4005/api/coment/comentList                   GET      Lista los comentarios    USER y ADMIN
127.0.0.1:4005/api/coment/createComent                 POST       Crea un comentario        ADMIN
127.0.0.1:4005/api/coment/id                         DELETE      Borra un comentario        ADMIN
----------------------------------------------------------------------------------------------------

Una vez se haya inicializado el proyecto se deberá entrar con unas credenciales. Para el caso de un usuario con el rol de USER se debe usar el siguiente email: user@test.com y contraseña: 1234
para el caso de un usuario con rol de ADMIN: test@gmail.com y contraseña: 1234.
De este modo se pueden ver tanto las páginas públicas como las privadas dentro del rol de ADMIN.

  
  