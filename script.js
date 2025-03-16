//your JS code here. If required.

// Get the modal element and buttons
const modal = document.querySelector('.modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtns = document.querySelectorAll('.close-modal');

// Function to open the modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';  // Show the modal by changing its display
});

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';  // Hide the modal by changing its display
}

// Close modal when clicking the close button inside the modal
closeModalBtns.forEach(button => {
  button.addEventListener('click', closeModal);
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

