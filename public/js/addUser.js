// DOM objects
const userNameEl = document.querySelector('#userName') 
const passwordEl = document.querySelector('#password')
const submitFormEl = document.querySelector('#submitForm');
// const NameEl = document.querySelector('');
console.log('hello i am in my js file');


const signupFormHandler = async (event) => 
{
    event.preventDefault();
    //const name = NameEl.value.trim();
    const userName = userNameEl.value.trim();
    const passwd = passwordEl.value.trim();

    if (/*name && */userName && passwd) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ email, passwd }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert(response.statusText);
        }
      }
    
    // if(userNameEl.value.trim() && passwordEl.value.trim())
    // {
    //     const response 
    //     console.log('username :', userNameEl.value.trim());
    //     console.log('password :', passwordEl.value.trim());
    // }
    // Get login information
    



}

submitFormEl.addEventListener("click", signupFormHandler);
