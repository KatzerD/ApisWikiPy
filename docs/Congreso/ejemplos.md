---
sidebar_position: 6
---

# Ejemplos de Uso

Esta sección presenta ejemplos prácticos para consumir la API del Congreso Nacional del Paraguay desde distintos lenguajes de programación y herramientas. Podés usarlos como base para integrar los datos en tus propios proyectos.

---

## 📌 Obtener los últimos 5 proyectos legislativos

### cURL

```bash
curl https://datos.congreso.gov.py/opendata/api/data/proyecto?limit=5
```

### JavaScript (fetch)

```javascript
const res = await fetch("https://datos.congreso.gov.py/opendata/api/data/proyecto?limit=5");
const data = await res.json();
console.log(data);
```

### Python (requests)

```python
import requests

url = "https://datos.congreso.gov.py/opendata/api/data/proyecto?limit=5"
response = requests.get(url)
data = response.json()
print(data)
```

---

## 📌 Obtener leyes del año 2022

### cURL

```bash
curl https://datos.congreso.gov.py/opendata/api/data/ley/anho/2022
```

---

## 📌 Listar miembros de una comisión por periodo

```bash
curl https://datos.congreso.gov.py/opendata/api/data/comision/12/3/miembros
```

---

## 📌 Obtener proyectos de un parlamentario específico

```bash
curl https://datos.congreso.gov.py/opendata/api/data/parlamentario/102/proyectos
```

---

## 🧠 Recomendaciones prácticas

- Usá `limit` para evitar respuestas muy grandes.
- Aplicá `offset` para recorrer paginadamente los datos.
- Validá el campo `meta` para conocer el total de resultados.
- Asegurate de manejar errores HTTP correctamente (ver sección 8).

---