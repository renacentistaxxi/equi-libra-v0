# AGENTS.md — Contrato operativo para agentes de EQUI-LIBRA

**Estado:** vigente (rev. 2, revisado por Codex)
**Alcance:** este archivo rige a TODO agente automático que trabaje en este repositorio,
sea Codex, Claude Code u otro. Es de lectura obligatoria al inicio de cada ejecución.

Si una instrucción de este archivo entra en conflicto con un pedido puntual de una sesión,
se detiene y se consulta. Este contrato no se modifica desde una ejecución de background.

---

## 1. Jerarquía documental

La fuente de verdad del producto es la carpeta **`00_ACTIVO/`**. Cada documento
cumple un **rol distinto y complementario**, no hay prioridad automática de uno sobre otro:

- `ALCANCE_V0_PERSONAL_EQUILIBRA.md` — define los **límites** de la V0 (qué entra y qué no).
- `ESPECIFICACION_FUNCIONAL_V0_PERSONAL_EQUILIBRA.md` — define el **comportamiento
  implementable** y **cierra decisiones** que el alcance había dejado abiertas.
- `NUCLEO_PERSONAL_EQUILIBRA.md` — aporta el **criterio conceptual**.

Cuando la ESPECIFICACIÓN cierra una decisión que el ALCANCE (p. ej. su sección 24)
había listado como abierta, **vale la especificación**.

Ningún otro documento, chat, comentario de código o memoria de un agente puede
contradecir `00_ACTIVO/`. Ante una **contradicción real e irreducible** entre documentos
de `00_ACTIVO/`, el agente **se detiene y consulta** — no la resuelve por su cuenta.

## 2. Prohibición de modificar el alcance

Ningún agente puede:

- ampliar, recortar o reinterpretar el alcance definido en `00_ACTIVO/`;
- inventar funcionalidades que no estén en la especificación;
- adelantar funcionalidades postergadas (parser, IA, score, dashboards, multiusuario, etc.);
- resolver por su cuenta una **decisión de producto que ningún documento de
  `00_ACTIVO/` haya cerrado todavía**. Nota: la ESPECIFICACIÓN ya cerró varias
  decisiones que el ALCANCE (sección 24) había listado como abiertas
  (colecciones, categorías de finanzas, campos de salud); consultar **ambos**
  documentos antes de declarar algo "abierto".

Cambiar el alcance requiere aprobación humana explícita y edición manual de `00_ACTIVO/`.

## 3. Una tarea, una rama, un worktree por ejecución

- Cada ejecución de background atiende **una sola tarea aprobada**.
- Cada ejecución trabaja en su **propia rama** y en su **propio git worktree**.
- Codex y Claude Code **nunca** modifican el mismo checkout al mismo tiempo.
- La tarea aprobada debe incluir: objetivo, criterios de aceptación, archivos permitidos
  y la sección de la especificación que la justifica.

## 4. Acciones prohibidas en background

Un agente de background opera con permiso de **escritura solo en el workspace**,
**sin acceso de red**, y tiene PROHIBIDO:

- hacer `merge` o integrar cambios a `main`;
- desplegar (Vercel u otro);
- modificar Firebase, sus colecciones de producción o sus reglas de seguridad;
- leer, escribir o exponer secretos / variables de entorno (`.env*`);
- borrar archivos;
- instalar, actualizar o quitar dependencias (`package.json` / lockfile);
- editar este `AGENTS.md` o los documentos de `00_ACTIVO/`;
- editar el registro central de implementación (ver sección 7).

Si la tarea parece requerir una de estas acciones, el agente se detiene y lo informa.

## 5. Trazabilidad

Todo cambio de código debe poder rastrearse a una sección concreta de la
especificación o del alcance. El informe de cierre debe citar esa correspondencia
(p. ej. "Vista Clarificar — ESPECIFICACION, sección 1, Vista 2").

Código sin justificación en `00_ACTIVO/` no se incorpora.

## 6. Calidad mínima obligatoria

El agente de background opera **sin red** (sección 4). Eso parte la verificación en dos:

**Lo que ejecuta y reporta el agente** (no requiere red):

- **build** (`npm run build`);
- **lint** (`npm run lint`);
- **pruebas locales posibles**: lógica de dominio, tipos, render de componentes
  sin backend, etc.

**Lo que NO ejecuta el agente** (requiere red): la prueba de persistencia real contra
Firebase. El agente **no la declara realizada**. En su lugar entrega el **protocolo
exacto** (pasos, datos de entrada, resultado esperado) para que **el integrador humano**
la corra. Lo mismo para cualquier prueba que el sandbox impida.

Si build o lint fallan, se entrega igual pero el informe lo declara como riesgo abierto;
no se presenta como terminado. Nunca se declara realizada una prueba que no se corrió.

## 7. Registro central de implementación

Existe (o existirá) un registro central de estado de implementación.

- **Ningún agente de background lo edita.**
- Cada agente entrega su avance y su informe en su rama.
- El registro central lo actualiza **únicamente quien integra el cambio aprobado**,
  después de la revisión humana.

Esto evita conflictos de edición y estados declarados "terminados" antes de revisarse.

## 8. Informe de cierre obligatorio

Toda ejecución termina con un informe que incluye:

- archivos modificados;
- correspondencia con la especificación (sección 5);
- resultado de build y lint;
- pruebas locales realizadas;
- protocolos entregados para pruebas con red;
- supuestos tomados, omisiones y riesgos;
- decisiones de producto que quedaron pendientes (si las hubo);
- diff listo para revisar.

El trabajo termina en una rama / worktree. **No hay integración automática.**
La incorporación a `main` la decide y ejecuta el humano tras auditar.

## 9. Detención obligatoria

El agente se detiene y consulta —en vez de improvisar— cuando:

- aparece una decisión de producto que ningún documento de `00_ACTIVO/` haya cerrado
  (revisar ALCANCE y ESPECIFICACIÓN antes de darla por abierta);
- la tarea exigiría una acción prohibida (sección 4);
- la especificación es ambigua o contradice el pedido de la sesión;
- el cambio requeriría tocar archivos fuera de los permitidos por la tarea.

Detenerse y preguntar es el comportamiento correcto, no una falla.

---

## Nota para Claude Code

Claude Code lee este `AGENTS.md` como contrato. Su `CLAUDE.md` (cuando exista)
solo debe apuntar a este archivo y recordar la regla de no-concurrencia de checkout.
El aislamiento por ejecución se logra con worktrees; los permisos de la sección 4
se hacen cumplir por configuración (sandbox / `settings.json`), no por confianza.
