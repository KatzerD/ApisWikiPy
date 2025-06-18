---
sidebar_position: 4
---

# Paginación y Filtros

La API v3 de la DNCP está diseñada para manejar grandes volúmenes de datos. Para facilitar el consumo eficiente y evitar respuestas excesivamente grandes, se implementan mecanismos de paginación y filtrado.

## 📑 Paginación

La paginación permite dividir los resultados en múltiples páginas accesibles de forma secuencial.

### 🔧 Parámetros comunes

| Parámetro | Descripción |
|-----------|-------------|
| `limit`   | Número máximo de registros por página |
| `offset`  | Desplazamiento desde el primer registro |
| `page`    | Número de página (si el endpoint lo admite) |

> ⚠️ Es preferible usar `limit` + `offset` para mayor compatibilidad.

### 🧪 Ejemplo de uso

```bash
GET /datos/api/v3/ocds/tender?limit=20&offset=40
```

Este ejemplo recupera la **tercera página** de resultados si se asume un tamaño de página de 20 registros.

### 🧠 Cálculo del offset

Para navegar entre páginas:
```
offset = (número de página - 1) * tamaño de página
```

Ejemplo para la página 5 con 50 resultados por página:
```
offset = (5 - 1) * 50 = 200
```

---

## 🔎 Filtros

La mayoría de los endpoints permiten aplicar filtros por campos específicos para reducir la cantidad de resultados innecesarios.

### 🔤 Filtro por búsqueda textual

```bash
GET /datos/api/v3/ocds/tender?q=combustible
```

### 📅 Filtro por fecha

Algunos endpoints permiten filtrar por campos de fecha como `datePublished`, `dateSigned`, etc.

```bash
GET /datos/api/v3/ocds/tender?datePublished__gte=2024-01-01&datePublished__lte=2024-03-31
```

> Los filtros usan notación de operadores:
> - `__gte`: mayor o igual que
> - `__lte`: menor o igual que
> - `__exact`: igual
> - `__icontains`: contiene (insensible a mayúsculas)

---

## 📘 Ejemplo combinado

```bash
GET /datos/api/v3/ocds/contract?value__gte=100000000&limit=10&offset=0
```

Este ejemplo busca contratos con valor mayor o igual a 100 millones de guaraníes, limitando la respuesta a los primeros 10 resultados.

---

## ✅ Recomendaciones

- Siempre aplicar filtros para reducir la cantidad de datos.
- Usar paginación para navegar en conjuntos grandes.
- Validar que los campos que se filtran estén disponibles en la respuesta JSON.
