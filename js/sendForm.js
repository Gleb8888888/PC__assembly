const sendForm = () => {
    const form = document.querySelector('.modal');
    form.addEventListener('submit', (event) => {
        event.preventDefault();//останавливаем стандартное поведение

        const text = form.querySelector('input[type=text]');
        const tel = form.querySelector('input[type=tel]');
        const email = form.querySelector('input[type=email]');

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {// method POST
            method: 'POST',
            body: JSON.stringify(sendObj),// отправляем данные превращая их в строку
            headers: {
                'Content-type': 'application/json; charset=UTF-8',// без этих headers сервер не примет данные
            },
        })
        .then(response => {
            if (response.status != 201) {
                throw new Error('Form error!')
            }
            return response.json()
        })
        .then(json => console.log(json))
        .catch(error => {// колбек перехватчик ошибок
            alert('Alert error (404)!!! Data not found. (>_<)')
        })
        .finally(() => {
            form.reset();
        })
    });
};
sendForm();


/* //***-------------Method GET---------------***
const sendForm = () => {
    const form = document.querySelector('.modal');
    form.addEventListener('submit', (event) => {
        event.preventDefault();//останавливаем стандартное поведение
        //console.log('submit');//вместо перезагрузки получаем строку 'submit'

        const text = form.querySelector('input[type=text]');
        const tel = form.querySelector('input[type=tel]');
        const email = form.querySelector('input[type=email]');

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        }
//{JSON} Placeholder, тестировать бекенд среду разработки
        fetch('https://jsonplaceholder.typicode.com/todos/4')// REST API
        .then(response => {
            if (response.status === 404) {
                throw new Error('Not found!')
            }
            return response.json()//запрашиваем видоизмененные данные с REST API
                                    //принимаем видоизменненные -//-
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {// колбек перехватчик ошибок
            console.warn(error.message);
        })
        .finally(() => {//в любом случае отработает
            console.log('finally');
        })
    });
};
sendForm();

//jsonplaseholder - https://jsonplaceholder.typicode.com/
//fetch - https://learn.javascript.ru/fetch
//formData - https://learn.javascript.ru/formdata
*/