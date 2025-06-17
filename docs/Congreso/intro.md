---
sidebar_position: 1
---

# Introducción a la API del Congreso Nacional de Paraguay

La API de Datos Abiertos del Congreso Nacional de Paraguay proporciona acceso programático a información legislativa, sesiones parlamentarias, votaciones, proyectos de ley, y otros datos del poder legislativo. Esta documentación ofrece una guía completa para integrar y utilizar eficazmente esta API en sus aplicaciones.

## Descripción General

La API del Congreso Nacional permite a desarrolladores, investigadores, periodistas y ciudadanos acceder a datos legislativos oficiales en un formato estructurado. Estos datos pueden utilizarse para análisis, visualizaciones, aplicaciones de transparencia gubernamental, investigación académica, y más.

**URL Base de la API:**
```
https://datos.congreso.gov.py/opendata/api
```

## Autenticación

La API del Congreso utiliza autenticación mediante token para controlar el acceso. Para obtener un token, debe seguir estos pasos:

1. **Registro**: Visite el [Portal de Datos Abiertos del Congreso](https://datos.congreso.gov.py/opendata/) y cree una cuenta de usuario.

2. **Solicitud de Token**: Una vez registrado, solicite un token de API desde su perfil de usuario.

3. **Uso del Token**: Incluya el token en el encabezado de sus solicitudes HTTP como:
   ```
   X-API-Key: su_token_aquí
   ```

### Ejemplo de autenticación:

```javascript
// Ejemplo usando fetch en JavaScript
const response = await fetch('https://datos.congreso.gov.py/opendata/api/sesiones', {
  headers: {
    'X-API-Key': 'su_token_aquí'
  }
});
```

## Consideraciones Importantes

- **Límites de Frecuencia**: La API tiene un límite de 100 solicitudes por hora por token.
- **Caché**: Se recomienda implementar caché en su aplicación para reducir el número de solicitudes.
- **Sesiones de API**: Los tokens tienen una duración de 24 horas. Deberá renovar su token periódicamente.
- **Datos Históricos**: La API proporciona datos desde el año 2013 en adelante.
- **Actualizaciones**: Los datos se actualizan diariamente, generalmente durante la noche (GMT-4).

## Formatos de Respuesta

La API devuelve datos en formato JSON por defecto. Cada respuesta incluye:

- **Metadatos**: Información sobre la respuesta, como el número total de registros.
- **Datos**: Los registros solicitados.
- **Enlaces**: Enlaces para la paginación y navegación.

### Estructura de Respuesta Estándar:

```json
{
  "meta": {
    "totalCount": 120,
    "page": 1,
    "perPage": 10
  },
  "data": [
    // Array de objetos con los datos solicitados
  ],
  "links": {
    "self": "https://datos.congreso.gov.py/opendata/api/sesiones?page=1",
    "next": "https://datos.congreso.gov.py/opendata/api/sesiones?page=2",
    "last": "https://datos.congreso.gov.py/opendata/api/sesiones?page=12"
  }
}
```

## Gestión de Errores

La API utiliza códigos de estado HTTP estándar para indicar el resultado de las solicitudes:

- **200 OK**: La solicitud se completó con éxito.
- **400 Bad Request**: La solicitud no puede ser procesada debido a un error del cliente.
- **401 Unauthorized**: Falta de autenticación o token inválido.
- **403 Forbidden**: No tiene permisos para acceder al recurso solicitado.
- **404 Not Found**: El recurso solicitado no existe.
- **429 Too Many Requests**: Ha excedido el límite de frecuencia de solicitudes.
- **500 Internal Server Error**: Error en el servidor de la API.

## Soporte y Ayuda

Para obtener asistencia con la API, puede:

1. Revisar la [documentación oficial](https://datos.congreso.gov.py/opendata/api/docs)
2. Contactar al soporte técnico en datosabiertos@congreso.gov.py
3. Participar en nuestra comunidad de desarrolladores en [GitHub](https://github.com/your-github-username/paraguay-gov-apis)

En las siguientes secciones, exploraremos los endpoints específicos de la API y ejemplos prácticos de uso.

