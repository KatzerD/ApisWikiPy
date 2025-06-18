---
sidebar_position: 10
---

# API del Congreso Nacional de Paraguay

## Descripción General

La API de Datos Abiertos del Congreso Nacional de Paraguay proporciona acceso programático a información legislativa, incluyendo sesiones parlamentarias, proyectos de ley, comisiones, leyes promulgadas y datos sobre parlamentarios. Esta herramienta está diseñada para desarrolladores, periodistas, investigadores, estudiantes y ciudadanos interesados en trabajar con datos legislativos de forma estructurada.

## Características Principales

- Acceso a información legislativa en tiempo real
- Datos sobre parlamentarios y sus actividades
- Registro de sesiones y votaciones
- Consulta de expedientes y leyes
- Información sobre comisiones parlamentarias
- Datos históricos desde 2013 en adelante
- Formato JSON para todas las respuestas

## Especificaciones Técnicas

- **URL Base**: `https://datos.congreso.gov.py/opendata/api/data/`
- **Método Principal**: `GET` para lectura de recursos públicos
- **Formato de Respuesta**: JSON
- **Autenticación**: No requiere actualmente

## Inicio Rápido

1. [Explorar endpoints disponibles](endpoints/index.md)
2. [Aprender sobre paginación y filtros](guides/pagination.md)
3. [Consultar ejemplos de uso](examples/basic-usage.md)

## Recursos Disponibles

- [Documentación de Endpoints](endpoints/index.md)
- [Guías de Implementación](guides/index.md)
- [Referencia Técnica](reference/status-codes.md)
- [Ejemplos de Uso](examples/basic-usage.md)
- [Preguntas Frecuentes](guides/faq.md)

## Casos de Uso Comunes

Los datos pueden ser utilizados para:

- Visualizaciones y dashboards interactivos
- Sistemas de monitoreo legislativo
- Aplicaciones educativas y periodismo de datos
- Estudios comparativos o históricos

## Consideraciones Importantes

- **Paginación**: Los endpoints devuelven hasta 50 resultados por defecto. Puede usar `offset` y `limit`
- **Frecuencia de Uso**: Se recomienda hacer un uso responsable
- **Actualizaciones**: El portal se actualiza diariamente, generalmente en horario nocturno (GMT-4)
- **Licencia**: Datos publicados bajo licencia de uso público conforme a la Ley 5282/14 de Acceso a la Información Pública

## Soporte y Contacto

Si necesitas asistencia, puedes:

- Visitar la [documentación oficial del portal](https://datos.congreso.gov.py/opendata/api/docs)
- Escribir al equipo de datos abiertos: `datosabiertos@congreso.gov.py`
- Consultar las [preguntas frecuentes](guides/faq.md)


