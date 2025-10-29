// Aktuální jazyk
let currentLang = 'cz';

// Projekty data
const projects = {
    cz: [
        {
            title: "Maturita – It Hunts",
            tech: "Unity, C#, ShaderLab",
            desc: "Maturitní práce: 2D horror, level design, gameplay, vlastní AI pro nepřítele, custom UI a shader efekty.",
            link: "https://github.com/N0V1RU5/maturita",
            img: null
        },
        {
            title: "ScreenSaver (Go + SDL2)",
            tech: "Go, SDL2, Custom graphics",
            desc: "Vizuální screensaver generovaný vlastním kódem: barevné objekty s překryvy a animací, programováno v Go pomocí SDL2 bindingů.",
            link: null,
            img: "ScreenSaver.gif"
        },
        {
            title: "Další projekty brzy!",
            tech: "",
            desc: "Pracuje se na nových demíčkách a engine nástrojích...",
            link: null,
            img: null
        }
    ],
    en: [
        {
            title: "Maturita – It Hunts",
            tech: "Unity, C#, ShaderLab",
            desc: "Graduation project: 2D horror, level design, gameplay, custom enemy AI, unique UI and shader effects.",
            link: "https://github.com/N0V1RU5/maturita",
            img: null
        },
        {
            title: "ScreenSaver (Go + SDL2)",
            tech: "Go, SDL2, Custom graphics",
            desc: "Visual screensaver coded from scratch: vibrant multi-color shapes with overlays and animation, created in Go using SDL2 bindings.",
            link: null,
            img: "ScreenSaver.jpg"
        },
        {
            title: "More projects coming soon!",
            tech: "",
            desc: "Currently working on new demos and engine tools...",
            link: null,
            img: null
        }
    ]
};

// Technologie data
const skills = [
    "C++", "Godot", "SFML", "Go", "Python", "Unity", "ShaderLab", "Procedurální generování", "Herní engine", "AI & simulace"
];

// Random facts
const facts = {
    cz: [
        "Portfolio jsem navrhl s pomocí AI. Radši programuji hry než webovky :D",
        "Neon pink (#FF69B4) a miku blue (#86cecb) jsou moje oblíbené barvy.",
        "Najdi skrytý Miku mikrofon na stránce!",
        "Většinou programuju hry, hraju hry, nebo si kreslím.",
        "Chaotický přístup mě často zachrání. Řád v chaosu."
    ],
    en: [
        "This portfolio was AI-assisted. I'd rather code games than webs :D",
        "Neon pink (#FF69B4) and miku blue (#86cecb) are my signature colors.",
        "Find hidden Miku mic on this page!",
        "I code games, play games or I draw.",
        "Chaos in my mind is a feature. There's order hiding everywhere."
    ]
};

// Texty pro překlady
const translations = {
    cz: {
        navAbout: "O mně",
        navProjects: "Projekty", 
        navTechnologies: "Technologie",
        navContact: "Kontakt",
        heroTitle: "GameDev Engineer & Creative Chaos",
        heroSubtitle: "Propojuji techniku, umění a chaos.",
        heroContactBtn: "Spoj se se mnou",
        aboutTitle: "O mně",
        bioText: "Jsem kreativní programátor, student a tvůrce. Baví mě herní prototypy, procedural generované světy, grafické algoritmy i kreslení, muzika, anime.<br /><br />Portfolio je navržené mnou, AI použita jen na návrhy rozložení nebo překlady. Preferuji vlastní tvorbu, ruční ladění.",
        projectsTitle: "Projekty",
        techTitle: "Technologie & Skills",
        randomTitle: "Random Fact",
        randomBtn: "Další fakt",
        contactTitle: "Kontakt",
        contactText: 'GitHub: <a href="https://github.com/N0V1RU5" target="_blank">N0V1RU5</a><br>Email: <a href="mailto:matesp04@gmail.com">matesp04@gmail.com</a>',
        footerText: "2025 © N0V1RU5",
        repoLink: "Repozitář"
    },
    en: {
        navAbout: "About",
        navProjects: "Projects",
        navTechnologies: "Technologies", 
        navContact: "Contact",
        heroTitle: "GameDev Engineer & Creative Chaos",
        heroSubtitle: "Tech meets art & professional chaos.",
        heroContactBtn: "Contact Me",
        aboutTitle: "About Me",
        bioText: "I'm a creative developer, student and maker. I love game prototypes, procedural worlds, graphics & drawing, music, anime.<br /><br />Portfolio designed and coded by me – AI used only for layout ideas or translation. I prefer custom work and manual tuning.",
        projectsTitle: "Projects",
        techTitle: "Technologies & Skills", 
        randomTitle: "Random Fact",
        randomBtn: "Next fact",
        contactTitle: "Contact",
        contactText: 'GitHub: <a href="https://github.com/N0V1RU5" target="_blank">N0V1RU5</a><br>Email: <a href="mailto:matesp04@gmail.com">matesp04@gmail.com</a>',
        footerText: "2025 © N0V1RU5",
        repoLink: "Repository"
    }
};

function renderProjects(lang = 'cz') {
    const container = document.getElementById('projectCards');
    const projectList = projects[lang] || projects['cz'];
    const linkText = translations[lang].repoLink;

    container.innerHTML = '';
    projectList.forEach(proj => {
        container.innerHTML += `
            <div class="project-card${proj.title && proj.title.toLowerCase().includes('brzy') || proj.title.toLowerCase().includes('soon') ? ' future' : ''}">
                <div class="project-title">${proj.title}</div>
                <div class="project-tech">${proj.tech}</div>
                <div class="project-desc">${proj.desc}</div>
                ${proj.img ? `<div class="project-media"><img src="${proj.img}" alt="Screenshot projektu" class="project-image" /></div>` : ''}
                ${proj.link ? `<a href="${proj.link}" class="project-link" target="_blank">${linkText} &rarr;</a>` : ''}
            </div>`;
    });
}

function renderSkills() {
    const list = document.getElementById('skillsTags');
    list.innerHTML = '';
    skills.forEach(skill => {
        list.innerHTML += `<span>${skill}</span>`;
    });
}

function showRandomFact(lang = currentLang) {
    const factList = facts[lang] || facts['cz'];
    const idx = Math.floor(Math.random() * factList.length);
    document.getElementById('randomBox').textContent = factList[idx];
}

function switchLang(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Navigace
    document.getElementById('navAbout').textContent = t.navAbout;
    document.getElementById('navProjects').textContent = t.navProjects;
    document.getElementById('navTechnologies').textContent = t.navTechnologies;
    document.getElementById('navContact').textContent = t.navContact;

    // Hero sekce
    document.getElementById('heroTitle').textContent = t.heroTitle;
    document.getElementById('heroSubtitle').textContent = t.heroSubtitle;
    document.getElementById('heroContactBtn').textContent = t.heroContactBtn;

    // Sekce titulky
    document.getElementById('aboutTitle').textContent = t.aboutTitle;
    document.getElementById('bioText').innerHTML = t.bioText;
    document.getElementById('projectsTitle').textContent = t.projectsTitle;
    document.getElementById('techTitle').textContent = t.techTitle;
    document.getElementById('randomTitle').textContent = t.randomTitle;
    document.getElementById('randomBtn').textContent = t.randomBtn;
    document.getElementById('contactTitle').textContent = t.contactTitle;
    document.getElementById('contactText').innerHTML = t.contactText;
    document.getElementById('footerText').textContent = t.footerText;

    // Tooltip pro Miku
    document.getElementById('mikuEgg').title = lang === 'cz' ? 'Našel jsi Miku easter egg!' : 'You found the Miku easter egg!';

    // Re-render projektů s novým jazykem
    renderProjects(lang);
    showRandomFact(lang);
}

// Event listenery
document.getElementById('langSelect').addEventListener('change', (e) => {
    switchLang(e.target.value);
});

document.getElementById('modeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.getElementById('modeToggle').textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
});

// Inicializace při načtení stránky
window.addEventListener('load', () => {
    renderProjects(currentLang);
    renderSkills();
    showRandomFact(currentLang);
    switchLang(currentLang);
});
