# rest-api-gitlab

## 🚀 Descripción

Este servicio aprovecha la REST API de GitLab para interactuar con los proyectos de un grupo específico. Permite obtener un listado detallado de los proyectos, facilitando la gestión y consulta de información relevante de manera eficiente.

## 🛠️ Requisitos

- Tener acceso a la API de GitLab.
- Contar con un token de acceso personal con los permisos necesarios.

## 📦 Instalación

1. Clona este repositorio:
  ```bash
  git clone https://gitlab.com/tu-usuario/rest-api-gitlab.git
  ```
2. Instala las dependencias necesarias:
  ```bash
  npm install
  ```

## 📋 Uso

1. Configura tu token de acceso personal en el archivo `.env`:
  ```env
  GITLAB_TOKEN=tu_token_aqui
  ```
2. Ejecuta el script para obtener los proyectos:
  ```bash
  npm start
  ```
