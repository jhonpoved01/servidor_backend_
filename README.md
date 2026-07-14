# 📚 Servidor Backend Básico - Sistema de Gestión Académica y PQRS

## 📖 Descripción

Este proyecto fue desarrollado como parte del proceso de aprendizaje de **Node.js** y **Express.js**.

Su objetivo es comprender la creación de un servidor backend básico, la implementación de rutas HTTP y la organización de una API REST utilizando una arquitectura por capas.

En el proyecto se desarrollaron dos actividades:

- Implementación de un servidor básico con Express.
- Desarrollo de una API REST para la gestión de PQRS (Peticiones, Quejas, Reclamos y Sugerencias).

---

# 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- JavaScript (Vanilla)
- npm
- Git
- GitHub

---

# 📁 Estructura del proyecto

```text
servidor_backend/
│
├── controllers/
│   └── pqrsController.js
│
├── models/
│   └── pqrsModel.js
│
├── routes/
│   └── pqrsRoutes.js
│
├── node_modules/
│
├── main.js
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Instalación

Clonar el repositorio

```bash
git clone https://github.com/jhonpoved01/servidor_backend_.git
```

Ingresar al proyecto

```bash
cd servidor_backend_
```

Instalar las dependencias

```bash
npm install
```

Ejecutar el servidor

```bash
node main.js
```

o

```bash
npm start
```

El servidor quedará disponible en:

```
http://localhost:3000
```

---

# 📌 Rutas del Sistema Académico

## Inicio

```
GET /
```

Respuesta

```
Bienvenido al Sistema de Gestión Académica.
```

---

## Aprendices

```
GET /aprendices
```

Respuesta

```
Aquí se administra la información de los aprendices.
```

---

## Programas

```
GET /programas
```

Respuesta

```
Aquí se administra la información de los programas de formación.
```

---

# 📌 API REST - Sistema PQRS

## Obtener todas las PQRS

```
GET /pqrs
```

Código HTTP

```
200 OK
```

---

## Obtener una PQRS

```
GET /pqrs/:id
```

Ejemplo

```
GET /pqrs/1
```

Código HTTP

```
200 OK
```

---

## Registrar una PQRS

```
POST /pqrs
```

Código HTTP

```
201 Created
```

---

## Actualizar una PQRS

```
PUT /pqrs/:id
```

Código HTTP

```
200 OK
```

---

## Eliminar una PQRS

```
DELETE /pqrs/:id
```

Código HTTP

```
200 OK
```

---

# 🏗 Arquitectura del proyecto

El proyecto está organizado siguiendo una arquitectura por capas.

## Routes

Reciben las solicitudes HTTP y las dirigen al controlador correspondiente.

```
routes/
```

---

## Controllers

Procesan las peticiones, llaman al modelo y generan la respuesta HTTP.

```
controllers/
```

---

## Models

Simulan el acceso a una base de datos devolviendo mensajes según la operación realizada.

```
models/
```

---

# 🔄 Flujo de una petición

```text
Cliente
   │
   ▼
main.js
   │
   ▼
Routes
   │
   ▼
Controller
   │
   ▼
Model
   │
   ▼
Controller
   │
   ▼
Cliente
```

---

# 📡 Códigos HTTP utilizados

| Método | Código |
|---------|--------|
| GET | 200 OK |
| POST | 201 Created |
| PUT | 200 OK |
| DELETE | 200 OK |
| Error interno | 500 Internal Server Error |

---

# 🎯 Objetivos de aprendizaje

Durante el desarrollo del proyecto se aplicaron conceptos como:

- Inicialización de proyectos con npm.
- Instalación y configuración de Express.
- Creación de servidores HTTP.
- Implementación de rutas.
- Arquitectura por capas.
- Uso de Controladores.
- Uso de Modelos.
- Métodos HTTP (GET, POST, PUT y DELETE).
- Códigos de respuesta HTTP.
- Organización de proyectos backend.
- Control de versiones con Git y GitHub.

---

# 📌 Historial de actividades

## Actividad 1
- Servidor básico con Express.
- Configuración del puerto 3000.
- Rutas de bienvenida, aprendices y programas.

## Actividad 2
- Implementación de una API REST para PQRS.
- Organización por capas (Routes, Controllers y Models).
- Implementación de los métodos GET, POST, PUT y DELETE.
- Uso de códigos de estado HTTP.

# 👨‍💻 Autor

**Jhon Poveda**

Proyecto desarrollado como evidencia de aprendizaje para el programa de formación del **SENA**.
