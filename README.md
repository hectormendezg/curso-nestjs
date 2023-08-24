<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo.

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener instalado Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Tener una base de datos Mongo

5. Clonar el archivo **.env.template** y renombrar la copia a **.env**

6. Llenar lñas variables de entrono definidas en `.env`

7. Ejecutar la aplicacion en dev:

```
yarn start:dev
```

8. Reconstruir la base de datos con la semilla

```
http://localhost:4000/api/v2/seed
```

## Stack usado

- MongoDB
- Nesjs
