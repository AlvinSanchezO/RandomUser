# Test Cases - RandomUser Application

## TC-001: Visualización correcta de la información del perfil
* **Objetivo:** Verificar que los datos recibidos de la API se rendericen adecuadamente en las 4 secciones requeridas.
* **Precondiciones:** Aplicación ejecutándose (`ng serve`) y conectividad a internet.
* **Pasos:**
  1. Abrir la aplicación en el navegador (`http://localhost:4200`).
  2. Esperar la respuesta de la llamada inicial a la API.
* **Resultado Esperado:**
  * **Fotografía:** Se muestra la imagen del usuario correctamente renderizada.
  * **Nombre y Nacimiento:** Se despliega el nombre completo (`first` + `last`) y la edad/fecha de nacimiento.
  * **Dirección:** Se muestra el País, Estado, Ciudad y Calle.
  * **Contacto:** Se despliega Email, Teléfono y Celular.

---

## TC-002: Solicitud e intercambio de usuario dinámico
* **Objetivo:** Validar que la interfaz permita solicitar un nuevo usuario aleatorio y refresque la pantalla.
* **Precondiciones:** TC-001 completado con éxito.
* **Pasos:**
  1. Dar clic en el botón "Generar Otro Usuario".
  2. Verificar la actualización de los elementos de la interfaz.
* **Resultado Esperado:**
  * Se activa el estado de carga brevemente.
  * La imagen, nombre y datos de contacto se reemplazan con los del nuevo usuario devuelto por la API.

---

## TC-003: Control de excepciones por fallo de red
* **Objetivo:** Validar la estabilidad del componente ante la imposibilidad de contactar el servidor.
* **Precondiciones:** Desactivar la conexión a internet en DevTools (modo Offline).
* **Pasos:**
  1. Activar el modo Offline.
  2. Presionar el botón "Generar Otro Usuario" o recargar la página.
* **Resultado Esperado:**
  * La aplicación finaliza el estado de carga sin romper la UI.
  * El error queda registrado en la consola de JavaScript.