---
sidebar_position: 10
---

# Apéndices

Esta sección contiene información complementaria que puede resultar útil para interpretar los datos y utilizar correctamente la API v3 de la DNCP.

---

## 📖 Glosario de Términos

| Término        | Definición |
|----------------|-----------|
| **OCDS**       | *Open Contracting Data Standard*. Modelo de datos para contrataciones públicas. |
| **Tender**     | Etapa del proceso donde se publica la oportunidad de contratación. |
| **Award**      | Adjudicación. Resultado del proceso de evaluación de ofertas. |
| **Contract**   | Contrato firmado entre la entidad compradora y el proveedor adjudicado. |
| **Planning**   | Etapa de planificación, antes de que se publique la licitación. |
| **Record**     | Representación completa de un proceso de contratación, incluyendo todas sus fases. |
| **Release**    | Publicación individual de un evento o cambio dentro de un proceso OCDS. |
| **OCID**       | Identificador único para un proceso de contratación. |
| **OAuth2**     | Protocolo estándar de autorización para acceder de forma segura a APIs. |

---

## 📜 Códigos de Estado HTTP

| Código | Significado |
|--------|-------------|
| 200    | OK: La solicitud fue exitosa. |
| 400    | Bad Request: Error en los parámetros enviados. |
| 401    | Unauthorized: Token inválido o ausente. |
| 403    | Forbidden: Acceso no permitido al recurso. |
| 404    | Not Found: El recurso no existe. |
| 429    | Too Many Requests: Límite de llamadas superado. |
| 500    | Internal Server Error: Fallo interno del servidor. |

---

## ❓ Preguntas Frecuentes (FAQ)

### ¿Puedo usar la API sin autenticación?
Sí, pero estás limitado a 15 solicitudes por minuto.

### ¿Dónde consigo el token OAuth?
Debes obtenerlo desde el endpoint de autenticación proporcionado por la DNCP usando tus credenciales.

### ¿Qué formato tienen las respuestas?
Las respuestas están en formato JSON, alineadas al estándar OCDS.

### ¿La API permite descarga masiva?
Sí, a través de los archivos CSV disponibles públicamente.

---

## 🧪 Ejemplo de estructura completa (OCDS Record)

```json
{
  "ocid": "ocds-123456-PY-2024-0001",
  "releases": [
    {
      "tender": {
        "title": "Adquisición de equipos de computación",
        "status": "active"
      },
      "awards": [],
      "contracts": []
    }
  ]
}
```

---

## 🗓 Actualizaciones

Es importante revisar periódicamente la [documentación oficial](https://www.contrataciones.gov.py/datos/api/v3/doc/) para identificar cambios en los endpoints, parámetros o estructura de respuesta.

