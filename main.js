// Projekty data
const projects = [
    {
        title: "AMazing",
        tech: "Python, OOP, DFS, Numpy",
        desc: "Algoritmický generátor bludišť. Zábava, matika, grafika, vše v jednom.",
        link: "https://github.com/N0V1RU5/AMazing"
    },
    {
        title: "Maturita – It Hunts",
        tech: "Unity, C#, ShaderLab",
        desc: "Maturitní práce: 2D horror, level design, gameplay + AI logika.",
        link: "https://github.com/N0V1RU5/maturita"
    }
];

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
        "This portfolio was AI-assisted – speed over style! I’d rather code game engines than spreadsheets 🦾",
        "Neon pink (#FF69B4) and miku blue (#86cecb) are my signature colors.",
        "Best work always first – find hidden Miku on this page!",
        "I only make websites when it’s fun. Otherwise I code games, draw art, or play.",
        "Fun fact: Chaos in my mind is a feature. There’s order hiding everywhere."
    ]
};

function renderProjects(lang='cz') {
    const container = document.getElementById('projectCards');
    container.innerHTML = '';
    projects.forEach(proj => {
        container.innerHTML += `
            <div class="project-card">
                <div class="project-title">${proj.title}</div>
                <div class="project-tech">${proj.tech}</div>
                <div class="project-desc">${proj.desc}</div>
                <a href="${proj.link}" class="project-link" target="_blank">${lang==='cz' ? 'Repozitář' : 'Repository'} &rarr;</a>
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

function showRandomFact(lang='cz') {
    const factList = facts[lang] || facts['cz'];
    const idx = Math.floor(Math.random() * factList.length);
    document.getElementById('randomBox').textContent = factList[idx];
}

function switchLang(lang) {
    document.getElementById('navAbout').textContent = lang ==== 'cz' ? 'O mně' : 'About';
    document.getElementById('navProjects').textContent = lang === 'cz' ? 'Projekty' : 'Projects';
    document.getElementById('navTechnologies').textContent = lang === 'cz' ? 'Technologie' : 'Technologies';
    document.getElementById('navContact').textContent = lang === 'cz' ? 'Kontakt' : 'Contact';
    document.getElementById('heroTitle').textContent = lang === 'cz' ? 'GameDev Engineer & Creative Chaos' : 'GameDev Engineer & Creative Chaos';
    document.getElementById('heroSubtitle').textContent = lang === 'cz' ? 
        'Propojuju techniku, umění a experiment. Nejlepší práce navrch, chaos s řádem, neon & miku vibes!' : 
        'Tech meets art & experiment. Best work first, professional chaos, neon & miku vibes!';
    document.getElementById('heroContactBtn').textContent = lang === 'cz' ? 'Spoj se se mnou' : 'Contact Me';
    document.getElementById('bioText').textContent = lang === 'cz' ?
        "Jsem kreativní programátor, student a tvůrce, co spojuje vyspělou logiku s estetikou. Baví mě herní prototypy, procedural generované světy, grafické algoritmy i kreslení, muzika, anime. Funkční chaos – v práci, v životech. Portfolio je navržené mnou, AI použita jen pro urychlení, protože radši programuju nebo tvořím hry, než weby!" :
        "I'm a creative developer, student and maker, combining advanced logic and aesthetics. I love game prototypes, procedural worlds, graphics & drawing, music, anime. Functional chaos, professionally. Portfolio is designed by me, AI is just a tool because I'd rather code games than web pages!";
    document.getElementById('contactText').innerHTML = lang === 'cz' ?
        'GitHub: <a href="https://github.com/N0V1RU5" target="_blank">N0V1RU5</a><br>Email: <a href="mailto:matesp04@gmail.com">matesp04@gmail.com</a>' :
        'GitHub: <a href="https://github.com/N0V1RU5" target="_blank">N0V1RU5</a><br>Email: <a href="mailto:matesp04@gmail.com">matesp04@gmail.com</a>';
    document.getElementById('footerText').textContent = lang === 'cz' ?
        '2025 © N0V1RU5. Neon pink (#FF69B4) & miku blue (#86cecb) forever. 🎤' :
        '2025 © N0V1RU5. Neon pink (#FF69B4) & miku blue (#86cecb) forever. 🎤';
    renderProjects(lang);
    showRandomFact(lang);
}
document.getElementById('langSelect').onchange = (e) => {
    switchLang(e.target.value);
};
document.getElementById('modeToggle').onclick = () => {
    document.body.classList.toggle('light');
    document.getElementById('modeToggle').textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
};
window.onload = () => {
    renderProjects();
    renderSkills();
    showRandomFact();
    switchLang('cz');
};
