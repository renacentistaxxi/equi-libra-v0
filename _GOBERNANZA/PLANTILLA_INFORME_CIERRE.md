# INFORME DE CIERRE — <ID de tarea> — <título corto>

> Lo entrega el agente al terminar (ver `AGENTS.md`, sección 8).
> El trabajo termina en una rama/worktree. No hay integración automática.

**ID de tarea:** <T-...>
**Agente:** <Codex | Claude Code>
**Fecha:** <AAAA-MM-DD>
**Rama:** <feature/...>

---

## Archivos modificados

- `ruta/archivo` — <qué cambió>

## Correspondencia con la especificación

<Sección de `00_ACTIVO/` que justifica cada cambio.>

## Resultado de build

```
npm run build → <ok | falló: detalle>
```

## Resultado de lint

```
npm run lint → <ok | falló: detalle>
```

## Pruebas locales realizadas (sin red)

<Qué se probó sin backend: lógica de dominio, tipos, render. Flujo concreto, no "anda bien".>

## Protocolo de prueba para el integrador (pruebas con red)

<Pruebas que requieren Firebase y NO corrió el agente. Pasos exactos, datos de entrada
y resultado esperado para que el integrador humano las ejecute. NO declarar como realizadas.>

## Supuestos tomados

<Decisiones menores asumidas por falta de detalle. Si fueron de producto, ver abajo.>

## Omisiones y riesgos

<Qué quedó sin hacer, qué puede romperse, deuda introducida.>

## Decisiones de producto pendientes

<Si surgió una decisión no resuelta, se listó y NO se improvisó (AGENTS.md, sección 9).>

## Diff para revisar

<Referencia a la rama / comando para ver el diff. El humano audita antes de integrar.>

---

## Checklist de integración (lo completa quien integra, no el agente)

- [ ] Auditado contra `00_ACTIVO/`
- [ ] Build y lint en verde
- [ ] Prueba funcional confirmada
- [ ] `REGISTRO_IMPLEMENTACION.md` actualizado
- [ ] Mergeado a `main`
