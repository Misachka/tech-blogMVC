const signupFormHandler = async (event) => {
    event.preventDefault();
  //signup function
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
  
    if (email && username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name: username, email: email , password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
  // when succesfuly created a user, redirect to profile
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);