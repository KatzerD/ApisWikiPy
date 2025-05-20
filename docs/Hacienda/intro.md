---
sidebar_position: 1
---

# Introducción a la API del Ministerio de Hacienda

La API del Ministerio de Hacienda de Paraguay proporciona acceso programático a datos financieros y presupuestarios del gobierno paraguayo. Esta interfaz permite a desarrolladores, analistas económicos, periodistas e investigadores acceder a información detallada sobre el presupuesto nacional, ejecución presupuestaria, ingresos, gastos, deuda pública e indicadores económicos.

## Descripción General

La API de Datos Abiertos del Ministerio de Hacienda es una herramienta fundamental para el análisis de la administración de fondos públicos y la transparencia gubernamental. Ofrece datos estructurados y actualizados sobre diversas áreas financieras del gobierno paraguayo.

**URL Base de la API:**
```
https://datos.hacienda.gov.py/odmh-api-v2/
```

## Autenticación

La API del Ministerio de Hacienda utiliza autenticación OAuth 2.0 para garantizar la seguridad en el acceso a los datos. Para obtener credenciales, debe seguir estos pasos:

1. **Registro de Cliente**: Registre su aplicación en el [Portal de Desarrolladores](https://datos.hacienda.gov.py/odmh-api-v2/developer-portal) del Ministerio de Hacienda.

2. **Obtención de Credenciales**: Tras el registro, recibirá un `client_id` y un `client_secret`.

3. **Obtención de Token de Acceso**: Use sus credenciales para solicitar un token de acceso:

```bash
curl -X POST https://datos.hacienda.gov.py/odmh-api-v2/oauth/token \
  -d "grant_type=client_credentials&client_id=SU_CLIENT_ID&client_secret=SU_CLIENT_SECRET"
```

4. **Uso del Token**: Incluya el token en el encabezado de sus solicitudes HTTP:

```
Authorization: Bearer SU_TOKEN_DE_ACCESO
```

### Ejemplo de autenticación en JavaScript:

```javascript
// Obtener token
async function obtenerToken() {
  const response = await fetch('https://datos.hacienda.gov.py/odmh-api-v2/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&client_id=SU_CLIENT_ID&client_secret=SU_CLIENT_SECRET'
  });
  
  const data = await response.json();
  return data.access_token;
}

// Usar el token
async function consultarDatos() {
  const token = await obtenerToken();
  const response = await fetch('https://datos.hacienda.gov.py/odmh-api-v2/api/presupuesto/2023', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  return await response.json();
}
```

## Formatos de Datos Disponibles

La API del Ministerio de Hacienda soporta los siguientes formatos de respuesta:

1. **JSON** (predeterminado): Formato estándar para intercambio de datos.
2. **CSV**: Para análisis en herramientas de hoja de cálculo.
3. **XML**: Para sistemas que requieren este formato.

Para especificar el formato deseado, utilice el parámetro `format` o el encabezado `Accept`:

```
https://datos.hacienda.gov.py/odmh-api-v2/api/presupuesto?format=csv
```

O mediante encabezado:

```
Accept: text/csv
```

## Estructura de Respuesta

Las respuestas de la API siguen una estructura consistente:

```json
{
  "metadata": {
    "totalRegistros": 320,
    "pagina": 1,
    "registrosPorPagina": 20,
    "fechaActualizacion": "2025-04-15T08:30:00Z"
  },
  "data": [
    // Array de datos solicitados
  ],
  "links": {
    "self": "https://datos.hacienda.gov.py/odmh-api-v2/api/presupuesto?page=1",
    "next": "https://datos.hacienda.gov.py/odmh-api-v2/api/presupuesto?page=2",
    "last": "https://datos.hacienda.gov.py/odmh-api-v2/api/presupuesto?page=16"
  }
}
```

## Consideraciones de Uso y Límites

1. **Límite de Tasa (Rate Limit)**: La API tiene un límite de 300 solicitudes por hora por cliente. Si excede este límite, recibirá un error 429 (Too Many Requests).

2. **Paginación**: Las respuestas están paginadas con un máximo de 100 registros por página. Use los parámetros `page` y `per_page` para navegar entre resultados.

3. **Caché**: Se recomienda implementar caché en su aplicación para datos que no cambian frecuentemente.

4. **Actualización de Datos**: 
   - Datos presupuestarios: Actualización diaria (fin del día)
   - Indicadores económicos: Actualización semanal
   - Datos históricos: Actualización mensual

5. **Disponibilidad**: La API puede experimentar mantenimiento programado los domingos de 01:00 a 05:00 (GMT-4).

6. **Período de Datos**: La API proporciona datos desde el año fiscal 2012 hasta el presente.

## Gestión de Errores

La API utiliza códigos de estado HTTP estándar para comunicar el resultado de las solicitudes:

- **200 OK**: La solicitud se completó exitosamente.
- **400 Bad Request**: La solicitud contiene parámetros inválidos o falta información obligatoria.
- **401 Unauthorized**: Credenciales de autenticación inválidas o faltantes.
- **403 Forbidden**: No tiene permisos para acceder al recurso solicitado.
- **404 Not Found**: El recurso especificado no existe.
- **429 Too Many Requests**: Ha excedido el límite de solicitudes permitidas.
- **500 Internal Server Error**: Error en el servidor de la API.

### Ejemplo de respuesta de error:

```json
{
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "El parámetro 'año' debe ser un número entre 2012 y 2025",
    "documentation": "https://datos.hacienda.gov.py/odmh-api-v2/docs/errors#INVALID_PARAMETER"
  }
}
```

## Soporte y Ayuda

Para obtener asistencia con la API del Ministerio de Hacienda, puede:

1. Consultar la [documentación oficial](https://datos.hacienda.gov.py/odmh-api-v2/api-docs/)
2. Escribir al equipo de soporte técnico: api@hacienda.gov.py
3. Participar en el [foro de desarrolladores](https://github.com/your-github-username/paraguay-gov-apis/discussions)

En las siguientes secciones, exploraremos los endpoints específicos disponibles y proporcionaremos ejemplos prácticos de implementación.

