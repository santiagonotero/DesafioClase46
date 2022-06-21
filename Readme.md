### GraphQL - Instrucciones de Uso

Primero hay que ejecutar el sitio, por ejemplo en modo desarrollo con el siguiente comando:

  `npm run dev`
      
Luego en un navegador hay que ir a la siguiente dirección:

    http://localhost:8080/graphql
    
Y se ejecutará GraphiQL, la interfaz gráfica de GraphQL.


#### Obtener un listado de productos almacenados

Para acceder al listado de productos de la base de datos, hay que escribir el siguiente comando:

```javascript
query {
  getAllProducts{ _id, nombre, foto}
}
```
Y GraphQL devolverá la lista de productos almacenados en la base de datos.

#### Agregar un producto

Si en cambio queremos introducir un nuevo artículo:

```javascript
mutation {
  createProduct(data: {
        nombre: "[Nombre_del_producto]",
    	precio: [Precio_del_artículo(valor_int)],
    	foto: "[Link_a_la_foto_del_producto]"}) 
  {
    _id,
    nombre,
    precio,
    foto,
  }
}
```

Y GraphQL devolverá lo que se almacenó en la base de datos, lo cual consiste en los mismos datos que se ingresaron más el valor '_id' asignado por Mongo al nuevo producto.


#### Borrar un producto

Para eliminar un producto el comando es el siguiente:

```javascript
mutation {
  deleteProduct(_id:"[_id_del_artículo_a_eliminar]")
  {acknowledged, deletedCount}
}
```

#### Modificar un producto

Hay que usar el comando updateProduct:

```javascript
mutation {
  updateProduct(data: {_id:"[_id_del_artículo_a_modificar]", nombre: "[Nombre_nuevo]", precio: [Precio_nuevo], foto: "[Nueva_foto]"})
  {isUpdated}
}
```
