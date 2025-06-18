---
sidebar_position: 8
---

# Preguntas Frecuentes (FAQ)

A continuación se presentan algunas de las preguntas más comunes sobre el uso de la API del Congreso Nacional del Paraguay.

---

## ❓ ¿Necesito una clave o token para usar la API?

No. Actualmente, todos los endpoints son públicos y no requieren autenticación.

---

## ❓ ¿Qué formato tienen las respuestas?

Las respuestas están en formato `JSON` y generalmente incluyen los campos: `meta`, `data` y `links`.

---

## ❓ ¿Cuántos registros puedo obtener por solicitud?

Por defecto, cada solicitud devuelve hasta **50 resultados**. Se puede controlar esto usando el parámetro `limit`.

---

## ❓ ¿Cómo obtengo todos los resultados?

Utilizá los parámetros `offset` y `limit` para paginar los datos. Por ejemplo:

```
GET /data/proyecto?limit=50&offset=0
GET /data/proyecto?limit=50&offset=50
GET /data/proyecto?limit=50&offset=100
```

---

## ❓ ¿Puedo filtrar los resultados?

No existen filtros avanzados por parámetros como fechas o texto. Algunos endpoints permiten acceder por ID, año o cámara (por ejemplo: `/ley/anho/2022`, `/sesion/camara/S`).

---

## ❓ ¿Cada cuánto se actualizan los datos?

Los datos se actualizan diariamente durante la noche (zona horaria GMT-4).

---

## ❓ ¿Dónde puedo reportar errores o pedir ayuda?

Podés escribir a:  
📧 `datosabiertos@congreso.gov.py`  
También podés revisar la [documentación oficial](https://datos.congreso.gov.py/opendata/api/docs).

---
