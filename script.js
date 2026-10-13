/* =========================
   EFEITO DE SCROLL
========================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


/* =========================
   EFEITO DO RADAR
========================= */

const radar = document.querySelector(".radar");

radar.addEventListener("mousemove", (event) => {

    const rect = radar.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX =
        ((y / rect.height) - 0.5) * -10;

    const rotateY =
        ((x / rect.width) - 0.5) * 10;

    radar.style.transform =
        `perspective(600px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;
});


radar.addEventListener("mouseleave", () => {

    radar.style.transform =
        "perspective(600px) rotateX(0deg) rotateY(0deg)";

});


/* =========================
   NÚMEROS DAS SEÇÕES
========================= */

const sectionNumbers =
    document.querySelectorAll(".section-number");

sectionNumbers.forEach((number, index) => {

    number.textContent =
        String(index + 1).padStart(2, "0");

});


/* =========================
   EFEITO DE DIGITAÇÃO
========================= */

const status =
    document.querySelector(".radar-status");

const messages = [
    "● SISTEMA ONLINE",
    "● ANALISANDO DADOS",
    "● MONITORAMENTO ATIVO",
    "● IA OPERACIONAL"
];

let messageIndex = 0;

setInterval(() => {

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

    status.textContent =
        messages[messageIndex];

}, 2500);


/* =========================
   EFEITO DOS CARDS
========================= */

const cards =
    document.querySelectorAll(
        ".country-card, .process-card"
    );

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -4;

        const rotateY =
            ((x / rect.width) - 0.5) * 4;

        card.style.transform =
            `perspective(500px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(500px) rotateX(0) rotateY(0) translateY(0)";

    });

});