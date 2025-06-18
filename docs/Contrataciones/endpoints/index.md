---
sidebar_position: 2
---

# Endpoints

La API v3 de la DNCP expone múltiples endpoints organizados en torno a los principales objetos del ciclo de contratación pública, muchos de ellos siguiendo la estructura OCDS. A continuación se detallan los principales puntos de acceso.

---

## 🔍 `/ocds/tender`

**Descripción**: Información sobre procesos de licitación pública.

**Parámetros comunes**:
- `q`: Búsqueda por texto
- `limit`: Cantidad de resultados
- `offset`: Desplazamiento
- `ordering`: Campo por el cual ordenar (ej. `-datePublished`)

**Ejemplo**:
```bash
GET /datos/api/v3/ocds/tender?q=medicamentos&limit=10
```

---

## 🥇 `/ocds/award`

**Descripción**: Resultados de adjudicaciones realizadas en procesos licitatorios.

**Ejemplo**:
```bash
GET /datos/api/v3/ocds/award?limit=5
```

---

## 📜 `/ocds/contract`

**Descripción**: Detalles sobre contratos firmados.

**Campos de interés**:
- `id`: Identificador del contrato
- `value.amount`: Monto
- `dateSigned`: Fecha de firma

---

## 🏗️ `/ocds/planning`

**Descripción**: Etapas de planificación presupuestaria y previsiones antes de la licitación.

---

## 🛠️ `/ocds/implementation`

**Descripción**: Etapas de ejecución de un contrato, incluye avances físicos y financieros.

---

## 📁 `/records`

**Descripción**: Endpoint que unifica el ciclo completo del proceso de contratación (record OCDS).

**Ejemplo**:
```bash
GET /datos/api/v3/ocds/record?ocid=ocds-123456-PY-2024-0001
```

---

## 🗃️ Otros Endpoints Relevantes

| Endpoint              | Descripción |
|-----------------------|-------------|
| `/release`            | Devuelve una sola publicación OCDS |
| `/record`             | Devuelve un proceso completo (record) |
| `/package`            | Devuelve varios procesos agrupados |
| `/ocid/<ocid>`        | Acceso a proceso específico por ID |
| `/contracts/<id>`     | Contrato individual |
| `/tenders/<id>`       | Licitación individual |

> 🔎 **Nota**: La estructura de cada respuesta está alineada al estándar OCDS y contiene múltiples objetos anidados (ej. `tender`, `awards`, `contracts`, `buyer`).

---

## 📖 Buenas prácticas

- Usar `limit` y `offset` para evitar respuestas grandes.
- Aplicar filtros para obtener resultados relevantes.
- Consultar los metadatos incluidos en cada respuesta para guiar la paginación (`totalCount`, `page`, etc.).

