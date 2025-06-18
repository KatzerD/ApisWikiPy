---
sidebar_position: 8
---

# Casos de Uso

Esta sección presenta ejemplos prácticos del uso de la API v3 de la DNCP para resolver necesidades comunes. Cada caso de uso incluye el propósito, la estructura de la solicitud y una respuesta esperada.

---

## 🔍 1. Buscar licitaciones activas con una palabra clave

**Objetivo**: encontrar procesos de contratación activos que contengan el término "combustible".

**Solicitud**:
```bash
GET /datos/api/v3/ocds/tender?q=combustible&limit=5
```

**Respuesta esperada (fragmento)**:
```json
{
  "data": [
    {
      "tender": {
        "title": "Adquisición de combustible para vehículos",
        "status": "active",
        "value": {
          "amount": 100000000,
          "currency": "PYG"
        }
      }
    }
  ]
}
```

---

## 📅 2. Filtrar contratos firmados en un rango de fechas

**Objetivo**: obtener contratos firmados entre enero y marzo de 2024.

**Solicitud**:
```bash
GET /datos/api/v3/ocds/contract?dateSigned__gte=2024-01-01&dateSigned__lte=2024-03-31&limit=10
```

---

## 💸 3. Obtener contratos mayores a cierto monto

**Objetivo**: filtrar contratos con montos superiores a 500 millones de guaraníes.

**Solicitud**:
```bash
GET /datos/api/v3/ocds/contract?value__gte=500000000&limit=10
```

---

## 🧾 4. Recuperar un proceso completo (Record OCDS)

**Objetivo**: obtener todos los datos del proceso con ID conocido.

**Solicitud**:
```bash
GET /datos/api/v3/ocds/record?ocid=ocds-123456-PY-2024-0001
```

---

## 🗂️ 5. Descargar datos en masa desde CSV

**Objetivo**: acceder a datasets completos sin realizar llamadas múltiples.

**Recurso**:
- [Descargar CSVs oficiales](https://www.contrataciones.gov.py/datos/api/v3/doc/)

---

## 📊 6. Integrar la API en un dashboard

**Objetivo**: crear visualizaciones en tiempo real con herramientas como Power BI, Grafana o Tableau.

**Sugerencias**:
- Configurar el acceso autenticado con token.
- Utilizar filtros por fecha y entidad contratante.
- Almacenar datos localmente para evitar rate limiting.

---

## ✅ Recomendaciones generales

- Limitar siempre la cantidad de resultados (`limit`).
- Aplicar filtros significativos (`q`, `datePublished`, `value`, etc.).
- Utilizar OAuth para uso intensivo o integraciones corporativas.
- Verificar cambios en la estructura de los endpoints antes de automatizar.

