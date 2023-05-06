const loginFormEl = document.querySelector('#submitLoginForm');




const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (userName && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  loginFormEl.addEventListener('click', loginFormHandler);