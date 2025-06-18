---
sidebar_position: 2
---

# Guía rápida

Esta guía te muestra cómo guiarte dentro de la Wiki.

---

## 🔗 URL Base de las APIs

Las urls base de cada api las encontraremos dentro de su respectiva documentación en la sección de endpoints

---

## ✅ Métodos de solicitud

- Las APIs utilizan el métodos **HTTP GET** para acceder a la información pública.
- Se requiere autenticación para desbloquear mejores características.

---

## 📄 Formatos de Respuesta

Las APIs devuelven datos en formato JSON por defecto. Cada respuesta pueden incluir:

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

Por consola
```
curl https://datos.congreso.gov.py/opendata/api/data/proyecto?limit=5
```

Usando fetch en JavaScript
```
const res = await fetch("https://datos.congreso.gov.py/opendata/api/data/proyecto?limit=5");
const json = await res.json();
console.log(json);
```

## ⚠️ ¿Errores?
Si obtenés errores (como 400 o 404), consultá la sección “Gestión de errores” de cada API.