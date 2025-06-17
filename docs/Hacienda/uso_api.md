---
sidebar_position: 4
title: 4. Uso de la API
---

# 4. Uso de la API

Esta sección detalla cómo interactuar correctamente con la API RESTful del Ministerio de Hacienda. Abarca los encabezados necesarios, los métodos de solicitud y las prácticas comunes para realizar peticiones exitosas.

## 📥 Encabezados HTTP requeridos

Para la mayoría de las solicitudes autenticadas, es necesario incluir los siguientes encabezados:

```http
Authorization: Bearer {access_token}
Content-Type: application/json
Accept: application/json
```

- `Authorization`: debe incluir el token obtenido previamente.
- `Content-Type` y `Accept`: aseguran que las solicitudes y respuestas utilicen el formato JSON.

## ⚙️ Métodos soportados

La API utiliza los siguientes métodos HTTP:

- `GET`: para obtener datos.
- `POST`: reservado para autenticación.
- `OPTIONS`: para verificar capacidades del endpoint (opcional).

## 🔎 Formato de respuesta

Las respuestas siguen una estructura consistente, con metadatos útiles y el conjunto de datos solicitado.

Ejemplo:

```json
{
  "meta": {
    "total": 4213,
    "per_page": 100,
    "current_page": 1,
    "last_page": 43
  },
  "data": [
    {
      "anio": 2024,
      "entidad": "Ministerio de Educación",
      "monto": 1532000000
    },
    ...
  ]
}
```

## 📄 Parámetros comunes

Algunos endpoints aceptan parámetros opcionales para filtrar resultados:

| Parámetro     | Descripción                                | Ejemplo       |
|---------------|--------------------------------------------|---------------|
| `anio`        | Año fiscal del dato                        | `anio=2024`   |
| `entidad`     | Nombre de la entidad                       | `entidad=SALUD` |
| `page`        | Número de página (para paginación)         | `page=2`      |
| `per_page`    | Número de resultados por página            | `per_page=50` |

⚠️ Es importante usar paginación para evitar respuestas demasiado grandes que puedan ser truncadas o rechazadas.

## 🧪 Ejemplo de uso con cURL

```bash
curl -X GET "https://api.ejemplo.gov.py/presupuesto?anio=2023&page=1" \
  -H "Authorization: Bearer {access_token}" \
  -H "Accept: application/json"
```

Este comando realiza una solicitud para obtener datos del presupuesto del año 2023.

## 🚧 Errores comunes

- `401 Unauthorized`: token ausente o inválido.
- `403 Forbidden`: acceso denegado a los datos.
- `429 Too Many Requests`: se excedió el límite de solicitudes.
- `500 Internal Server Error`: error en el servidor de la API.

Consulta la sección de [Errores](./06-errores.md) para más detalles.

