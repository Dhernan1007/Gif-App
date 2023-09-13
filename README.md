**<h1> Proyecto de Búsqueda de GIFs en React con Vite y Pruebas Unitarias</h1>**

Este es un proyecto desarrollado en React con Vite como el bundler de desarrollo, que te permite buscar GIFs según un término ingresado. Al ingresar un término de búsqueda, el proyecto utiliza la API de Giphy para recuperar y mostrar GIFs relacionados. Además, se han incluido pruebas unitarias con Jest para asegurar la calidad del código.

Tecnologías utilizadas
React: Este proyecto está construido con React, una biblioteca de JavaScript para crear interfaces de usuario.

Vite: Vite es utilizado como el bundler de desarrollo para una experiencia de desarrollo rápida y eficiente.

Hooks: Se han utilizado los hooks useState y useEffect para gestionar el estado y los efectos secundarios en los componentes.

Custom Hook: Se ha creado un custom hook llamado useFetch para manejar las llamadas a la API de Giphy y abstraer la lógica de búsqueda y recuperación de datos.

Jest: Se han incluido pruebas unitarias con Jest para garantizar la calidad del código.

Uso
Clona este repositorio en tu máquina local.

Abre una terminal y navega hasta la carpeta del proyecto.

Instala las dependencias utilizando npm o yarn:


```
npm install
yarn install
```
Obtén una API key de Giphy siguiendo sus instrucciones de registro.

Crea un archivo .env en la raíz del proyecto y agrega tu API key como una variable de entorno:

makefile
Copy code
REACT_APP_GIPHY_API_KEY=TuAPIKey
Inicia la aplicación:

```
npm run dev
```
Abre tu navegador y ve a http://localhost:5173/ para usar la aplicación.

Ingresa un término de búsqueda en el campo de búsqueda y presiona "Buscar" para ver los GIFs relacionados.

Pruebas Unitarias
Para ejecutar las pruebas unitarias con Jest, utiliza el siguiente comando:

```
npm test
# o
yarn test
```
Esto ejecutará las pruebas y mostrará los resultados en la terminal.

Estructura de archivos
El proyecto está estructurado de la siguiente manera:

src/component: Contiene los componentes de React utilizados en la aplicación, cada uno en su propio archivo para mantener la modularidad.

src/hooks: Aquí se encuentra el custom hook useFetch que se utiliza para realizar llamadas a la API de Giphy.

src/GifExpertApp: El componente principal que integra todos los demás componentes y gestiona el estado de la búsqueda.

src/style.css: Estilos CSS para la aplicación.

src/__tests__: Contiene las pruebas unitarias escritas con Jest.

<br>
<br>
<br>
<br>
<h2>NOTA: este pequeño proyecto fue realizado con la versión 18.2.0 de "React"</h2>
