// Essa função toggleMenu() faz o trabalho de mostrar e esconder o menu de navegação, criando um efeito "abrir/fechar" que é controlado pelo ícone de hambúrguer.

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}