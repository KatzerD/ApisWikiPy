---
id: endpoints-index
title: Endpoints
sidebar_label: Endpoints
sidebar_position: 4
---

# Endpoints

## API Legislativa (SILpy)

La API pública del Congreso Nacional de Paraguay permite acceder a información legislativa de forma estructurada en formato JSON, sin necesidad de autenticación.

Los siguientes endpoints están disponibles para consultas:

## 📄 Estructura base

La URL base de la API es:

https://datos.congreso.gov.py/opendata/api/data/


Todos los endpoints mencionados a continuación se construyen a partir de esta URL base.

---

## Endpoints disponibles

| Categoría        | Endpoint (ejemplo)                                  | Descripción breve                        |
|------------------|-----------------------------------------------------|------------------------------------------|
| Expedientes      | `/proyecto/`                                        | Proyectos legislativos presentados.      |
| Parlamentarios   | `/parlamentario/`                                   | Lista de parlamentarios.                 |
| Comisiones       | `/comision/`                                        | Comisiones por cámara.                   |
| Leyes            | `/ley/`                                             | Leyes promulgadas.                       |
| Sesiones         | `/sesion/camara/S` o `/sesion/camara/D`            | Sesiones de Senado o Diputados.          |
| Periodos         | `/periodo/`                                         | Periodos legislativos.                   |

> Nota: La mayoría de los endpoints permiten paginación mediante los parámetros `offset` y `limit`.

---

## Características generales

- ✅ API pública, no requiere autenticación.
- 🧾 Formato de respuesta: JSON.
- 📄 Resultados paginados (máx. 50 por defecto).
- 🔎 Algunos endpoints tienen subrecursos como `/autores`, `/dictamenes`, `/tramitaciones`, etc.

## ¿Qué sigue?

Explora en la barra lateral cada categoría de recurso para ver detalles de uso, parámetros y ejemplos de respuesta.