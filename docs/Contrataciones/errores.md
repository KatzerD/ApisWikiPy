---
sidebar_position: 7
---

# 7. Manejo de Errores

Cuando se realizan solicitudes a la API v3 de la DNCP, pueden ocurrir errores debido a autenticación incorrecta, límites de uso superados o problemas con los parámetros enviados. Esta sección describe cómo interpretar y manejar adecuadamente esos errores.

## 🚨 Códigos de estado HTTP

| Código | Significado                       | Descripción                                                                 |
|--------|-----------------------------------|-----------------------------------------------------------------------------|
| 200    | OK                                | La solicitud fue exitosa.                                                   |
| 400    | Bad Request                       | La solicitud tiene parámetros incorrectos o malformados.                   |
| 401    | Unauthorized                      | Token de acceso inválido, expirado o ausente.                              |
| 403    | Forbidden                         | No tienes permiso para acceder al recurso solicitado.                      |
| 404    | Not Found                         | El recurso solicitado no fue encontrado.                                   |
| 429    | Too Many Requests                 | Se ha superado el límite de solicitudes permitidas por minuto.             |
| 500    | Internal Server Error             | Error interno en el servidor.                                              |

## 🧾 Estructura de un error

Cuando ocurre un error, la API suele responder con un objeto JSON que describe el problema.

**Ejemplo**:
```json
{
  "error": "invalid_request",
  "error_description": "The parameter 'limit' must be a positive integer."
}
```

## 🧠 Buenas prácticas de manejo de errores

1. **Validar parámetros antes de enviar la solicitud**:
   - Verificá tipos, formatos y rangos válidos.

2. **Manejar respuestas 401**:
   - Renovar el token si expiró.
   - Verificar cabecera `Authorization`.

3. **Respuestas 429**:
   - Implementar espera exponencial (`exponential backoff`).
   - Evitar llamadas repetidas innecesarias.

4. **Registrar errores**:
   - Guardar logs de errores para análisis posterior.
   - Incluir timestamp, endpoint, payload y respuesta del servidor.

## 🔁 Ejemplo de reintento ante error 429 (pseudo-código)

```python
for intento in range(5):
    respuesta = hacer_llamada()
    if respuesta.status_code == 429:
        esperar(2 ** intento)  # espera exponencial
    else:
        break
```

## 🧪 Consejos útiles

- Usar herramientas como Postman o curl para verificar manualmente errores antes de codificar.
- Analizar el contenido completo de la respuesta para depurar errores complejos.
- Revisar la documentación oficial en caso de mensajes ambiguos.

---

**Nota**: Las buenas prácticas de manejo de errores mejoran la resiliencia y robustez de las aplicaciones que consumen esta API.
