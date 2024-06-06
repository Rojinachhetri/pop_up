const viewDetailsButton = document.getElementById('view-details-button');
const roomDetailsPopup = document.getElementById('room-details-popup');
const closePopup = document.getElementById('close-popup');

viewDetailsButton.addEventListener('click', () => {
  roomDetailsPopup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  roomDetailsPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === roomDetailsPopup) {
    roomDetailsPopup.style.display = 'none';
  }
});
