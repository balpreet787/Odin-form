const password = document.querySelector('.password');
const confirmPassword = document.querySelector('#confirm_password');
const message = document.getElementById('message');

password.addEventListener("keyup", ()=> {
    if (password.value ==
      confirmPassword.value) {
        message.style.cssText = 'color:green; font-size:20px;';
        message.textContent = '✅';
    } else {
        message.style.cssText = 'color:red; font-size:20px;';
        message.textContent = '❌';
    }
  });

  confirmPassword.addEventListener("keyup", ()=> {
    if (password.value ==
      confirmPassword.value) {
        message.style.cssText = 'color:green; font-size:20px;';
        message.textContent = '✅';
    } else {
        message.style.cssText = 'color:red; font-size:20px;';
        message.textContent = '❌';
    }
  });