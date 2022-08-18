export default function navigation() {
  const homePage = document.querySelector('[data-js="questioncard"]');
  const bookmarkPage = document.querySelector('[data-js="bookmark"]');
  const profilePage = document.querySelector('[data-js="profile"]');
  const creatPage = document.querySelector('[data-js="creat"]');

  const pages = [homePage, bookmarkPage, profilePage, creatPage];

  const navHome = document.querySelector('[data-js="icons-home"]');
  const navBookmark = document.querySelector('[data-js="icons-bookmark"]');
  const navProfile = document.querySelector('[data-js="icons-profile"]');
  const navAdd = document.querySelector('[data-js="add__icon"]');

  navHome.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    homePage.classList.remove("hidden");
  });

  navBookmark.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    bookmarkPage.classList.remove("hidden");
  });

  navProfile.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    profilePage.classList.remove("hidden");
  });

  navAdd.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    creatPage.classList.remove("hidden");
  });
}

//alte version
// navBookmark.addEventListener("click", () => {
//     bookmarkPage.classList.remove("hidden");
//     homePage.classList.add("hidden");
//     profilePage.classList.add("hidden");
//     creatPage.classList.add("hidden");
// });

// navProfile.addEventListener("click", () => {
//     profilePage.classList.remove("hidden");
//     homePage.classList.add("hidden");
//     bookmarkPage.classList.add("hidden");
//     creatPage.classList.add("hidden");
// });

// navAdd.addEventListener("click", () => {
//     creatPage.classList.remove("hidden");
//     homePage.classList.add("hidden");
//     bookmarkPage.classList.add("hidden");
//     profilePage.classList.add("hidden");
// });
// navHome.addEventListener("click", () => {
// homePage.classList.remove("hidden");
// bookmarkPage.classList.add("hidden");
// profilePage.classList.add("hidden");
// creatPage.classList.add("hidden");
// });

// const questioncard = document.querySelectorAll('[data-js="questioncard"]');
// const button_bookmark = document.querySelectorAll('[data-js="icons-bookmark"]');
// button_bookmark.addEventListener('click', () => {
// questioncard.forEach((questioncard) => {
//     questioncard.classList.add("hidden")});
//     bookmark.classList.remove("hidden");
// });
// };

// const divQuestionCard = document.querySelectorAll('[data-js="questioncard"]');
// divQuestionCard.forEach((questions) => {
//     const buttonBokmark = question.querySelector('[data-js="icons-bookmark"]');

//     buttonBokmark.addEventListener('click', () => {

//        divQuestionCard.forEach((questionCard) => {
//           questionCard.classList.setAttribute("hidden")});
//         });
//      });
