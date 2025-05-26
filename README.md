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

1. Configura tu token de acceso personal en el archivo `services/apirest.js`:
  ```bash
  const headers = {
    'Authorization': 'Bearer tu_token_aqui',
    'Cookie': '__cf_bm=aSF5PwxYWKdvJT6PqUJw4.2RqwdU_vRvKKRnmrm78JQ-1747146008-1.0.1.1-VLbBQ9c21_NAjV0D5YVjzLepfbFThgu491dnZQ6HGlzS1mgMjlIL8KK5jTXmeoTNik8lTLuU6D8YRmqieFziTWd3z69cNSa29To8IfCwsB8; _cfuvid=P7fyW8.TI6SubTLUIsGKw5TDli6jp2PAW0Jh3WOAsTo-1747146008072-0.0.1.1-604800000'
  };
  ```

2. Ejecuta el script para obtener los proyectos:
  ```bash
  node index.js 100 1
  ```
  Dónde:
  * 100: Es el número de resultado por pagina.
  * 1: Es la página
