// Login Form
let loginForm = document.getElementById('loginForm') as HTMLFormElement | null;

if (loginForm) {
  loginForm.addEventListener('submit', async e => {
    e.preventDefault();
    let emailInput = document.getElementById('email') as HTMLInputElement;
    let passwordInput = document.getElementById('password') as HTMLInputElement | null;

    if (emailInput && passwordInput) {
      let email: string = emailInput.value;
      let password: string = passwordInput.value;

      try {
        const response = await fetch('http://localhost:8000/users');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log(data);

        const userExists = data.some(
          (user: any) => user.email === email && user.password === password,
        );

        if (userExists) {
          localStorage.setItem('email', email);
          window.location.href = '/Html/HomePage.html';
        } else {
          console.log('Email does not exist in API.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  });
}

// registration

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('RegisterForm') as HTMLFormElement | null;

  if (registerForm) {
    registerForm.addEventListener('submit', async e => {
      e.preventDefault();

      const registerEmailInput = document.getElementById(
        'registerEmail',
      ) as HTMLInputElement | null;
      const registerPasswordInput = document.getElementById(
        'registerPassword',
      ) as HTMLInputElement | null;
      const retypePasswordInput = document.getElementById(
        'retype_password',
      ) as HTMLInputElement | null;

      if (registerEmailInput && registerPasswordInput && retypePasswordInput) {
        let registerEmail: string = registerEmailInput.value;
        let registerPassword: string = registerPasswordInput.value;
        let retypePassword: string = retypePasswordInput.value;

        if (registerPassword !== retypePassword) {
          const errorTxt: HTMLElement | null = document.getElementById('errorTxt');
          if (errorTxt) {
            errorTxt.textContent = 'Passwords do not match';
          } else {
            console.log('Cannot find errorTxt element');
          }
          return;
        }
        try {
          const checkEmailResponse = await fetch(
            `http://localhost:8000/users?email=${registerEmail}`,
          );
          if (!checkEmailResponse.ok) {
            throw new Error('Error checking email availability');
          }
          const existingUsers = await checkEmailResponse.json();
          if (existingUsers.length > 0) {
            const errorTxt: HTMLElement | null = document.getElementById('errorTxt');
            if (errorTxt) {
              errorTxt.textContent = 'Email already registered';
            } else {
              console.log('Cannot find errorTxt element');
            }
            return;
          }

          const registerResponse = await fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: registerEmail,
              password: registerPassword,
            }),
          });

          if (!registerResponse.ok) {
            throw new Error('Registration failed');
          }

          window.location.href = '/Html/Login.html';
        } catch (error) {
          console.error('Error registering user:', error);
          alert('Registration failed');
        }
      }
    });
  }
});
