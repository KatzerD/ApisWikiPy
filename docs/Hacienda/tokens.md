---
sidebar_position: 3
title: 3. Manejo de Tokens y Límites
---

# 3. Manejo de Tokens y Límites

El uso adecuado de los tokens y la comprensión de las políticas de limitación de solicitudes (rate limiting) son esenciales para evitar bloqueos y garantizar una integración fluida con la API.

## 🔐 Duración del Token

Los tokens generados a través del endpoint de autenticación tienen una **vida útil de 15 minutos (900 segundos)**.

- Una vez expirado, será necesario generar un nuevo token.
- No existe un mecanismo automático de renovación (no hay *refresh token*).

⚠️ **Recomendación**: Automatiza el proceso de renovación solicitando un nuevo token antes de que expire el actual.

## 🚦 Rate Limiting (Límites de solicitud)

La API implementa un sistema de control de tráfico para evitar abusos y garantizar la disponibilidad del servicio.

### 📋 Cabeceras de control

Cada respuesta incluye las siguientes cabeceras informativas:

- `X-Rate-Limit-Limit`: Número máximo de solicitudes permitidas por minuto.
- `X-Rate-Limit-Remaining`: Cantidad de solicitudes restantes en el minuto actual.
- `X-Rate-Limit-Reset`: Tiempo (en segundos) hasta que se restablezca la cuota.

Ejemplo de cabeceras:

```
X-Rate-Limit-Limit: 100
X-Rate-Limit-Remaining: 76
X-Rate-Limit-Reset: 32
```

### ⛔ ¿Qué pasa si se supera el límite?

Si se excede el número permitido de solicitudes, la API devolverá una respuesta con el código:

```
429 Too Many Requests
```

Y deberás esperar el tiempo especificado por `X-Rate-Limit-Reset` antes de volver a realizar peticiones.

## 🧠 Buenas prácticas

- Implementar **reintentos con espera exponencial** al recibir un error 429.
- Evitar hacer múltiples solicitudes simultáneas innecesarias.
- Cachear respuestas estáticas cuando sea posible.
- Utilizar paginación en lugar de solicitar grandes volúmenes de datos de una vez.

