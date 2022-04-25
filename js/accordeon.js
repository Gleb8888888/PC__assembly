const accordeon = () => {
    const contents = document.querySelectorAll(".program-line__content");

    contents.forEach((elem) => {
    const title = elem.querySelector(".program-line__title");

        title.addEventListener("click", () => {
            contents.forEach((elem1) => {
                const descr = elem1.querySelector(".program-line__descr");
                if (elem1 === elem) {
                descr.classList.add("active"); //descr.classList.toggle('active');
                } else {
                descr.classList.remove("active");
                }
            });
        });
    });
};
accordeon();

/*
const contents = document.querySelectorAll('.program-line__content')
const contentsDescr = document.querySelectorAll('.program-line_descr')

contents.forEach((elem) => {
const title = elem.querySelector('.program-line__title')
const descr = elem.querySelector('.program-line__descr')

//descr.style.transition = 'all .3s'
//descr.style.overflow = 'hidden'

title.addEventListener('click', () => {
    contentsDescr.forEach((tab) => {
        if (tab === descr) {
            tab.classList.add('active')
          //  tab.style.height = tab.scrollHeight + 'px';
        } else {
            tab.classList.remove('active')
           // tab.style.height = 0
        }
        })
    })
})
*/
