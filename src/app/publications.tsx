import { link } from "fs";

const publications_en = [
    {
        title: "Shifts in belowground processes along a temperate forest edge",
        authors: "Winbourne, J., Martinez, S., Chen, J.",
        journal: "Global Change Biology",
        year: "2024",
        type: "Journal Article",
        link: "https://link.springer.com/article/10.1007/s10980-024-01891-3"
    },
    {
        title: "Ecology Herbivores drive scarcity of nitrogen-fixing plants",
        authors: "Joy B Winbourne, Lindsay A McCulloch",
        journal: "Ecological Applications",
        year: "2023",
        type: "Journal Article",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=birclT8AAAAJ&sortby=pubdate&citation_for_view=birclT8AAAAJ:kNdYIx-mwKoC"
    },
    {
        title: "Herbivores drive scarcity of some nitrogen-fixing tropical trees",
        authors: "Chen, J., Rodriguez, M., Winbourne, J.",
        journal: "Environmental Science & Technology",
        year: "2023",
        type: "Journal Article",
        link: "https://www.nature.com/articles/d41586-022-04170-w"
    },
    {
        title: "Herbivores drive scarcity of some nitrogen-fixing tropical trees",
        authors: "Martinez, S., Winbourne, J.",
        journal: "Nature Climate Change",
        year: "2022",
        type: "Journal Article",
        link: "https://www.researchgate.net/publication/366106503_Herbivores_drive_scarcity_of_some_nitrogen-fixing_tropical_trees"
    }
];


const publications_es = [
    {
        title: "Cambios en los procesos subterráneos a lo largo de un borde de bosque templado",
        authors: "Winbourne, J., Martinez, S., Chen, J.",
        journal: "Global Change Biology",
        year: "2024",
        type: "Artículo de Revista",
        link: "https://link.springer.com/article/10.1007/s10980-024-01891-3"
    },
    {
        title: "Ecología: Los herbívoros impulsan la escasez de plantas fijadoras de nitrógeno",
        authors: "Joy B Winbourne, Lindsay A McCulloch",
        journal: "Ecological Applications",
        year: "2023",
        type: "Artículo de Revista",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=birclT8AAAAJ&sortby=pubdate&citation_for_view=birclT8AAAAJ:kNdYIx-mwKoC"
    },
    {
        title: "Los herbívoros impulsan la escasez de algunos árboles tropicales fijadores de nitrógeno",
        authors: "Chen, J., Rodriguez, M., Winbourne, J.",
        journal: "Environmental Science & Technology",
        year: "2023",
        type: "Artículo de Revista",
        link: "https://www.nature.com/articles/d41586-022-04170-w"
    },
    {
        title: "Los herbívoros impulsan la escasez de algunos árboles tropicales fijadores de nitrógeno",
        authors: "Martinez, S., Winbourne, J.",
        journal: "Nature Climate Change",
        year: "2022",
        type: "Artículo de Revista",
        link: "https://www.researchgate.net/publication/366106503_Herbivores_drive_scarcity_of_some_nitrogen-fixing_tropical_trees"
    }
];


const projects_en = [
    {
        title: "Introducing the Urban Trees Ecophysiology Network",
        description:
            "We have developed the Urban Trees Ecophysiology Network (UTEN) that seeks to advance our fundamental understanding of urban tree ecophysiology and implications for planning and maintaining urban canopy as a nature-based solution to environmental change.",
        status: "Active",
        funding: "NSF Grant",
        duration: "2022-2025",
        link: "https://ui.adsabs.harvard.edu/abs/2024AGUFMGC13T0454W/abstract"

    },
    {
        title: "Spatial and seasonal trends in biogenic and fossil fuel carbon dioxide fluxes among three metropolitan regions",
        description:
            "Cities are taking the lead on climate change mitigation with ambitious goals to reduce carbon dioxide (CO2) emissions. The implementation of effective mitigation policies will require accurate measurements to guide policy decisions and monitor their efficacy.",
        status: "Active",
        funding: "DOE Grant",
        duration: "2021-2024",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021JG006568"
    },
    {
        title: "NIST: Soil Respiration, Moisture, Temperature, Chemistry; and Fine Root Measurements from a Transect Through a Forest Edge",
        description:
            "This dataset contains soil respiration, moisture, temperature, and chemistry, as well as fine root measurements from the National Institute of Standards and Technology (NIST) Forested Optical Reference for Evaluating Sensor Technology (FOREST) research facility at Gaithersburg, Maryland.",
        status: "Active",
        funding: "University Research Fund",
        duration: "2023-2026",
        link: "https://www.osti.gov/biblio/1837084"
    },
];

const projects_es = [
    {
        title: "Presentando la Red de Ecofisiología de Árboles Urbanos",
        description:
            "Hemos desarrollado la Red de Ecofisiología de Árboles Urbanos (UTEN) que busca avanzar nuestra comprensión fundamental de la ecofisiología de los árboles urbanos y sus implicaciones para la planificación y el mantenimiento del dosel urbano como una solución basada en la naturaleza al cambio ambiental.",
        status: "Activo",
        funding: "Subvención NSF",
        duration: "2022-2025",
        link: "https://ui.adsabs.harvard.edu/abs/2024AGUFMGC13T0454W/abstract"

    },
    {
        title: "Tendencias espaciales y estacionales en los flujos de dióxido de carbono biogénico y de combustibles fósiles entre tres regiones metropolitanas",
        description:
            "Las ciudades están tomando la delantera en la mitigación del cambio climático con objetivos ambiciosos para reducir las emisiones de dióxido de carbono (CO2). La implementación de políticas de mitigación efectivas requerirá mediciones precisas para guiar las decisiones políticas y monitorear su eficacia.",
        status: "Activo",
        funding: "Subvención DOE",
        duration: "2021-2024",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021JG006568"
    },
    {
        title: "NIST: Respiración del Suelo, Humedad, Temperatura, Química; y Mediciones de Raíces Finas desde un Transecto a Través de un Borde de Bosque",
        description:
            "Este conjunto de datos contiene mediciones de respiración del suelo, humedad, temperatura y química, así como mediciones de raíces finas de la instalación de investigación FOREST (Referencia Óptica Forestal para Evaluar Tecnología de Sensores) del Instituto Nacional de Estándares y Tecnología (NIST) en Gaithersburg, Maryland.",
        status: "Activo",
        funding: "Fondo de Investigación Universitaria",
        duration: "2023-2026",
        link: "https://www.osti.gov/biblio/1837084"
    }
];

const presentations_en = [
    {
        title: "Innovations in Environmental Monitoring Technology",
        event: "American Geophysical Union Fall Meeting",
        location: "San Francisco, CA",
        year: "2024",
    },
    {
        title: "Forest-Atmosphere Interactions in a Changing Climate",
        event: "Ecological Society of America Annual Meeting",
        location: "Portland, OR",
        year: "2023",
    },
    {
        title: "Data-Driven Approaches to Ecosystem Science",
        event: "International Conference on Environmental Science",
        location: "Virtual",
        year: "2023",
    },
];

const presentations_es = [
    {
        "title": "Innovaciones en Tecnología de Monitoreo Ambiental",
        "event": "Reunión de Otoño de la Unión Geofísica Americana",
        "location": "San Francisco, CA",
        "year": "2024"
    },
    {
        "title": "Interacciones Bosque-Atmósfera en un Clima Cambiante",
        "event": "Reunión Anual de la Sociedad Ecológica de América",
        "location": "Portland, OR",
        "year": "2023"
    },
    {
        "title": "Enfoques Basados en Datos para la Ciencia de Ecosistemas",
        "event": "Conferencia Internacional sobre Ciencias Ambientales",
        "location": "Virtual",
        "year": "2023"
    }
];

const teamMembers_en = [
    {
        name: "Dr. Joy Winbourne",
        role: "Principal Investigator",
        description:
            "Environmental scientist specializing in forest ecology and carbon cycling. PhD in Environmental Science with over 15 years of research experience.",
        email: "joy.winbourne@university.edu",
    },
    {
        name: "Sarah Martinez",
        role: "Postdoctoral Researcher",
        description:
            "Focuses on soil-atmosphere CO2 exchange and microbial ecology. Expert in eddy covariance techniques and data analysis.",
        email: "s.martinez@university.edu",
    },
    {
        name: "James Chen",
        role: "PhD Candidate",
        description:
            "Researching the effects of climate variability on forest carbon uptake. Managing the sensor network infrastructure and data pipelines.",
        email: "j.chen@university.edu",
    },
    {
        name: "Emily Thompson",
        role: "Research Assistant",
        description:
            "Supporting field operations and data collection. Background in environmental monitoring and GIS analysis.",
        email: "e.thompson@university.edu",
    },
    {
        name: "Michael Rodriguez",
        role: "Undergraduate Researcher",
        description:
            "Computer science student developing the data visualization platform. Passionate about environmental technology.",
        email: "m.rodriguez@university.edu",
    },
    {
        name: "Lisa Park",
        role: "Lab Technician",
        description:
            "Maintains and calibrates sensor equipment. Ensures data quality and manages field site logistics.",
        email: "l.park@university.edu",
    },
];

const teamMembers_es = [
    {
        "name": "Dra. Joy Winbourne",
        "role": "Investigadora Principal",
        "description": "Científica ambiental especializada en ecología forestal y el ciclo del carbono. Doctorado en Ciencias Ambientales con más de 15 años de experiencia en investigación.",
        "email": "joy.winbourne@university.edu"
    },
    {
        "name": "Sarah Martinez",
        "role": "Investigadora Postdoctoral",
        "description": "Se centra en el intercambio de CO2 entre el suelo y la atmósfera y la ecología microbiana. Experta en técnicas de covarianza de remolinos (eddy covariance) y análisis de datos.",
        "email": "s.martinez@university.edu"
    },
    {
        "name": "James Chen",
        "role": "Candidato a Doctorado",
        "description": "Investiga los efectos de la variabilidad climática en la absorción de carbono forestal. Gestiona la infraestructura de la red de sensores y las tuberías de datos (data pipelines).",
        "email": "j.chen@university.edu"
    },
    {
        "name": "Emily Thompson",
        "role": "Asistente de Investigación",
        "description": "Apoya las operaciones de campo y la recopilación de datos. Experiencia en monitoreo ambiental y análisis GIS.",
        "email": "e.thompson@university.edu"
    },
    {
        "name": "Michael Rodriguez",
        "role": "Investigador de Pregrado",
        "description": "Estudiante de informática que desarrolla la plataforma de visualización de datos. Apasionado por la tecnología ambiental.",
        "email": "m.rodriguez@university.edu"
    },
    {
        "name": "Lisa Park",
        "role": "Técnica de Laboratorio",
        "description": "Mantiene y calibra el equipo de sensores. Garantiza la calidad de los datos y gestiona la logística del sitio de campo.",
        "email": "l.park@university.edu"
    }
];

const links_en = [
    { name: "Home", id: "home" },
    { name: "Sensor Data", id: "data" },
    { name: "Team", id: "team" },
    { name: "Research", id: "research" },
    { name: "Upload Tree Data", id: "upload tree data" }
];


const links_es = [
    { name: "Inicio", id: "home" },
    { name: "Datos del Sensor", id: "data" },
    { name: "Equipo", id: "team" },
    { name: "Investigación", id: "research" },
    { name: "Subir Datos del Árbol", id: "subir datos del árbol" },
];

export { publications_en, projects_en, publications_es, projects_es, presentations_en, presentations_es, teamMembers_en, teamMembers_es, links_en, links_es};