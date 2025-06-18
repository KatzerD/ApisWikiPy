---
sidebar_position: 2
title: Endpoints
---

# Endpoints

La API del Ministerio de Hacienda organiza sus datos en múltiples conjuntos temáticos. Cada uno cuenta con un endpoint específico que permite acceder a información estructurada, filtrable y paginable.


## 📄 Estructura base

La URL base de la API es:

https://datos.hacienda.gov.py:443/odmh-api-v2/


Todos los endpoints mencionados a continuación se construyen a partir de esta URL base.

---

A continuación se describen los principales conjuntos de datos disponibles:

## 🏛️ Presupuesto General

- **Endpoint**: `/presupuesto`
- **Descripción**: Detalla los montos asignados a distintas entidades del Estado por año fiscal.
- **Parámetros comunes**: `anio`, `entidad`, `programa`, `objeto_gasto`

## 🧾 Etapas del Presupuesto

- **Endpoint**: `/etapas_presupuesto`
- **Descripción**: Representa los distintos momentos del proceso presupuestario (formulación, aprobación, ejecución).
- **Parámetros comunes**: `etapa`, `entidad`, `anio`

## 🏢 Entidades

- **Endpoint**: `/entidades`
- **Descripción**: Listado de instituciones públicas registradas.
- **Parámetros comunes**: `codigo_entidad`, `nombre`

## 💳 Obligaciones

- **Endpoint**: `/obligaciones`
- **Descripción**: Información sobre pagos y compromisos asumidos por el Estado.
- **Parámetros comunes**: `anio`, `entidad`, `monto`, `clasificador`

## 💸 Transferencias

- **Endpoint**: `/transferencias`
- **Descripción**: Transferencias realizadas por el Estado a terceros, como gobernaciones, ONGs, municipios, etc.
- **Parámetros comunes**: `beneficiario`, `entidad`, `anio`, `rubro`

## 🧾 Certificados de Disponibilidad

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

