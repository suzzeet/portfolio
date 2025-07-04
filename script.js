document.addEventListener("DOMContentLoaded", () => {
    const about = document.querySelector(".about-container");
    if (about) {
        about.style.opacity = "1";
    }

    const cta = document.querySelector(".cta");
    const toast = document.getElementById("toast");
    if (cta && toast) {
        cta.addEventListener("click", () => {
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        });
    }

    const toggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('dark-mode', 'enabled');
            } else {
                localStorage.setItem('dark-mode', 'disabled');
            }
        });
    }
});