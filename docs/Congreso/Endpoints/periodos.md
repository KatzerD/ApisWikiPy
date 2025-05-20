---
sidebar_position: 4.6
---

# 4.6 Periodos

Este endpoint permite acceder a los periodos legislativos del Congreso Nacional de Paraguay. Los periodos se utilizan para agrupar legislaturas y asociar datos como miembros de comisiones o proyectos legislativos.

---

## 📘 Endpoint principal

```
GET /data/periodo/
```

Devuelve una lista de periodos legislativos registrados.

---

## 🔎 Parámetros disponibles

| Parámetro | Tipo | Descripción                                       |
| --------- | ---- | ------------------------------------------------- |
| Ninguno   | -    | Este endpoint no requiere parámetros.             |

---

## 📥 Ejemplo de solicitud

```
GET https://datos.congreso.gov.py/opendata/api/data/periodo
```

---

## 📤 Ejemplo de respuesta

```json
[
  {
    "id": 3,
    "descripcion": "Período 2023-2028",
    "inicio": "2023-07-01",
    "fin": "2028-06-30"
  }
]
```

---

## 📂 Endpoints relacionados

| Recurso               | Descripción                                              |
|-----------------------|----------------------------------------------------------|
| `/periodo/{id}`       | Detalles de un periodo legislativo específico.           |

---

## 📌 Ejemplo: obtener detalle de un periodo

```
GET https://datos.congreso.gov.py/opendata/api/data/periodo/3
```

---

## 📝 Campos comunes en periodo

| Campo        | Tipo   | Descripción                                  |
|--------------|--------|----------------------------------------------|
| `id`         | Entero | Identificador único del periodo.             |
| `descripcion`| Texto  | Nombre o etiqueta del periodo legislativo.   |
| `inicio`     | Fecha  | Fecha de inicio del periodo.                 |
| `fin`        | Fecha  | Fecha de finalización del periodo.           |

---

## 🚨 Notas adicionales

- Los periodos son utilizados en otros endpoints como referencia para asignar miembros de comisiones.
- Puede ser útil para filtrar información legislativa histórica.

---

## ✅ Fin del módulo 4

Has llegado al final de la documentación de endpoints principales de la API SILpy.
