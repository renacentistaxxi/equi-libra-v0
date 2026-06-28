# CLAUDE.md

Las reglas operativas de este repositorio están en **`AGENTS.md`** (contrato común
para Codex, Claude Code y cualquier otro agente). Leelo antes de trabajar.

Recordatorio crítico:

- **No-concurrencia de checkout:** Claude Code y Codex nunca modifican el mismo
  checkout al mismo tiempo. Cada ejecución de background usa su propia rama y worktree.
- La fuente de verdad del producto es `00_ACTIVO/`. No se amplía ni reinterpreta el alcance.
- Acciones prohibidas en background y procedimiento de cierre: ver `AGENTS.md`.
