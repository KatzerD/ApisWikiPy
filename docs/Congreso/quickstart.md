---
sidebar_position: 2
---

# 2. Guía rápida (Quickstart)

Esta guía te muestra cómo comenzar a consumir la API del Congreso Nacional del Paraguay en pocos minutos.

---

## 🔗 URL Base de la API

```
https://datos.congreso.gov.py/opendata/api
```

Todos los endpoints se construyen a partir de esta URL base.

---

## ✅ Métodos de solicitud

- La API utiliza el método **HTTP GET** para acceder a la información pública.
- No se requiere autenticación.

---

## 📄 Formatos de Respuesta

La API devuelve datos en formato JSON por defecto. Cada respuesta incluye:

- **meta**: Metadatos sobre el total de resultados y la paginación.
- **data**: Array de objetos con los datos solicitados.
- **links**: URLs para navegar entre páginas de resultados.

### Ejemplo de respuesta estándar

```json
{
  "meta": {
    "totalCount": 120,
    "page": 1,
    "perPage": 10
  },
  "data": [
    {
      "id": 317,
      "fecha": "2023-05-17",
      "descripcion": "Sesión Ordinaria del Senado",
      "camara": "Senado"
    }
  ],
  "links": {
    "self": "https://datos.congreso.gov.py/opendata/api/data/sesion/camara/S?page=1",
    "next": "https://datos.congreso.gov.py/opendata/api/data/sesion/camara/S?page=2",
    "last": "https://datos.congreso.gov.py/opendata/api/data/sesion/camara/S?page=12"
  }
}
```

## 📥 Ejemplo de solicitud básica

```
curl https://datos.congreso.gov.py/opendata/api/data/proyecto?limit=5
```

```
// Usando fetch en JavaScript
const res = await fetch("https://datos.congreso.gov.py/opendata/api/data/proyecto?limit=5");
const json = await res.json();
console.log(json);
```

## 🔁 Paginación
Para controlar la cantidad de resultados devueltos, utilizá los parámetros:

- limit: número máximo de resultados por página (por defecto: 50).

- offset: desplazamiento desde el inicio (por defecto: 0).

```
GET /data/proyecto?offset=50&limit=50
```

## ⚠️ ¿Errores?
Si obtenés errores (como 400 o 404), consultá la sección “Gestión de errores”.