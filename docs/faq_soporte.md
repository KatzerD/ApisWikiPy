---
sidebar_position: 100
title: FAQ y Soporte
---

# FAQ y Soporte

Esta sección recopila las preguntas más frecuentes (FAQ) sobre el uso de la API y proporciona orientación sobre cómo obtener ayuda en caso de problemas técnicos o dudas.

## 💡 Preguntas Frecuentes

### ¿Necesito autenticarme para usar la API?

No necesariamente. Algunos endpoints pueden consultarse de forma anónima, pero el acceso completo requiere autenticación mediante token.

### ¿Cómo obtengo mi token de acceso?

Debes registrarte en el portal [https://datos.hacienda.gov.py](https://datos.hacienda.gov.py) y usar tu `client_id` y `client_secret` para generar el token a través del endpoint `/auth/token`.

### ¿Cuánto dura un token?

Cada token tiene una duración de 15 minutos. Pasado este tiempo, deberás solicitar uno nuevo.

### ¿Cómo sé si llegué al límite de solicitudes?

La respuesta HTTP incluirá cabeceras como `X-Rate-Limit-Remaining` y `X-Rate-Limit-Reset`. También puedes recibir un error `429 Too Many Requests`.

### ¿Puedo integrar esta API con herramientas como Power BI o Excel?

Sí. Puedes conectarte utilizando consultas web (con headers personalizados) o scripts intermedios en Python/Node que descarguen datos y los exporten a CSV o JSON.

### ¿Qué pasa si un endpoint devuelve 500?

Significa que hay un error del lado del servidor. Intenta nuevamente después de unos minutos. Si el problema persiste, considera reportarlo.

---

## 🧰 Recursos de Ayuda

- [Manual de Usuario](./07-manual-usuario.md)
- [Errores y Respuestas Comunes](./06-errores.md)
- [Uso de la API](./04-uso-api.md)
- [Mejores Prácticas](./08-mejores-practicas.md)

---

## 📬 Contacto Institucional

Si no encontrás solución en esta documentación, podés escribir a:

✉️ **soporte@hacienda.gov.py**

Incluí en tu mensaje:

- Descripción del problema
- Endpoint consultado
- Código de error recibido
- Capturas de pantalla si es posible

La atención es realizada dentro del horario laboral (08:00 a 16:00) de lunes a viernes.

---

## 🙋‍♂️ Comunidad

Si desarrollás integraciones abiertas o bibliotecas externas, compartilas en foros, GitHub o redes para ayudar a otros usuarios y fortalecer el ecosistema de datos abiertos.

