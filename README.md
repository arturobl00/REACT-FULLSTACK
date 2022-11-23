# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Proyecto FullStack

## 1 Crear proyecto npm créate-react-app fullstack

## 2 instalaciones: 
@mui/material \
@emotion/react \
@emotion/styled \
@mui/x-data-grid \
@mui/icons-material \
react-router-dom@6 \
react-pro-sidebar@0.7.1 \
formik \
yup \
@fullcalendar/core \
@fullcalendar/daygrid \
@fullcalendar/interaction \
@fullcalendar/react \
@fullcalendar/timegrid \
@fullcalendar/list \
@nivo/core \
@nivo/pie \
@nivo/line \
@nivo/bar \
@nivo/geo

## 3 Limpiar proyecto dejar el archivo index.css para personalizar nuestras hojas de estilo

## 4 Editamos el archivo index.js (Agregamos la librería de BrowserRouter para la navegacón entre componentes del react-router-dom)

## 5 Editamos el archivo App.js limpiado el código y mostrando únicamente un <h1>

## 6 Abrimos Google Font para buscar nuestra fuente Source Sans Pro @import
Regular 400 \
SemiBlod 600 \
Bold 700

## 7 Copiamos el código del @import y lo pegamos en el archivo index.css
Le damos un poco de estilo

## 8 Creamos una carpeta llamada data dentro de ella crearemos los archivos mockData.js mockGeoFeatures.js Estos archivos los comparto son la dataSet de nuestro Sistema.

## 9 Creamos una carpeta de componentes que serán los elementos de la página de cada una de las secciones de nuestro sistema.
BarChart.jsx \
GeographyChart.jsx \
Header.jsx \
LineChart.jsx \
PieChart.jsx \
ProgressCircle.jsx \
StatBox.jsx

## 10 Creamos una carpeta llamada scenes en cada una de ellas tendremos un carpeta y archivo index.jsx menos en global en este apartado encapsularemos el componente y lo mostraremos como un módulo dentro de nuestra App.js
•	bar \
•	calendar \
•	contacts \
•	dashboard \
•	faq \
•	form \
•	geography \
•	global \
  o	Sidebar.jsx \
  o	Topbar.jsx \
•	invoices \
•	line \
•	pie \
•	team

## 11 Creamos un archivo en la raíz llamado theme.jsx este se usará para poner en tema obscuro o claro nuestro entorno se sugiere adicionar la extensión Tailwind Shades para crear las clases de cada uno de los colores Se usa con ctrl+k y crtl+g

La base de los colores del estilo dark son:
•	#666666 \
•	#141b2d \
•	#4cceac \
•	#db4f4a \
•	#6870fa

## 12 Creamos con rafce un componente Topbar en el archivo con el mismo nombre aquí crearemos una barra superior con algunos iconos de los cuales destaca la opción de cambiar de un estilo dark a un light.

## 13 ahora en el archivo App.js vamos a importar el componente Toolbar recién creado y las librerías de materialUI, theme y Topbar

## 14 En El App es momento de poner elementos en el contenedor principal de nuestro sistema para ello nos vamos a la carpeta dashboard en el archivo index.jsx y con un rafce solo para que se muestre el contenido lo importamos en el archivo y agregamos la lieria react-route-dom

## 15 Trabajamos en el SideBar uno de los elementos más importantes que nos permitirán la navegación dentro de nuestro sistema vamos a importar las librerías de React-pro-sidebar, material y los iconos que emplearemos en la Sider, Agregamos una carpeta mas llamada assets para poner imágenes

## 16 Importamos en App.js La Sidebart antes del main

## `17 Trabajamos con el componente Header.jsx

## 18 Este componente lo vamos a ocupar en cada una de las secciones de nuestro sistema empezamos por integrarlo en Dashboard

## 19 Ahora pasaremos al segundo elemento que es Team vamos a ir a la scene para crear el componente, posteriormente lo importamos y lo enrutamos en nuestro App.js

## 20 Creamos nuestro código importamos los datos de nuestra data mockDataTeam, el Header, Token y el componente Datagrid de MaterialUI

## 21 mismo Proceso, pero ahora para Contacts

## 22 Invoices

## 23 Forms en esta parte usaremos Formik, yup

## 24 Calendar

## 25 FAQ usaremos el componente Accordion de material

## 26 Graficas Usaremos BarChart el componente y aparte la scena vamos a importar ResponsiveBar de nivo y los dataset de mockBarData el cual nombraremos como data





