---
sidebar_position: 3
---

# API de Contrataciones Públicas

## Descripción General
La API v3 de la Dirección Nacional de Contrataciones Públicas del Paraguay permite el acceso a datos abiertos sobre procesos de contratación pública. Está alineada con el estándar internacional OCDS (Open Contracting Data Standard), permitiendo a desarrolladores, periodistas, académicos y ciudadanos consultar y analizar información relevante.

## Características Principales
- Consulta de licitaciones en tiempo real
- Acceso a información de contratos públicos
- Datos de proveedores y adjudicaciones
- Integración con estándar OCDS
- Filtros avanzados de búsqueda
- Documentos asociados a procesos de contratación
- Planificaciones de adquisiciones

## Especificaciones Técnicas
- **URL Base**: `https://www.contrataciones.gov.py/datos/api/v3/`
- **Formato de Respuesta**: JSON
- **Autenticación**: Opcional (OAuth2 para uso intensivo)
- **Límite sin autenticación**: 15 llamadas por minuto

## Guía Rápida
1. [Registrarse y obtener credenciales](authentication.md)
2. [Realizar primera consulta](guides/getting-started.md)
3. [Explorar endpoints disponibles](endpoints/index.md)

## Documentación por Sección
- [Autenticación y Seguridad](authentication.md)
- [Endpoints Disponibles](endpoints/index.md)
- [Guías de Implementación](guides/index.md)
- [Referencia Técnica](reference/index.md)
- [Ejemplos y Casos de Uso](examples/index.md)

## Tipos de Datos Disponibles
- Licitaciones públicas
- Adjudicaciones
- Contratos
- Planificaciones
- Documentos asociados
- Proveedores

## Recursos Adicionales
- [Especificación OCDS](guides/ocds-integration.md)
- [Preguntas Frecuentes](guides/faq.md)
- [Mejores Prácticas](guides/best-practices.md)
- [Documentación oficial](https://www.contrataciones.gov.py/datos/api/v3/doc/)
