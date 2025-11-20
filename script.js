// --- BASE DE DATOS SIMULADA (Estructura por Oferta) ---
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
                summary: "<strong>Candidato Ideal.</strong> Cumple con el perfil Senior solicitado. La IA destaca su experiencia específica en <strong>Sector AGRO (Gestión de PAC)</strong> y proyectos para la <strong>Administración Pública</strong>, dos de los puntos más valorados en la oferta.",
                strengths: [
                    "Exp. en Admin. Pública y PAC (AGRO)",
                    "Certificación Product Owner (PSPO I)",
                    "Conocimiento diseño BBDD (SQL/NoSQL)",
                    "Residente en Madrid (Disponibilidad inmediata)"
                ],
                gaps: [
                    "Nivel de Inglés: B1 (Oferta valora B2)",
                    "No especifica disponibilidad para viajes puntuales"
                ],
                questions: [
                    { text: "¿Podrías detallar tu rol en la definición de requisitos para la gestión de la PAC?", reason: "Validar Experiencia Valorable (AGRO)" },
                    { text: "La oferta requiere movilidad puntual a oficinas de cliente. ¿Tienes disponibilidad?", reason: "Validar Requisito Logístico" }
                ]
            },
            {
                id: 102,
                name: "Lucía Prieto",
                role: "Product Owner / Analista",
                info: "Remoto | 3 Años Exp",
                initials: "LP",
                matchScore: 78,
                summary: "<strong>Perfil sólido en Gestión.</strong> Muy fuerte en metodologías Ágiles y toma de requisitos. Su perfil es más de gestión (Product Owner) que técnico puro. Aporta un nivel de inglés C1, superior al solicitado.",
                strengths: [
                    "Experiencia sólida como Product Owner",
                    "Inglés C1 (Superior al requerido)",
                    "Experiencia en Sector Banca (Alta complejidad)"
                ],
                gaps: [
                    "Falta experiencia específica en Sector AGRO",
                    "Perfil técnico (Diseño BBDD) menos profundo"
                ],
                questions: [
                    { text: "Tu experiencia es muy de gestión. ¿Te sientes cómoda bajando al detalle técnico de las BBDD?", reason: "Validar Perfil Técnico" },
                    { text: "¿Estarías dispuesta a trabajar en un modelo híbrido estricto en Madrid?", reason: "Validar Ubicación" }
                ]
            },
            {
                id: 103,
                name: "Miguel Ángel R.",
                role: "Desarrollador Java Senior",
                info: "Madrid | 6 Años Exp",
                initials: "MR",
                matchScore: 60,
                summary: "<strong>Perfil Técnico intentando pivotar.</strong> Es un desarrollador excelente que quiere pasar a Analista. Conoce la arquitectura web a la perfección, pero carece de experiencia formal redactando documentación funcional y tratando con clientes finales.",
                strengths: [
                    "Conocimiento técnico profundo (Java, Spring)",
                    "Entiende arquitecturas web complejas",
                    "Residencia en Madrid"
                ],
                gaps: [
                    "Sin experiencia previa como Analista Funcional",
                    "Sin experiencia en toma de requisitos de negocio"
                ],
                questions: [
                    { text: "¿Qué te motiva a dejar el desarrollo para pasar al análisis funcional?", reason: "Validar Motivación / Cambio de Rol" },
                    { text: "¿Has tenido experiencia directa gestionando expectativas de clientes difíciles?", reason: "Validar Soft Skills (Orientación Cliente)" }
                ]
            },
            {
                id: 104,
                name: "Ana Ruiz",
                role: "Analista Junior",
                info: "Toledo | 1 Año Exp",
                initials: "AR",
                matchScore: 45,
                summary: "<strong>Candidato Junior.</strong> Muestra gran potencial y actitud proactiva, pero no alcanza los 2 años mínimos requeridos para la posición de Analista autónomo. Recomendable para puesto de apoyo o plan de carrera junior.",
                strengths: [
                    "Certificación Scrum Master reciente",
                    "Inglés B2 certificado",
                    "Ganas de aprender"
                ],
                gaps: [
                    "Experiencia insuficiente (< 2 años)",
                    "Residencia fuera de Madrid (Toledo)",
                    "Falta profundidad en diseño funcional"
                ],
                questions: [
                    { text: "¿Estarías dispuesta a desplazarte diariamente a Madrid o mudarte?", reason: "Validar Logística" }
                ]
            }
        ]
    },
    'soporte': {
        title: "Técnico/a Soporte IT (Operations Bridge)",
        location: "Oviedo (Presencial)",
        candidates: [
            {
                id: 201,
                name: "David Fernández",
                role: "Operador de Sistemas",
                info: "Oviedo | 3 Años Exp",
                initials: "DF",
                matchScore: 92,
                summary: "<strong>Ajuste Perfecto.</strong> David vive en Oviedo, tiene experiencia previa trabajando a turnos 24x7 y conoce las herramientas de ticketing (ServiceNow). Su perfil técnico cubre Windows y Unix.",
                strengths: [
                    "Experiencia confirmada en turnos 24x7",
                    "Manejo de ServiceNow y Control-M",
                    "Residente en Oviedo (Disponibilidad inmediata)",
                    "Carnet y vehículo propio"
                ],
                gaps: [
                    "Nivel de inglés A2 (Oferta pide B2 puntual)",
                    "Experiencia en Mainframe básica"
                ],
                questions: [
                    { text: "La oferta requiere inglés B2 para comunicaciones puntuales. ¿Podrías mantener una conversación técnica básica?", reason: "Validar Requisito Idioma" },
                    { text: "Descríbeme tu experiencia monitorizando entornos Mainframe.", reason: "Validar Competencia Técnica Específica" }
                ]
            },
            {
                id: 202,
                name: "Sara García",
                role: "Helpdesk L1",
                info: "Gijón | 2 Años Exp",
                initials: "SG",
                matchScore: 75,
                summary: "<strong>Perfil Competente.</strong> Tiene buena base en soporte usuario y gestión de tickets. Sin embargo, su experiencia es más de microinformática que de operación de grandes sistemas (Mainframe/Unix).",
                strengths: [
                    "Gestión de usuarios y Directorio Activo",
                    "Acostumbrada a SLAs estrictos",
                    "Vehículo propio"
                ],
                gaps: [
                    "Falta experiencia en Monitorización de Servidores",
                    "Nunca ha trabajado a turnos nocturnos"
                ],
                questions: [
                    { text: "El puesto implica turnos rotativos 24x7 (noches y festivos). ¿Supone esto algún inconveniente para ti?", reason: "Validar Disponibilidad Crítica" }
                ]
            },
            {
                id: 203,
                name: "Jorge P.",
                role: "Administrador Junior Linux",
                info: "Oviedo | 1 Año Exp",
                initials: "JP",
                matchScore: 50,
                summary: "<strong>Riesgo Logístico Detectado.</strong> Técnicamente es un perfil muy interesante con conocimientos de Scripting y Unix superiores a la media. Sin embargo, <strong>no indica tener carnet de conducir</strong>, lo cual es un requisito excluyente marcado en la oferta para el acceso.",
                strengths: [
                    "Conocimientos avanzados de Linux/Unix",
                    "Inglés C1"
                ],
                gaps: [
                    "CRÍTICO: No menciona Carnet/Vehículo",
                    "Sin experiencia en Mainframe"
                ],
                questions: [
                    { text: "Para el acceso al puesto se requiere vehículo propio indispensable. ¿Cuentas con ello?", reason: "Validar Requisito Excluyente" }
                ]
            },
            {
                id: 204,
                name: "María L.",
                role: "Desarrolladora Web",
                info: "Avilés | 6 Meses Exp",
                initials: "ML",
                matchScore: 20,
                summary: "<strong>Descarte Recomendado.</strong> El perfil no se ajusta a la oferta. Es una desarrolladora web (HTML/CSS) aplicando a un puesto de Operación de Infraestructuras. No hay coincidencia de competencias.",
                strengths: [
                    "Formación TIC (DAW)"
                ],
                gaps: [
                    "Perfil de Desarrollo, no de Sistemas",
                    "Sin experiencia en monitorización",
                    "Intereses profesionales divergentes"
                ],
                questions: [
                    { text: "¿Por qué aplicas a un puesto de Operación de Sistemas siendo tu perfil de Desarrollo Web?", reason: "Validar Interés Real" }
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
                summary: "<strong>Candidato Top Performer.</strong> Elena posee un Máster en Estadística y 4 años de experiencia directa. Domina el stack completo solicitado: Python (Pandas, Scikit-learn), SQL y visualización. Además, aporta experiencia valiosa en AWS Sagemaker.",
                strengths: [
                    "Máster en Estadística Aplicada",
                    "Stack Técnico Completo (Python, R, SQL, AWS)",
                    "Exp. en Modelos Predictivos y NLP",
                    "Residencia en Oviedo"
                ],
                gaps: [
                    "Ninguno significativo detectado"
                ],
                questions: [
                    { text: "Cuéntanos sobre el modelo de Machine Learning más complejo que hayas puesto en producción.", reason: "Profundizar en Experiencia" }
                ]
            },
            {
                id: 302,
                name: "Pablo S.",
                role: "Data Analyst",
                info: "Vigo | 3 Años Exp",
                initials: "PS",
                matchScore: 70,
                summary: "<strong>Perfil Analista fuerte, Científico en desarrollo.</strong> Pablo es un experto en SQL y PowerBI (Visualización), ideal para la parte de reporte. Sin embargo, su experiencia en modelado predictivo (Machine Learning) y Python profundo es limitada comparada con un Data Scientist puro.",
                strengths: [
                    "Experto en SQL y PowerBI",
                    "Gran capacidad de comunicación y negocio",
                    "Limpieza de datos (Data Wrangling)"
                ],
                gaps: [
                    "Falta profundidad en TensorFlow/PyTorch",
                    "Poca experiencia en Cloud (AWS/Google)"
                ],
                questions: [
                    { text: "Veo mucha experiencia en Análisis descriptivo. ¿Qué experiencia tienes creando modelos predictivos desde cero con Python?", reason: "Validar Competencia Core (ML)" }
                ]
            },
            {
                id: 303,
                name: "Clara D.",
                role: "Investigadora Académica",
                info: "Madrid | PhD",
                initials: "CD",
                matchScore: 65,
                summary: "<strong>Perfil Académico.</strong> Doctora en Matemáticas. Su conocimiento teórico de algoritmos es excepcional (Redes Neuronales, Regresión). El riesgo principal es su nula experiencia en entornos corporativos, herramientas de despliegue (Docker/Cloud) y negocio.",
                strengths: [
                    "PhD en Matemáticas (Base teórica excelente)",
                    "Conocimiento avanzado de R y Python académico"
                ],
                gaps: [
                    "Sin experiencia en empresa/negocio",
                    "Desconocimiento de herramientas Cloud (AWS)",
                    "Residencia en Madrid (Oferta en Oviedo/Vigo)"
                ],
                questions: [
                    { text: "¿Estarías dispuesta a mudarte a Asturias o Galicia?", reason: "Validar Ubicación" },
                    { text: "¿Has trabajado alguna vez con control de versiones (Git) en equipos ágiles?", reason: "Validar Adaptación al flujo de trabajo" }
                ]
            },
            {
                id: 304,
                name: "Roberto G.",
                role: "Ingeniero Informático",
                info: "Oviedo | Recién Graduado",
                initials: "RG",
                matchScore: 40,
                summary: "<strong>Perfil Junior Generalista.</strong> Recién graduado en Ingeniería Informática. Tiene las bases teóricas de la carrera, pero su experiencia en Data Science se limita a proyectos universitarios y cursos online. Le falta rodaje para el puesto de 2 años de experiencia.",
                strengths: [
                    "Grado en Ingeniería Informática",
                    "Residencia en Oviedo",
                    "Nativo Digital"
                ],
                gaps: [
                    "Experiencia insuficiente (0 años profesionales)",
                    "Portfolio de proyectos escaso"
                ],
                questions: [
                    { text: "¿Tienes algún portfolio de proyectos personales en GitHub donde apliques ML?", reason: "Validar Interés y Capacidad Real" }
                ]
            }
        ]
    }
};

// Variable global para saber qué oferta estamos viendo
let currentOfferKey = '';

// --- FUNCIONES DE NAVEGACIÓN ---

function showOffers() {
    document.getElementById('view-offers').classList.remove('hidden');
    document.getElementById('view-dashboard').classList.add('hidden');
    document.getElementById('breadcrumb-text').innerHTML = 'Ofertas Activas';
}

function showDashboard(offerKey) {
    currentOfferKey = offerKey;
    const offer = offersData[offerKey];
    
    if (!offer) return;

    // 1. Cambio de Vista
    document.getElementById('view-offers').classList.add('hidden');
    document.getElementById('view-dashboard').classList.remove('hidden');
    
    // 2. Actualizar Breadcrumb
    const breadcrumbHtml = `Ofertas Activas > <span>${offer.title}</span>`;
    document.getElementById('breadcrumb-text').innerHTML = breadcrumbHtml;
    
    // 3. Rellenar la Lista Lateral de Candidatos
    const listContainer = document.getElementById('candidate-list-container');
    listContainer.innerHTML = ''; // Limpiar lista anterior
    
    // Título de la lista
    document.getElementById('list-title').textContent = `Candidaturas (${offer.candidates.length})`;
    document.getElementById('list-subtitle').textContent = `Oferta: ${offer.title}`;

    // Generar tarjetas de la lista
    offer.candidates.forEach(cand => {
        // Determinar color del badge y tags
        let badgeClass = 'match-low';
        if (cand.matchScore >= 90) badgeClass = 'match-90';
        else if (cand.matchScore >= 60) badgeClass = 'match-70';
        else badgeClass = 'match-30';

        // Crear HTML de la tarjeta
        const cardHtml = `
            <article class="candidate-card" id="card-${cand.id}" onclick="loadCandidate(${cand.id})">
                <div class="card-header-row">
                    <span class="c-name">${cand.name}</span>
                    <span class="match-badge ${badgeClass}">${cand.matchScore}%</span>
                </div>
                <div class="c-role">${cand.role}</div>
                <div class="skill-tags">
                    <!-- Generamos tags dinámicos resumidos -->
                     <span class="tag">${cand.info.split('|')[0].trim()}</span>
                </div>
            </article>
        `;
        listContainer.innerHTML += cardHtml;
    });

    // 4. Cargar automáticamente al primer candidato de la lista
    if(offer.candidates.length > 0) {
        loadCandidate(offer.candidates[0].id);
    }
}

// --- LÓGICA DE CARGA DE CANDIDATO ---

function loadCandidate(id) {
    // Buscar el candidato en la oferta actual
    const candidates = offersData[currentOfferKey].candidates;
    const data = candidates.find(c => c.id === id);
    
    if (!data) return;

    // 1. Actualizar lista visual (clase 'active')
    document.querySelectorAll('.candidate-card').forEach(card => card.classList.remove('active'));
    const activeCard = document.getElementById(`card-${id}`);
    if(activeCard) activeCard.classList.add('active');

    // 2. Inyectar datos en el DOM (Detalle Derecho)
    document.getElementById('d-initials').textContent = data.initials;
    document.getElementById('d-name').textContent = data.name;
    
    // Info extendida
    document.getElementById('d-info').innerHTML = `
        <i class="fa-solid fa-user-tie"></i> ${data.role} &nbsp;|&nbsp; 
        <i class="fa-solid fa-location-dot"></i> ${data.info}
    `;
    
    // Score Ring Color & Value
    const ring = document.getElementById('d-ring');
    document.getElementById('d-score').textContent = data.matchScore;
    
    let color = '#dc3545'; // Red
    let ringColor = '#f8d7da'; // Light red
    if(data.matchScore >= 90) { color = '#28a745'; ringColor = '#d4edda'; } // Green
    else if(data.matchScore >= 60) { color = '#d98a00'; ringColor = '#fff3cd'; } // Yellow/Orange
    
    ring.style.borderColor = color;
    document.getElementById('d-score').style.color = color;

    // Resumen IA
    document.getElementById('d-summary').innerHTML = data.summary;

    // Listas (Puntos Fuertes)
    const strList = document.getElementById('d-strengths');
    strList.innerHTML = '';
    data.strengths.forEach(s => {
        strList.innerHTML += `<li><i class="fa-solid fa-check" style="color: var(--success);"></i> ${s}</li>`;
    });

    // Listas (Gaps)
    const gapList = document.getElementById('d-gaps');
    gapList.innerHTML = '';
    if(data.gaps.length > 0) {
        data.gaps.forEach(g => {
            gapList.innerHTML += `<li><i class="fa-solid fa-circle-exclamation" style="color: var(--warning);"></i> ${g}</li>`;
        });
    } else {
        gapList.innerHTML = `<li style="color:var(--cc-text-light)"><i>No se detectaron gaps críticos.</i></li>`;
    }

    // Preguntas
    const qContainer = document.getElementById('d-questions');
    qContainer.innerHTML = ''; // Limpiar anteriores
    data.questions.forEach(q => {
        qContainer.innerHTML += `
            <div class="question-card">
                <div class="q-text">"${q.text}"</div>
                <div class="q-reason">MOTIVO: ${q.reason}</div>
            </div>
        `;
    });
}