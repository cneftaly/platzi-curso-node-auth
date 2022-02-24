# Truco para Insomnia

Si se desea capturar el token jwt que genera el login se debe pegar lo siguiente en las variables de ambiente:

```javascript
{
	"TOKEN_ADMIN": "{% response 'body', '', '', 'never', 60 %}",
}
```
Nota: después de pegar la línea de código aparecerá un recuadro en rojo, aquí se deben configurar los parámetros según sus request disponible (esto se hace a través de una ventana gráfica).

* **Function to Perform:** Debe ser response (origen de la info que se desea guardar)
* **Attribute:** body ( que parte especifica del response contiene la info)
* **Request:** El nombre del request
* **Filter:** Este es valor que deseamos guardar en la variable de entorno, en este caso es $.token
* **Trigger behavior:** Acción a realizar una vez obtenida la info, en este caso No History, ya que solo queremos las info guardada en token
