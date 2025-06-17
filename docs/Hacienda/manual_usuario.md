---
sidebar_position: 7
title: 7. Manual de Usuario
---

# 7. Manual de Usuario

El **Manual de Usuario** es un documento esencial que acompaña a esta API y que tiene como finalidad guiar tanto a usuarios técnicos como no técnicos en el correcto uso del sistema. Este manual proporciona explicaciones paso a paso, ejemplos ilustrativos, buenas prácticas y contexto funcional del ecosistema de datos abiertos que promueve el Ministerio de Hacienda de Paraguay.

## 📄 Contenido general del manual

A continuación, se listan los capítulos más importantes que forman parte del manual oficial:

### 1. 🧭 Introducción a los Datos Abiertos

- ¿Qué son los datos abiertos?
- Importancia de la transparencia fiscal.
- Cómo la ciudadanía se beneficia del acceso a la información.

### 2. 👥 Registro y Acceso al Portal

- Cómo crear una cuenta de usuario en el portal.
- Validación de correo electrónico y recuperación de contraseña.
- Gestión del perfil y claves de autenticación.

### 3. 🗂️ Exploración del Catálogo de Datasets

- Navegación por categorías de información.
- Búsqueda por palabras clave y filtros por año, entidad o tipo de gasto.
- Visualización preliminar de los datos disponibles.

### 4. 🧪 API Sandbox

- Entorno de pruebas para experimentar con los endpoints sin afectar datos reales.
- Instrucciones para enviar solicitudes simuladas.
- Interpretación de respuestas en tiempo real.

### 5. 🔐 Autenticación y Token

- Proceso de generación de tokens desde el portal.
- Cómo utilizar el token en herramientas como Postman o scripts en Python.
- Seguridad y caducidad del token.

### 6. 🔍 Filtrado de Datos y Consultas Avanzadas

- Aplicación de filtros para obtener subconjuntos de información.
- Uso de parámetros como: `anio` `entidad` `programa`
- Combinación de filtros para análisis más específicos.

### 7. 🧾 Estructura de las Respuestas

- Análisis de las claves JSON retornadas por la API.
- Identificación de campos útiles como: `meta` `data` `total` `page`
- Consejos para extraer datos con herramientas externas (Excel, R, Python).

### 8. 🛠️ Solución de Problemas

- Errores frecuentes y cómo resolverlos.
- Uso de código de estado HTTP como guía de diagnóstico.
- Qué hacer en caso de recibir `429 Too Many Requests`.

### 9. 📊 Casos de Uso y Ejemplos Reales

- Visualización de transferencias con Power BI.
- Generación de dashboards cívicos con JavaScript.
- Cruce de datos entre entidades presupuestarias y programas de gobierno.

---

## 📎 Acceso al Documento Oficial

Puedes descargar el manual completo en formato PDF desde el siguiente enlace:

🔗 [Manual de Usuario - API de Hacienda](https://datos.hacienda.gov.py/docs-api/manual-de-usuario.pdf)

- **Formato**: PDF  
- **Tamaño estimado**: 3 MB  
- **Última actualización**: marzo 2024

---

## 🧠 Recomendaciones

- Leer el manual antes de comenzar una implementación seria.
- Utilizarlo como material de consulta durante el desarrollo.
- Compartirlo con otros miembros del equipo o instituciones aliadas.

---

## 🆘 Soporte Adicional

Si el manual no resuelve tus dudas, te recomendamos explorar:

- La sección de [Errores y Respuestas Comunes](./06-errores.md)
- La [sección de FAQ y Soporte](./10-faq-soporte.md)
- El contacto institucional disponible en el portal oficial de Hacienda.

