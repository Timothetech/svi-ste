const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});

// Sélection des éléments
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".close-lightbox");

// On cible tous les boutons "voir" de la galerie
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // On récupère l'image et le titre de la carte parente
        const parent = btn.closest('.gallery-item');
        const img = parent.querySelector('img');
        const title = parent.querySelector('h4').innerText;

        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        captionText.innerHTML = title;
    });
});

// Fermer la lightbox au clic sur la croix
closeBtn.onclick = function() {
    lightbox.style.display = "none";
}

// Fermer au clic n'importe où en dehors de l'image
lightbox.onclick = function(e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
}