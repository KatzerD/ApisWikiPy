---
sidebar_position: 6
title: Errores y Respuestas Comunes
---

# Errores y Respuestas Comunes

Durante el consumo de la API, es posible encontrarse con diversos tipos de errores HTTP. Esta sección detalla los códigos más comunes, sus posibles causas y cómo solucionarlos.

## ❌ Códigos de error más frecuentes

| Código | Descripción                  | Causa común                                          |
|--------|------------------------------|------------------------------------------------------|
| 400    | Bad Request                  | Petición malformada o con parámetros inválidos       |
| 401    | Unauthorized                 | Token ausente, inválido o expirado                   |
| 403    | Forbidden                    | Token válido pero sin permisos suficientes           |
| 404    | Not Found                    | Endpoint incorrecto o recurso inexistente            |
| 429    | Too Many Requests            | Se superó el límite de solicitudes por minuto        |
| 500    | Internal Server Error        | Falla general del servidor de la API                 |

---

## 🛠️ Posibles soluciones

### 🔄 400 - Bad Request

- Revisa que todos los parámetros enviados estén correctos y sean válidos.
- Verifica que el `Content-Type` sea `application/json` cuando sea requerido.

### 🔐 401 - Unauthorized

- Asegúrate de estar incluyendo el encabezado `Authorization` con un token válido.
- Si el token ha expirado (más de 15 minutos), solicita uno nuevo.

### ⛔ 403 - Forbidden

- Verifica que el usuario autenticado tenga permisos para acceder a ese recurso.
- Algunos endpoints pueden estar restringidos para ciertos perfiles.

### 🔍 404 - Not Found

- Confirma que el endpoint existe y está escrito correctamente.
- Algunos recursos pueden no estar disponibles según los filtros utilizados.

### 🚦 429 - Too Many Requests

- Reduce la frecuencia de las solicitudes.
- Implementa mecanismos de espera y reintentos.
- Revisa la cabecera `X-Rate-Limit-Reset` para saber cuánto esperar.

### 🧯 500 - Internal Server Error

- Intenta nuevamente más tarde.
- Reporta el incidente si persiste el error.
- Revisa si estás enviando datos muy grandes o filtros muy específicos.

## 🧪 Ejemplo de error 401

```json
{
  "message": "Token inválido o expirado",
  "status": 401
}
```

## 📬 Recomendación

Maneja los errores de forma programada. Siempre incluye validaciones y manejo de excepciones en tu código cliente para una experiencia más robusta.

