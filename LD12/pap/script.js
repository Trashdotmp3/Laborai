function checkDiameter() {
    const diameterInput = document.getElementById('diameter');
    const errorMessage = document.getElementById('errorMessage');
  
    const diameterValue = parseFloat(diameterInput.value);
  
    if (isNaN(diameterValue) || diameterValue < 0) {
      errorMessage.textContent = 'Klaidingas diametro įvedimas. Įveskite teigiamą skaičių.';
      diameterInput.classList.add('error-input');
    } else {
      errorMessage.textContent = '';
      diameterInput.classList.remove('error-input');
    }
  }
  
  function calculateColor() {
    const diameterInput = document.getElementById('diameter');
    const diameterValue = parseFloat(diameterInput.value);
  
    if (isNaN(diameterValue) || diameterValue < 0) {
      alert('Klaidingas diametro įvedimas. Įveskite teigiamą skaičių.');
      return;
    }
  
    let color;
  
    if (diameterValue <= 7) {
      color = 'red';
    } else if (diameterValue > 7 && diameterValue <= 14) {
      color = 'orange';
    } else {
      color = 'green';
    }
  
    diameterInput.style.color = color;
  }
  