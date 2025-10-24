const facts = [
    "Moje oblíbené barvy jsou neon pink a miku blue. Najdi na webu Miku 🎤!",
    "Raději zkouším nové engine a algoritmy, než abych ladil dokonalý pixel.",
    "Webdesign mě baví jen když má styl a svobodu – proto je to tady neonová divočina.",
    "Když neprogramuju, většinou kreslím, hraju hry, nebo koukám na anime (Eighty Six je top).",
    "Portfolio jsem navrhl sám a AI využil jen jako nástroj k urychlení nápadů.",
    "Expresivita > perfekcionismus. Funkčnost a styl, ne šablony!"
];

function showRandomFact() {
    const box = document.getElementById('randomFact');
    const idx = Math.floor(Math.random() * facts.length);
    box.textContent = facts[idx];
}
window.onload = showRandomFact;
