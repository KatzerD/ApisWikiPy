---
sidebar_position: 4.1
---

# Expedientes Legislativos

Este endpoint permite acceder a la lista de proyectos legislativos presentados en el Congreso Nacional de Paraguay.

---

## 📘 Endpoint principal

```
GET /data/proyecto/
```

Este endpoint devuelve una lista de proyectos legislativos.

---

## 🔎 Parámetros disponibles

| Parámetro | Tipo    | Descripción                                  |
|----------|---------|----------------------------------------------|
| `offset` | Entero  | Número de elemento desde el cual iniciar.    |
| `limit`  | Entero  | Cantidad máxima de resultados a devolver.    |

> Por defecto, la API devuelve hasta **50 proyectos**. Utilice `offset` para paginar.

---

## 📥 Ejemplo de solicitud
```
GET https://datos.congreso.gov.py/opendata/api/data/proyecto?offset=0&limit=10
```

---

## 📤 Ejemplo de respuesta

```json
[
  {
    "idProyecto": 4375,
    "tipo": "Proyecto de Ley",
    "titulo": "Que modifica el artículo 1º de la Ley N° 609/95",
    "fechaPresentacion": "2022-09-15",
    "estado": "En comisión",
    "camaraOrigen": "Cámara de Diputados",
    "iniciadores": ["Carlos Gómez", "Luis Martínez"]
  },
  ...
]
```

---

## 📂 Sub-recursos disponibles
Además de la lista principal, existen endpoints para obtener detalles específicos de un proyecto:

| Recurso                        | Descripción                                          |
| ------------------------------ | ---------------------------------------------------- |
| `/proyecto/{id}`               | Detalles completos de un proyecto específico.        |
| `/proyecto/{id}/autores`       | Lista de autores del proyecto.                       |
| `/proyecto/{id}/tramitaciones` | Información sobre el avance y tratamiento del mismo. |
| `/proyecto/{id}/dictamenes`    | Dictámenes emitidos por comisiones.                  |
| `/proyecto/{id}/adjuntos`      | Documentos adjuntos escaneados.                      |
| `/proyecto/{id}/detalle`       | Texto extendido o resumen legislativo.               |
| `/proyecto/total`              | Total de proyectos disponibles.                      |

---

## 📌 Ejemplo: obtener detalle de un proyecto

```
GET https://datos.congreso.gov.py/opendata/api/data/proyecto/4375
```

## 📝 Campos comunes en proyecto

| Campo               | Tipo   | Descripción                                        |
| ------------------- | ------ | -------------------------------------------------- |
| `idProyecto`        | Entero | Identificador único del proyecto.                  |
| `tipo`              | Texto  | Tipo de iniciativa (Ley, Resolución, Declaración). |
| `titulo`            | Texto  | Título oficial del proyecto.                       |
| `fechaPresentacion` | Fecha  | Fecha en que fue presentado.                       |
| `estado`            | Texto  | Estado actual del proyecto.                        |
| `camaraOrigen`      | Texto  | Cámara donde fue presentado (Senado o Diputados).  |
| `iniciadores`       | Lista  | Parlamentarios que impulsaron el proyecto.         |

---

## 🚨 Notas adicionales

- Algunos campos como iniciadores pueden no estar presentes en todos los proyectos.

- Para obtener textos completos, usar el subrecurso /detalle.

- Para seguimiento legislativo, usar /tramitaciones.

