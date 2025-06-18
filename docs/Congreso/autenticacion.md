---
sidebar_position: 1
---

# Autenticación

## ¿Requiere autenticación?

Actualmente, **la API del Congreso Nacional del Paraguay es pública** y **no requiere autenticación** para acceder a sus recursos.

Esto significa que cualquier usuario puede hacer solicitudes directamente a los endpoints disponibles sin necesidad de registrarse ni generar un token.

---

## Acceso libre

Todos los endpoints se pueden consumir mediante el método `GET` enviando solicitudes a:
```
https://datos.congreso.gov.py/opendata/api/data/
```


No es necesario enviar encabezados especiales, cookies, ni claves de acceso.

---

## Ejemplo de solicitud básica

```bash
curl https://datos.congreso.gov.py/opendata/api/data/proyecto?limit=5

// Ejemplo usando fetch en JavaScript
const response = await fetch('https://datos.congreso.gov.py/opendata/api/data/proyecto?limit=5');
const data = await response.json();
console.log(data);
```

---

## Buenas prácticas
Aunque no se requiere autenticación, se recomienda:

- No abusar del servicio con solicitudes excesivas en corto tiempo.

- Implementar caché local en su aplicación.

- Usar paginación (offset y limit) para evitar respuestas demasiado grandes.