---
id: congreso-index
title: Congreso
sidebar_label: Congreso Nacional del Paraguay
sidebar_position: 1
---

# 1. Introducción a la API del Congreso Nacional del Paraguay

La API de Datos Abiertos del Congreso Nacional de Paraguay proporciona acceso programático a información legislativa, sesiones parlamentarias, proyectos de ley, comisiones, leyes promulgadas y más. Esta documentación sirve como guía completa para consumir eficazmente estos datos desde aplicaciones, investigaciones y proyectos de transparencia.

---

## Descripción General

Esta API está dirigida a desarrolladores, periodistas, investigadores, estudiantes y ciudadanos interesados en obtener datos legislativos de forma estructurada. Todos los recursos se exponen a través de endpoints HTTP con respuestas en formato `JSON`.

Los datos pueden ser utilizados para:

- Visualizaciones y dashboards interactivos.
- Sistemas de monitoreo legislativo.
- Aplicaciones educativas y periodismo de datos.
- Estudios comparativos o históricos.

---

## Características técnicas

- **Formato**: Todas las respuestas están en JSON.
- **Método principal**: `GET` para lectura de recursos públicos.
- **URL base**:  https://datos.congreso.gov.py/opendata/api/data/

- **Autenticación**: Actualmente no se requiere token ni autenticación para acceder a los datos públicos.

---

## Consideraciones Importantes

- **Paginación**: Los endpoints devuelven hasta 50 resultados por defecto. Puede usar `offset` y `limit`.
- **Frecuencia**: No se documenta un límite de tasa oficial, pero se recomienda hacer un uso responsable (ej. evitar loops de scraping).
- **Datos históricos**: Se encuentran disponibles datos desde el año 2013 en adelante.
- **Actualizaciones**: El portal se actualiza diariamente, generalmente en horario nocturno (GMT-4).
- **Licencia de uso**: Los datos están publicados bajo licencia de uso público conforme a la Ley 5282/14 de Acceso a la Información Pública en Paraguay.

---

## Gestión de Errores

La API responde con códigos HTTP estándar para indicar el resultado de cada solicitud:

- **200 OK** – Solicitud exitosa.
- **400 Bad Request** – Error de formato o parámetros incorrectos.
- **401 Unauthorized** – No se aplica actualmente.
- **403 Forbidden** – No se aplica actualmente.
- **404 Not Found** – El recurso solicitado no existe.
- **429 Too Many Requests** – Demasiadas solicitudes (uso excesivo no documentado oficialmente).
- **500 Internal Server Error** – Fallo en el servidor.

---

## Ejemplo rápido
```
GET https://datos.congreso.gov.py/opendata/api/data/proyecto?limit=5
```

Esto devuelve los 5 primeros proyectos legislativos disponibles.

---

## Soporte y Ayuda

Si necesitás asistencia, podés:

1. Visitar la [documentación oficial del portal](https://datos.congreso.gov.py/opendata/api/docs)
2. Escribir al equipo de datos abiertos: `datosabiertos@congreso.gov.py`
3. Unirte o consultar una comunidad externa de desarrollo (GitHub, foros públicos, etc.)

---

En las siguientes secciones encontrarás la documentación detallada de cada grupo de endpoints, con ejemplos prácticos y descripciones de los campos disponibles.


