---
sidebar_position: 1
---

# 1. Introducción

La API v3 de la Dirección Nacional de Contrataciones Públicas del Paraguay permite el acceso a datos abiertos sobre procesos de contratación pública. Está alineada con el estándar internacional OCDS (Open Contracting Data Standard), permitiendo a desarrolladores, periodistas, académicos y ciudadanos consultar y analizar información relevante.

## 📌 Propósito

Proveer una interfaz RESTful para obtener datos estructurados sobre:
- Licitaciones públicas
- Adjudicaciones
- Contratos
- Planificaciones
- Documentos asociados

## 🧱 Requisitos previos

Antes de comenzar a utilizar la API, es importante tener en cuenta lo siguiente:

- La mayoría de los endpoints pueden consultarse **sin autenticación**, pero con un límite estricto de **15 llamadas por minuto**.
- Para llamadas más intensivas, es necesario autenticarse mediante **OAuth2**, accediendo al token desde el [servicio de autenticación de la DNCP](https://www.contrataciones.gov.py/datos/api/v3/doc/).
- Las respuestas están en formato **JSON**, estructuradas con metainformación, datos y enlaces de navegación.

## 🔗 URL Base

```
https://www.contrataciones.gov.py/datos/api/v3/
```

Todas las llamadas deben realizarse contra este dominio base, seguido por los recursos disponibles.
