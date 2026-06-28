# REGISTRO DE IMPLEMENTACIÓN — EQUI-LIBRA V0 personal

**Propósito:** estado único de qué está hecho, en curso o pendiente.

**Regla de edición (ver `AGENTS.md`, sección 7):**
ningún agente de background edita este archivo. Lo actualiza **únicamente quien integra
un cambio aprobado**, después de la revisión humana. Un agente "termina" en su rama;
recién al integrarse se marca aquí como hecho.

**Estados:** `hecho` · `en revisión` · `aprobado/pendiente` · `pendiente` · `postergado`

---

## Núcleo 1 — Sistema personal

| Funcionalidad | Sección espec | Estado | Notas |
|---|---|---|---|
| Autenticación personal | ALCANCE 15.1 | hecho | Firebase Auth |
| Captura rápida (texto libre) | ESPEC Vista 1 | hecho | `Home.tsx` |
| Persistencia en Firestore | ESPEC 11.6 | hecho | `users/{uid}/captures` |
| Inbox de capturas | ESPEC Vista 1 | hecho | listado por fecha |
| Clarificar captura → ítem | ESPEC Vista 2 | aprobado/pendiente | corte vertical actual |
| Próximos pasos en Hoy (mínimo) | ESPEC Vista 1 | aprobado/pendiente | cierra el lazo capturar→clarificar→ver |
| Archivar capturas | ESPEC 2 | pendiente | |
| Vista Planos | ESPEC Vista 3 | pendiente | |
| Revisiones (vencidos/posponer) | ESPEC Vista 1 | pendiente | |
| Editar ítems y cambiar estados | ESPEC Vista 3 | pendiente | |

## Núcleo 2 — Salud básica

| Funcionalidad | Sección espec | Estado | Notas |
|---|---|---|---|
| Registro manual de salud | ESPEC 5 | pendiente | manual antes que parser |
| Parser de salud | ESPEC 5 + ALCANCE 19 | postergado | después del flujo manual |

## Núcleo 3 — Finanzas básicas

| Funcionalidad | Sección espec | Estado | Notas |
|---|---|---|---|
| Registro manual de finanzas | ESPEC 6 | pendiente | manual antes que parser |
| Parser de finanzas | ESPEC 6 + ALCANCE 19 | postergado | después del flujo manual |

## Transversal

| Funcionalidad | Sección espec | Estado | Notas |
|---|---|---|---|
| Vista Registros (salud + finanzas) | ESPEC Vista 4 | pendiente | depende de registro manual |

---

## Decisiones de producto relevantes — estado

La ESPECIFICACIÓN ya **cerró** las decisiones que el ALCANCE (sección 24) había dejado
abiertas y que afectan el código próximo:

- **Salud y finanzas se guardan en colecciones separadas** (`health_entries`,
  `finance_entries`), no como ítems del sistema personal — ESPEC 8 y 10.
- **Finanzas: 10 categorías básicas** — ESPEC 6.
- **Salud: campos definidos** (comida, sueño, ánimo, movimiento, agua, notas) — ESPEC 5.

Ninguna de estas bloquea el corte vertical de Clarificar (que solo crea ítems en
`users/{uid}/items`). **No hay decisiones abiertas que bloqueen el trabajo aprobado actual.**
