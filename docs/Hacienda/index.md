---
sidebar_position: 12
---

# API del Ministerio de Hacienda

## Descripción General

Bienvenido a la documentación de la API del Ministerio de Hacienda de Paraguay. Esta API proporciona acceso programático a datos financieros gubernamentales, presupuestos y estadísticas económicas nacionales. A través de esta plataforma, usuarios pueden acceder a diversos conjuntos de datos relacionados con la administración financiera del Estado, promoviendo la transparencia y el acceso a la información pública.

## Características Principales

- Acceso a información financiera gubernamental
- Datos presupuestarios actualizados (desde 2011)
- Estadísticas económicas nacionales
- Información sobre ejecución presupuestaria
- Consulta de datos tributarios públicos
- Autenticación mediante tokens de acceso
- Formato de respuestas en JSON
- Sistema de paginación para grandes volúmenes de datos
- Limitación de solicitudes por minuto (rate-limiting)
- Soporte para filtros específicos por entidad, año, código, etc.

## Especificaciones Técnicas

- **URL Base**: `https://datos.hacienda.gov.py/odmh-api-v2/`
- **Versión Actual**: `v2.0.0`
- **Método Principal**: `GET` para consulta de recursos
- **Formato de Respuesta**: JSON
- **Autenticación**: Requerida mediante tokens de acceso

## Inicio Rápido

1. [Obtener credenciales de acceso](authentication.md)
2. [Realizar primera consulta](guides/getting-started.md)
3. [Explorar endpoints disponibles](endpoints/index.md)

## Recursos Disponibles

- [Guía de Autenticación](authentication.md)
- [Documentación de Endpoints](endpoints/index.md)
- [Guías de Implementación](guides/index.md)
- [Referencia Técnica](reference/index.md)
- [Ejemplos de Uso](examples/index.md)

## Casos de Uso Comunes

Los datos pueden ser utilizados para:

- Desarrollo de aplicaciones para visualización de presupuesto nacional
- Análisis de información presupuestaria por parte de ciudadanos, ONGs, periodistas y académicos
- Monitoreo de gasto público y ejecución presupuestaria
- Investigación académica sobre políticas públicas financieras
- Auditoría ciudadana y fortalecimiento de mecanismos de control social

## Público Objetivo

- Desarrolladores de software que integran datos en plataformas web o móviles
- Periodistas de datos que investigan el uso de fondos públicos
- Organizaciones de la sociedad civil que realizan monitoreo del gasto estatal
- Investigadores académicos interesados en políticas públicas
- Ciudadanos en general que desean explorar o visualizar datos del Estado

## Soporte y Contacto

Para consultas técnicas o reportar problemas, puede:

- Contactar al equipo de soporte técnico del Ministerio de Hacienda
- Consultar las [preguntas frecuentes](guides/faq.md)
- Revisar la [documentación oficial](https://datos.hacienda.gov.py/odmh-api-v2/api-docs/)
