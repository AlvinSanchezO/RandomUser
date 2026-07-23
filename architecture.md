# Architecture Documentation - RandomUser Angular Project

## Overview
Aplicación Angular desarrollada para consumir la API pública `https://randomuser.me/api/` y presentar los detalles de un usuario generado de forma aleatoria estructurado en secciones modulares.

## Architecture Diagram & Folder Structure
src/
├── app/
│   ├── components/
│   │   └── persona/             # Componente de vista para desplegar la información del usuario
│   │       ├── persona.component.ts
│   │       ├── persona.component.html
│   │       └── persona.component.css
│   ├── models/
│   │   └── user.model.ts        # Tipado e interfaces TypeScript para la API
│   ├── services/
│   │   └── randomuser.service.ts # Servicio de comunicación HTTP
│   ├── app.config.ts            # Configuración global y proveedor HttpClient
│   └── app.component.ts         # Componente contenedor principal

## Data Flow
1. `PersonaComponent` inicializa su ciclo de vida ejecutando la carga del usuario.
2. Invoca el método `getRandomUser()` del servicio `RandomuserService`.
3. `RandomuserService` realiza una petición HTTP GET a la API `https://randomuser.me/api/`.
4. Mediante el operador `map` de RxJS, extrae el primer elemento del arreglo `results`.
5. Los datos se almacenan en un `Signal` de Angular, actualizando la interfaz reactivamente.

## Tech Stack
* **Framework:** Angular (Standalone Components)
* **State Management:** Angular Signals
* **HTTP Client:** `provideHttpClient` + RxJS
* **Styling:** CSS3 (Flexbox & Responsive Card Layout)