---
sidebar_position: 80
---

# Estándar Open Contracting (OCDS)

La API v3 de la Dirección Nacional de Contrataciones Públicas (DNCP) está alineada con el Estándar de Datos de Contrataciones Abiertas (*Open Contracting Data Standard*, OCDS), promovido por la Open Contracting Partnership. Este estándar busca mejorar la transparencia, la participación y la eficiencia en los procesos de compras públicas mediante datos estructurados.

## 🧠 ¿Qué es OCDS?

El OCDS es un modelo de datos abierto que permite estructurar información de todas las etapas de la contratación pública. Sus principales características son:

- **Cobertura completa del ciclo de contratación**: planificación, licitación, adjudicación, firma del contrato y ejecución.
- **Identificadores únicos y trazabilidad**: cada proceso tiene un identificador que permite rastrear sus fases.
- **Interoperabilidad**: compatible con sistemas internacionales y locales de contratación.
- **Formato JSON**: fácilmente integrable en aplicaciones y plataformas de análisis.

## 🧾 Componentes OCDS en la API

La API expone varios recursos directamente estructurados bajo el modelo OCDS. Entre ellos se encuentran:

| Recurso OCDS | Descripción |
|--------------|-------------|
| `/ocds/tender` | Información sobre licitaciones |
| `/ocds/award` | Detalles sobre adjudicaciones |
| `/ocds/contract` | Información contractual firmada |
| `/ocds/planning` | Etapa de planificación presupuestaria |
| `/ocds/implementation` | Ejecución del contrato (cuando aplica) |

> Cada uno de estos endpoints retorna objetos JSON alineados con el estándar OCDS 1.1.

## 📘 Documentación oficial del estándar

Para una comprensión más profunda del esquema OCDS y sus campos, se recomienda consultar:

- [Sitio oficial del OCDS](https://standard.open-contracting.org/latest/es/)
- [Modelo de datos OCDS en español](https://standard.open-contracting.org/latest/es/schema/)
- [Guías de implementación del OCDS](https://docs.open-contracting.org/)

## 📦 Ejemplo de objeto OCDS (fragmento)

```json
{
  "ocid": "ocds-123456-PY-2024-0001",
  "tender": {
    "id": "LIC-2024-123",
    "title": "Adquisición de insumos médicos",
    "status": "active",
    "value": {
      "amount": 50000000,
      "currency": "PYG"
    }
  },
  "buyer": {
    "name": "Ministerio de Salud Pública",
    "id": "MSPBS"
  }
}
```

## ✅ Ventajas de usar OCDS

- Facilita el análisis comparativo entre entidades, años y rubros.
- Promueve el periodismo de datos y la auditoría ciudadana.
- Potencia el desarrollo de dashboards e informes inteligentes.

## 📎 Recursos adicionales

- [Guía de implementación OCDS en América Latina](https://www.open-contracting.org/implement/)
