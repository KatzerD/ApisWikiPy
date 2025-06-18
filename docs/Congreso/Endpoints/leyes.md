---
sidebar_position: 4.4
---

# Leyes

Este endpoint permite acceder a las leyes promulgadas por el Congreso Nacional de Paraguay, incluyendo detalles por año o por identificador.

---

## 📘 Endpoint principal

```
GET /data/ley/
```

Devuelve una lista de leyes promulgadas.

---

## 🔎 Parámetros disponibles

| Parámetro | Tipo   | Descripción                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| Ninguno   | -      | Este endpoint devuelve todas las leyes, con paginación.      |

---

## 📥 Ejemplo de solicitud

```
GET https://datos.congreso.gov.py/opendata/api/data/ley
```

---

## 📤 Ejemplo de respuesta

```json
[
  {
    "id": 2095,
    "numero": "6790",
    "titulo": "Ley de Protección Ambiental",
    "fechaPromulgacion": "2022-10-21"
  }
]
```

---

## 📂 Endpoints relacionados

| Recurso               | Descripción                                       |
|-----------------------|---------------------------------------------------|
| `/ley/{id}`           | Detalles de una ley específica.                   |
| `/ley/anho/{año}`     | Lista de leyes promulgadas en un año específico.  |

---

## 📌 Ejemplo: obtener detalle de una ley

```
GET https://datos.congreso.gov.py/opendata/api/data/ley/2095
```

## 📌 Ejemplo: obtener leyes por año

```
GET https://datos.congreso.gov.py/opendata/api/data/ley/anho/2022
```

---

## 📝 Campos comunes en ley

| Campo              | Tipo   | Descripción                                         |
|--------------------|--------|-----------------------------------------------------|
| `id`               | Entero | Identificador único de la ley.                     |
| `numero`           | Texto  | Número oficial de la ley.                          |
| `titulo`           | Texto  | Título de la ley.                                  |
| `fechaPromulgacion`| Fecha  | Fecha en la que fue promulgada.                    |

---

## 🚨 Notas adicionales

- Las leyes están disponibles desde el año 1995 en adelante.
- El endpoint permite filtrado por año para segmentar mejor las consultas.

---
