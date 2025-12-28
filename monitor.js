particlesJS("particles-js", {
    "particles": {
      "number": { "value": 150 },
      "color": { "value": "#39ff14" },
      "shape": { "type": "circle" },
      "opacity": { "value": 1, "random": true },
      "size": { "value": 3, "random": true },
  
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#39ff14",
        "opacity": 0.8,
        "width": 1.5
      },
  
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out"
      }
    },
  
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
      }
    },
  
    "retina_detect": true
  });







































// RANDOM SON GENERATOR
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// --- AI TAVSIYA ALGORITMI ---
function generateAiAdvice(pm, ntu, ph) {
    let advice = "";

    // Havo sifati (PM2.5)
    if (pm > 120) advice += "The air is very polluted — wear a protective mask. ";
    else if (pm > 80) advice += "The air is moderately polluted — it is advised not to stay outdoors for long periods. ";
    else advice += "The air quality is good. ";

    // Suv sifati (NTU)
    if (ntu > 12) advice += "The water is very turbid — do not use it for drinking. ";
    else if (ntu > 6) advice += "The water quality is moderate — it should be boiled before use. ";
    else advice += "The water quality is good. ";

    // Tuproq pH
    if (ph < 5.5) advice += "The soil is very acidic — neutralization is required ";
    else if (ph > 8) advice += "The soil is very alkaline — analysis is required. ";
    else advice += "The soil pH is within the normal range. ";

    return advice;
}

// KARTOCHKALARNI YANGILASH
function updatePanel2() {
    const pm = rand(10, 160);
    const ntu = rand(1, 20);
    const ph = (Math.random() * (8 - 5) + 5).toFixed(1);

    // qiymatlarni chiqarish
    document.getElementById("panel2-pm").textContent = pm;
    document.getElementById("panel2-ntu").textContent = ntu;
    document.getElementById("panel2-ph").textContent = ph;

    // CHART DATA
    panel2Chart.data.datasets[0].data = Array.from({ length: 12 }, () => rand(20, 150));
    panel2Chart.data.datasets[1].data = Array.from({ length: 12 }, () => rand(1, 20));
    panel2Chart.update();

    // ---- AI tavsiyasini avtomatik yangilash ----
    const autoAdvice = generateAiAdvice(pm, ntu, ph);
    document.getElementById("panel2-ai-text").textContent = autoAdvice;
}

// CHART YARATISH
const ctx2 = document.getElementById("panel2-chart");

const panel2Chart = new Chart(ctx2, {
    type: "bar",
    data: {
        labels: ["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"],
        datasets: [
            {
                label: "PM2.5",
                backgroundColor: "rgb(0, 255, 0)",
                data: []
            },
            {
                label: "NTU",
                backgroundColor: "rgb(0, 255, 255)",
                data: []
            }
        ]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
    }
});

// --- AI tugmasi ham qo‘lda ishlaydi (ixtiyoriy) ---
document.getElementById("panel2-ai-btn").addEventListener("click", () => {
    const pm = +document.getElementById("panel2-pm").textContent;
    const ntu = +document.getElementById("panel2-ntu").textContent;
    const ph = +document.getElementById("panel2-ph").textContent;

    const advice = generateAiAdvice(pm, ntu, ph);
    document.getElementById("panel2-ai-text").textContent = advice;
});

// --- AVTO YANGILASH ---
updatePanel2();
setInterval(updatePanel2, 3000);
