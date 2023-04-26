document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const answer = document.querySelector('.answer');
    const element = document.querySelector('#my-button');
  
    element.addEventListener('click', handleClick);
    toggleBtn.addEventListener('click', () => {
      answer.classList.toggle('active');
      toggleBtn.classList.toggle('active');
      toggleBtn.innerHTML = toggleBtn.classList.contains('active') ? 'Hide Answer' : 'Show Answer';
    });
  });
  