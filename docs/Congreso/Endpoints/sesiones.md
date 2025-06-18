---
sidebar_position: 4.5
---

# Sesiones

Este endpoint permite acceder a las sesiones realizadas por ambas cámaras del Congreso Nacional de Paraguay.

---

## 📘 Endpoint principal

```
GET /data/sesion/camara/{S|D}
```

Devuelve una lista de sesiones de la cámara indicada: `S` para Senado, `D` para Diputados.

---

## 🔎 Parámetros disponibles

| Parámetro | Tipo   | Descripción                                                   |
|---------- |--------|---------------------------------------------------------------|
| Ninguno   | -      | El tipo de cámara se especifica en la URL como `S` o `D`.     |

---

## 📥 Ejemplo de solicitud

```
GET https://datos.congreso.gov.py/opendata/api/data/sesion/camara/S
```

---

## 📤 Ejemplo de respuesta

```json
[
  {
    "id": 317,
    "fecha": "2023-05-17",
    "descripcion": "Sesión Ordinaria del Senado",
    "camara": "Senado"
  }
]
```

---

## 📂 Endpoints relacionados

| Recurso                    | Descripción                                                  |
|----------------------------|--------------------------------------------------------------|
| `/sesion/camara/S`         | Lista de sesiones del Senado.                                |
| `/sesion/camara/D`         | Lista de sesiones de Diputados.                              |
| `/sesion/{id}`             | Detalles de una sesión específica.                           |
| `/sesion/{id}/proyectos`   | Lista de proyectos tratados en una sesión específica.        |

---

## 📌 Ejemplo: obtener detalle de una sesión

```
GET https://datos.congreso.gov.py/opendata/api/data/sesion/317
```

## 📌 Ejemplo: obtener proyectos tratados en una sesión

```
GET https://datos.congreso.gov.py/opendata/api/data/sesion/317/proyectos
```

---

## 📝 Campos comunes en sesión

| Campo        | Tipo   | Descripción                                      |
|--------------|--------|--------------------------------------------------|
| `id`         | Entero | Identificador único de la sesión.               |
| `fecha`      | Fecha  | Fecha en que se realizó la sesión.              |
| `descripcion`| Texto  | Título o descripción de la sesión.              |
| `camara`     | Texto  | Cámara a la que pertenece la sesión.           |

---

## 🚨 Notas adicionales

- Este endpoint permite identificar qué proyectos fueron discutidos en sesiones específicas.
- Las sesiones están separadas por cámara (`S` o `D` en la URL).

---
