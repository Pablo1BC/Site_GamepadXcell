const textContainer = document.getElementById('text-container');
const hackerTextContainer = document.getElementById('hacker-text');

const text = hackerTextContainer.textContent; // Use textContent para obter apenas o texto, excluindo formatações

let currentIndex = 0;

function updateText() {
  if (currentIndex <= text.length) {
    const displayedText = text.substring(0, currentIndex);
    textContainer.innerHTML = displayedText.replace(/\n/g, '<br>');
    if (currentIndex < text.length) {
      textContainer.innerHTML += '<span class="blinking">_</span>';
    }
    currentIndex++;
    setTimeout(updateText, 100); // Ajuste a velocidade aqui (em milissegundos)
  } else {
    textContainer.innerHTML = text.replace(/\n/g, '<br>');
  }
}

updateText();