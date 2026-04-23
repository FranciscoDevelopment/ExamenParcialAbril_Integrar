# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** <!-- Tu nombre completo -->
**Fecha:** <!-- Fecha del examen, ej: 21/04/2026 -->

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
-->
```

### Lo que le pedí a la IA

```
<!-- Pegá aquí el prompt exacto que escribiste. Debe ser el texto que vos escribiste, no la respuesta. -->
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->
```

---

## Prompt 2

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
-->
```

### Lo que le pedí a la IA

```
<!-- Pegá aquí el prompt exacto que escribiste. Debe ser el texto que vos escribiste, no la respuesta. -->
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->
```

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  - ¿Qué tipo de errores repitió la IA que tuviste que corregir?
  - ¿Hubo algo que la IA resolvió bien a la primera sin que necesitaras tocarlo?
  - ¿Cambiarías la forma en que le pedís cosas a la IA la próxima vez? ¿Por qué?
-->
```


PROPMT 1: Cluade Code


Okey ahora dame un colorido del website con buen contraste , tal como pide el enunciado, refenrencia el PDF:

Respuesta:


  Los errores de contraste marcados en style.css son 6 específicos. Según WCAG AA se necesita 4.5:1 para texto normal. Estos son los cambios exactos a hacer:

Selector	Problema	Fix
body	#bbb sobre #f5f5f5 → ratio ~1.7:1	color: #ffffff
.nav-links a	#555 sobre #1a1a2e → ratio ~2.4:1	color: #ffffff
.class-badge	#aaa sobre #e94560 → ratio ~1.6:1	color: #ffffff
.section-title	#ccc sobre fondos oscuros → ratio ~2.3:1	color: #ffffff
.stat-label	#888 sobre #16213e → ratio ~2.8:1	color: #c8d8ff
.skill-cost	#777 sobre #16213e → ratio ~2.3:1	color: #c8d8ff
Reemplazá en style.css:


body {
    font-family: Georgia, serif;
    margin: 0;
    color: #ffffff;
    background: #f5f5f5;
}

.nav-links a {
    display: inline-block;
    margin-right: 20px;
    text-decoration: none;
    color: #ffffff;
}

.class-badge {
    display: inline-block;
    background: #e94560;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    margin-top: 8px;
    color: #ffffff;
}

.section-title {
    font-size: 1.8rem;
    color: #ffffff;
    margin-bottom: 24px;
    border-bottom: 2px solid #e94560;
    padding-bottom: 8px;
}

.stat-label {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #c8d8ff;
}

.skill-cost {
    font-size: 0.8rem;
    color: #c8d8ff;
    margin-top: 4px;
}

#c8d8ff sobre #16213e da ratio ≈ 7.2:1 — cumple AAA. #ffffff sobre todos los fondos oscuros (#1a1a2e, #0f3460, #16213e) da ratios entre 8:1 y 12:1.


PROMPT 2: Cluade Code

ya esta mapeado mi repo de github, QUiero que esta rama local se publique en una remota con el nombre development

PS C:\ExamenParcialAbril_FranciscoChiressi> git push origin -u Development_Local:development

git push origin -u Development_Local:development