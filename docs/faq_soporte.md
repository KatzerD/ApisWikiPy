---
sidebar_position: 100
title: FAQ y Soporte
---

# FAQ y Soporte

Esta sección recopila las preguntas más frecuentes (FAQ) sobre el uso de las APIs públicas del Paraguay y proporciona orientación sobre cómo obtener ayuda en caso de problemas técnicos o dudas.

## 💡 Preguntas Frecuentes

### ¿Necesito autenticarme para usar las APIs?

Depende del servicio. Algunas APIs permiten el acceso público a ciertos endpoints, pero muchas funcionalidades requieren autenticación mediante token.

### ¿Cómo obtengo mi token de acceso?

En la mayoría de los casos, debes registrarte en el portal correspondiente (por ejemplo: datos.congreso.gov.py, datos.hacienda.gov.py, contrataciones.gov.py) y usar tu `client_id` y `client_secret` para generar un token de acceso mediante un endpoint del tipo `/auth/token` o similar.

### ¿Cuánto dura un token?

La duración varía según la API, pero suele ser de entre 15 minutos a 1 hora. Consultá la documentación específica del proveedor.

### ¿Cómo sé si llegué al límite de solicitudes?

La respuesta HTTP puede incluir cabeceras como `X-Rate-Limit-Remaining` y `X-Rate-Limit-Reset`. Si excedes el límite, podrías recibir un error `429 Too Many Requests`.

### ¿Puedo integrar estas APIs con herramientas como Power BI o Excel?

Sí. Podés conectarte utilizando consultas web (con headers personalizados) o scripts intermedios en Python o Node.js que descarguen los datos y los exporten a formatos compatibles como CSV o JSON.

### ¿Qué pasa si un endpoint devuelve 500?

Significa que hay un error del lado del servidor. Intentalo nuevamente después de unos minutos. Si el problema persiste, considerá reportarlo al equipo correspondiente.

---

## 🧰 Recursos de Ayuda

- [Manual de Usuario](./07-manual-usuario.md)
- [Errores y Respuestas Comunes](./06-errores.md)
- [Uso de la API](./04-uso-api.md)
- [Mejores Prácticas](./08-mejores-practicas.md)

---

## 📬 Contacto Institucional

Si no encontrás solución en esta documentación, podés escribir a los contactos institucionales correspondientes según la API:

✉️ **soporte@hacienda.gov.py**  
✉️ **contacto@congreso.gov.py**  
✉️ **soporte@dncp.gov.py**

Incluí en tu mensaje:

- Descripción del problema
- Endpoint consultado
- Código de error recibido
- Capturas de pantalla si es posible

La atención suele ser realizada dentro del horario laboral (08:00 a 16:00) de lunes a viernes.

---

## 🙋‍♂️ Comunidad

Si desarrollás integraciones abiertas o bibliotecas externas, compartilas en foros, GitHub o redes sociales para ayudar a otros usuarios y fortalecer el ecosistema de datos abiertos en Paraguay.