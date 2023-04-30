// DOM objects
const userNameEl = document.querySelector('#userName').value.trim()
// const emailEl = document.querySelector('#registerEmail').value.trim()
const passwordEl = document.querySelector('#password').trim()
const submitFormEl = document.querySelector('#submitForm');
//const signInButtonEl = document.querySelector('.signInButton');
console.log('hello i am in my js file');
const loginFormHandler = async (event) => 
{
    event.preventDefault();
    
    // Get login information
    console.log('frontendInfo:', event.target.textContent);



}

submitFormEl.addEventListener("click", loginFormHandler);
signInButtonEl.addEventListener("click", loginFormHandler);