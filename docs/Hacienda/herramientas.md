---
sidebar_position: 9
title: SDKs y Herramientas
---

# SDKs y Herramientas

Aunque la API del Ministerio de Hacienda no proporciona SDKs oficiales, es posible integrarla fácilmente en distintos lenguajes de programación y plataformas utilizando herramientas estándar de consumo de APIs REST.

Esta sección ofrece ejemplos y recursos prácticos para facilitar esa integración.

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

url = "https://datos.hacienda.gov.py/api/presupuesto?anio=2024&page=1"

response = requests.get(url, headers=headers)
data = response.json()
print(data)
```

## 🌐 JavaScript / Node.js

```javascript
const fetch = require('node-fetch');

const token = "TU_ACCESS_TOKEN";

fetch("https://datos.hacienda.gov.py/api/presupuesto?anio=2024", {
  headers: {
    "Authorization": `Bearer ${token}`,
    "Accept": "application/json"
  }
})
.then(res => res.json())
.then(data => console.log(data));
```

## 🛠️ Postman

Puedes importar manualmente cualquier endpoint de la API en Postman y configurar:

- Método: `GET` o `POST`
- Headers:
  - `Authorization: Bearer TU_ACCESS_TOKEN`
  - `Accept: application/json`
- Parámetros (query) como `anio`, `page`, `entidad`, etc.

### Recomendación

Guarda colecciones reutilizables en Postman con distintos filtros para pruebas rápidas.

## 🖥️ Herramientas CLI útiles

- `curl`: para pruebas rápidas desde consola.
- `httpie`: alternativa más legible a `curl`.

### Ejemplo con curl

```bash
curl -X GET "https://datos.hacienda.gov.py/api/presupuesto?anio=2023" \
  -H "Authorization: Bearer TU_ACCESS_TOKEN" \
  -H "Accept: application/json"
```

## 📦 Automatización

- En Python, puedes agendar tareas con `schedule` o `cron`.
- En JavaScript/Node.js, usa `node-cron` o servidores sin estado como Vercel Functions para integraciones.

## 📚 Comunidad

Aunque no hay SDK oficial, puedes explorar o contribuir con wrappers comunitarios en GitHub o GitLab.

