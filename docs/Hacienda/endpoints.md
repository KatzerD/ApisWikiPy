---
sidebar_position: 5
title: 5. Endpoints por Conjunto de Datos
---

# 5. Endpoints por Conjunto de Datos

La API del Ministerio de Hacienda organiza sus datos en múltiples conjuntos temáticos. Cada uno cuenta con un endpoint específico que permite acceder a información estructurada, filtrable y paginable.

A continuación se describen los principales conjuntos de datos disponibles:

## 🏛️ 5.1 Presupuesto General

- **Endpoint**: `/presupuesto`
- **Descripción**: Detalla los montos asignados a distintas entidades del Estado por año fiscal.
- **Parámetros comunes**: `anio`, `entidad`, `programa`, `objeto_gasto`

## 🧾 5.2 Etapas del Presupuesto

- **Endpoint**: `/etapas_presupuesto`
- **Descripción**: Representa los distintos momentos del proceso presupuestario (formulación, aprobación, ejecución).
- **Parámetros comunes**: `etapa`, `entidad`, `anio`

## 🏢 5.3 Entidades

- **Endpoint**: `/entidades`
- **Descripción**: Listado de instituciones públicas registradas.
- **Parámetros comunes**: `codigo_entidad`, `nombre`

## 💳 5.4 Obligaciones

- **Endpoint**: `/obligaciones`
- **Descripción**: Información sobre pagos y compromisos asumidos por el Estado.
- **Parámetros comunes**: `anio`, `entidad`, `monto`, `clasificador`

## 💸 5.5 Transferencias

- **Endpoint**: `/transferencias`
- **Descripción**: Transferencias realizadas por el Estado a terceros, como gobernaciones, ONGs, municipios, etc.
- **Parámetros comunes**: `beneficiario`, `entidad`, `anio`, `rubro`

## 🧾 5.6 Certificados de Disponibilidad

- **Endpoint**: `/certificados`
- **Descripción**: Detalla las certificaciones presupuestarias emitidas que habilitan legalmente el uso de fondos.
- **Parámetros comunes**: `codigo_certificado`, `entidad`, `anio`

## 🧩 Otros conjuntos disponibles

Además de los anteriores, existen otros endpoints secundarios como:

- `/clasificadores`
- `/fuentes_financiamiento`
- `/programas`
- `/proyectos`
- `/modificaciones`

Estos permiten complementar las consultas y construir una visión más integral del gasto público.

## 🧪 Recomendación

Para cada endpoint, consulta la sección [Uso de la API](./04-uso-api.md) para entender cómo realizar solicitudes correctamente y aplicar filtros útiles.

