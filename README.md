# GeoPortal Web - Practica Final

Aplicación web geoespacial desarrollada como proyecto final, que permite la visualización, consulta y gestión de información geográfica mediante tecnologías modernas como Angular, OpenLayers y un backend basado en NestJS.

---

## Objetivo del Proyecto

Desarrollar un geoportal interactivo que integre:

- Visualización de mapas geográficos  
- Consumo de servicios geoespaciales  
- Arquitectura desacoplada (frontend + backend)  
- Despliegue mediante contenedores Docker  

---

## Arquitectura del Sistema

El sistema está dividido en dos componentes principales:

### 🔹 Frontend (visor-mapas)

- Angular  
- OpenLayers  
- TypeScript  

### 🔹 Backend (backend/api)

- NestJS  
- Node.js  
- API REST  

---

## Estructura del Proyecto

```
PracticaFinal/
│
├── backend/
│   ├── api/
│   │   ├── src/
│   │   ├── test/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── nest-cli.json
│   │
│   └── package.json
│
├── visor-mapas/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── angular.json
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

## Funcionalidades

- Visualización de mapas interactivos con OpenLayers  
- Consumo de servicios geoespaciales (WMS/WFS)  
- Consulta de información geográfica  
- Navegación (zoom, paneo)  
- Integración frontend-backend mediante API REST  

---

## Tecnologías Utilizadas

### Frontend
- Angular  
- OpenLayers  
- TypeScript  

### Backend
- NestJS  
- Node.js  
- TypeScript  

### DevOps
- Docker  
- Docker Compose  

---

## Instalación y Ejecución

### Requisitos

- Docker  
- Docker Compose  
- Node.js (opcional)  

---

### Ejecución

```
docker-compose up --build
```

---

## Acceso

- Frontend: http://localhost:4200  
- Backend: http://localhost:3000  

---

## Autor

María Leonor Gonzales

---

## Licencia

Proyecto académico
