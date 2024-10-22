// Get all the read more buttons
const readMoreButtons = document.querySelectorAll('.read-more');

// Get all modals
const modals = document.querySelectorAll('.modal');

// Initialize Owl Carousel when the document is ready
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1, // Number of items
        loop: true, // Infinite loop
        dots: true, // Show dots below the carousel
        autoplay: true, // Enable autoplay
        autoplayTimeout: 5000, // Time between slides (ms)
        autoplayHoverPause: true // Pause on hover
    });
});

// Function to open modal and blur background
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
  document.body.classList.add('blur-background'); // Apply blur effect
}

// Function to close modal and remove blur
function closeModal(modal) {
  modal.style.display = 'none';
  document.body.classList.remove('blur-background'); // Remove blur effect
}

// Add click event to each "Read More" button
readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    openModal(modalId);
  });
});

// Add click event to close buttons
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

// Close modal if clicked outside the content area
window.onclick = function(event) {
  modals.forEach(modal => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
}
