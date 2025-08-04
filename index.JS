let currentDisplay = '';
  const box = document.getElementById('box');
  const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
  const successSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");

  function appendValue(value) {
    clickSound.currentTime = 0;
    clickSound.play();
    currentDisplay += value;
    box.value = currentDisplay;
  }

  function clearDisplay() {
    clickSound.currentTime = 0;
    clickSound.play();
    currentDisplay = '';
    box.value = '';
  }

  function calculate() {
    try {
      const result = eval(currentDisplay);
      currentDisplay = result.toString();
      box.value = currentDisplay;
      const theme = document.body.classList.contains('light') ? 'flash-light' : 'flash-dark';
      box.classList.add(theme);
      successSound.currentTime = 0;
      successSound.play();
      setTimeout(() => box.classList.remove(theme), 300);
    } catch (error) {
      box.value = 'Error';
    }
  }

  function toggleTheme() {
    document.body.classList.toggle('light');
  }

  // For keyboard inputs
  document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (/\d/.test(key) || ['+', '-', '*', '/', '.'].includes(key)) {
      appendValue(key);
    } else if (key === 'Enter') {
      e.preventDefault();
      calculate();
    } else if (key === 'Backspace') {
      currentDisplay = currentDisplay.slice(0, -1);
      box.value = currentDisplay;
    } else if (key.toLowerCase() === 'c') {
      clearDisplay();
    }
  });

  box.value = '';