// Selección de elementos del DOM
const newNoteButton = document.querySelector(".new-note-button");
const popupContainer = document.querySelector(".popup-container");
const addNoteBtn = document.querySelector(".addNoteBtn");
const closeBtn = document.querySelector(".closeBtn");
const notesContainer = document.querySelector(".notes-container");
const statsButton = document.querySelector(".stats-button");
const chartModal = document.getElementById("chartModal");
const closeModal = document.querySelector(".close-modal");
const chartCanvas = document.getElementById("notesChart");

// Inputs del popup
const headingInput = document.querySelector(".headingInput");
const textInput = document.querySelector(".textInput");
const categoryInput = document.querySelector(".categoryInput");

// Almacenar notas
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let currentNoteIndex = null; // Para controlar si estamos creando o editando

// Colores de categorías
const categoryColors = {
  Trabajo: "#d9dbe7",
  Estudios: "#769898",
  Personal: "#bda28d",
  Otros: "#d49f91",
};

// Mostrar notas almacenadas
function displayNotes() {
  notesContainer.innerHTML = notes
    .filter(note => note && note.heading && note.text && note.category)
    .map(
      (note, index) => `
      <div class="note" style="background-color: ${
        categoryColors[note.category] || "#fff"
      }">
        <h3>${note.heading}</h3>
        <p>${note.text}</p>
        <div class="note-footer">
          <span>${note.category}</span>
          <div class="note-buttons">
            <button class="edit-btn" data-index="${index}">
              <ion-icon name="pencil-outline"></ion-icon>
            </button>
            <button class="delete-btn" data-index="${index}">
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>`
    )
    .join("");
}

// Abrir el popup
function openPopup(index = null) {
  popupContainer.classList.add("popup-container-open");

  if (index !== null) {
    // Si estamos editando, cargar los datos existentes
    const note = notes[index];
    headingInput.value = note.heading;
    textInput.value = note.text;
    categoryInput.value = note.category;
    currentNoteIndex = index; // Guardar índice de la nota a editar
  } else {
    // Si estamos creando una nueva nota, limpiar los campos
    headingInput.value = "";
    textInput.value = "";
    categoryInput.value = "Otros";
    currentNoteIndex = null; // Crear nueva nota
  }
}

// Cerrar el popup
function closePopup() {
  popupContainer.classList.remove("popup-container-open");
  currentNoteIndex = null;
}

// Guardar o actualizar nota
function saveNote() {
  const heading = headingInput.value.trim();
  const text = textInput.value.trim();
  const category = categoryInput.value;

  console.log("Guardando nota..."); // Debugging

  if (!heading || !text) {
    alert("Debes rellenar la nota para poder guardarla!");
    return;
  }

  if (currentNoteIndex !== null) {
    // Actualizar nota existente
    notes[currentNoteIndex] = { heading, text, category };
    console.log(`Nota actualizada: ${JSON.stringify(notes[currentNoteIndex])}`);
  } else {
    const newNote = { heading, text, category };
    notes.push(newNote);
    console.log(`Nueva nota añadida: ${JSON.stringify(newNote)}`);
  }

  // Actualizar el almacenamiento local y la lista de notas
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
  closePopup();
}

// Eliminar nota
function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

// Abrir o cerrar modal de estadísticas
function toggleModal(open = true) {
  chartModal.style.display = open ? "flex" : "none";
  if (open) renderChart();
}

// Renderizar el gráfico
function renderChart() {
  const ctx = chartCanvas.getContext("2d");
  const categoryCount = notes.reduce((acc, note) => {
    acc[note.category] = (acc[note.category] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryCount),
    datasets: [
      {
        label: "Notas por Categoría",
        data: Object.values(categoryCount),
        backgroundColor: Object.keys(categoryCount).map(
          (category) => categoryColors[category] || "#ccc"
        ),
        borderWidth: 1,
      },
    ],
  };

  // Destruir gráfico previo si existe
  if (window.notesChartInstance) window.notesChartInstance.destroy();

  // Crear nuevo gráfico
  window.notesChartInstance = new Chart(ctx, {
    type: "bar",
    data,
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: "top" },
      },
    },
  });
}

// Delegación de eventos para edición y eliminación
notesContainer.addEventListener("click", (event) => {
  let target = event.target;

  // Si el clic ocurrió en el icono dentro del botón, ajustar el objetivo al botón
  if (target.tagName === "ION-ICON") {
    target = target.parentElement;
  }

  const index = target.dataset.index;

  if (target.classList.contains("edit-btn")) {
    openPopup(index); // Editar nota
  } else if (target.classList.contains("delete-btn")) {
    deleteNote(index); // Eliminar nota
  }
});
// Asignar eventos iniciales
newNoteButton.addEventListener("click", () => openPopup());
closeBtn.addEventListener("click", closePopup);
addNoteBtn.addEventListener("click", saveNote); // Guardar o actualizar nota
statsButton.addEventListener("click", () => toggleModal(true));
closeModal.addEventListener("click", () => toggleModal(false));
chartModal.style.display = "none"; // Asegurar que el modal esté cerrado al inicio
window.addEventListener("click", (event) => {
  if (event.target === chartModal) toggleModal(false);
});

// Inicializar la aplicación
displayNotes();

// Seleccionar elementos
const backgroundVideo = document.getElementById("background-video");
const changeBackgroundButton = document.getElementById("change-background");

// Lista de videos de fondo
const videoSources = [
  "media/Background1.mp4",
  "media/Background2.mp4",
  "media/Background3.mp4",
];

let currentVideoIndex = parseInt(localStorage.getItem("currentVideoIndex")) || 0;

// Cambiar video de fondo y guardar en localStorage
function changeBackground() {
  currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
  setVideoBackground(currentVideoIndex);
  localStorage.setItem("currentVideoIndex", currentVideoIndex);
}

// Configurar el video de fondo
function setVideoBackground(index) {
  const videoSource = videoSources[index];
  backgroundVideo.querySelector("source").src = videoSource;
  backgroundVideo.load();
}

setVideoBackground(currentVideoIndex);

changeBackgroundButton.addEventListener("click", changeBackground);

// Hamburguesa
document.getElementById("hamburger-menu").addEventListener("click", function () {
  const headerButtons = document.getElementById("header-buttons");
  headerButtons.classList.toggle("hidden");
});