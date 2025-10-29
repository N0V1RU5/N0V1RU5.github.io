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
      img: "ScreenSaver.jpg"
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
            title: "AMazing",
            tech: "Python, OOP, DFS, Numpy",
            desc: "Algorithmic maze generator. Fun meets math and graphics.",
            link: "https://github.com/N0V1RU5/AMazing"
        },
        {
            title: "Maturita – It Hunts",
            tech: "Unity, C#, ShaderLab",
            desc: "Graduation project: 2D horror, level design, gameplay + AI logic.",
            link: "https://github.com/N0V1RU5/maturita"
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
        "Portfolio jsem navrhl s pomocí AI – efektivita vyhrává nad stylem. Radši tvořím engine než tabulky 🦾",
        "Neon pink (#FF69B4) a miku blue (#86cecb) jsou moje vibe barvy.",
        "Nejlepší projekty vždy navrch – najdi hidden Miku na stránce!",
        "Weby programuju jen když je zábava. Jinak programuju hry, kreslím, nebo hraju.",
        "Fun-fact: Chaotický přístup mě často zachrání. Řád v chaosu je můj engine."
    ],
    en: [
        "This portfolio was AI-assisted – speed over style! I'd rather code game engines than spreadsheets 🦾",
        "Neon pink (#FF69B4) and miku blue (#86cecb) are my signature colors.",
        "Best work always first – find hidden Miku on this page!",
        "I only make websites when it's fun. Otherwise I code games, draw art, or play.",
        "Fun fact: Chaos in my mind is a feature. There's order hiding everywhere."
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
        heroSubtitle: "Propojuju techniku, umění a experiment. Nejlepší práce navrch, chaos s řádem, neon & miku vibes!",
        heroContactBtn: "Spoj se se mnou",
        aboutTitle: "O mně",
        bioText: "Jsem kreativní programátor, student a tvůrce, co spojuje vyspělou logiku s estetikou. Baví mě herní prototypy, procedural generované světy, grafické algoritmy i kreslení, muzika, anime.<br/><br/>Funkční chaos – v práci, v životech. Portfolio je navržené mnou, AI použita jen pro urychlení, protože radši programuju nebo tvořím hry, než weby!",
        projectsTitle: "Nejlepší Projekty",
        techTitle: "Technologie & Skills",
        randomTitle: "Random Fact",
        randomBtn: "Další fakt",
        contactTitle: "Kontakt",
        contactText: 'GitHub: <a href="https://github.com/N0V1RU5" target="_blank">N0V1RU5</a><br>Email: <a href="mailto:matesp04@gmail.com">matesp04@gmail.com</a>',
        footerText: "2025 © N0V1RU5. Neon pink (#FF69B4) & miku blue (#86cecb) forever. 🎤",
        repoLink: "Repozitář"
    },
    en: {
        navAbout: "About",
        navProjects: "Projects",
        navTechnologies: "Technologies", 
        navContact: "Contact",
        heroTitle: "GameDev Engineer & Creative Chaos",
        heroSubtitle: "Tech meets art & experiment. Best work first, professional chaos, neon & miku vibes!",
        heroContactBtn: "Contact Me",
        aboutTitle: "About Me",
        bioText: "I'm a creative developer, student and maker, combining advanced logic and aesthetics. I love game prototypes, procedural worlds, graphics & drawing, music, anime.<br/><br/>Functional chaos, professionally. Portfolio is designed by me, AI is just a tool because I'd rather code games than web pages!",
        projectsTitle: "Best Projects",
        techTitle: "Technologies & Skills", 
        randomTitle: "Random Fact",
        randomBtn: "Next fact",
        contactTitle: "Contact",
        contactText: 'GitHub: <a href="https://github.com/N0V1RU5" target="_blank">N0V1RU5</a><br>Email: <a href="mailto:matesp04@gmail.com">matesp04@gmail.com</a>',
        footerText: "2025 © N0V1RU5. Neon pink (#FF69B4) & miku blue (#86cecb) forever. 🎤",
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
            <div class="project-card">
                <div class="project-title">${proj.title}</div>
                <div class="project-tech">${proj.tech}</div>
                <div class="project-desc">${proj.desc}</div>
                <a href="${proj.link}" class="project-link" target="_blank">${linkText} &rarr;</a>
            </div>
        `;
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
    renderProjects('cz');
    renderSkills();
    showRandomFact('cz');
    switchLang('cz');
});
