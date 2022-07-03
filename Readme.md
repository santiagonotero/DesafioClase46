### Koa - Instrucciones de Uso

Primero hay que ejecutar el sitio, por ejemplo en modo desarrollo con el siguiente comando:

  `npm run dev`
      
En otro software que permita enviar peticiones a un servidor, tal como Postman, se tienen que enviar las siguientes peticiones:
    



#### Obtener un listado de productos almacenados

Para acceder al listado de productos de la base de datos, hay que enviar el comando GET a la siguiente dirección:

```javascript
localhost:8080/api/productos/
```
Y esto devuelve una lista de los productos almacenados en la Base de Datos.

#### Agregar un producto

Si en cambio queremos introducir un nuevo artículo tenemos que enviar el comando POST a la siguiente dirección:

```javascript
localhost:8080/api/productos/add
```
La información a almacenar se envía en el Body de la petición.
El servidor devuelve el _id asignado por Mongo al momento de almacenar los datos enviados.


#### Borrar un producto

Hay que enviar el comando DELETE a la siguiente dirección:

```javascript
localhost:8080/api/productos/:id
```
Siendo id el _id que Mongo le asignó.

#### Modificar un producto

Se utiliza una petición PUT a la siguiente dirección:

```javascript
localhost:8080/api/productos/:id
```
Donde id es el _id del producto a modificar que le asignó Mongo . El contenido a actualizar se envía por el Body.
