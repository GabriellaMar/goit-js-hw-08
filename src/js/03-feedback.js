 throttle = require('lodash.throttle');
import throttle from 'lodash.throttle'

const feadBackForm = document.querySelector('.feedback-form')
// console.log(feadBackForm)
const emailInput = document.querySelector('input')
// console.log(emailInput)
const messageArea = document.querySelector('textarea')
// console.log(messageArea)

const emailEl = emailInput.addEventListener('input', onEmailInput)

function onEmailInput(e) {
    console.log(e.target.value)
}
const messageEl = messageArea.addEventListener('input', onEmailInput)

const formSubmit = feadBackForm.addEventListener("submit", onFormSubmit)


const LOCALSTORAGE_KEY = "feedback-form-state";


function onFormSubmit(event) {

    event.preventDefault();

    const formElements = event.currentTarget.elements;
    console.log(formElements)

    const mail = formElements.email.value;

    const message = formElements.message.value;
    
    let formData = {};

    if (mail !== '' && message !== '') {

        const formData = {
            email: mail,
            message: message
        }
        console.log(formData)

        // formEl.reset();
    }
    else {
        alert('Всі поля повинні бути заповнені.')
    }

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
}