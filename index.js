import toggleBookmark from "./js/_bookmark.js";
import toggleAnswer from "./js/_answerButton.js";
import navigation from "./js/switchSides.js";
//import profile from "./js/_profile.js";

toggleBookmark();
toggleAnswer();
navigation();
//profile();

// alte version
// const answer = document.querySelector('[data-js="answerButton"]');
// const wrong1 = document.querySelector('[data-js="wronganswer1"]');
// const wrong2 = document.querySelector('[data-js="wronganswer2"]');
// const wrong = document.querySelector('[data-js="wronganswer"]');

// answer.addEventListener("click", () => {

//         wrong1.classList.toggle("hidden");
//         wrong2.classList.toggle("hidden");
// });

// bookmarkicon.addEventListener('click', () => {
//     addColor('bookmarkicon');

//     });

//     function addColor(color) {
//         bookmarkicon.classlist.add(black);
//     };
