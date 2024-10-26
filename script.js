const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');
    const form = document.getElementById('signupForm');

    // Email validation
    emailInput.addEventListener('input', () => {
      const emailValue = emailInput.value;
      if (emailValue.length < 4 || !emailValue.includes('@') || !emailValue.includes('.')) {
        emailError.textContent = 'Make sure email is more than 3 characters and has @ and .';
        successMessage.textContent = '';
      } else {
        emailError.textContent = '';
        checkAllValid();
      }
    });

    // Password validation
    passwordInput.addEventListener('input', () => {
      const passwordValue = passwordInput.value;
      if (passwordValue.length < 9) {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        successMessage.textContent = '';
      } else {
        passwordError.textContent = '';
        checkAllValid();
      }
    });

    // Check if both email and password are valid
    function checkAllValid() {
      if (!emailError.textContent && !passwordError.textContent) {
        successMessage.textContent = 'All good to go!';
      }
    }

    // Handle form submission
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent page reload

      if (!emailError.textContent && !passwordError.textContent) {
        const confirmation = confirm('Are you sure you want to sign up?');
        if (confirmation) {
          alert('Successful signup!');
          form.reset(); // Clear all input fields
          successMessage.textContent = '';
        } else {
          successMessage.textContent = '';
        }
      }
    });