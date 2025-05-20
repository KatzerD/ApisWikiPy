---
sidebar_position: 1
---

# Introducción a la API de Contrataciones Públicas

La API de la Dirección Nacional de Contrataciones Públicas (DNCP) de Paraguay proporciona acceso programático a datos completos sobre procesos de contratación pública, licitaciones, proveedores, contratos y adjudicaciones. Esta interfaz permite a desarrolladores, analistas, periodistas y ciudadanos acceder a información estructurada sobre el uso de recursos públicos en adquisiciones gubernamentales.

## Descripción General

La API de Contrataciones Públicas es una herramienta esencial para la transparencia en la gestión de recursos públicos, permitiendo el seguimiento y análisis de los procesos de contratación del Estado paraguayo. Ofrece acceso a una amplia base de datos que incluye información histórica y actual sobre compras públicas.

**URL Base de la API:**
```
https://www.contrataciones.gov.py/datos/api/v3/
```

## Registro y Autenticación

Para utilizar la API de Contrataciones Públicas, se requiere registrarse y obtener credenciales de acceso. El proceso es el siguiente:

1. **Registro de Usuario**: Visite el [Portal de Datos Abiertos de la DNCP](https://www.contrataciones.gov.py/datos/) y cree una cuenta.

2. **Solicitud de Acceso a la API**: Una vez registrado, solicite acceso a la API desde su perfil de usuario.

3. **Obtención de Credenciales**: Tras la aprobación, recibirá un `client_id` y un `client_secret`.

4. **Obtención del Token de Acceso**: Utilice sus credenciales para solicitar un token JWT:

```bash
curl -X POST https://www.contrataciones.gov.py/datos/api/v3/oauth/token \
  -d "grant_type=client_credentials&client_id=SU_CLIENT_ID&client_secret=SU_CLIENT_SECRET"
```

5. **Uso del Token**: Incluya el token en el encabezado de autorización de sus solicitudes:

```
Authorization: Bearer SU_TOKEN_JWT
```

### Ejemplo de Autenticación en Python:

```python
import requests

def obtener_token():
    url = "https://www.contrataciones.gov.py/datos/api/v3/oauth/token"
    payload = {
        "grant_type": "client_credentials",
        "client_id": "SU_CLIENT_ID",
        "client_secret": "SU_CLIENT_SECRET"
    }
    
    response = requests.post(url, data=payload)
    data = response.json()
    return data["access_token"]

def consultar_licitaciones():
    token = obtener_token()
    headers = {"Authorization": f"Bearer {token}"}
    url = "https://www.contrataciones.gov.py/datos/api/v3/doc/calls"
    
    response = requests.get(url, headers=headers)
    return response.json()
```

## Aspectos Importantes de la API

### Límites de Uso

La API de Contrataciones Públicas implementa las siguientes restricciones de uso:

- **Límite de Tasa**: 1000 solicitudes por hora por usuario registrado.
- **Límite de Concurrencia**: Máximo 10 solicitudes simultáneas.
- **Tamaño de Respuesta**: Limitado a 10,000 registros por solicitud (usar paginación para conjuntos de datos más grandes).

Si excede estos límites, recibirá un error 429 (Too Many Requests) con un encabezado `Retry-After` que indica cuántos segundos debe esperar antes de realizar nuevas solicitudes.

### Versionado de la API

La API utiliza versionado en la URL para garantizar la compatibilidad:

- **Versión Actual**: v3 (https://www.contrataciones.gov.py/datos/api/v3/)
- **Versiones Anteriores**: 
  - v2 (obsoleta, fin de soporte: diciembre 2025)
  - v1 (descontinuada)

Se recomienda utilizar siempre la versión más reciente. Los cambios importantes entre versiones se anuncian con al menos 6 meses de anticipación.

### Formatos de Respuesta

La API soporta los siguientes formatos de respuesta:

1. **JSON** (predeterminado): Formato estándar para intercambio de datos.
2. **XML**: Para sistemas que requieren este formato.
3. **CSV**: Para análisis en herramientas de hoja de cálculo.

Para especificar el formato deseado, utilice el parámetro `format` o el encabezado `Accept`:

```
https://www.contrataciones.gov.py/datos/api/v3/doc/calls?format=xml
```

O mediante encabezado:

```
Accept: application/xml
```

### Headers Requeridos

Los siguientes encabezados HTTP son importantes para el uso de la API:

1. **Obligatorios**:
   - `Authorization`: Para autenticación (`Bearer SU_TOKEN`)

2. **Opcionales pero recomendados**:
   - `Accept`: Para especificar el formato de respuesta (`application/json`, `application/xml`, `text/csv`)
   - `Accept-Language`: Para especificar el idioma (`es`, `en`)
   - `X-Request-ID`: Para rastreo de solicitudes (UUID v4)

### Estructura de Respuesta

Las respuestas de la API siguen una estructura estándar:

```json
{
  "meta": {
    "totalItems": 157,
    "count": 20,
    "offset": 0,
    "limit": 20
  },
  "links": {
    "self": "https://www.contrataciones.gov.py/datos/api/v3/doc/calls?offset=0&limit=20",
    "first": "https://www.contrataciones.gov.py/datos/api/v3/doc/calls?offset=0&limit=20",
    "next": "https://www.contrataciones.gov.py/datos/api/v3/doc/calls?offset=20&limit=20",
    "last": "https://www.contrataciones.gov.py/datos/api/v3/doc/calls?offset=140&limit=20"
  },
  "data": [
    // Array con los datos solicitados
  ]
}
```

## Gestión de Errores

La API utiliza códigos de estado HTTP estándar y respuestas estructuradas para comunicar errores:

- **400 Bad Request**: Parámetros inválidos o faltantes.
- **401 Unauthorized**: Problemas de autenticación.
- **403 Forbidden**: Falta de permisos para el recurso solicitado.
- **404 Not Found**: Recurso no encontrado.
- **405 Method Not Allowed**: Método HTTP no soportado para el endpoint.
- **429 Too Many Requests**: Excedido el límite de tasa de solicitudes.
- **500, 502, 503, 504**: Errores del servidor.

### Ejemplo de Respuesta de Error:

```json
{
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "El parámetro 'year' debe ser un número entre 2010 y 2025",
    "details": {
      "parameter": "year",
      "allowed_values": "2010-2025",
      "provided_value": "2030"
    },
    "documentation_url": "https://www.contrataciones.gov.py/datos/api/v3/doc/errors#INVALID_PARAMETER"
  }
}
```

## Disponibilidad y Mantenimiento

- **Disponibilidad**: La API está disponible 24/7, con una disponibilidad objetivo del 99.9%.
- **Mantenimiento Programado**: Los mantenimientos se realizan los domingos entre 01:00 y 05:00 (GMT-4).
- **Estado del Servicio**: Puede verificar el estado actual en [status.contrataciones.gov.py](https://status.contrataciones.gov.py).

## Soporte y Recursos Adicionales

Para obtener asistencia con la API de Contrataciones Públicas, puede:

1. Consultar la [documentación oficial](https://www.contrataciones.gov.py/datos/api/v3/doc/)
2. Contactar al soporte técnico: datosabiertos@contrataciones.gov.py
3. Participar en la [comunidad de desarrolladores](https://github.com/your-github-username/paraguay-gov-apis/discussions)
4. Subscribirse al [boletín de actualizaciones de la API](https://www.contrataciones.gov.py/datos/api/subscribe)

En las siguientes secciones, exploraremos los endpoints específicos disponibles, proporcionaremos ejemplos prácticos y guías avanzadas para aprovechar al máximo la API de Contrataciones Públicas.

