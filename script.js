// alert("Benvenuto da MeaLab - L'arte in Bottega!");
// Modal zoom immagini gallery
(function() {
// Crea la modal solo se non esiste
let modal = document.createElement('div');
modal.className = 'img-modal';
modal.innerHTML = `
<button class="img-modal-close" title="Chiudi">&times;</button>
<img src="" alt="Opera Ingrandita">
`;
document.body.appendChild(modal);

// Apri modal al click sulla gallery-img
document.addEventListener('click', function(e) {
let t = e.target;
if (t.classList.contains('zoomable')) {
modal.classList.add('open');
modal.querySelector('img').src = t.src;
}
if (t.classList.contains('img-modal-close') || t === modal) {
modal.classList.remove('open');
modal.querySelector('img').src = "";
}
});

// ESC per chiudere
document.addEventListener('keydown', function(e) {
if (e.key === "Escape") {
modal.classList.remove('open');
modal.querySelector('img').src = "";
}
});
})();