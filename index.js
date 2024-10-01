// Get elements
const signUpButton = document.getElementById('signUpButton');
const signUpForm = document.getElementById('signUpForm');
const closeButton = document.querySelector('.close-button');

// Show the form when the button is clicked
signUpButton.addEventListener('click', () => {
  signUpForm.style.display = 'block';
});

// Hide the form when the close button is clicked
closeButton.addEventListener('click', () => {
  signUpForm.style.display = 'none';
});

// Hide the form when clicking outside of the modal
window.addEventListener('click', (event) => {
  if (event.target === signUpForm) {
    signUpForm.style.display = 'none';
  }
});



// Get elements
const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');
const loginCloseButton = document.querySelector('.login-close-button');

// Show the form when the button is clicked
loginButton.addEventListener('click', () => {
  loginForm.style.display = 'block';
});

// Hide the form when the close button is clicked
loginCloseButton.addEventListener('click', () => {
  loginForm.style.display = 'none';
});

// Hide the form when clicking outside of the modal
window.addEventListener('click', (event) => {
  if (event.target === loginForm) {
    loginForm.style.display = 'none';
  }
});


document.getElementById('playButton').addEventListener('click',function() {
  var video = 
  document.getElementById('myVideo');
  if (video.paused) {
    video.play();
    this.style.display = 'none';
  }
});
