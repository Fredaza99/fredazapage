document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuOverlay = document.getElementById("menu-overlay");
    const closeIcon = document.getElementById("close-icon");

    // Abrir e fechar o menu ao clicar no botão toggle
    menuToggle.addEventListener("click", () => {
        menuOverlay.classList.toggle("active");
    });

    // Fechar o menu ao clicar no botão de fechar
    closeIcon.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
    });

    // Fechar o menu ao clicar em qualquer link dentro do menu
    const menuLinks = document.querySelectorAll(".menu-links-mobile a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuOverlay.classList.remove("active");
        });
    });
});



document.querySelector('.cta-button').addEventListener('click', () => {
    window.location.href = 'https://wa.me/5541991717037';
});

window.addEventListener("scroll", () => {
    const scrollOffset = window.scrollY * 0.3; // Velocidade do paralaxe
    canvas.style.transform = `translateY(${scrollOffset}px)`;
});


document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill .progress");

    skills.forEach((skill, index) => {
        // Percentual de habilidade (modifique conforme necessário)
        const percentage = [47, 45, 30, 65, 45, 28][index];
        const offset = 283 - (283 * percentage) / 100; // Calcula o "offset" para o progresso

        skill.style.strokeDashoffset = offset; // Atualiza o progresso
    });
});




