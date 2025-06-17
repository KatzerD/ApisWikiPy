---
sidebar_position: 4.3
---

# 4.3 Comisiones

Este endpoint permite acceder a información sobre las comisiones legislativas del Congreso Nacional de Paraguay, incluyendo su cámara de origen, miembros por periodo y proyectos tratados.

---

## 📘 Endpoint principal

```
GET /data/comision/
```

Devuelve una lista de comisiones existentes en ambas cámaras.

---

## 🔎 Parámetros disponibles

| Parámetro | Tipo | Descripción                                       |
| --------- | ---- | ------------------------------------------------- |
| Ninguno   | -    | Este endpoint no requiere parámetros específicos. |

---

## 📥 Ejemplo de solicitud

```
GET https://datos.congreso.gov.py/opendata/api/data/comision
```

---

## 📤 Ejemplo de respuesta

```json
[
  {
    "id": 12,
    "nombre": "Comisión de Legislación",
    "camara": "Cámara de Diputados"
  }
]
```

---

## 📂 Endpoints relacionados

| Recurso                                              | Descripción                                                    |
| ---------------------------------------------------- | -------------------------------------------------------------- |
| `/comision/camara/S`                                 | Lista de comisiones del Senado.                                |
| `/comision/camara/D`                                 | Lista de comisiones de Diputados.                              |
| `/comision/{id}`                                     | Detalles de una comisión específica.                           |
| `/comision/{id}/proyectos`                           | Lista de proyectos asignados o tratados por la comisión.       |
| `/comision/{id}/{idPeriodo}/miembros`                | Lista de miembros de una comisión en un periodo determinado.   |
| `/comision/{id}/dictamenes`                          | Dictámenes emitidos por la comisión.                           |

---

## 📌 Ejemplo: obtener comisiones del Senado

```
GET https://datos.congreso.gov.py/opendata/api/data/comision/camara/S
```

## 📌 Ejemplo: obtener detalle de una comisión

```
GET https://datos.congreso.gov.py/opendata/api/data/comision/12
```

## 📌 Ejemplo: obtener proyectos tratados por una comisión

```
GET https://datos.congreso.gov.py/opendata/api/data/comision/12/proyectos
```

## 📌 Ejemplo: obtener miembros por periodo

```
GET https://datos.congreso.gov.py/opendata/api/data/comision/12/3/miembros
```

---

## 📝 Campos comunes en comisión

| Campo      | Tipo   | Descripción                                         |
| ---------- | ------ | --------------------------------------------------- |
| `id`       | Entero | Identificador único de la comisión.                 |
| `nombre`   | Texto  | Nombre oficial de la comisión.                      |
| `camara`   | Texto  | Cámara a la que pertenece (Senado o Diputados).     |
