const modal = () => {
    const modalBtn = document.querySelector(".modal__button");
    const modal = document.querySelector(".modal");
    const courseButton = document.querySelector(".course__button");
    const modalInner = document.querySelector(".modal__inner");

    modalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    });
    courseButton.addEventListener("click", () => {
    modal.style.display = "flex";
    });
    modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner");
    if (!modalContent) {
        modal.style.display = "";
    }
    });

    const closedBtn = document.createElement("img");
    closedBtn.classList.add("close");
    modalInner.prepend(closedBtn);
    closedBtn.style.cssText = `
        width: 20px;
        height: 20px;
        margin-left: 110%;
        background-image: url(img/close1.svg);
        cursor: pointer;
        border-radius: 50%;
        border: 1px solid #fff;
	`;
    closedBtn.addEventListener("click", () => {
    modal.style.display = "";
    });
};
modal();

/*
const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const modalInner = modal.querySelector('.modal__inner');

modalInner.style.position = 'relative'

const addCloseBtn = () => {
    const closeBtn = document.createElement.bind('div')// Не отображает в браезере
    closeBtn.classList.add('close-button')

    closeBtn.innerHTML = '&times'
    modalInner.style.position = 'absolute'
    modalInner.style.right = '10px'
    modalInner.style.top = '10px'
    modalInner.style.padding = '3px'
    modalInner.style.width = '20px'
    modalInner.style.height = '20px'
    modalInner.style.fontSize = '26px'
    modalInner.style.cursor = 'pointer'
    modalInner.style.display = 'flex'
    modalInner.style.justifyContent = 'center'
    modalInner.style.alignItems = 'center'

    modalInner.append(closeBtn)

    closeBtn.addEventListener('click', () => {
        modal.style.display = ''
    })
}

modalBtn.addEventListener('click', () => {
	modal.style.display = 'flex'
})

modal.addEventListener('click', (event) => {
	const modalContent = event.target.closest('.modal__inner')

	if (!modalContent) {
		modal.style.display = ''
	}
})
*/
