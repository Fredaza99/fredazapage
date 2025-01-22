document.querySelector('.cta-button').addEventListener('click', () => {
    window.location.href = 'https://wa.me/SEUNUMERO';
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



