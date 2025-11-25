// --- BASE DE DATOS SIMULADA ---
const offersData = {
    'analista': {
        title: "Analista Funcional",
        location: "Madrid (Híbrido)",
        candidates: [
            {
                id: 101,
                name: "Carlos Méndez",
                role: "Analista Funcional Senior",
                info: "Madrid | 4 Años Exp",
                initials: "CM",
                matchScore: 95,
                status: 'pending', 
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Carlos",
                    lastname: "Méndez",
                    email: "carlos.mendez@mail.com",
                    phone: "+34 612 34 56 78",
                    linkedin: "linkedin.com/in/cmendez",
                    country: "España",
                    city: "Madrid",
                    gender: "Masculino",
                    birthdate: "12/05/1985",
                    cvLink: "cv_carlos.pdf"
                },
                summary: "<strong>Candidato Ideal.</strong> Cumple con el perfil Senior solicitado. La IA destaca su experiencia específica en <strong>Sector AGRO (Gestión de PAC)</strong> y proyectos para la <strong>Administración Pública</strong>.",
                strengths: ["Exp. en Admin. Pública y PAC (AGRO)", "Certificación Product Owner (PSPO I)", "Conocimiento diseño BBDD"],
                gaps: ["Nivel de Inglés: B1 (Oferta valora B2)", "No especifica disponibilidad para viajes"],
                questions: [
                    { text: "¿Podrías detallar tu rol en la definición de requisitos para la gestión de la PAC?", reason: "Validar Experiencia Valorable (AGRO)" },
                    { text: "La oferta requiere movilidad puntual a oficinas de cliente. ¿Tienes disponibilidad?", reason: "Validar Requisito Logístico" },
                    { text: "No mencionas herramientas de modelado. ¿Has trabajado con BPMN o UML para diagramar procesos?", reason: "Indagar Hard Skill no mencionado" },
                    { text: "¿Has utilizado herramientas como Jira o Confluence para la gestión documental?", reason: "Validar Herramientas Comunes" }
                ]
            },
            {
                id: 102,
                name: "Lucía Prieto",
                role: "Product Owner / Analista",
                info: "Remoto | 3 Años Exp",
                initials: "LP",
                matchScore: 78,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Lucía",
                    lastname: "Prieto",
                    email: "lucia.prieto@mail.com",
                    phone: "+34 655 11 22 33",
                    linkedin: "linkedin.com/in/lprieto",
                    country: "España",
                    city: "Valencia (Remoto)",
                    gender: "Femenino",
                    birthdate: "23/08/1992",
                    cvLink: "cv_lucia.pdf"
                },
                summary: "<strong>Perfil sólido en Gestión.</strong> Muy fuerte en metodologías Ágiles y toma de requisitos.",
                strengths: ["Experiencia sólida como Product Owner", "Inglés C1", "Experiencia en Banca"],
                gaps: ["Falta experiencia específica en Sector AGRO", "Perfil técnico menos profundo"],
                questions: [
                    { text: "Tu experiencia es muy de gestión. ¿Te sientes cómoda bajando al detalle técnico de las BBDD?", reason: "Validar Perfil Técnico" },
                    { text: "¿Estarías dispuesta a trabajar en un modelo híbrido estricto en Madrid?", reason: "Validar Ubicación" },
                    { text: "¿Has realizado pruebas de API con herramientas como Postman o Swagger?", reason: "Indagar Skill Técnico Oculto" },
                    { text: "En Banca la documentación es crítica. ¿Cómo gestionas el versionado de requisitos funcionales?", reason: "Validar Metodología" }
                ]
            },
            {
                id: 103,
                name: "Miguel Ángel R.",
                role: "Desarrollador Java Senior",
                info: "Madrid | 6 Años Exp",
                initials: "MR",
                matchScore: 60,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Miguel Ángel",
                    lastname: "Ramírez",
                    email: "m.angel.dev@mail.com",
                    phone: "+34 600 99 88 77",
                    linkedin: "linkedin.com/in/miguelangelr",
                    country: "España",
                    city: "Madrid",
                    gender: "Masculino",
                    birthdate: "10/01/1988",
                    cvLink: "cv_miguel.pdf"
                },
                summary: "<strong>Perfil Técnico intentando pivotar.</strong> Es un desarrollador excelente que quiere pasar a Analista.",
                strengths: ["Conocimiento técnico profundo (Java)", "Arquitecturas web complejas"],
                gaps: ["Sin experiencia previa como Analista", "Sin experiencia en toma de requisitos"],
                questions: [
                    { text: "¿Qué te motiva a dejar el desarrollo para pasar al análisis funcional?", reason: "Validar Motivación" },
                    { text: "¿Has tenido experiencia directa gestionando expectativas de clientes difíciles?", reason: "Validar Soft Skills" },
                    { text: "¿Podrías mostrarnos algún documento funcional o Historia de Usuario que hayas redactado en el pasado?", reason: "Validar Capacidad de Redacción" },
                    { text: "Como ex-desarrollador, ¿cómo evitarás la tentación de decir 'cómo' hacerlo en lugar de 'qué' se necesita?", reason: "Validar Cambio de Rol" }
                ]
            },
            {
                id: 104,
                name: "Ana Ruiz",
                role: "Analista Junior",
                info: "Toledo | 1 Año Exp",
                initials: "AR",
                matchScore: 45,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Ana",
                    lastname: "Ruiz",
                    email: "ana.ruiz.jun@mail.com",
                    phone: "+34 611 22 33 44",
                    linkedin: "linkedin.com/in/anaruiz",
                    country: "España",
                    city: "Toledo",
                    gender: "Femenino",
                    birthdate: "15/11/1998",
                    cvLink: "cv_ana.pdf"
                },
                summary: "<strong>Candidato Junior.</strong> Muestra gran potencial y actitud proactiva, pero no alcanza los 2 años mínimos.",
                strengths: ["Certificación Scrum Master reciente", "Inglés B2 certificado"],
                gaps: ["Experiencia insuficiente (< 2 años)", "Residencia fuera de Madrid"],
                questions: [
                    { text: "¿Estarías dispuesta a desplazarte diariamente a Madrid?", reason: "Validar Logística" },
                    { text: "Al tener poca experiencia, ¿qué conocimientos tienes de consultas SQL (Joins, Group By)?", reason: "Validar Nivel Técnico Base" },
                    { text: "¿Cómo gestionarías un conflicto de intereses entre dos departamentos al tomar requisitos?", reason: "Validar Madurez Profesional" }
                ]
            },
            {
                id: 105,
                name: "Javier Ortega",
                role: "Consultor IT Senior",
                info: "Madrid | 7 Años Exp",
                initials: "JO",
                matchScore: 88,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Javier",
                    lastname: "Ortega",
                    email: "j.ortega.consulting@mail.com",
                    phone: "+34 699 12 34 56",
                    linkedin: "linkedin.com/in/jortega-it",
                    country: "España",
                    city: "Madrid",
                    gender: "Masculino",
                    birthdate: "05/09/1987",
                    cvLink: "cv_javier.pdf"
                },
                summary: "<strong>Perfil Consultoría (Big4).</strong> Javier aporta una metodología de trabajo impecable proveniente de grandes consultoras.",
                strengths: ["Alta capacidad de interlocución con cliente", "Experiencia en grandes proyectos de transformación", "Inglés C1 Negocios"],
                gaps: ["Lleva 3 años sin tocar SQL directamente", "Expectativa salarial en el límite superior"],
                questions: [
                    { text: "Vienes de una Big4. ¿Cómo te adaptarías a un equipo de producto más pequeño?", reason: "Validar Fit Cultural" },
                    { text: "¿Estás dispuesto a retomar tareas técnicas como el diseño de BBDD?", reason: "Validar Hands-on" },
                    { text: "En tu CV no detallas herramientas de ticketing. ¿Has configurado flujos de trabajo en Jira?", reason: "Indagar Skill Operativo" },
                    { text: "¿Has trabajado con metodologías Waterfall o solo Agile?", reason: "Validar Versatilidad" }
                ]
            }
        ]
    },
    'soporte': {
        title: "Técnico/a Soporte IT",
        location: "Oviedo",
        candidates: [
            {
                id: 201,
                name: "David Fernández",
                role: "Operador de Sistemas",
                info: "Oviedo | 3 Años Exp",
                initials: "DF",
                matchScore: 92,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "David",
                    lastname: "Fernández",
                    email: "david.fdez@mail.com",
                    phone: "+34 699 88 77 66",
                    linkedin: "linkedin.com/in/davidf",
                    country: "España",
                    city: "Oviedo",
                    gender: "Masculino",
                    birthdate: "02/03/1990",
                    cvLink: "cv_david.pdf"
                },
                summary: "<strong>Ajuste Perfecto.</strong> David vive en Oviedo, tiene experiencia previa trabajando a turnos 24x7.",
                strengths: ["Experiencia en turnos 24x7", "Manejo de ServiceNow", "Residente en Oviedo"],
                gaps: ["Nivel de inglés A2", "Experiencia en Mainframe básica"],
                questions: [
                    { text: "Descríbeme tu experiencia monitorizando entornos Mainframe.", reason: "Validar Técnica" },
                    { text: "La oferta requiere inglés B2 para comunicaciones puntuales. ¿Podrías mantener una conversación técnica básica?", reason: "Validar Requisito Idioma" },
                    { text: "¿Has utilizado algún lenguaje de scripting (Bash, PowerShell) para automatizar tareas repetitivas?", reason: "Indagar Skill de Automatización" },
                    { text: "¿Conoces herramientas de virtualización como VMware o Hyper-V a nivel usuario?", reason: "Indagar Skill Extra" }
                ]
            },
            {
                id: 202,
                name: "Sara García",
                role: "Helpdesk L1",
                info: "Gijón | 2 Años Exp",
                initials: "SG",
                matchScore: 75,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Sara",
                    lastname: "García",
                    email: "sara.garcia95@mail.com",
                    phone: "+34 666 12 43 11",
                    linkedin: "linkedin.com/in/ssaaraaa",
                    country: "España",
                    city: "Gijón",
                    gender: "Femenino",
                    birthdate: "12/04/1995",
                    cvLink: "cv_sara.pdf"
                },
                summary: "<strong>Perfil Competente.</strong> Tiene buena base en soporte usuario y gestión de tickets.",
                strengths: ["Gestión de usuarios y Directorio Activo", "Vehículo propio"],
                gaps: ["Falta experiencia en Monitorización Servidores", "Nunca ha trabajado a turnos"],
                questions: [
                    { text: "El puesto implica turnos rotativos. ¿Es un inconveniente?", reason: "Validar Disponibilidad" },
                    { text: "¿Has administrado cuentas de Office 365 o Google Workspace?", reason: "Indagar Skill Cloud Básico" },
                    { text: "¿Cómo priorizas cuando entran 3 incidencias críticas a la vez?", reason: "Validar Gestión del Estrés" }
                ]
            },
            {
                id: 203,
                name: "Jorge P.",
                role: "Administrador Junior Linux",
                info: "Oviedo | 1 Año Exp",
                initials: "JP",
                matchScore: 50,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Jorge",
                    lastname: "Pérez",
                    email: "jorge.perez@mail.com",
                    phone: "+34 611 22 33 44",
                    linkedin: "linkedin.com/in/jperez",
                    country: "España",
                    city: "Oviedo",
                    gender: "Masculino",
                    birthdate: "20/02/1999",
                    cvLink: "cv_jorge.pdf"
                },
                summary: "<strong>Riesgo Logístico.</strong> Técnicamente interesante (Linux/Scripting) pero <strong>no indica tener carnet de conducir</strong>.",
                strengths: ["Conocimientos avanzados de Linux/Unix", "Inglés C1"],
                gaps: ["CRÍTICO: No menciona Carnet/Vehículo", "Sin experiencia en Mainframe"],
                questions: [
                    { text: "¿Cuentas con vehículo propio para desplazarte al centro de datos?", reason: "Validar Requisito Excluyente" },
                    { text: "Si un servidor Linux pierde conectividad, ¿qué comandos usarías para diagnosticarlo?", reason: "Validar Skill Técnico Real" },
                    { text: "¿Has trabajado con herramientas de backup?", reason: "Indagar Skill Operativo" }
                ]
            },
            {
                id: 204,
                name: "María L.",
                role: "Desarrolladora Web",
                info: "Avilés | 6 Meses Exp",
                initials: "ML",
                matchScore: 20,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "María",
                    lastname: "López",
                    email: "maria.lopez.web@mail.com",
                    phone: "+34 655 66 77 88",
                    linkedin: "linkedin.com/in/marial-dev",
                    country: "España",
                    city: "Avilés",
                    gender: "Femenino",
                    birthdate: "14/06/2000",
                    cvLink: "cv_maria.pdf"
                },
                summary: "<strong>Descarte Recomendado.</strong> Perfil de Desarrollo Web aplicando a Sistemas/Infraestructuras.",
                strengths: ["Formación TIC (DAW)"],
                gaps: ["Perfil de Desarrollo, no de Sistemas", "Sin experiencia en monitorización"],
                questions: [
                    { text: "¿Por qué aplicas a Operación de Sistemas siendo perfil Web?", reason: "Validar Interés" },
                    { text: "Al venir de desarrollo web, ¿tienes experiencia configurando servidores Apache o Nginx?", reason: "Buscar Punto de Encuentro" }
                ]
            },
            {
                id: 205,
                name: "Marta Otero",
                role: "Técnico de Sistemas / Campo",
                info: "Oviedo | 4 Años Exp",
                initials: "MO",
                matchScore: 89,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Marta",
                    lastname: "Otero",
                    email: "marta.otero@mail.com",
                    phone: "+34 612 98 76 54",
                    linkedin: "linkedin.com/in/martaotero-sys",
                    country: "España",
                    city: "Oviedo",
                    gender: "Femenino",
                    birthdate: "30/11/1989",
                    cvLink: "cv_marta.pdf"
                },
                summary: "<strong>Perfil Todoterreno.</strong> Marta combina experiencia en CAU con intervenciones físicas en CPD (rackeado, cableado).",
                strengths: ["Experiencia física en CPD y Hardware", "Certificación Azure Fundamentals", "Carnet y Coche propio", "Inglés B2 real"],
                gaps: ["Menos experiencia en herramientas de ticketing enterprise (BMC)", "Acostumbrada a horario oficina, no turnos"],
                questions: [
                    { text: "¿Tienes disponibilidad para realizar guardias localizadas los fines de semana?", reason: "Validar Disponibilidad" },
                    { text: "Cuéntanos tu experiencia resolviendo incidencias críticas de red in-situ.", reason: "Validar Resolución Problemas" },
                    { text: "En tu perfil veo mucho Windows, ¿qué tal te defiendes con la línea de comandos de Linux?", reason: "Indagar Hard Skill no confirmado" },
                    { text: "Has trabajado con Azure. ¿Tienes experiencia monitorizando recursos cloud con Azure Monitor?", reason: "Validar Skill Cloud Práctico" }
                ]
            }
        ]
    },
    'data': {
        title: "Data Scientist",
        location: "Oviedo (Híbrido)",
        candidates: [
             {
                id: 301,
                name: "Elena Mayor",
                role: "Data Scientist",
                info: "Oviedo | 4 Años Exp",
                initials: "EM",
                matchScore: 98,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Elena",
                    lastname: "Mayor",
                    email: "elena.mayor@mail.com",
                    phone: "+34 622 33 44 55",
                    linkedin: "linkedin.com/in/emayor",
                    country: "España",
                    city: "Oviedo",
                    gender: "Femenino",
                    birthdate: "14/07/1991",
                    cvLink: "cv_elena.pdf"
                },
                summary: "<strong>Candidato Top Performer.</strong> Máster en Estadística y 4 años de experiencia directa.",
                strengths: ["Máster en Estadística", "Python, R, SQL, AWS", "Residencia en Oviedo"],
                gaps: ["Ninguno significativo"],
                questions: [
                    { text: "Cuéntanos sobre el modelo de ML más complejo que hayas puesto en producción.", reason: "Profundizar" },
                    { text: "Veo experiencia en AWS. ¿Has trabajado con despliegues de modelos usando Docker o Kubernetes?", reason: "Indagar Skill MLOps" },
                    { text: "¿Has trabajado con pipelines de Big Data (Spark/Hadoop)?", reason: "Indagar Skill no mencionado" },
                    { text: "¿Cómo monitorizas el 'data drift' de tus modelos en producción?", reason: "Validar Experiencia Senior" }
                ]
            },
            {
                id: 302,
                name: "Pablo S.",
                role: "Data Analyst",
                info: "Vigo | 3 Años Exp",
                initials: "PS",
                matchScore: 70,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Pablo",
                    lastname: "Suárez",
                    email: "pablo.suarez@mail.com",
                    phone: "+34 633 44 55 66",
                    linkedin: "linkedin.com/in/psuarez-data",
                    country: "España",
                    city: "Vigo",
                    gender: "Masculino",
                    birthdate: "05/05/1993",
                    cvLink: "cv_pablo.pdf"
                },
                summary: "<strong>Perfil Analista fuerte.</strong> Experto en SQL y PowerBI, ideal para reporte, pero limitado en ML/Python profundo.",
                strengths: ["Experto en SQL y PowerBI", "Comunicación y Negocio"],
                gaps: ["Falta profundidad en TensorFlow", "Poca experiencia Cloud"],
                questions: [
                    { text: "¿Qué experiencia tienes creando modelos predictivos desde cero?", reason: "Validar Competencia Core" },
                    { text: "Más allá de la visualización, ¿tienes conocimientos de estadística para realizar test A/B?", reason: "Indagar Base Teórica" },
                    { text: "¿Estarías dispuesto a formarte intensivamente en AWS Sagemaker?", reason: "Validar Interés de Aprendizaje" }
                ]
            },
            {
                id: 303,
                name: "Clara D.",
                role: "Investigadora Académica",
                info: "Madrid | PhD",
                initials: "CD",
                matchScore: 65,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Clara",
                    lastname: "Díaz",
                    email: "clara.diaz@mail.com",
                    phone: "+34 644 55 66 77",
                    linkedin: "linkedin.com/in/claradiaz-phd",
                    country: "España",
                    city: "Madrid",
                    gender: "Femenino",
                    birthdate: "20/09/1988",
                    cvLink: "cv_clara.pdf"
                },
                summary: "<strong>Perfil Académico.</strong> Doctora en Matemáticas con base teórica excelente pero nula experiencia corporativa.",
                strengths: ["PhD Matemáticas", "R y Python académico"],
                gaps: ["Sin experiencia en empresa", "Residencia en Madrid (Oferta Oviedo)"],
                questions: [
                    { text: "¿Estarías dispuesta a mudarte a Asturias?", reason: "Validar Ubicación" },
                    { text: "¿Has trabajado alguna vez con control de versiones (Git) en equipos?", reason: "Validar Flujo de Trabajo" },
                    { text: "¿Cómo explicarías un algoritmo complejo a un responsable de negocio sin perfil técnico?", reason: "Validar Comunicación" }
                ]
            },
            {
                id: 304,
                name: "Roberto G.",
                role: "Ingeniero Informático",
                info: "Oviedo | Recién Graduado",
                initials: "RG",
                matchScore: 40,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Roberto",
                    lastname: "Gómez",
                    email: "roberto.gomez@mail.com",
                    phone: "+34 655 66 77 88",
                    linkedin: "linkedin.com/in/rgomez-dev",
                    country: "España",
                    city: "Oviedo",
                    gender: "Masculino",
                    birthdate: "10/02/2001",
                    cvLink: "cv_roberto.pdf"
                },
                summary: "<strong>Perfil Junior.</strong> Recién graduado con bases teóricas pero falta rodaje profesional.",
                strengths: ["Grado Ing. Informática", "Residencia en Oviedo"],
                gaps: ["Experiencia insuficiente", "Portfolio escaso"],
                questions: [
                    { text: "¿Tienes algún portfolio personal?", reason: "Validar Capacidad" },
                    { text: "¿Qué conocimientos tienes de computación en la nube (IaaS, PaaS)?", reason: "Indagar Conocimientos Base" }
                ]
            },
            {
                id: 305,
                name: "Sara Rodríguez Cabo",
                role: "Researcher / Data Scientist",
                info: "Oviedo | PhD & Master",
                initials: "SR",
                matchScore: 96,
                status: 'pending',
                interviewRating: null,
                interviewNotes: "",
                contact: {
                    firstname: "Sara",
                    lastname: "Rodríguez Cabo",
                    email: "sara24698@gmail.com",
                    phone: "622 18 99 64",
                    linkedin: "linkedin.com/in/sara-rodriguez-cabo",
                    country: "España",
                    city: "Oviedo",
                    gender: "Femenino",
                    birthdate: "24/06/1998",
                    cvLink: "cv_sara_rodriguez.pdf"
                },
                summary: "<strong>Perfil de Excelencia Investigadora.</strong> Sara es Doctora en Ciencias Espaciales con doble grado en Física y Matemáticas. Su perfil técnico es sobresaliente.",
                strengths: [
                    "Doctorado y Doble Grado (Física/Mates)",
                    "Exp. Internacional (Univ. Tokyo) y Grandes Proyectos (Hyper-K)",
                    "Stack Avanzado: Python, TensorFlow, CUDA, SQL",
                    "Inglés C1 (Advanced) y Soft Skills de comunicación"
                ],
                gaps: [
                    "Trayectoria puramente académica/investigadora",
                    "Adaptación de ritmos de investigación a negocio"
                ],
                questions: [
                    { text: "Tu experiencia es impresionante en investigación. ¿Por qué buscas dar el salto al sector corporativo ahora?", reason: "Validar Motivación y Cambio de Mindset" },
                    { text: "Cuéntanos sobre tu proyecto de emprendimiento en TalentUO Lab.", reason: "Validar Soft Skills / Visión de Negocio" },
                    { text: "Has trabajado con volúmenes de datos astronómicos. ¿Qué experiencia tienes con herramientas de streaming como Kafka?", reason: "Indagar Hard Skill no mencionado" },
                    { text: "¿Cómo aseguras que tus modelos de Deep Learning no tengan sesgos al entrenarlos?", reason: "Validar Ética IA" }
                ]
            }
        ]
    }
};

// --- ESTADO GLOBAL ---
let currentOfferKey = '';
let currentTab = 'candidates'; 

// --- FUNCIONES DE NAVEGACIÓN ---

function showOffers() {
    document.getElementById('view-offers').classList.remove('hidden');
    document.getElementById('view-dashboard').classList.add('hidden');
    document.getElementById('breadcrumb-text').innerHTML = 'Ofertas Activas';
}

function showDashboard(offerKey) {
    currentOfferKey = offerKey;
    currentTab = 'candidates';
    const offer = offersData[offerKey];
    
    if (!offer) return;
    document.getElementById('view-offers').classList.add('hidden');
    document.getElementById('view-dashboard').classList.remove('hidden');
    switchTab('candidates');
}

function switchTab(tabName) {
    currentTab = tabName;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${tabName}`).classList.add('active');
    renderCandidateList();
    updateBreadcrumb();
}

function updateBreadcrumb() {
    const offer = offersData[currentOfferKey];
    const subTitle = currentTab === 'candidates' ? 'Candidaturas' : 'Proceso de Selección';
    const breadcrumbHtml = `Ofertas Activas > ${offer.title} > <span>${subTitle}</span>`;
    document.getElementById('breadcrumb-text').innerHTML = breadcrumbHtml;
}

function renderCandidateList() {
    const offer = offersData[currentOfferKey];
    const listContainer = document.getElementById('candidate-list-container');
    listContainer.innerHTML = ''; 
    
    let filteredList = [];
    
    if (currentTab === 'candidates') {
        // Filtramos
        let pending = offer.candidates.filter(c => c.status === 'pending');
        let discarded = offer.candidates.filter(c => c.status === 'discarded');

        // --- ORDENACIÓN: MAYOR A MENOR MATCH ---
        pending.sort((a, b) => b.matchScore - a.matchScore);
        discarded.sort((a, b) => b.matchScore - a.matchScore);

        // Concatenamos: Primero pendientes ordenados, luego descartados ordenados al final
        filteredList = [...pending, ...discarded];
        document.getElementById('list-title').textContent = `Candidaturas (${filteredList.length})`;

    } else {
        // Filtramos 'selected' (En Proceso)
        let selected = offer.candidates.filter(c => c.status === 'selected');
        
        // --- ORDENACIÓN: MAYOR A MENOR MATCH ---
        selected.sort((a, b) => b.matchScore - a.matchScore);

        filteredList = selected;
        document.getElementById('list-title').textContent = `En Proceso (${filteredList.length})`;
    }

    document.getElementById('list-subtitle').textContent = `Oferta: ${offer.title}`;

    if (filteredList.length === 0) {
        listContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: #888;">No hay perfiles en esta fase.</div>';
        document.querySelector('.candidate-detail').style.visibility = 'hidden';
        return;
    } else {
        document.querySelector('.candidate-detail').style.visibility = 'visible';
    }

    filteredList.forEach(cand => {
        let badgeClass = 'match-low';
        if (cand.matchScore >= 90) badgeClass = 'match-90';
        else if (cand.matchScore >= 60) badgeClass = 'match-70';
        else badgeClass = 'match-30';

        const isDiscarded = cand.status === 'discarded';
        const cardClass = isDiscarded ? 'candidate-card card-discarded' : 'candidate-card';
        const nameSuffix = isDiscarded ? ' <span style="font-size:0.7em; color:var(--danger); font-weight:800; text-transform:uppercase;">(Descartado)</span>' : '';

        const cardHtml = `
            <article class="${cardClass}" id="card-${cand.id}" onclick="loadCandidate(${cand.id})">
                <div class="card-header-row">
                    <span class="c-name">${cand.name} ${nameSuffix}</span>
                    <span class="match-badge ${badgeClass}">${cand.matchScore}%</span>
                </div>
                <div class="c-role">${cand.role}</div>
                <div class="skill-tags">
                     <span class="tag">${cand.info.split('|')[0].trim()}</span>
                </div>
            </article>
        `;
        listContainer.innerHTML += cardHtml;
    });

    // Cargar automáticamente al primero si no hay selección manual previa (o siempre el primero al cambiar tab)
    if(filteredList.length > 0) loadCandidate(filteredList[0].id);
}

// --- LÓGICA DE CARGA DE CANDIDATO Y DETALLE ---

function loadCandidate(id) {
    const candidates = offersData[currentOfferKey].candidates;
    const data = candidates.find(c => c.id === id);
    if (!data) return;

    // Resaltar en lista
    document.querySelectorAll('.candidate-card').forEach(card => card.classList.remove('active'));
    const activeCard = document.getElementById(`card-${id}`);
    if(activeCard) activeCard.classList.add('active');

    // Cabecera Básica
    document.getElementById('d-initials').textContent = data.initials;
    document.getElementById('d-name').textContent = data.name;
    document.getElementById('d-info').innerHTML = `
        <i class="fa-solid fa-user-tie"></i> ${data.role} &nbsp;|&nbsp; 
        <i class="fa-solid fa-location-dot"></i> ${data.info}
    `;
    
    // INFORMACIÓN DE CONTACTO
    const contactHtml = `
        <div class="contact-section">
            <h5 class="section-subtitle"><i class="fa-solid fa-address-card"></i> Información de Contacto</h5>
            <div class="contact-grid">
                <div class="c-item"><label>Nombre</label><span>${data.contact.firstname}</span></div>
                <div class="c-item"><label>Apellidos</label><span>${data.contact.lastname}</span></div>
                <div class="c-item"><label>Email</label><span>${data.contact.email}</span></div>
                <div class="c-item"><label>Teléfono</label><span><img src="https://flagcdn.com/w20/es.png" width="15"> ${data.contact.phone}</span></div>
                <div class="c-item"><label>LinkedIn</label><a href="#" style="color:var(--color-brand)">${data.contact.linkedin}</a></div>
                <div class="c-item"><label>País</label><span>${data.contact.country}</span></div>
                <div class="c-item"><label>Ciudad</label><span>${data.contact.city}</span></div>
                <div class="c-item"><label>Sexo</label><span>${data.contact.gender}</span></div>
                <div class="c-item"><label>Fecha Nac.</label><span>${data.contact.birthdate}</span></div>
            </div>
        </div>
    `;
    const contactContainer = document.getElementById('d-contact-container');
    if(contactContainer) contactContainer.innerHTML = contactHtml;

    // Score Ring y Rating
    const ring = document.getElementById('d-ring');
    document.getElementById('d-score').textContent = data.matchScore;
    
    let color = '#dc3545';
    if(data.matchScore >= 90) color = '#28a745';
    else if(data.matchScore >= 60) color = '#d98a00';
    ring.style.borderColor = color;
    document.getElementById('d-score').style.color = color;

    // Rating
    const ratingContainer = document.getElementById('d-rating-faces');
    if (data.status === 'selected') {
        ratingContainer.classList.remove('hidden');
        ratingContainer.innerHTML = generateRatingHTML(data.id, data.interviewRating);
    } else {
        ratingContainer.classList.add('hidden');
    }

    // Datos IA
    document.getElementById('d-summary').innerHTML = data.summary;
    const strList = document.getElementById('d-strengths');
    strList.innerHTML = '';
    data.strengths.forEach(s => strList.innerHTML += `<li><i class="fa-solid fa-check" style="color: var(--success);"></i> ${s}</li>`);
    
    const gapList = document.getElementById('d-gaps');
    gapList.innerHTML = '';
    if(data.gaps.length > 0) data.gaps.forEach(g => gapList.innerHTML += `<li><i class="fa-solid fa-circle-exclamation" style="color: var(--warning);"></i> ${g}</li>`);
    else gapList.innerHTML = `<li style="color:var(--cc-text-light)"><i>No se detectaron gaps críticos.</i></li>`;

    // Renderizado condicional según estado
    const actionsContainer = document.getElementById('d-actions');
    const questionsContainer = document.getElementById('ai-questions-section'); 
    const interviewContainer = document.getElementById('rh-interview-section'); 

    actionsContainer.innerHTML = ''; 

    if (data.status === 'pending') {
        // VISTA CANDIDATURA
        questionsContainer.classList.remove('hidden');
        interviewContainer.classList.add('hidden');

        const qList = document.getElementById('d-questions');
        qList.innerHTML = '';
        data.questions.forEach(q => {
            qList.innerHTML += `
                <div class="question-card">
                    <div class="q-text">"${q.text}"</div>
                    <div class="q-reason">MOTIVO: ${q.reason}</div>
                </div>`;
        });

        actionsContainer.innerHTML = `
            <button class="btn btn-primary" onclick="changeStatus(${data.id}, 'selected')">
                <i class="fa-solid fa-check"></i> Convocar a Entrevista
            </button>
            <button class="btn btn-secondary" onclick="changeStatus(${data.id}, 'discarded')" style="color: var(--danger); border-color: var(--danger);">
                <i class="fa-solid fa-xmark"></i> Descartar
            </button>
        `;

    } else if (data.status === 'selected') {
        // VISTA ENTREVISTA RH
        questionsContainer.classList.add('hidden');
        interviewContainer.classList.remove('hidden');

        document.getElementById('interview-notes-area').value = data.interviewNotes || "";
        document.getElementById('interview-notes-area').oninput = function(e) {
            saveNotes(data.id, e.target.value);
        };

        actionsContainer.innerHTML = `
            <div style="width:100%; display:flex; gap:10px;">
                <button class="btn btn-primary" style="background-color: var(--color-brand-dark);" onclick="changeStatus(${data.id}, 'technical')">
                    <i class="fa-solid fa-laptop-code"></i> Pasar a Ev. Técnica
                </button>
                <button class="btn btn-secondary" onclick="changeStatus(${data.id}, 'discarded')" style="color: var(--danger); border-color: var(--danger);">
                    <i class="fa-solid fa-xmark"></i> Descartar Definitivamente
                </button>
            </div>
            <div style="margin-top:10px; width:100%; text-align:center;">
                <small style="color:#888;">El perfil pasará al panel del equipo técnico.</small>
            </div>
        `;

    } else if (data.status === 'discarded') {
        questionsContainer.classList.add('hidden');
        interviewContainer.classList.add('hidden');
        
        actionsContainer.innerHTML = `
            <div style="width:100%; margin-bottom:10px; color: var(--danger); font-weight:700;">
                <i class="fa-solid fa-trash-can"></i> Candidato Descartado.
            </div>
            <button class="btn btn-secondary" onclick="changeStatus(${data.id}, 'pending')">
                <i class="fa-solid fa-arrow-rotate-left"></i> Recuperar Candidatura
            </button>
        `;
    } else if (data.status === 'technical') {
        actionsContainer.innerHTML = `<div>En Evaluación Técnica</div>`;
    }
}

// --- UTILIDADES ---

function changeStatus(id, newStatus) {
    const candidate = offersData[currentOfferKey].candidates.find(c => c.id === id);
    if (candidate) {
        candidate.status = newStatus;
        if (newStatus === 'selected') {
            switchTab('process');
        } else if (newStatus === 'technical') {
            alert(`El candidato ${candidate.name} ha sido enviado al equipo de Evaluación Técnica.`);
            renderCandidateList(); 
        } else {
            renderCandidateList();
        }
    }
}

function saveNotes(id, notes) {
    const candidate = offersData[currentOfferKey].candidates.find(c => c.id === id);
    if(candidate) candidate.interviewNotes = notes;
}

function setRating(id, rating) {
    const candidate = offersData[currentOfferKey].candidates.find(c => c.id === id);
    if(candidate) {
        candidate.interviewRating = rating;
        document.getElementById('d-rating-faces').innerHTML = generateRatingHTML(id, rating);
    }
}

function generateRatingHTML(id, currentRating) {
    const opacitySad = currentRating === 1 ? '1' : '0.3';
    const opacityMeh = currentRating === 2 ? '1' : '0.3';
    const opacityHappy = currentRating === 3 ? '1' : '0.3';
    
    const scaleSad = currentRating === 1 ? 'scale(1.2)' : 'scale(1)';
    const scaleMeh = currentRating === 2 ? 'scale(1.2)' : 'scale(1)';
    const scaleHappy = currentRating === 3 ? 'scale(1.2)' : 'scale(1)';

    return `
        <div class="rating-wrapper">
            <i class="fa-solid fa-face-frown" 
               style="color: #dc3545; opacity: ${opacitySad}; transform: ${scaleSad};" 
               onclick="setRating(${id}, 1)" title="No apto"></i>
            <i class="fa-solid fa-face-meh" 
               style="color: #ffc107; opacity: ${opacityMeh}; transform: ${scaleMeh};" 
               onclick="setRating(${id}, 2)" title="Dudoso"></i>
            <i class="fa-solid fa-face-smile" 
               style="color: #28a745; opacity: ${opacityHappy}; transform: ${scaleHappy};" 
               onclick="setRating(${id}, 3)" title="Apto"></i>
        </div>
    `;
}