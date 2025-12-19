document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     PROJECT MODAL LOGIC
  ========================== */

  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const modalImage = document.getElementById("modal-image");
  const closeBtn = document.querySelector(".close-modal");

  const projectCards = document.querySelectorAll(".case-card");

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-title");
      const desc = card.getAttribute("data-desc");
      const img = card.getAttribute("data-img");

      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modalImage.style.backgroundImage = `url('${img}')`;

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  /* =========================
     PROJECT FILTER LOGIC
  ========================== */

  const filterPills = document.querySelectorAll(".filter-pill");

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      // Active state
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const filter = pill.textContent.toLowerCase();

      projectCards.forEach(card => {
        const tags = card.innerText.toLowerCase();

        if (filter === "all" || tags.includes(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  /* =========================
     SMALL UI ENHANCEMENTS
  ========================== */

  // Navbar shadow on scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
    } else {
      header.style.boxShadow = "none";
    }
  });
});
