const express = require("express");
const path = require("path");

const app = express();

// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Thank you! Message received.");
});

// start server (IMPORTANT FIX)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});


//sample
// Simple fade-in animation on scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s";
    observer.observe(section);
});

/* PROJECT POPUP */
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".case-card").forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = card.dataset.img;
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
    });
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
};

/* FILTER */
document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
        document.querySelector(".filter-pill.active").classList.remove("active");
        pill.classList.add("active");

        const filter = pill.dataset.filter;
        document.querySelectorAll(".case-card").forEach(card => {
            card.style.display =
                filter === "all" || card.dataset.category === filter
                ? "block"
                : "none";
        });
    });
});
