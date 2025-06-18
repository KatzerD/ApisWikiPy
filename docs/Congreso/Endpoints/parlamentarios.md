---
sidebar_position: 4.2
---

# Parlamentarios

Este endpoint permite acceder a información detallada sobre los parlamentarios del Congreso Nacional de Paraguay, incluyendo sus datos personales, cámara, y proyectos asociados.

---

## 📘 Endpoint principal

```
GET /data/parlamentario/
```
Devuelve una lista de parlamentarios activos o históricos del Congreso.

---

## 🔎 Parámetros disponibles

| Parámetro | Tipo | Descripción                                       |
| --------- | ---- | ------------------------------------------------- |
| Ninguno   | -    | Este endpoint no requiere parámetros específicos. |

---

## 📥 Ejemplo de solicitud

```
GET https://datos.congreso.gov.py/opendata/api/data/parlamentario
```

---

## 📤 Ejemplo de respuesta

```json
[
  {
    "id": 102,
    "nombre": "María González",
    "partido": "Partido X",
    "departamento": "Central",
    "camara": "Cámara de Diputados",
    "periodo": "2023-2028"
  }
]
```

---

## 📂 Endpoints relacionados

| Recurso                         | Descripción                                           |
| ------------------------------- | ----------------------------------------------------- |
| `/parlamentario/camara/S`       | Lista de senadores.                                   |
| `/parlamentario/camara/D`       | Lista de diputados.                                   |
| `/parlamentario/{id}`           | Detalles completos de un parlamentario específico.    |
| `/parlamentario/{id}/proyectos` | Lista de proyectos presentados por ese parlamentario. |

---

##  📌 Ejemplo: obtener parlamentarios de la Cámara de Diputados

```
GET https://datos.congreso.gov.py/opendata/api/data/parlamentario/camara/D
```

## 📌 Ejemplo: obtener detalle de un parlamentario

```
GET https://datos.congreso.gov.py/opendata/api/data/parlamentario/102
```

## 📌 Ejemplo: obtener proyectos de un parlamentario

```
GET https://datos.congreso.gov.py/opendata/api/data/parlamentario/102/proyectos
```

---

## 📝 Campos comunes en parlamentario

| Campo          | Tipo   | Descripción                                        |
| -------------- | ------ | -------------------------------------------------- |
| `id`           | Entero | Identificador único del parlamentario.             |
| `nombre`       | Texto  | Nombre completo.                                   |
| `partido`      | Texto  | Partido político al que pertenece.                 |
| `departamento` | Texto  | Departamento por el cual fue electo.               |
| `camara`       | Texto  | Cámara a la que pertenece (Senadores o Diputados). |
| `periodo`      | Texto  | Periodo legislativo correspondiente.               |

---

## 🚨 Notas adicionales

- La lista puede incluir parlamentarios actuales y de periodos anteriores.

- El subrecurso /proyectos permite vincular parlamentarios con los proyectos presentados.
