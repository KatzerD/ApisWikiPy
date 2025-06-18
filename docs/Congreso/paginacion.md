---
sidebar_position: 5
---

# Paginación y Filtros

La mayoría de los endpoints de la API del Congreso Nacional del Paraguay están diseñados para devolver grandes volúmenes de datos de manera eficiente mediante paginación. Algunos también permiten aplicar filtros para limitar los resultados.

---

## 📦 Paginación

### Parámetros comunes

| Parámetro | Tipo    | Descripción                                                   |
|---------- |---------|---------------------------------------------------------------|
| `limit`   | Entero  | Número máximo de registros por página. Valor por defecto: 50. |
| `offset`  | Entero  | Desplazamiento desde el primer registro.                      |

### Ejemplo de solicitud paginada

```
GET https://datos.congreso.gov.py/opendata/api/data/proyecto?limit=10&offset=20
```

Esta consulta devolverá 10 registros, comenzando desde el número 21.

---

## 🔗 Enlaces de navegación

Algunos endpoints incluyen un objeto `links` en la respuesta JSON, con enlaces automáticos para navegar:

```json
"links": {
  "self": "https://datos.congreso.gov.py/opendata/api/data/proyecto?offset=0&limit=10",
  "next": "https://datos.congreso.gov.py/opendata/api/data/proyecto?offset=10&limit=10",
  "last": "https://datos.congreso.gov.py/opendata/api/data/proyecto?offset=110&limit=10"
}
```

---

## 🎯 Filtros

Actualmente, la mayoría de los endpoints **no permiten filtros complejos por query parameters**. Sin embargo:

- Algunos endpoints incluyen recursos segmentados por año, ID o cámara (ej: `/ley/anho/{año}`, `/sesion/camara/{S|D}`).
- Si necesitás filtrar por fechas, cámaras, autores o estado, deberás hacerlo del lado del cliente una vez que tengas los datos.

---

## 📝 Recomendaciones

- Siempre utilizá paginación en tus consultas para evitar respuestas demasiado grandes.
- Implementá lógica de avance y retroceso (`offset += limit`) si necesitás recorrer todo el dataset.
- Considerá el uso de caché para llamadas repetitivas.

---
