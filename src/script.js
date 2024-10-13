// MODAL TASK 
const openModal = document.getElementById('openBag');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

// Abrir o modal
openModal.addEventListener('click', () => {
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
});

// Fechar o modal ao clicar no botão de fechar
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
});

// Fechar o modal ao clicar fora do conteúdo (no overlay)
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
});