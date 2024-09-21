<script src="index.js">
  document.addEventListener('DOMContentLoaded', function() {

  // Dynamic greeting message based on time of day
  function dynamicGreeting() {
    const greetingElement = document.querySelector('.first-h1');
    const currentHour = new Date().getHours();
    let greetingMessage = "We Care About Your Life";

    if (currentHour < 12) {
      greetingMessage = "Good Morning! Stay ahead of the elements.";
    } else if (currentHour < 18) {
      greetingMessage = "Good Afternoon! Stay prepared for your day.";
    } else {
      greetingMessage = "Good Evening! Get your forecast for tomorrow.";
    }

    greetingElement.textContent = greetingMessage;
  }

  // Sign-up button functionality
  const signUpButton = document.querySelector('.sign-up-button');
  signUpButton.addEventListener('click', function() {
    const inputField = document.querySelector('.input-field');
    if (inputField.value.trim() !== "") {
      alert(`Thank you for signing up, ${inputField.value}!`);
      inputField.value = '';  // Clear input field after sign-up
    } else {
      alert("Please enter a valid email.");
    }
  });

  // Play video functionality
  const playVideoButton = document.querySelector('.play-video');
  playVideoButton.addEventListener('click', function() {
    const videoSrc = "file:///C:/Users/Pius/Downloads/Weather%20Forecasts.mp4";
    const videoElement = document.createElement('video');
    videoElement.src = videoSrc;
    videoElement.setAttribute('controls', 'controls');
    document.body.appendChild(videoElement);
    videoElement.play();
  });

  // Subscribe button functionality
  const subscribeButton = document.querySelector('.book-now-button');
  subscribeButton.addEventListener('click', function() {
    alert('Thank you for subscribing! We will keep you updated.');
  });

  // Navigation functionality (smooth scroll to section)
  const navItems = document.querySelectorAll('.div-nav p');
  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const sectionName = item.textContent.trim().toLowerCase();
      const section = document.querySelector(`.${sectionName}-section`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Chatbot support functionality
  const chatbotButton = document.querySelector('.card-headingd');
  chatbotButton.addEventListener('click', function() {
    alert('Chatbot is currently online. How can we assist you?');
  });

  // Dynamic statistics update (fake increase for demo purposes)
  function updateStats() {
    const stats = document.querySelectorAll('.div-inner-box div');
    stats.forEach(function(stat) {
      const currentValue = parseInt(stat.textContent);
      stat.textContent = (currentValue + Math.floor(Math.random() * 10)).toString();
    });
  }

  // Call all functions
  dynamicGreeting();
  updateStats();
});
</script>
