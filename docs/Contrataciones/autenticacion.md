---
sidebar_position: 1
---

# Autenticación

Para utilizar de forma intensiva la API v3 de la Dirección Nacional de Contrataciones Públicas (DNCP), se recomienda autenticarse utilizando el protocolo OAuth 2.0. Aunque es posible realizar consultas sin autenticación, estas están limitadas a 15 solicitudes por minuto.

## 🔓 Acceso público sin autenticación

- **Límite**: 15 solicitudes por minuto.
- **Uso recomendado**: consultas exploratorias, desarrollo, integración básica.
- **Ventaja**: no requiere registro previo ni manejo de tokens.

## 🔑 Acceso autenticado con OAuth2

Para realizar un mayor número de solicitudes y acceder a funcionalidades extendidas, es posible utilizar el sistema de autenticación OAuth2.

### 🔄 Flujo de autenticación

1. Solicitar un token al endpoint de autenticación.
2. Utilizar el token en la cabecera de las solicitudes a la API.
3. Renovar el token periódicamente, ya que tiene un tiempo de expiración corto (~15 minutos).

### 📤 Solicitud del token

**Endpoint**:

```
POST https://www.contrataciones.gov.py/api/oauth/token
```

**Parámetros**:
- `grant_type`: `"client_credentials"`
- `client_id`: tu ID de cliente provisto por la DNCP
- `client_secret`: tu clave secreta

**Ejemplo (cURL)**:

```bash
curl -X POST https://www.contrataciones.gov.py/api/oauth/token   -H "Content-Type: application/x-www-form-urlencoded"   -d "grant_type=client_credentials&client_id=TU_CLIENT_ID&client_secret=TU_CLIENT_SECRET"
```

**Respuesta esperada**:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 900
}
```

> 🔁 Nota: El token expira en 15 minutos (`expires_in = 900` segundos).

### 🧾 Uso del token

Una vez obtenido el token, se debe incluir en todas las solicitudes a la API en el encabezado `Authorization`.

**Ejemplo de solicitud autenticada**:

```bash
curl -X GET https://www.contrataciones.gov.py/datos/api/v3/tender   -H "Authorization: Bearer TU_ACCESS_TOKEN"
```

## 🧠 Buenas prácticas

- No exponer el `client_secret` en código fuente público.
- Utilizar mecanismos de almacenamiento seguro para el token.
- Renovar el token automáticamente si detectas un código de error `401 Unauthorized`.
- Manejar los códigos de error por expiración (`401`) y límite de uso (`429`) de forma controlada.

## 🛑 Errores comunes

| Código | Descripción |
|--------|-------------|
| 401    | Token inválido o expirado |
| 403    | No autorizado para el recurso solicitado |
| 429    | Límite de solicitudes superado |

## 📎 Recursos adicionales

- [Manual oficial de autenticación DNCP](https://www.contrataciones.gov.py/datos/api/v3/doc/)
- [OAuth 2.0 RFC 6749 (documentación técnica)](https://tools.ietf.org/html/rfc6749)