Hola, mi nombre es Andrés Avelino Gómez Aranda y entré al Bootcamp de Desarrollo Web Full Stack porque necesitaba un cambio de vida radical, tras haber estudiado Óptica y Optometría en la universidad de Granada y llevar ya 2 años ejerciendo como óptico me he dado cuenta que mis aspiraciones no han terminado de cumplirse, me he visto estancado desde que comencé y sin motivación alguna. Es por eso que tras hablar con mis compañeros de piso, uno de ellos ingeniero senior en desarrollo web y el otro middle en QA me recomendaron que buscase una academia para aprender sobre desarrollo web y justo di con Codespace. 
Mi proyecto, Silexbikers, se divide en dos, frontend y backend. Por el lado del frontend he utilizado React, axios, bootstrap, reactstrap entre otras tecnologías y librerias. Por otro lado, para el backend he usado, mongoose, express, jsonwebtoken, bcrypt, morgan, cors, etc. Para la base de datos he usado mongoDb.
El proyecto está pensado para usarlo como página pública en el club de bicicletas de mi pueblo y así expandir más lo que hacemos.
En cuanto a la complejidad, lo más complicado para mi ha sido la parte del CRUD, me costó mucho realizar un CRUD completo para cada una de las colecciones de la base de datos el proyecto pero al final pude hacerlo todo correctamente.
Para poder poner en funcionamiento el proyecto se necesitan varios prerequisitos:

1º => Intalar:
- Node 16.16.0
- Docker

2º => Como ejecutar:

- Instalar node
- Instalar docker

3º => Ejecutar los siguientes comandos:

"ADVERTENCIA"
Si se usa Windows, hay un bug con las ultimas versiones de node LTS y no ejecuta correctamente npm install.
Se recomienda usar una versión más baja de node, como la 16.13.2

BACKEND
_ npm install
_ npm run db
_ npm run seed
_ npm run dev

FRONTEND
_ npm install
_ npm run dev

Con todo esto debe ser suficiente para usar libremente el proyecto.

Para enfacitar más en la parte de Backend, cabe destacar que son cuatro las colecciones que uso: comments, publications, routes, users.

Un ejemplo de como sería cada documento:

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

Una vez se haya inicializado el proyecto se deberá entrar con unas credenciales. Para el caso de un usuario con el rol de USER se debe usar el siguiente email: user@test.com y contraseña: 1234
para el caso de un usuario con rol de ADMIN: test@gmail.com y contraseña: 1234.
De este modo se pueden ver tanto las páginas públicas como las privadas dentro del rol de ADMIN.

  
  