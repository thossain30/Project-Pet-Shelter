// DOM objects
const userNameEl = document.querySelector('#userName'); 
const passwordEl = document.querySelector('#password');
const emailEl = document.querySelector('#email');
const submitFormEl = document.querySelector('#submitForm');
// const NameEl = document.querySelector('');
console.log('hello i am in my js file');


// const signupFormHandler = async (event) => 
// {
//     event.preventDefault();
//     //const name = NameEl.value.trim();
//     const userName = userNameEl.value.trim();
//     const passwd = passwordEl.value.trim();
//     const email = emailEl.value.trim();
//     console.log("****************GENERATING DATA 1****************")
//     if ( email && userName && passwd) {
//       // console.log('Submitting info')
//       const response = await fetch('api/users/login', {
//        // const response = await fetch('/api/users', {
//           method: 'GET',
//           body: JSON.stringify({ userName, email, passwd }),
//           headers: { 'Content-Type': 'application/json' },
//         });
//         console.log('RESPONSE:',response)
//         if (response.ok) {
//           console.log("****************RESPONSE IS OK 1****************")
//           document.location.replace('/login');
//         } else {
//           alert(response.statusText," Failed to create profile");
//         }
//       }
    
// }

const signupFormHandler = async (event) => 
{
    event.preventDefault();
    //const name = NameEl.value.trim();
    const username = userNameEl.value.trim();
    const password = passwordEl.value.trim();
    const email = emailEl.value.trim();
    console.log("****************GENERATING DATA 1****************")
    if ( email && username && password) {
      // console.log('Submitting info')
      const response = await fetch('api/users/login', {
       // const response = await fetch('/api/users', {
          method:'POST',
          body: JSON.stringify({  username, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log('RESPONSE:',response)
        if (response.ok) {
          console.log("****************RESPONSE IS OK 1****************")
          document.location.replace('/login');
        } else {
          alert(response.statusText," Failed to create profile");
        }
      }
    
}

submitFormEl.addEventListener("click", signupFormHandler);
