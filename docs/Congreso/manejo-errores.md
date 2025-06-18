---
sidebar_position: 3
---

# Gestión de Errores

La API del Congreso Nacional del Paraguay utiliza códigos de estado HTTP estándar para indicar el resultado de las solicitudes. Comprender estos códigos es fundamental para manejar adecuadamente errores en tus aplicaciones.

---

## 🚨 Códigos de estado comunes

| Código | Significado              | Descripción                                                              |
|--------|--------------------------|--------------------------------------------------------------------------|
| 200    | OK                       | La solicitud se procesó correctamente.                                   |
| 400    | Bad Request              | La solicitud es inválida o contiene parámetros incorrectos.              |
| 401    | Unauthorized             | No se encuentra autenticado. No aplica en esta API pública.             |
| 403    | Forbidden                | No tenés permiso para acceder al recurso. No aplica en esta API pública.|
| 404    | Not Found                | El recurso solicitado no existe.                                         |
| 429    | Too Many Requests        | Se excedió el límite de solicitudes permitidas.                          |
| 500    | Internal Server Error    | Error inesperado del servidor.                                           |

---

## 🧪 Ejemplo de error 404

```
GET https://datos.congreso.gov.py/opendata/api/data/parlamentario/999999
```

```json
{
  "error": "Parlamentario no encontrado"
}
```

---

## 🧰 Buenas prácticas

- Verificá siempre el código de estado HTTP antes de procesar la respuesta.
- Implementá `try/catch` o bloques de manejo de errores en tu código.
- Usá lógica de reintento para errores 429 o 500 (con retraso).
- Validá el contenido de la respuesta antes de acceder a `data`.

---
