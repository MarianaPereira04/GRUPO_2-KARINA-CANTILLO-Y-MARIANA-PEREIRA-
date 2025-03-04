# API REST con NestJS

## Descripción
Este proyecto consiste en una API REST desarrollada con el framework NestJS para gestionar un sistema de inventario de una tienda en línea. La aplicación implementa módulos para la gestión de productos, categorías, usuarios y pedidos, consumiendo datos desde archivos JSON.

## Requisitos Previos
Antes de instalar y ejecutar el proyecto, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión recomendada: 16 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- [NestJS CLI](https://docs.nestjs.com/) (opcional, pero recomendado):
  ```sh
  npm install -g @nestjs/cli
  ```

## Instalación
1. Clonar el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Acceder al directorio del proyecto:
   ```sh
   cd <NOMBRE_DEL_PROYECTO>
   ```
3. Instalar las dependencias del proyecto:
   ```sh
   npm install
   ```

## Configuración
1. Crear un directorio `data/` en la raíz del proyecto y agregar los archivos JSON con los datos iniciales:
   - `products.json`
   - `categories.json`
   - `users.json`
   - `orders.json`
2. Asegurar que los archivos JSON tienen la estructura esperada por cada módulo.

## Ejecución del Proyecto
Para iniciar el servidor de desarrollo, usa el siguiente comando:
```sh
npm run start
```

Si deseas ejecutar el proyecto con recarga en caliente (Hot Reload):
```sh
npm run start:dev
```

La API estará disponible en:
```
http://localhost:3000
```

## Endpoints Principales
- **Productos** (`/products`)
  - `GET /products`: Obtener todos los productos.
  - `GET /products/:id`: Obtener un producto por ID.
  - `POST /products`: Crear un nuevo producto.
  - `PUT /products/:id`: Actualizar un producto.
  - `DELETE /products/:id`: Eliminar un producto.

- **Categorías** (`/categories`)
  - `GET /categories`: Obtener todas las categorías.
  - `GET /categories/:id`: Obtener una categoría por ID.
  - `POST /categories`: Crear una nueva categoría.
  - `PUT /categories/:id`: Actualizar una categoría.
  - `DELETE /categories/:id`: Eliminar una categoría.

- **Usuarios** (`/users`)
  - `GET /users`: Obtener todos los usuarios.
  - `GET /users/:id`: Obtener un usuario por ID.
  - `POST /users`: Crear un nuevo usuario.
  - `PUT /users/:id`: Actualizar un usuario.
  - `DELETE /users/:id`: Eliminar un usuario.

- **Pedidos** (`/orders`)
  - `GET /orders`: Obtener todos los pedidos.
  - `GET /orders/:id`: Obtener un pedido por ID.
  - `POST /orders`: Crear un nuevo pedido.
  - `PUT /orders/:id`: Actualizar un pedido.
  - `DELETE /orders/:id`: Eliminar un pedido.

## Pruebas
Para ejecutar las pruebas unitarias:
```sh
npm run test
```

Para ejecutar las pruebas end-to-end:
```sh
npm run test:e2e
```

## Despliegue
Para generar la versión de producción:
```sh
npm run build
```

Para ejecutar la aplicación en modo producción:
```sh
npm run start:prod
```

## Licencia
Este proyecto está bajo la licencia MIT.

