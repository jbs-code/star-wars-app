# Star Wars APP

Esta aplicación es solo una prueba para consumir la API [SWAPI](https://swapi.dev/); además de la API de [GIPHY](https://developers.giphy.com/) para obtener los stickers.

## Configuración

La aplicación está creada con [VITE](https://vitejs.dev/) a través de yarn, por lo tanto solo es necesario hacer un `yarn install` para instalar las dependencias del proyecto.

También es necesario renombrar el archivo `.env` a `.env.local` y agregar la api_key de Giphy que es necesaria para hacer el fetch a la API.

La parte de los estilos está creada con [Tailwindcss](https://tailwindcss.com/docs/guides/vite/) con la configuración para VITE

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
