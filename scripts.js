const texts = ["Desenvolvedor Web", "Criador de Soluções", "Apaixonado por Tecnologia"];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let deletingSpeed = 100;
let isTyping = true;

const typedTextElement = document.getElementById("typed-text");

function typeText() {
  const currentText = texts[currentTextIndex];

  if (isTyping) {
    // Escrever o texto
    typedTextElement.textContent = currentText.substring(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex === currentText.length) {
      isTyping = false; // Troca para o modo de apagar
      setTimeout(typeText, 1000); // Espera 1 segundo antes de apagar
    } else {
      setTimeout(typeText, typingSpeed);
    }
  } else {
    // Apagar o texto
    typedTextElement.textContent = currentText.substring(0, currentCharIndex - 1);
    currentCharIndex--;

    if (currentCharIndex === 0) {
      isTyping = true; // Troca para o modo de digitação
      currentTextIndex = (currentTextIndex + 1) % texts.length; // Muda para o próximo texto
      setTimeout(typeText, 500); // Espera 0.5 segundos antes de começar a digitar novamente
    } else {
      setTimeout(typeText, deletingSpeed);
    }
  }
}

typeText(); // Inicia o efeito de digitação

    // Selecionando o ícone de menu e a lista de navegação
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.getElementById('nav-list');
    
    // Função para alternar o menu
    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
