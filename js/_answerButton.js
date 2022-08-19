 export default function toggleAnswer() {
    const _cards = document.querySelectorAll('[data-js="q_card"]');
    _cards.forEach((card) => {
        const answerButton = card.querySelector('[data-js="answer_Button"]');
       const wrong = card.querySelectorAll('[data-js="wronganswer"]');
        
        answerButton.addEventListener('click', () => {
         
           wrong.forEach((wrong) => {
              wrong.classList.toggle("hidden")});
            });
         }); 
      };