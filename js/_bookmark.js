export default function toggleBookmark() {
    const bookmarks = document.querySelectorAll('[data-js="bookmark_icon"]');
    bookmarks.forEach((bookmark_icon) => {
      let notSaved = true;
    
      bookmark_icon.addEventListener("click", () => {
        notSaved = !notSaved;
        bookmark_icon.src = notSaved
          ? "./Img/Bookmark-icon.png"
          : "./Img/bookmarkB.png";
      });
    });
  };