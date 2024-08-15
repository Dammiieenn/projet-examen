let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// Définition des événements de clic pour le bouton "Mentions légales" et la fermeture de la modale
let mentionsLegalesBtn = document.querySelector('.mentions-legales-btn');
let mentionsLegalesModal = document.querySelector('.mentions-legales-modal');
let closeModal = document.querySelector('.close-modal');

mentionsLegalesBtn.onclick = () => {
    mentionsLegalesModal.style.display = 'block';
}

closeModal.onclick = () => {
    mentionsLegalesModal.style.display = 'none';
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}