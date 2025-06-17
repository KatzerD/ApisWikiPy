---
sidebar_position: 3
---

# 3. Límites y Rendimiento

El acceso a la API v3 de la Dirección Nacional de Contrataciones Públicas (DNCP) está sujeto a ciertas restricciones para garantizar el uso equitativo y eficiente de los recursos del sistema.

## 🚦 Límite de solicitudes

| Tipo de acceso   | Límite por minuto |
|------------------|-------------------|
| Sin autenticación (anónimo) | 15 solicitudes/minuto |
| Con autenticación (OAuth2)  | Límites más altos según perfil autorizado |

### 🛑 ¿Qué ocurre si se excede el límite?

Cuando se supera el número permitido de llamadas en un minuto, la API responde con el siguiente código HTTP:

- `429 Too Many Requests`

En este caso, se recomienda implementar una política de espera (`backoff`) antes de volver a intentar.

## 📦 Tamaño de las respuestas

La API devuelve los datos en bloques paginados. Esto permite optimizar el rendimiento tanto del cliente como del servidor.

### 🧾 Parámetro `limit`

Algunos endpoints permiten el uso del parámetro `limit` para especificar la cantidad máxima de registros devueltos por página. Por defecto, la mayoría de las respuestas están limitadas a 100 registros.

- **Ejemplo**:

```bash
GET /datos/api/v3/tender?limit=50
```

> ⚠️ El valor máximo permitido puede variar según el endpoint. No se recomienda usar valores muy altos para evitar errores de timeout o respuestas muy pesadas.

## 📄 Descarga de datos masivos

Para obtener grandes volúmenes de información, se recomienda utilizar los archivos CSV ya procesados, disponibles en la sección de descarga de datos de la DNCP.

- [Descargar CSVs masivos](https://www.contrataciones.gov.py/datos/api/v3/doc/)

Esto es ideal para análisis off-line o integración en sistemas de inteligencia de negocios (BI).

## 📊 Recomendaciones de uso

- Utilizar filtros para limitar el volumen de datos innecesarios.
- Implementar paginación cuando se consulten listas extensas.
- Evitar consultas simultáneas masivas desde un mismo cliente.
- Procesar y almacenar localmente la información si se requiere repetidamente.

## 🧠 Consideraciones técnicas

- Las respuestas están optimizadas para velocidad, pero pueden demorar si el servidor está bajo carga.
- El formato JSON estándar incluye metadatos útiles como `totalCount`, `page`, `perPage` para gestionar paginación correctamente.
