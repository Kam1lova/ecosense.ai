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












  // --- RANDOM DATA GENERATOR ---
function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// --- CARD UPGRADE FUNCTION ---
function updateDashboard1() {
  document.getElementById("d1Aqi").textContent = randomVal(40, 150);
  document.getElementById("d1Ehi").textContent = randomVal(20, 90) + "%";

  // chart data yangilash
  d1Chart.data.datasets[0].data = Array.from({ length: 12 }, () => randomVal(20, 150));
  d1Chart.update();
}

// --- CHART ---
const ctx = document.getElementById('d1Chart');

const d1Chart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ["1","2","3","4","5","6","7","8","9","10","11","12"],
      datasets: [{
          label: "AQI",
          data: [],
          borderWidth: 2,
          borderColor: "#0aff87",
          tension: 0.4,
          fill: true,
          backgroundColor: "rgba(0,255,0,0.15)"
      }]
  },
  options: {
      responsive: true,
      scales: {
          y: { beginAtZero: true }
      },
      plugins: {
          legend: { labels: { color: "#000" } }
      }
  }
});

// --- AUTO UPDATE EVERY 3 SECONDS ---
updateDashboard1();
setInterval(updateDashboard1, 3000);



















  












// ===== JURY STORY SCROLL ANIMATION =====
const storyBlocks = document.querySelectorAll(".story-block");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

storyBlocks.forEach(block => observer.observe(block));

// ===== EHI DEMO ANIMATION =====
const ehiDemo = document.getElementById("ehi-demo-value");
if (ehiDemo) {
  setInterval(() => {
    const val = Math.floor(Math.random() * 40) + 50;
    ehiDemo.textContent = val;
  }, 2500);
}


























//     const cardsContainer = document.getElementById('cards');

//     function createCard() {
//       const imageInput = document.getElementById('imageInput');
//       const textInput = document.getElementById('textInput').value;

//       if (!imageInput.files[0] || !textInput) {
//         alert('Rasm va text kiritish shart');
//         return;
//       }

//       const reader = new FileReader();
//       reader.onload = function(e) {
//         const cardData = {
//           id: Date.now(), // unique id
//           image: e.target.result,
//           text: textInput
//         };
        

//         saveCard(cardData);
//         addCard(cardData);
//       };
//       reader.readAsDataURL(imageInput.files[0]);

//       imageInput.value = '';
//       document.getElementById('textInput').value = '';
//     }

//     // function addCard(data) {
//     //   const card = document.createElement('div');
//     //   card.className = 'card';

//     //   card.innerHTML = `
//     //     <img src="${data.image}" />
//     //     <div class="text">${data.text}</div>
//     //   `;

//     //   cardsContainer.prepend(card);

//     // }

//     function saveCard(data) {
//       const cards = JSON.parse(localStorage.getItem('cards')) || [];
//       cards.push(data);
//       localStorage.setItem('cards', JSON.stringify(cards));
//     }

//     function loadCards() {
//       const cards = JSON.parse(localStorage.getItem('cards')) || [];
//       cards.reverse().forEach(addCard);

//     }

//     loadCards();
//     function addCard(data, index) {
//   const card = document.createElement('div');
//   card.className = 'card';

//   card.innerHTML = `
//     <button class="delete-btn">✖</button>
//     <img src="${data.image}" />
//     <div class="text">${data.text}</div>
//   `;

//   card.querySelector('.delete-btn').onclick = () => {
//     deleteCard(index);
//   };

//   cardsContainer.prepend(card);
// }
// function deleteCard(index) {
//   let cards = JSON.parse(localStorage.getItem('cards')) || [];
//   cards.splice(index, 1);
//   localStorage.setItem('cards', JSON.stringify(cards));
//   location.reload(); // sahifani yangilaydi
// }

// function loadCards() {
//   const cards = JSON.parse(localStorage.getItem('cards')) || [];
//   cards.reverse().forEach((card, index) => addCard(card, index));
// }














const cardsContainer = document.getElementById('cards');

/* CARD YARATISH */
function createCard() {
  const imageInput = document.getElementById('imageInput');
  const textInput = document.getElementById('textInput').value;

  if (!imageInput.files[0] || !textInput) {
    alert('Rasm va text kiritish shart');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const cardData = {
      id: Date.now(),          // unique ID
      image: e.target.result,
      text: textInput
    };

    saveCard(cardData);
    addCard(cardData);
  };

  reader.readAsDataURL(imageInput.files[0]);

  imageInput.value = '';
  document.getElementById('textInput').value = '';
}

/* CARDNI EKRANGA CHIQARISH */
function addCard(data) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <button class="delete-btn">✖</button>
    <img src="${data.image}">
    <div class="text">${data.text}</div>
  `;

  card.querySelector('.delete-btn').onclick = () => {
    deleteCard(data.id);
  };

  cardsContainer.prepend(card); // doim boshiga
}

/* LOCALSTORAGE GA SAQLASH */
function saveCard(data) {
  const cards = JSON.parse(localStorage.getItem('cards')) || [];
  cards.push(data);
  localStorage.setItem('cards', JSON.stringify(cards));
}

/* O‘CHIRISH (ID BO‘YICHA) */
function deleteCard(id) {
  let cards = JSON.parse(localStorage.getItem('cards')) || [];
  cards = cards.filter(card => card.id !== id);
  localStorage.setItem('cards', JSON.stringify(cards));
  location.reload();
}

/* SAQLANGAN CARDLARNI YUKLASH */
function loadCards() {
  const cards = JSON.parse(localStorage.getItem('cards')) || [];
  cards.reverse().forEach(addCard); // oxirgisi boshida chiqadi
}

loadCards();



























// Xarita (Toshkent markazi)
const map = L.map('map').setView([41.3111, 69.2797], 13);

// Xarita layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Fake dronlar
const drones = {
  drone1: {
    marker: L.marker([41.3111, 69.2797]).addTo(map),
    lat: 41.3111,
    lng: 69.2797
  },
  drone2: {
    marker: L.marker([41.305, 69.265]).addTo(map),
    lat: 41.305,
    lng: 69.265
  },
  drone3: {
    marker: L.marker([41.32, 69.29]).addTo(map),
    lat: 41.32,
    lng: 69.29
  }
};

// Popup
Object.keys(drones).forEach(id => {
  drones[id].marker.bindPopup(`🚁 ${id.toUpperCase()}`);
});

// Harakat simulyatsiyasi
setInterval(() => {
  Object.values(drones).forEach(drone => {
    // Tasodifiy harakat
    drone.lat += (Math.random() - 0.5) * 0.001;
    drone.lng += (Math.random() - 0.5) * 0.001;

    drone.marker.setLatLng([drone.lat, drone.lng]);
  });
}, 1000);





















