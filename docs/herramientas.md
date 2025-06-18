---
sidebar_position: 90
title: SDKs y Herramientas
---

# SDKs y Herramientas

Aunque las APIs públicas del Paraguay (como las del Congreso Nacional, el Ministerio de Hacienda y la Dirección Nacional de Contrataciones Públicas) no proporcionan SDKs oficiales, es posible integrarlas fácilmente en distintos lenguajes de programación y plataformas utilizando herramientas estándar para el consumo de APIs REST.

Esta sección ofrece ejemplos y recursos prácticos para facilitar esa integración, independientemente del proveedor de la API.

## 🐍 Python

### Requisitos

- `requests` (o `httpx`)
- Manejo básico de JSON

### Ejemplo básico

```python
import requests

token = "TU_ACCESS_TOKEN"
headers = {
    "Authorization": f"Bearer {token}",
    "Accept": "application/json"
}

url = "https://TU_DOMINIO_API/api/endpoint?param1=valor"

response = requests.get(url, headers=headers)
data = response.json()
print(data)
```

Reemplaza `TU_DOMINIO_API` por la URL base correspondiente a la API que estés utilizando y ajusta `endpoint` y parámetros según la documentación.

## 🌐 JavaScript / Node.js

```javascript
const fetch = require('node-fetch');

const token = "TU_ACCESS_TOKEN";

fetch("https://TU_DOMINIO_API/api/endpoint?param1=valor", {
  headers: {
    "Authorization": `Bearer ${token}`,
    "Accept": "application/json"
  }
})
.then(res => res.json())
.then(data => console.log(data));
```

## 🛠️ Postman

Puedes importar manualmente cualquier endpoint de las APIs en Postman y configurar:

- Método: `GET` o `POST`
- Headers:
  - `Authorization: Bearer TU_ACCESS_TOKEN`
  - `Accept: application/json`
- Parámetros (query) como `anio`, `page`, `entidad`, etc.

### Recomendación

Guarda colecciones reutilizables en Postman con distintos filtros para pruebas rápidas según el tipo de API (presupuestos, leyes, contratos, etc.).

## 🖥️ Herramientas CLI útiles

- `curl`: para pruebas rápidas desde consola.
- `httpie`: alternativa más legible a `curl`.

### Ejemplo con curl

```bash
curl -X GET "https://TU_DOMINIO_API/api/endpoint?param1=valor" \
  -H "Authorization: Bearer TU_ACCESS_TOKEN" \
  -H "Accept: application/json"
```

## 📦 Automatización

- En Python, puedes agendar tareas con `schedule` o `cron`.
- En JavaScript/Node.js, usa `node-cron` o servidores sin estado como Vercel Functions para integraciones.

## 📚 Comunidad

Aunque no hay SDK oficial, puedes explorar o contribuir con wrappers comunitarios en GitHub, GitLab u otros espacios colaborativos. Algunas comunidades paraguayas de desarrolladores también comparten integraciones útiles con estas APIs públicas.



Aunque las APIs públicas del Paraguay (como las del Congreso Nacional, el Ministerio de Hacienda y la Dirección Nacional de Contrataciones Públicas) no proporcionan SDKs oficiales, es posible integrarlas fácilmente en distintos lenguajes de programación y plataformas utilizando herramientas estándar para el consumo de APIs REST.

Esta sección ofrece ejemplos y recursos prácticos para facilitar esa integración, independientemente del proveedor de la API.

## 🐍 Python

### Requisitos

- `requests` (o `httpx`)
- Manejo básico de JSON

### Ejemplo básico

```python
import requests

token = "TU_ACCESS_TOKEN"
headers = {
    "Authorization": f"Bearer {token}",
    "Accept": "application/json"
}

url = "https://TU_DOMINIO_API/api/endpoint?param1=valor"

response = requests.get(url, headers=headers)
data = response.json()
print(data)
Reemplaza TU_DOMINIO_API por la URL base correspondiente a la API que estés utilizando y ajusta endpoint y parámetros según la documentación.

## 🌐 JavaScript / Node.js
javascript
Copiar
Editar
const fetch = require('node-fetch');

const token = "TU_ACCESS_TOKEN";

fetch("https://TU_DOMINIO_API/api/endpoint?param1=valor", {
  headers: {
    "Authorization": `Bearer ${token}`,
    "Accept": "application/json"
  }
})
.then(res => res.json())
.then(data => console.log(data));
🛠️ Postman
Puedes importar manualmente cualquier endpoint de las APIs en Postman y configurar:

Método: GET o POST

Headers:

Authorization: Bearer TU_ACCESS_TOKEN

Accept: application/json

Parámetros (query) como anio, page, entidad, etc.

Recomendación
Guarda colecciones reutilizables en Postman con distintos filtros para pruebas rápidas según el tipo de API (presupuestos, leyes, contratos, etc.).

🖥️ Herramientas CLI útiles
curl: para pruebas rápidas desde consola.

httpie: alternativa más legible a curl.

Ejemplo con curl
bash
Copiar
Editar
curl -X GET "https://TU_DOMINIO_API/api/endpoint?param1=valor" \
  -H "Authorization: Bearer TU_ACCESS_TOKEN" \
  -H "Accept: application/json"
📦 Automatización
En Python, puedes agendar tareas con schedule o cron.

En JavaScript/Node.js, usa node-cron o servidores sin estado como Vercel Functions para integraciones.

📚 Comunidad
Aunque no hay SDK oficial, puedes explorar o contribuir con wrappers comunitarios en GitHub, GitLab u otros espacios colaborativos. Algunas comunidades paraguayas de desarrolladores también comparten integraciones útiles con estas APIs públicas.

yaml
Copiar
Editar

---