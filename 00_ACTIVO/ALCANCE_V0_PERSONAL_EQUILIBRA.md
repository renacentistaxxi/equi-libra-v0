# ALCANCE_V0_PERSONAL_EQUILIBRA

**Documento:** ALCANCE_V0_PERSONAL_EQUILIBRA.md  
**Versión:** v1  
**Fecha:** 2026-06-13  
**Estado:** alcance funcional de V0 personal  
**Proyecto:** APP EQUI-LIBRA  
**Tipo de versión:** web/PWA personal de uso real  
**Relación con documentos previos:** corrige la deriva hacia MVP de mercado y recentra EQUI-LIBRA como herramienta personal integrada.

---

## 1. Corrección de rumbo

La V0 inmediata de EQUI-LIBRA no debe pensarse como un MVP de mercado ni como una app nativa lista para usuarios externos.

La versión correcta a construir primero es una **V0 personal de EQUI-LIBRA**, usable por Adrián desde ahora, desplegada como web/PWA personal con Vercel + Firebase, orientada a probar el uso real antes de convertir el proyecto en producto externo.

Esta V0 no reemplaza EQUI-LIBRA por un sistema GTD separado. Integra tres núcleos dentro de EQUI-LIBRA:

1. Salud básica.
2. Finanzas básicas.
3. Sistema personal de captura, clarificación, organización y revisión inspirado en David Allen / GTD.

El cambio conceptual principal es este:

**EQUI-LIBRA no empieza como una app de mercado para medir bienestar integral. Empieza como una herramienta personal confiable para capturar y ordenar lo abierto en la vida real, incluyendo cuerpo, plata y planos vitales.**

---

## 2. Problema que resuelve esta V0 personal

La V0 personal resuelve un problema operativo concreto: la dispersión de ideas, pendientes, procesos abiertos, decisiones, rutinas y registros en múltiples chats, documentos, notas mentales y conversaciones.

El problema no es solo tener muchas tareas. El problema es que muchas cosas quedan abiertas sin un lugar confiable de aterrizaje:

- ideas que surgen en chats y no se convierten en próximos pasos;
- documentos generados que no siempre quedan integrados a una continuidad operativa;
- rutinas personales tratadas por separado: skincare, alimentación, entrenamiento, lecturas, mascotas;
- asuntos profesionales, familiares, vinculares y existenciales compitiendo por atención;
- decisiones parcialmente tomadas que luego vuelven a abrirse;
- temas que producen carga mental porque no se sabe si están activos, pausados, esperando, archivados o pendientes de revisión.

La V0 debe producir alivio por confiabilidad. El usuario debe sentir que puede volcar lo abierto en un sistema y luego encontrarlo, aclararlo, accionarlo o revisarlo.

---

## 3. Qué es esta V0

Esta V0 es una app personal integrada de EQUI-LIBRA.

Debe permitir registrar y revisar tres dimensiones mínimas:

1. **Sistema personal:** capturas, proyectos, próximos pasos, planos de vida, decisiones, hábitos, lecturas, temas en espera y revisiones.
2. **Salud básica:** comida, sueño, ánimo, movimiento y agua, sin profundidad nutricional avanzada inicial.
3. **Finanzas básicas:** gastos, ingresos y transferencias, sin convertir la primera versión en una app financiera completa.

Debe ser suficientemente simple para usar todos los días y suficientemente confiable para que el usuario deje de depender de la memoria o de chats dispersos.

La app debe funcionar como un sistema de entrada y revisión, no como un tablero sofisticado de análisis.

---

## 4. Qué NO es esta V0

Esta V0 no es:

- un MVP comercial;
- una app nativa de App Store o Play Store;
- una versión para usuarios externos;
- una app de productividad genérica;
- un clon de GTD, Notion, Todoist, Trello o Things;
- una app completa de salud;
- una app completa de finanzas personales;
- un dashboard avanzado de bienestar;
- un sistema de score definitivo;
- un coach con IA;
- una arquitectura final;
- una plataforma multiusuario;
- una app con pricing, onboarding comercial o retención de mercado;
- una implementación completa del OMNIDOC general.

No debe construirse para impresionar a un usuario externo. Debe construirse para que Adrián la use de verdad.

---

## 5. Principio rector de alcance

El criterio para decidir si algo entra en la V0 personal es:

**Entra si ayuda a capturar, clarificar, organizar o revisar algo real de la vida actual de Adrián. Queda afuera si solo mejora una versión futura de producto.**

La disponibilidad de código previo no es criterio suficiente para incluir funcionalidad.

Que algo exista en salud-tracker o GastoVoz no significa que deba migrarse completo. Los prototipos son fuente de aprendizaje y piezas reutilizables, no mandato de alcance.

---

## 6. Núcleo 1 — Sistema personal de captura, clarificación, organización y revisión

Este es el núcleo principal de la V0 personal.

Debe permitir que todo asunto abierto entre al sistema sin exigir orden inmediato.

### 6.1. Entra

- Bandeja de captura rápida.
- Inbox de capturas sin aclarar.
- Conversión de captura en ítem organizado.
- Planos de vida.
- Estados operativos.
- Próximo paso.
- Resultado deseado.
- Fecha o cadencia de revisión.
- Notas mínimas.
- Origen del ítem.
- Archivo y pausa explícita.
- Vista de revisión por plano.
- Vista de próximos pasos.
- Vista de ítems esperando respuesta o condición externa.
- Vista de ítems sin aclarar.

### 6.2. No entra todavía

- Automatización compleja de tareas.
- Dependencias entre proyectos.
- Gestión avanzada de calendarios.
- Sincronización con Gmail, Drive o Calendar.
- Priorización algorítmica avanzada.
- IA que decida qué hacer.
- Métricas de productividad.
- Gamificación.
- Sistema de objetivos complejo.

---

## 7. Núcleo 2 — Salud básica

La salud entra en V0, pero en versión básica y subordinada al uso real.

No se busca migrar inicialmente todo salud-tracker. Se busca registrar señales cotidianas que ya forman parte de la idea EQUI-LIBRA y que pueden convivir con el sistema personal.

### 7.1. Entra

- Comida registrada de forma simple.
- Sueño: duración, calidad o comentario subjetivo.
- Ánimo: estado general, intensidad o nota.
- Movimiento: caminata, entrenamiento, ejercicio o actividad física.
- Agua: cantidad o valoración simple.
- Notas libres de salud.
- Texto original de la captura.
- Revisión diaria o semanal básica.

### 7.2. Nivel de detalle permitido

La salud de V0 debe aceptar registros simples como:

- “dormí mal”;
- “comí milanesa con puré”;
- “tomé poca agua”;
- “caminé 40 minutos”;
- “estuve medio bajón”;
- “entrené piernas”.

No necesita calcular todos los nutrientes ni producir análisis médico.

### 7.3. Qué se aprovecha de salud-tracker

Se aprovecha como referencia:

- la existencia de un parser de salud ya probado;
- la estructura de dominios de salud;
- la lógica de certeza;
- la experiencia con Firebase Auth + Firestore;
- la experiencia de deploy con Vercel;
- los errores técnicos ya detectados;
- la idea de alimentos personalizados como posible fase posterior;
- la noción de objetivos configurables, pero no necesariamente su implementación inicial.

### 7.4. Qué no se migra de entrada

No se migra de entrada:

- micronutrientes completos;
- macros detallados;
- cálculo calórico avanzado;
- suplementos;
- laboratorio;
- calculadora de grasa corporal;
- sol → vitamina D;
- objetivos nutricionales automáticos;
- alimentos personalizados como feature central;
- integración Apple Health / Health Connect;
- interpretación clínica o nutricional avanzada.

---

## 8. Núcleo 3 — Finanzas básicas

Las finanzas entran en V0, pero en versión básica y usable.

No se busca migrar inicialmente todo GastoVoz. Se busca poder registrar movimientos financieros cotidianos sin perder el gesto central de EQUI-LIBRA.

### 8.1. Entra

- Gasto.
- Ingreso.
- Transferencia.
- Monto.
- Moneda inferida cuando sea razonable.
- Comercio, contraparte o destino si aparece.
- Categoría básica.
- Nota libre.
- Texto original de la captura.
- Revisión simple de movimientos.

### 8.2. Nivel de detalle permitido

La V0 debe poder registrar frases simples como:

- “gasté 3500 en el kiosco”;
- “pagué 18 mil de luz”;
- “me depositaron el sueldo”;
- “le transferí 12 mil a Laura”;
- “gasté 12 mil en Coto y 4 mil en Uber”.

Debe priorizar que el movimiento quede registrado y corregible, no que quede perfecto.

### 8.3. Qué se aprovecha de GastoVoz

Se aprovecha como referencia:

- parser de montos argentinos;
- formatos “mil”, “lucas”, puntos y comas de miles;
- clasificación básica de tipo de movimiento;
- split de múltiples movimientos;
- experiencia de Web Speech API;
- experiencia de PWA con Vercel;
- reglas de comercio como inspiración;
- taxonomía de categorías como base recortada;
- idea de guardado genérico;
- criterio de preguntas solo si cambian valor analítico;
- separación parser / scoring / UI como principio conceptual, sin diseñar todavía arquitectura.

### 8.4. Qué no se migra de entrada

No se migra de entrada:

- taxonomía financiera completa de 18 categorías y 40+ subcategorías;
- completitud dual completa;
- microgastos con tres capas;
- reglas aprendibles de comercios;
- dashboard financiero avanzado;
- balance mensual completo;
- pagos de deuda sofisticados;
- ahorro/inversión como módulo analítico;
- alertas de calidad de datos;
- importación bancaria;
- reportes o gráficos avanzados.

---

## 9. Planos de vida de la V0 personal

Los planos iniciales son zonas reales donde se acumulan temas abiertos.

Entran como planos iniciales:

1. Profesional.
2. Vincular.
3. Existencial.
4. Personal / hábitos.
5. Intelectual personal.
6. Mascotas.
7. Alimentación.
8. Skincare.
9. Entrenamientos.
10. Lecturas.
11. Salud general.
12. Finanzas.
13. EQUI-LIBRA / proyectos IA.

Los planos no deben funcionar como clasificación perfecta. Deben servir para revisar. Un ítem puede tener un plano principal y etiquetas secundarias si hace falta.

---

## 10. Estructura mínima de cada ítem personal

Cada ítem del sistema personal debe tener una ficha mínima.

Campos mínimos:

- Título.
- Plano principal.
- Tipo.
- Estado.
- Próximo paso.
- Resultado deseado.
- Fecha de revisión.
- Cadencia.
- Notas.
- Origen.
- Condición de reactivación.

Tipos iniciales:

- tarea simple;
- proyecto;
- hábito;
- proceso;
- decisión;
- idea;
- lectura;
- conversación;
- tema en observación;
- registro de salud;
- movimiento financiero.

Estados iniciales:

- inbox;
- aclarar;
- activo;
- próximo;
- esperando;
- pausa;
- revisar;
- archivo.

Regla central:

**Todo ítem activo debe tener próximo paso o una razón explícita para estar esperando, pausado o en revisión.**

---

## 11. Qué significa captura en esta V0

Captura significa sacar algo de la cabeza o de un chat y ponerlo en un lugar confiable sin exigir ordenarlo en ese mismo momento.

La captura debe aceptar entradas desordenadas, incompletas o coloquiales.

Ejemplos válidos:

- “revisar auditoría de contradicciones de EQUI-LIBRA”;
- “tema mamá / geriátrico / hermanas”;
- “ver si la rutina de skincare irrita”;
- “Thor control veterinario”;
- “armar lista de lecturas sobre agentes IA”;
- “pagué 18 mil de luz”;
- “dormí mal y estoy cansado”;
- “no perder idea de V0 personal integrada”.

Capturar no es resolver. Capturar es impedir que algo se pierda.

---

## 12. Qué significa clarificación en esta V0

Clarificación significa decidir qué es una captura y qué requiere.

Una captura puede convertirse en:

- una acción simple;
- un proyecto;
- una decisión pendiente;
- una conversación;
- una lectura;
- un hábito;
- un seguimiento;
- un registro de salud;
- un movimiento financiero;
- un tema en observación;
- material de referencia;
- archivo sin acción.

Una captura queda clarificada cuando tiene al menos una salida operativa:

- próximo paso;
- fecha de revisión;
- estado de espera;
- pausa consciente;
- archivo;
- conversión en proyecto;
- conversión en hábito;
- conversión en registro de salud o finanzas.

La clarificación no debe exigir completar todos los campos. Debe ayudar a convertir niebla en algo recuperable.

---

## 13. Qué significa organización en esta V0

Organización significa que cada ítem clarificado tenga un lugar desde el cual pueda ser visto y revisado.

La organización mínima se apoya en:

1. Plano.
2. Estado.
3. Próximo paso.
4. Revisión.

El sistema debe permitir ver:

- capturas sin aclarar;
- próximos pasos;
- proyectos activos;
- temas esperando;
- ítems pausados;
- ítems a revisar;
- registros recientes de salud;
- movimientos financieros recientes;
- material archivado.

Organizar no es ordenar por estética. Es garantizar recuperabilidad.

---

## 14. Qué significa revisión en esta V0

Revisión significa volver periódicamente sobre lo abierto para evitar que el sistema se convierta en otro depósito abandonado.

Debe existir al menos:

- revisión diaria mínima;
- revisión semanal por planos;
- revisión de inbox sin aclarar;
- revisión de ítems esperando;
- revisión de pausados o archivados con condición de reactivación.

La revisión diaria no debe ser pesada. Debe responder:

- ¿qué está abierto hoy?;
- ¿qué necesita un próximo paso?;
- ¿qué puedo soltar, pausar o archivar?;
- ¿qué registro de salud o finanzas conviene anotar?;
- ¿qué plano está pidiendo atención?

La revisión semanal puede ser más amplia y recorrer planos.

---

## 15. Primer mínimo usable

El primer mínimo usable no debe intentar construir todo EQUI-LIBRA.

Debe permitir, en uso real:

1. Entrar con autenticación personal.
2. Capturar rápidamente una nota libre.
3. Ver una bandeja de inbox.
4. Clarificar una captura en ítem.
5. Asignar plano, tipo, estado y próximo paso.
6. Registrar salud básica desde texto simple.
7. Registrar finanzas básicas desde texto simple.
8. Ver “Hoy” con próximos pasos, capturas pendientes y últimos registros.
9. Hacer una revisión semanal básica por planos.
10. Archivar, pausar o reactivar ítems.

Si esta versión logra que el usuario use la app durante varios días para no perder temas abiertos, la V0 cumple su primera función.

---

## 16. Pantalla inicial de cada mañana

La pantalla que debería abrir cada mañana no debe ser un dashboard complejo.

Debe ser una vista de orientación diaria.

Contenido mínimo:

- Captura rápida arriba.
- Próximos pasos sugeridos para hoy.
- Inbox pendiente de aclarar.
- Ítems que vencen o piden revisión.
- Planos con atención pendiente.
- Últimos registros de salud básica.
- Últimos movimientos financieros.
- Acceso a revisión semanal.

La pregunta implícita de la pantalla no es “¿cómo estás rindiendo?”, sino:

**¿Qué necesita quedar visto hoy para que nada importante se pierda?**

---

## 17. Qué haría atractiva y fácil de usar esta V0

La V0 debe sentirse liviana.

Debe priorizar:

- captura en un gesto;
- pocas decisiones obligatorias;
- campos mínimos visibles;
- posibilidad de dejar algo sin aclarar;
- revisión clara, no intimidante;
- textos breves;
- sensación de alivio;
- continuidad entre chats, vida cotidiana y próximos pasos;
- tolerancia a lo incompleto;
- acceso rápido desde celular como PWA;
- edición posterior simple;
- archivo sin culpa;
- pausa explícita como decisión válida.

La app debe competir contra la inercia de seguir usando chats sueltos. Para eso, debe ser más confiable que un chat y menos pesada que Notion.

---

## 18. Qué debe evitarse para no convertirla en otro sistema abandonado

Debe evitarse:

- exigir clasificación perfecta al capturar;
- hacer demasiadas preguntas;
- convertir cada captura en formulario largo;
- migrar todo salud-tracker;
- migrar todo GastoVoz;
- meter score demasiado temprano;
- agregar dashboards antes de tener uso real;
- introducir IA interpretativa antes de tener datos confiables;
- llenar la app de gráficos;
- convertirla en app de productividad genérica;
- hacer que la revisión semanal sea larga o culposa;
- moralizar hábitos, gastos o salud;
- prometer coaching antes de tener registros suficientes;
- priorizar estética sobre recuperabilidad;
- abrir arquitectura compleja antes de cerrar el mínimo usable.

La trampa principal es construir una app demasiado completa antes de que exista hábito de uso.

---

## 19. Relación con parser, IA y captura por voz

La Fase 0 declaró apto el parser dentro del corpus probado, pero eso no obliga a que la primera versión personal empiece con parser complejo.

En V0 personal, el parser debe entrar solo si reduce fricción.

Uso inicial razonable:

- texto libre como fuente principal;
- parseo simple o asistido para salud básica y finanzas básicas;
- clarificación manual para sistema personal;
- conservación del texto original;
- confirmación antes de guardar registros estructurados.

La IA puede aparecer más adelante para:

- sugerir plano;
- detectar si una captura es tarea, proyecto o decisión;
- proponer próximo paso;
- separar salud, finanzas y sistema personal en una misma captura;
- detectar patrones de acumulación;
- ayudar en revisión semanal.

Pero en el primer mínimo usable, la IA no debe reemplazar el acto central de clarificar.

---

## 20. Relación futura con EQUI-LIBRA amplio

Esta V0 personal no abandona la visión amplia de EQUI-LIBRA.

La prepara.

La conexión futura es:

- el sistema personal aporta continuidad y contexto vital;
- salud aporta señales corporales;
- finanzas aporta señales materiales;
- parser reduce fricción de captura;
- IA ayuda a ordenar y revisar;
- score puede aparecer después como síntesis, no como inicio;
- patrones pueden emerger cuando existan registros suficientes;
- coaching puede aparecer después como acompañamiento, no como sustituto del sistema.

El EQUI-LIBRA amplio debería nacer desde esta V0 personal funcionando, no desde una abstracción de producto.

---

## 21. Qué queda postergado

Queda postergado para después de validar uso personal real:

- app nativa;
- producto de mercado;
- pricing;
- onboarding comercial;
- multiusuario;
- comunidad;
- EQUI-LIBRA Círculo;
- HealthKit / Health Connect;
- wearables;
- integración bancaria;
- parser multidominio avanzado;
- score EQUI-LIBRA visible permanente;
- coaching;
- resúmenes semanales inteligentes;
- correlaciones cuerpo-dinero;
- dashboards avanzados;
- métricas de retención;
- sistema completo de nutrición;
- sistema financiero completo;
- descarga matutina y sueños como módulo principal;
- automatizaciones externas con Gmail, Calendar o Drive.

La descarga matutina y sueños quedan marcados como módulo futuro importante, pero no como primer feature.

---

## 22. Criterios de éxito de la V0 personal

La V0 personal funciona si:

- el usuario captura más asuntos en la app que en chats sueltos;
- baja la sensación de que las cosas se pierden;
- las capturas se pueden aclarar sin fricción excesiva;
- cada plano relevante tiene al menos una forma de revisión;
- salud y finanzas básicas pueden registrarse sin abrir apps separadas;
- la pantalla diaria se vuelve útil al inicio del día;
- la revisión semanal permite recuperar asuntos olvidados;
- pausar, archivar o reactivar se siente natural;
- el usuario vuelve porque el sistema le devuelve claridad.

La V0 fracasa si:

- exige demasiados campos;
- se usa una semana y luego se abandona;
- se convierte en depósito de capturas sin revisión;
- salud y finanzas ocupan todo el diseño;
- el sistema personal queda separado de EQUI-LIBRA;
- la app se siente como otra obligación.

---

## 23. Decisiones cerradas para esta V0 personal

Quedan cerradas para este alcance:

1. La V0 inmediata será personal, no MVP de mercado.
2. La V0 será web/PWA personal, no app nativa inicial.
3. La V0 integra salud básica, finanzas básicas y sistema personal.
4. El sistema personal no reemplaza EQUI-LIBRA; es su núcleo operativo inicial.
5. Salud y finanzas quedan en versión básica.
6. El score EQUI-LIBRA no es el punto de partida.
7. Los prototipos salud-tracker y GastoVoz se aprovechan selectivamente.
8. La descarga matutina y sueños quedan postergados como módulo futuro.
9. La app debe servir al uso real de Adrián antes que a validación comercial.

---

## 24. Decisiones abiertas

Siguen abiertas:

1. Si el primer input será texto solamente o texto + voz básica.
2. Si la clarificación inicial será completamente manual o con sugerencias simples.
3. Si los registros de salud y finanzas se guardan como ítems del mismo sistema o como registros separados vinculados.
4. Qué taxonomía mínima de finanzas entra en la primera versión.
5. Qué campos mínimos exactos de salud entran en la primera versión.
6. Si los planos serán fijos al inicio o editables.
7. Si la revisión semanal tendrá plantilla fija o recorrido libre por planos.
8. Si el sistema tendrá una vista “Hoy” única o una vista diaria + una vista de inbox separada.
9. Qué partes concretas de salud-tracker se copiarán, adaptarán, reescribirán o descartarán.
10. Qué partes concretas de GastoVoz se copiarán, adaptarán, reescribirán o descartarán.
11. Cuándo introducir IA de clarificación.
12. Cuándo introducir score.
13. Cuándo retomar descarga matutina y sueños.

---

## 25. Próxima acción lógica

La próxima acción no es arquitectura completa ni implementación amplia.

La próxima acción lógica es producir un documento breve de especificación funcional del primer mínimo usable, con:

- vistas necesarias;
- acciones principales;
- campos mínimos por tipo de ítem;
- flujo de captura → clarificación → organización → revisión;
- recorte exacto de salud básica;
- recorte exacto de finanzas básicas;
- criterio de qué se reutiliza de salud-tracker y GastoVoz en la primera implementación.

Ese documento debe servir como puente hacia arquitectura mínima, sin volver a expandir el producto.
