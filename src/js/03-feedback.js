 throttle = require('lodash.throttle');
import throttle from 'lodash.throttle'

// const feadBackForm = document.querySelector('.feedback-form')
// // console.log(feadBackForm)
// const emailInput = document.querySelector('input')
// // console.log(emailInput)
// const messageArea = document.querySelector('textarea')
// // console.log(messageArea)

//  emailInput.addEventListener('input', onInput)

//  messageArea.addEventListener('input', onInput)

//  feadBackForm.addEventListener("submit", onFormSubmit)

// const LOCALSTORAGE_KEY = "feedback-form-state";

// function onInput(e) {
//     console.log(e.target.value)
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
//     // e.target.value = localStorage.getItem(LOCALSTORAGE_KEY) || ""
// }

// function resetForm() {
//     feedbackForm.reset();
//     localStorage.removeItem(LOCALSTORAGE_KEY);
//   }


// function onFormSubmit(event) {

//     event.preventDefault();

//     // const formElements = event.currentTarget.elements;
//     // console.log(formElements)

//     const mail = emailInput.value;
//   const message = messageArea.value;
    

//         const formData = {
//             email: mail,
//             message: message
//         }
//         console.log(formData)

//         resetForm();
    

  
//     // updateOutput();
// }

// function updateOutput() {
//     const savedValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
//     if (savedValue) {
//       emailInput.value = savedValue.email;
//       messageArea.value = savedValue.message;
//     } else {
//       emailInput.value = '';
//       messageArea.value = '';
//     }
//   }
//   updateOutput()
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageArea = document.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";

function onInput(e) {
   const formData = {
     email: emailInput.value,
     message: messageArea.value
   };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function resetForm() {
  feedbackForm.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function  onFormSubmit() {
  const savedValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedValue) {
    emailInput.value = savedValue.email;
    messageArea.value = savedValue.message;
  }
}

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const mail = emailInput.value;
  const message = messageArea.value;
  const formData = {
    email: mail,
    message: message
  };
  console.log(formData);
  resetForm();
});

emailInput.addEventListener('input', onInput);
messageArea.addEventListener('input', onInput);

onFormSubmit();