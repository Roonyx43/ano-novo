const targetDate = new Date('2025-01-01T00:00:00Z').getTime();
const countdownEl = document.getElementById('countdown');
const finalMessageEl = document.getElementById('finalMessage');
const container = document.getElementById('container');
const body = document.body

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
    clearInterval(countdownInterval);
    // Oculta o contador e exibe a mensagem final
    container.style.opacity = 0;
    setTimeout(() => {
        container.style.display = 'none';
        finalMessageEl.style.display = 'block';
        // Aqui você pode adicionar algo personalizado
        body.style.height = 'auto';
    }, 2000); // Espera 2 segundos antes de mostrar
    } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

function openModal() {
    const modal = document.getElementById('valeModal');
    modal.style.display = 'flex'; // Exibe o modal
  }

  function closeModal() {
    const modal = document.getElementById('valeModal');
    modal.style.display = 'none'; // Oculta o modal
  }
