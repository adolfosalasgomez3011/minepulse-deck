const deck = document.getElementById("deck");
const slides = Array.from(document.querySelectorAll(".slide"));
const progressBar = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const fsBtn = document.getElementById("fsBtn");
const langToggle = document.getElementById("langToggle");

let active = 0;
let lang = "es";

const i18n = {
  en: {
    "header.tag": "Launch Narrative Deck",
    "header.prev": "Prev",
    "header.next": "Next",
    "header.lang": "ENGLISH",
    "header.lang2": "ESPAÑOL",
    "header.fs": "Fullscreen",
    "hero.eyebrow": "Client Value Driven",
    "hero.title": "Operational Visibility. Measurable Performance.",
    "hero.subtitle": "GoalPraxis - MinePulse helps mining leaders convert field activity into faster decisions, stronger control, and quantifiable operational gains.",
    "hero.powered": "Powered by Tektelic infrastructure",
    "hero.v1": "Fewer blind spots",
    "hero.v2": "Better asset utilization",
    "hero.v3": "Safer operations",
    "hero.p1": "Field Capture",
    "hero.p2": "Secure Connectivity",
    "hero.p3": "Decision Intelligence",
    "hero.p4": "MinePulse Dashboard",
    "pillars.locate": "Locate",
    "pillars.optimize": "Optimize",
    "pillars.protect": "Protect",
    "problem.eyebrow": "Strategic challenge",
    "problem.title": "Mining teams need visibility without enterprise complexity",
    "problem.lead": "The opportunity spans mid-size and large operations, from USD 100M+ businesses to multi-billion-dollar mining groups.",
    "problem.li1": "Asset location uncertainty creates downtime and hidden waste",
    "problem.li2": "Safety and perimeter events are not always visible in real time",
    "problem.li3": "Disconnected tools slow decision cycles in dynamic sites",
    "problem.m1k": "Target Vertical",
    "problem.m1v": "Mining First",
    "problem.m2k": "Customer Segment",
    "problem.m2v": "USD 100M+ to 10B+",
    "problem.m3k": "Geography",
    "problem.m3v": "Peru -> LATAM",
    "problem.m4k": "Approach",
    "problem.m4v": "Pilot-in-a-Box",
    "impact.eyebrow": "What MinePulse delivers",
    "impact.title": "Three capabilities. Immediate operational impact.",
    "impact.locate.h": "Know where everything is — always",
    "impact.locate.stat": "Up to 40% less time searching for assets",
    "impact.locate.l1": "Live map for assets & personnel",
    "impact.locate.l2": "Zone & geofence instant alerts",
    "impact.locate.l3": "No more radio calls to find equipment",
    "impact.optimize.h": "Turn idle time into productive hours",
    "impact.optimize.stat": "Up to 20% improvement in asset utilization",
    "impact.optimize.l1": "Usage & downtime telemetry per asset",
    "impact.optimize.l2": "Shift performance dashboards",
    "impact.optimize.l3": "Data-driven maintenance planning",
    "impact.protect.h": "Keep people & assets out of harm's way",
    "impact.protect.stat": "Real-time event response in seconds",
    "impact.protect.l1": "Restricted-area breach alerts",
    "impact.protect.l2": "Emergency notification workflows",
    "impact.protect.l3": "Full perimeter event log",
    "stack.eyebrow": "Technology backbone",
    "stack.title": "GoalPraxis execution, MinePulse product, trusted IoT foundation",
    "stack.c1h": "Tracking Devices",
    "stack.c1p": "Rugged trackers for indoor and outdoor visibility across high-value mining assets.",
    "stack.c1f": "Spec profile reference: IP67 class, long battery life",
    "stack.c2h": "Gateway Layer",
    "stack.c2p": "Carrier-grade gateway portfolio oriented to coverage, reliability, and deployment efficiency.",
    "stack.c2f": "Coverage guidance varies by terrain and design",
    "stack.c3h": "Network + Applications",
    "stack.c3p": "MinePulse converts field signals into operational dashboards, events, and actionable decisions.",
    "stack.c3f": "Built to scale from first pilot to multi-site portfolio",
    "value.eyebrow": "MinePulse value model",
    "value.title": "Locate. Optimize. Protect.",
    "value.locate.p": "Real-time tracking of critical assets and field movement where visibility matters most.",
    "value.locate.l1": "Live map visibility",
    "value.locate.l2": "Zone and geofence alerts",
    "value.locate.l3": "Reduced search time",
    "value.optimize.p": "Operational intelligence to reduce idle assets and improve utilization performance.",
    "value.optimize.l1": "Usage telemetry by asset class",
    "value.optimize.l2": "Downtime and utilization patterns",
    "value.optimize.l3": "Planning decision support",
    "value.protect.p": "Risk and safety monitoring for perimeter events and emergency response coordination.",
    "value.protect.l1": "Event-driven notifications",
    "value.protect.l2": "Restricted-area breach alerts",
    "value.protect.l3": "Response workflow support",
    "network.eyebrow": "Network architecture",
    "network.title": "MinePulse Network Solution",
    "network.lead": "Inspired by TEKTELIC network flow references, adapted for mining operations and the GoalPraxis-MinePulse model.",
    "network.sensors": "Field Sensors and Trackers",
    "network.s1": "Asset Tracker Option A",
    "network.s2": "Asset Tracker Option B",
    "network.s3": "Safety and Worker Tag",
    "network.gateway": "Gateway Layer",
    "network.gatewayp": "Site network coverage for mine pit, plant, and key logistics zones.",
    "network.server": "Network and Application Services",
    "network.ss1": "Network Server",
    "network.ss2": "Network Management",
    "network.ss3": "Application Services",
    "network.apps": "MinePulse Applications",
    "network.a1": "Operations Dashboard",
    "network.a2": "Alerts and Events",
    "network.a3": "Executive KPI View",
    "network.c1h": "Field Capture",
    "network.c1p": "Sensors and trackers detect movement, status, and events in real time.",
    "network.c2h": "Connectivity Core",
    "network.c2p": "Gateway and network services transport data reliably across the site.",
    "network.c3h": "Decision Layer",
    "network.c3p": "MinePulse dashboards translate signals into actions for operations teams.",
    "pilot.eyebrow": "Pilot-in-a-Box",
    "pilot.title": "90-day execution roadmap",
    "pilot.m1": "Day 1-30",
    "pilot.h1": "Validate",
    "pilot.p1": "Site mapping, gateway placement, first tracker setup, baseline KPI capture.",
    "pilot.m2": "Day 31-60",
    "pilot.h2": "Quantify",
    "pilot.p2": "Expose first savings opportunities with utilization and movement intelligence.",
    "pilot.m3": "Day 61-90",
    "pilot.h3": "Scale",
    "pilot.p3": "Expand tags, automate alerts, and lock monthly operational review cadence.",
    "pilot.c1": "Days to first full-cycle outcome",
    "pilot.c2": "Core value streams",
    "pilot.c3": "Unified operating view",
    "strategic.eyebrow": "Partnership logic",
    "strategic.title": "Why this model is defensible",
    "strategic.l1": "Global IoT technology depth + local mining execution capability",
    "strategic.l2": "Practical rollout method aligned to operational reality",
    "strategic.l3": "Fast start through pilot scope, then regional scaling path",
    "strategic.l4": "One narrative from field events to management decisions",
    "strategic.mh": "Go-to-Market Split",
    "strategic.r1k": "GoalPraxis",
    "strategic.r1v": "Commercial lead, deployment, customer success, local integration",
    "strategic.r2k": "MinePulse",
    "strategic.r2v": "Product packaging, dashboard experience, operational storyline",
    "strategic.r3k": "Tektelic foundation",
    "strategic.r3v": "Gateway and tracker backbone, discreetly embedded in the solution stack",
    "commercial.eyebrow": "Commercial strategy",
    "commercial.title": "Strategic commercialization path",
    "commercial.lead": "Keep this stage strategic: value-first entry, prove outcomes, then expand contract scope.",
    "commercial.l1": "Entry: focused pilot on one operational pain point",
    "commercial.l2": "Proof: demonstrate quantified impact with decision-grade reports",
    "commercial.l3": "Expansion: scale across areas, fleets, and additional MinePulse modules",
    "commercial.q1": "\"We are not selling hardware. We are selling operational clarity and measurable execution.\"",
    "commercial.qs1": "GoalPraxis commercial principle",
    "commercial.q2": "\"Land with one use case. Expand with evidence.\"",
    "commercial.qs2": "MinePulse growth model",
    "pain.eyebrow": "Savings command panel",
    "pain.title": "Locate. Optimize. Protect. Turn operational blind spots into measurable savings.",
    "pain.lead": "This dashboard highlights where value leaks today and where MinePulse can recover productivity, cost, and safety performance.",
    "pain.gauge.kicker": "Estimated Year-1 savings opportunity",
    "pain.gauge.locate.h": "Locate",
    "pain.gauge.locate.c": "CAPEX containment",
    "pain.gauge.optimize.h": "Optimize",
    "pain.gauge.optimize.c": "Productivity per cost/ton",
    "pain.gauge.protect.h": "Protect",
    "pain.gauge.protect.c": "Risk & incident metrics",
    "pain.gauge.note": "Illustrative benchmark based on recovered search time, fleet utilization uplift, and preventable incident reduction.",
    "pain.gauge.note2": "Locate can reduce CAPEX leakage up to 20%, Optimize can increase productivity per cost/ton up to 40%, and Protect can improve risk and incident metrics up to 25%.",
    "pain.k1.h": "Visibility to Financial Control",
    "pain.k1.p": "Reconcile physical assets vs accounting records to reduce tax, audit, and write-off exposure.",
    "pain.k2.h": "From Reactive to Predictive Operations",
    "pain.k2.p": "Track performance, payload, speed, fuel, and condition signals before losses compound across shifts.",
    "pain.k3.h": "Safety as an Operational KPI",
    "pain.k3.p": "Convert high-risk events into managed workflows with faster alerts, restricted-zone control, and visitor traceability.",
    "pain.locate.stat": "2-3 hrs/shift",
    "pain.locate.h": "Locate: Stop losing value in missing assets",
    "pain.locate.l1": "Eliminate search losses from untracked or misplaced equipment.",
    "pain.locate.l2": "Flag assets drifting out of maintenance control before premature failure.",
    "pain.locate.l3": "Close the gap between book assets and physically verifiable mine assets.",
    "pain.locate.solve": "→ MinePulse Locate control layer",
    "pain.optimize.stat": "10-20% uplift",
    "pain.optimize.h": "Optimize: Recover hidden productivity across shifts",
    "pain.optimize.l1": "Measure operator-driven productivity variance by shift and unit.",
    "pain.optimize.l2": "Track payload, speed, and cycle performance against operating targets.",
    "pain.optimize.l3": "Monitor fuel consumption, alarms, and condition trends for proactive action.",
    "pain.optimize.solve": "→ MinePulse Optimize intelligence",
    "pain.protect.stat": "Faster response",
    "pain.protect.h": "Protect: Reduce incident exposure in high-risk zones",
    "pain.protect.l1": "Prevent unauthorized entry into restricted or high-altitude work areas.",
    "pain.protect.l2": "Alert teams instantly during risky activities and trigger response workflows.",
    "pain.protect.l3": "Maintain full traceability for personnel, contractors, and visitors on site.",
    "pain.protect.solve": "→ MinePulse Protect safety layer",
    "how.eyebrow": "How it works",
    "how.title": "From field events to operational decisions in seconds",
    "how.l1.h": "Field Layer",
    "how.l1.p": "Rugged trackers and sensors on assets, vehicles, and personnel. IP67-rated. Long battery life. No site wiring needed.",
    "how.l1.i1": "Asset trackers",
    "how.l1.i2": "Worker safety tags",
    "how.l1.i3": "Zone sensors",
    "how.l2.h": "Network Layer",
    "how.l2.p": "TEKTELIC carrier-grade LoRaWAN gateways provide seamless coverage across pit, plant, and logistics zones.",
    "how.l2.i1": "Multi-km outdoor coverage",
    "how.l2.i2": "Indoor & underground capable",
    "how.l2.i3": "Redundant gateway design",
    "how.l3.h": "Intelligence Layer",
    "how.l3.p": "MinePulse transforms raw signals into live maps, utilization dashboards, alert workflows, and KPI reports for every level of your operation.",
    "how.l3.i1": "Live operations map",
    "how.l3.i2": "Shift performance reports",
    "how.l3.i3": "Executive KPI view",
    "demo.eyebrow": "Live operational view",
    "demo.title": "Your mine. Real time. One screen.",
    "demo.overlay.label": "To be replaced with live TEKTELIC mock dashboard",
    "demo.c1.h": "Live asset map",
    "demo.c1.p": "Every tracked asset visible in real time — location, status, and zone assignment at a glance.",
    "demo.c2.h": "Utilization dashboard",
    "demo.c2.p": "Shift-by-shift usage telemetry. Spot idle assets and inefficiencies before the next day begins.",
    "demo.c3.h": "Alert & event center",
    "demo.c3.p": "Zone breaches, proximity events, and emergency workflows — all surfaced in one live feed.",
    "pilot.d1": "KPI baseline established",
    "pilot.d2": "First savings report ready",
    "pilot.d3": "Expansion plan delivered",
    "cta.eyebrow": "Why GoalPraxis",
    "cta.title": "Mining experience. Technology backbone. Partnership commitment.",
    "cta.lead": "We don't just deploy hardware. We become the operational intelligence partner that helps your team extract measurable value — pilot to portfolio.",
    "cta.d1": "Global IoT technology depth + local mining execution capability",
    "cta.d2": "Practical rollout aligned to operational reality — not enterprise complexity",
    "cta.d3": "Fast start via focused pilot, clear path to regional scaling",
    "cta.d4": "One narrative from field events to management decisions",
    "cta.op1": "Recover hidden asset value",
    "cta.op2": "Convert idle hours into output",
    "cta.op3": "Turn safety control into trust",
    "cta.card.tag": "Strategic opportunity",
    "cta.card.h": "Launch the first MinePulse pilot",
    "cta.card.p": "Ready to start in Peru with a strategic pilot and scale across regional mining operations.",
    "cta.m1n": "90 days",
    "cta.m1l": "to first operational proof",
    "cta.m2n": "1 pilot",
    "cta.m2l": "to open regional expansion",
    "cta.btn1": "Contact via WhatsApp",
    "cta.footnote": "Powered by TEKTELIC · Built for LATAM mining",
    "sources.h": "Evidence base used in this deck",
    "sources.p": "Reviewed official TEKTELIC gateway, sensor, network solution, and mining pages on April 29, 2026.",
    "footer.left": "Keyboard: left/right arrows",
    "footer.right": "GoalPraxis FirstPresetantion V2"
  },
  es: {
    "header.tag": "Deck narrativo de lanzamiento",
    "header.prev": "Anterior",
    "header.next": "Siguiente",
    "header.lang": "INGLÉS",
    "header.lang2": "ESPAÑOL",
    "header.fs": "Pantalla completa",
    "hero.eyebrow": "Presentacion de valor para cliente",
    "hero.title": "Visibilidad operativa. Rendimiento medible.",
    "hero.subtitle": "GoalPraxis - MinePulse ayuda a lideres mineros a convertir actividad de campo en decisiones mas rapidas, mayor control y mejoras operativas cuantificables.",
    "hero.powered": "Powered by Tektelic infrastructure",
    "hero.v1": "Menos puntos ciegos",
    "hero.v2": "Mejor utilizacion de activos",
    "hero.v3": "Operacion mas segura",
    "hero.p1": "Captura en campo",
    "hero.p2": "Conectividad segura",
    "hero.p3": "Inteligencia de decision",
    "hero.p4": "Dashboard MinePulse",
    "pillars.locate": "Localizar",
    "pillars.optimize": "Optimizar",
    "pillars.protect": "Proteger",
    "problem.eyebrow": "Reto estrategico",
    "problem.title": "Los equipos mineros necesitan visibilidad sin complejidad empresarial",
    "problem.lead": "La oportunidad cubre operaciones medianas y grandes, desde empresas de USD 100M+ hasta grupos mineros multibillonarios.",
    "problem.li1": "La incertidumbre de ubicacion de activos genera paradas y desperdicio oculto",
    "problem.li2": "Eventos de seguridad y perimetro no siempre se ven en tiempo real",
    "problem.li3": "Herramientas desconectadas ralentizan decisiones en sitios dinamicos",
    "problem.m1k": "Vertical objetivo",
    "problem.m1v": "Mineria primero",
    "problem.m2k": "Segmento cliente",
    "problem.m2v": "USD 100M+ a 10B+",
    "problem.m3k": "Geografia",
    "problem.m3v": "Peru -> LATAM",
    "problem.m4k": "Enfoque",
    "problem.m4v": "Pilot-in-a-Box",
    "impact.eyebrow": "Lo que entrega MinePulse",
    "impact.title": "Tres capacidades. Impacto operacional inmediato.",
    "impact.locate.h": "Sabe donde esta todo — siempre",
    "impact.locate.stat": "Hasta 40% menos tiempo buscando activos",
    "impact.locate.l1": "Mapa en vivo de activos y personal",
    "impact.locate.l2": "Alertas instantaneas de zonas y geovallas",
    "impact.locate.l3": "Sin mas llamadas de radio para encontrar equipos",
    "impact.optimize.h": "Convierte tiempo inactivo en horas productivas",
    "impact.optimize.stat": "Hasta 20% de mejora en utilizacion de activos",
    "impact.optimize.l1": "Telemetria de uso y paradas por activo",
    "impact.optimize.l2": "Dashboards de rendimiento por turno",
    "impact.optimize.l3": "Planificacion de mantenimiento basada en datos",
    "impact.protect.h": "Protege personas y activos ante cualquier riesgo",
    "impact.protect.stat": "Respuesta a eventos en tiempo real en segundos",
    "impact.protect.l1": "Alertas de violacion de zonas restringidas",
    "impact.protect.l2": "Flujos de notificacion de emergencias",
    "impact.protect.l3": "Registro completo de eventos perimetrales",
    "stack.eyebrow": "Base tecnologica",
    "stack.title": "Ejecucion GoalPraxis, producto MinePulse y base IoT confiable",
    "stack.c1h": "Dispositivos de tracking",
    "stack.c1p": "Trackers robustos para visibilidad indoor y outdoor de activos mineros de alto valor.",
    "stack.c1f": "Referencia de perfil: clase IP67 y bateria de larga vida",
    "stack.c2h": "Capa de gateways",
    "stack.c2p": "Portafolio carrier-grade orientado a cobertura, confiabilidad y eficiencia de despliegue.",
    "stack.c2f": "La cobertura depende de terreno y diseno",
    "stack.c3h": "Red + aplicaciones",
    "stack.c3p": "MinePulse convierte senales de campo en tableros operativos, eventos y decisiones accionables.",
    "stack.c3f": "Escalable desde piloto inicial hasta portafolio multisitio",
    "value.eyebrow": "Modelo de valor MinePulse",
    "value.title": "Localizar. Optimizar. Proteger.",
    "value.locate.p": "Tracking en tiempo real de activos criticos y movimientos de campo donde mas importa la visibilidad.",
    "value.locate.l1": "Mapa en vivo",
    "value.locate.l2": "Alertas de zona y geocerca",
    "value.locate.l3": "Menor tiempo de busqueda",
    "value.optimize.p": "Inteligencia operativa para reducir activos ociosos y mejorar utilizacion.",
    "value.optimize.l1": "Telemetria por tipo de activo",
    "value.optimize.l2": "Patrones de parada y uso",
    "value.optimize.l3": "Soporte para planificacion",
    "value.protect.p": "Monitoreo de riesgo y seguridad para eventos perimetrales y respuesta de emergencia.",
    "value.protect.l1": "Notificaciones por evento",
    "value.protect.l2": "Alertas por ingreso restringido",
    "value.protect.l3": "Soporte a flujo de respuesta",
    "network.eyebrow": "Arquitectura de red",
    "network.title": "MinePulse Network Solution",
    "network.lead": "Inspirado en referencias de flujo de red de TEKTELIC, adaptado a operaciones mineras y al modelo GoalPraxis-MinePulse.",
    "network.sensors": "Sensores y trackers de campo",
    "network.s1": "Tracker de activo opcion A",
    "network.s2": "Tracker de activo opcion B",
    "network.s3": "Tag de seguridad y personal",
    "network.gateway": "Capa de gateway",
    "network.gatewayp": "Cobertura de red para tajo, planta y zonas logisticas clave.",
    "network.server": "Servicios de red y aplicacion",
    "network.ss1": "Servidor de red",
    "network.ss2": "Gestion de red",
    "network.ss3": "Servicios de aplicacion",
    "network.apps": "Aplicaciones MinePulse",
    "network.a1": "Dashboard de operaciones",
    "network.a2": "Alertas y eventos",
    "network.a3": "Vista ejecutiva de KPIs",
    "network.c1h": "Captura en campo",
    "network.c1p": "Sensores y trackers detectan movimiento, estado y eventos en tiempo real.",
    "network.c2h": "Nucleo de conectividad",
    "network.c2p": "Gateway y servicios de red transportan datos de forma confiable en todo el sitio.",
    "network.c3h": "Capa de decision",
    "network.c3p": "Dashboards MinePulse convierten senales en acciones para equipos operativos.",
    "pilot.eyebrow": "Pilot-in-a-Box",
    "pilot.title": "Roadmap de ejecucion a 90 dias",
    "pilot.m1": "Dia 1-30",
    "pilot.h1": "Validar",
    "pilot.p1": "Mapeo de sitio, ubicacion de gateways, primer setup de trackers y linea base de KPIs.",
    "pilot.m2": "Dia 31-60",
    "pilot.h2": "Cuantificar",
    "pilot.p2": "Exponer primeras oportunidades de ahorro con inteligencia de uso y movimiento.",
    "pilot.m3": "Dia 61-90",
    "pilot.h3": "Escalar",
    "pilot.p3": "Expandir tags, automatizar alertas y fijar cadencia mensual de revision operativa.",
    "pilot.c1": "Dias al primer resultado completo",
    "pilot.c2": "Flujos de valor principales",
    "pilot.c3": "Vista operativa unificada",
    "strategic.eyebrow": "Logica de alianza",
    "strategic.title": "Por que este modelo es defendible",
    "strategic.l1": "Profundidad tecnologica global IoT + ejecucion minera local",
    "strategic.l2": "Metodo de despliegue practico alineado a la realidad operativa",
    "strategic.l3": "Inicio rapido con piloto y ruta de escalamiento regional",
    "strategic.l4": "Una sola narrativa desde eventos de campo hasta decisiones gerenciales",
    "strategic.mh": "Distribucion Go-to-Market",
    "strategic.r1k": "GoalPraxis",
    "strategic.r1v": "Lider comercial, despliegue, exito del cliente e integracion local",
    "strategic.r2k": "MinePulse",
    "strategic.r2v": "Empaquetamiento de producto, experiencia de dashboard y narrativa operativa",
    "strategic.r3k": "Base Tektelic",
    "strategic.r3v": "Backbone de gateways y trackers, integrado de forma discreta en la solucion",
    "commercial.eyebrow": "Estrategia comercial",
    "commercial.title": "Ruta de comercializacion estrategica",
    "commercial.lead": "Mantener esta etapa estrategica: entrar con valor, probar resultados y luego expandir alcance contractual.",
    "commercial.l1": "Entrada: piloto focalizado en un dolor operativo",
    "commercial.l2": "Prueba: demostrar impacto cuantificado con reportes para decision",
    "commercial.l3": "Expansion: escalar por areas, flotas y modulos adicionales de MinePulse",
    "commercial.q1": "\"No vendemos hardware. Vendemos claridad operativa y ejecucion medible.\"",
    "commercial.qs1": "Principio comercial GoalPraxis",
    "commercial.q2": "\"Entrar con un caso de uso. Escalar con evidencia.\"",
    "commercial.qs2": "Modelo de crecimiento MinePulse",
    "pain.eyebrow": "Panel de control de ahorros",
    "pain.title": "Localizar. Optimizar. Proteger. Convierte puntos ciegos operativos en ahorro medible.",
    "pain.lead": "Este dashboard muestra donde se fuga valor hoy y donde MinePulse puede recuperar productividad, costo y desempeno en seguridad.",
    "pain.gauge.kicker": "Oportunidad estimada de ahorro en ano 1",
    "pain.gauge.locate.h": "Localizar",
    "pain.gauge.locate.c": "Contencion de CAPEX",
    "pain.gauge.optimize.h": "Optimizar",
    "pain.gauge.optimize.c": "Productividad por costo/ton",
    "pain.gauge.protect.h": "Proteger",
    "pain.gauge.protect.c": "Metricas de riesgo e incidentes",
    "pain.gauge.note": "Referencia ilustrativa basada en tiempo recuperado de busqueda, mejora de utilizacion de flota y reduccion de incidentes prevenibles.",
    "pain.gauge.note2": "Localizar puede reducir fugas de CAPEX hasta 20%, Optimizar puede elevar productividad por costo/ton hasta 40%, y Proteger puede mejorar metricas de riesgo e incidentes hasta 25%.",
    "pain.k1.h": "De visibilidad a control financiero",
    "pain.k1.p": "Conciliar activos fisicos vs registros contables para reducir exposicion tributaria, de auditoria y castigos de activos.",
    "pain.k2.h": "De reaccion a operacion predictiva",
    "pain.k2.p": "Monitorear desempeno, payload, velocidad, combustible y condicion antes de que las perdidas se multipliquen entre turnos.",
    "pain.k3.h": "Seguridad como KPI operacional",
    "pain.k3.p": "Convertir eventos de alto riesgo en flujos gestionados con alertas rapidas, control de zonas restringidas y trazabilidad de visitantes.",
    "pain.locate.stat": "2-3 hrs/turno",
    "pain.locate.h": "Localizar: detener perdidas por activos no ubicados",
    "pain.locate.l1": "Eliminar horas perdidas buscando equipos no rastreados o mal posicionados.",
    "pain.locate.l2": "Detectar activos fuera de control de mantenimiento antes de fallas prematuras.",
    "pain.locate.l3": "Cerrar la brecha entre activos en libros y activos verificables en mina.",
    "pain.locate.solve": "→ Capa de control MinePulse Locate",
    "pain.optimize.stat": "10-20% mejora",
    "pain.optimize.h": "Optimizar: recuperar productividad oculta entre turnos",
    "pain.optimize.l1": "Medir variacion de productividad por operador, turno y unidad.",
    "pain.optimize.l2": "Controlar payload, velocidad y ciclo frente a metas operativas.",
    "pain.optimize.l3": "Monitorear combustible, alarmas y condicion para accion preventiva.",
    "pain.optimize.solve": "→ Inteligencia MinePulse Optimize",
    "pain.protect.stat": "Respuesta mas rapida",
    "pain.protect.h": "Proteger: reducir exposicion a incidentes en zonas de alto riesgo",
    "pain.protect.l1": "Prevenir ingreso no autorizado a zonas restringidas o trabajos en altura.",
    "pain.protect.l2": "Alertar al equipo al instante en actividades riesgosas y activar respuesta.",
    "pain.protect.l3": "Mantener trazabilidad completa de personal, contratistas y visitantes.",
    "pain.protect.solve": "→ Capa de seguridad MinePulse Protect",
    "how.eyebrow": "Como funciona",
    "how.title": "De eventos de campo a decisiones operativas en segundos",
    "how.l1.h": "Capa de campo",
    "how.l1.p": "Trackers y sensores robustos en activos, vehiculos y personal. Clase IP67. Bateria de larga duracion. Sin cableado en sitio.",
    "how.l1.i1": "Trackers de activos",
    "how.l1.i2": "Tags de seguridad para personal",
    "how.l1.i3": "Sensores de zona",
    "how.l2.h": "Capa de red",
    "how.l2.p": "Gateways LoRaWAN carrier-grade de TEKTELIC con cobertura continua en tajo, planta y zonas logisticas.",
    "how.l2.i1": "Cobertura outdoor multi-km",
    "how.l2.i2": "Apto para interior y subterraneo",
    "how.l2.i3": "Diseno de gateway redundante",
    "how.l3.h": "Capa de inteligencia",
    "how.l3.p": "MinePulse transforma senales en mapas en vivo, dashboards de utilizacion, flujos de alerta y reportes de KPIs para cada nivel de tu operacion.",
    "how.l3.i1": "Mapa de operaciones en vivo",
    "how.l3.i2": "Reportes de rendimiento por turno",
    "how.l3.i3": "Vista ejecutiva de KPIs",
    "demo.eyebrow": "Vista operativa en tiempo real",
    "demo.title": "Tu mina. En tiempo real. Una sola pantalla.",
    "demo.overlay.label": "Por reemplazar con mock dashboard en vivo de TEKTELIC",
    "demo.c1.h": "Mapa de activos en vivo",
    "demo.c1.p": "Cada activo rastreado visible en tiempo real — ubicacion, estado y zona asignada de un vistazo.",
    "demo.c2.h": "Dashboard de utilizacion",
    "demo.c2.p": "Telemetria de uso turno a turno. Detecta activos ociosos e ineficiencias antes de que empiece el siguiente dia.",
    "demo.c3.h": "Centro de alertas y eventos",
    "demo.c3.p": "Violaciones de zona, eventos de proximidad y flujos de emergencia — todo en un feed en vivo.",
    "pilot.d1": "Linea base de KPIs establecida",
    "pilot.d2": "Primer reporte de ahorro listo",
    "pilot.d3": "Plan de expansion entregado",
    "cta.eyebrow": "Por que GoalPraxis",
    "cta.title": "Experiencia minera. Base tecnologica. Compromiso de alianza.",
    "cta.lead": "No solo desplegamos hardware. Nos convertimos en el socio de inteligencia operativa que ayuda a tu equipo a extraer valor medible — del piloto al portafolio.",
    "cta.d1": "Profundidad tecnologica IoT global + ejecucion minera local",
    "cta.d2": "Despliegue practico alineado a la realidad operativa — sin complejidad empresarial",
    "cta.d3": "Inicio rapido con piloto focalizado, ruta clara a escala regional",
    "cta.d4": "Una narrativa desde eventos de campo hasta decisiones gerenciales",
    "cta.op1": "Recuperar valor oculto de activos",
    "cta.op2": "Convertir horas ociosas en produccion",
    "cta.op3": "Convertir control de seguridad en confianza",
    "cta.card.tag": "Oportunidad estrategica",
    "cta.card.h": "Lanzar el primer piloto MinePulse",
    "cta.card.p": "Listos para iniciar en Peru con un piloto estrategico y escalar en operaciones mineras regionales.",
    "cta.m1n": "90 dias",
    "cta.m1l": "al primer caso probado en operacion",
    "cta.m2n": "1 piloto",
    "cta.m2l": "para abrir expansion regional",
    "cta.btn1": "Contactar por WhatsApp",
    "cta.footnote": "Powered by TEKTELIC · Hecho para mineria LATAM",
    "sources.h": "Base de evidencia usada en este deck",
    "sources.p": "Se revisaron paginas oficiales de gateways, sensores, red y mineria de TEKTELIC el 29 de abril de 2026.",
    "footer.left": "Teclado: flechas izquierda/derecha",
    "footer.right": "GoalPraxis FirstPresetantion V2"
  }
};

function applyLanguage() {
  const dict = i18n[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  if (langToggle) {
    langToggle.setAttribute("data-state", lang);
  }
}

function activateSlide(index) {
  const bounded = Math.max(0, Math.min(index, slides.length - 1));
  active = bounded;
  slides[bounded].scrollIntoView({ behavior: "smooth", block: "start" });
  const width = ((bounded + 1) / slides.length) * 100;
  progressBar.style.width = `${width}%`;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === bounded));
}

function currentSlideFromScroll() {
  const deckTop = deck.scrollTop;
  const heights = slides.map((s) => s.offsetTop);
  let closest = 0;
  for (let i = 0; i < heights.length; i += 1) {
    if (deckTop + 100 >= heights[i]) {
      closest = i;
    }
  }
  if (closest !== active) {
    active = closest;
    const width = ((active + 1) / slides.length) * 100;
    progressBar.style.width = `${width}%`;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === active));
  }
}

nextBtn?.addEventListener("click", () => activateSlide(active + 1));
prevBtn?.addEventListener("click", () => activateSlide(active - 1));

langToggle?.addEventListener("click", () => {
  lang = lang === "en" ? "es" : "en";
  applyLanguage();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    event.preventDefault();
    activateSlide(active + 1);
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    activateSlide(active - 1);
  }
});

fsBtn?.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
});

deck.addEventListener("scroll", currentSlideFromScroll, { passive: true });

const counters = document.querySelectorAll(".num[data-target]");
const seen = new Set();
const gauges = document.querySelectorAll(".savings-gauge[data-gauge-target]");
const gaugesSeen = new Set();

function animateCounter(el) {
  const target = Number(el.getAttribute("data-target"));
  const duration = 1000;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const val = Math.round(progress * target);
    el.textContent = String(val);
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function animateGauge(el) {
  const target = Number(el.getAttribute("data-gauge-target"));
  const valueEl = el.querySelector("[data-gauge-value]");
  const duration = 2600;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const current = target * progress;
    el.style.setProperty("--gauge", current.toFixed(2));
    if (valueEl) {
      valueEl.textContent = `${Math.round(current)}%`;
    }
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !seen.has(entry.target)) {
      seen.add(entry.target);
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.7, root: deck });

counters.forEach((counter) => io.observe(counter));

const gaugeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !gaugesSeen.has(entry.target)) {
      gaugesSeen.add(entry.target);
      animateGauge(entry.target);
    }
  });
}, { threshold: 0.65, root: deck });

gauges.forEach((gauge) => gaugeObserver.observe(gauge));

applyLanguage();
activateSlide(0);
