const smothScroll = () => {
    const navbar = document.querySelector('.header__nav');
    const links = navbar.querySelectorAll('a');

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                /*  section.scrollIntoView({ // работает не на всех браузерах
                    block: 'start',
                    behavior: 'smooth'
                });*/
                seamless.scrollIntoView(section, { // работает на всех практически браузерах (библиотека)
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });
            };


        });
    });
};
smothScroll();