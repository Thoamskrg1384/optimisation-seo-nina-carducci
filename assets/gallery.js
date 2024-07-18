// Tableau des images
const pictures = [
  {
    url: "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.webp",
    category: "concerts",
    alt: "photo de la foule et de la scene à un concert",
  },
  {
    url: "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.webp",
    category: "entreprise",
    alt: "photo portrait d'un homme en costume",
  },
  {
    url: "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.webp",
    category: "entreprise",
    alt: "photo d'une femme qui sourit",
  },
  {
    url: "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.webp",
    category: "mariage",
    alt: "photo zoomée sur des mains avec des alliances",
  },
  {
    url: "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.webp",
    category: "portraits",
    alt: "photo portrait d'un homme noir les yeux fermés",
  },
  {
    url: "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.webp",
    category: "mariage",
    alt: "photo d'un couple de mariés qui marche en se regardant et en riant devant un palmier",
  },
  {
    url: "./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.webp",
    category: "portraits",
    alt: "photo portrait d'une jeune femme brune portant des lunettes de vue",
  },
  {
    url: "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.webp",
    category: "concerts",
    alt: "photo d'un chanteur le bras levé pendant un concert",
  },
  {
    url: "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.webp",
    category: "entreprise",
    alt: "photo portrait d'une femme riant devant son ordinateur portable",
  },
];

const galleryContainer = document.querySelector(".gallery");
const filterButtons = document.querySelectorAll(".nav-link");
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideIndex = 0; // Index de la diapositive actuelle dans la modale

document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.querySelector(".gallery");

  // Fonction pour initialiser la galerie avec toutes les images
  function initializeGallery() {
    pictures.forEach((picture, index) => {
      const img = document.createElement("img");
      img.src = picture.url;
      img.alt = picture.alt;
      img.classList.add("gallery-item");
      img.addEventListener("click", () => openModal(index));
      galleryContainer.appendChild(img);
    });
  }

  // Appeler la fonction pour initialiser la galerie au chargement de la page
  initializeGallery();

  // Fonction pour afficher les images en fonction de la catégorie sélectionnée
  function filterImages(category) {
    galleryContainer.innerHTML = ""; // Efface les images actuellement affichées

    pictures.forEach((picture, index) => {
      if (category === "tous" || picture.category === category) {
        const img = document.createElement("img");
        img.src = picture.url;
        img.alt = picture.alt;
        img.classList.add("gallery-item");
        img.addEventListener("click", () => openModal(index));
        galleryContainer.appendChild(img);
      }
    });
  }

  // Ajouter un gestionnaire d'événements à chaque bouton de filtre
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Mettre à jour les classes actives
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Récupérer la catégorie à filtrer depuis l'attribut data-category
      const category = button.getAttribute("data-category");

      // Filtrer et afficher les images en fonction de la catégorie sélectionnée
      filterImages(category);
    });
  });

  // Fonction pour ouvrir la modale avec l'image cliquée
  function openModal(index) {
    slideIndex = index;
    modal.style.display = "block";
    showSlide(slideIndex);
  }

  // Fermer la modale lorsque l'utilisateur clique en dehors de l'image
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Gestion du carousel d'images
  prevBtn.addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
  });

  nextBtn.addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
  });

  // Fonction pour afficher la diapositive spécifiée
  function showSlide(index) {
    const maxIndex = pictures.length - 1;
    if (index > maxIndex) {
      slideIndex = 0;
    }
    if (index < 0) {
      slideIndex = maxIndex;
    }

    const currentPicture = pictures[slideIndex];
    modalImg.src = currentPicture.url;
    modalImg.alt = currentPicture.alt;
    captionText.innerHTML = currentPicture.alt;
  }
});
