---
sidebar_position: 1
title: Autenticación
---

# Autenticación

La API requiere autenticación mediante **tokens de acceso** para realizar la mayoría de las solicitudes. A continuación, se detalla el proceso necesario para obtener y utilizar estos tokens.

## 📝 Registro de usuario

Para utilizar la API de manera autenticada, es necesario registrarse en el portal de datos del Ministerio de Hacienda:

🔗 [https://datos.hacienda.gov.py](https://datos.hacienda.gov.py)

Una vez registrado, el sistema asigna automáticamente un par de credenciales:

- `client_id`
- `client_secret`

Estos serán necesarios para obtener un token válido.

## 🔄 Solicitud de Token

Para obtener un token de acceso válido, se debe realizar una solicitud `POST` al siguiente endpoint:

```
POST /auth/token
```

### 🔧 Parámetros requeridos

```json
{
  "grant_type": "client_credentials",
  "client_id": "TU_CLIENT_ID",
  "client_secret": "TU_CLIENT_SECRET"
}
```

### ✅ Respuesta esperada

```json
{
  "access_token": "eyJhbGciOiJIUzI1...",
  "expires_in": 900,
  "token_type": "Bearer"
}
```

- `access_token`: el token que se utilizará en las solicitudes posteriores.
- `expires_in`: duración del token en segundos (15 minutos).
- `token_type`: tipo de token (Bearer).

## 🕒 Vida útil del Token

- Cada token tiene una duración de **15 minutos**.
- Una vez vencido, se debe solicitar uno nuevo.
- No existe (por ahora) un sistema de *refresh token*.

## 🔒 Usuario Anónimo

La API permite un acceso limitado sin autenticación. Este modo permite:

- Consultas básicas de datos.
- Acceso restringido en volumen de resultados.
- Sin capacidad de realizar múltiples solicitudes concurrentes.

⚠️ Para un uso productivo o intensivo, se recomienda fuertemente autenticarse.

## 🛡️ Seguridad

Nunca compartas tu `client_secret`. Almacena tus credenciales en variables de entorno o servicios seguros de gestión de secretos.

