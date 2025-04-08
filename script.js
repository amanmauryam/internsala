
const scrollContainer = document.querySelector(".scrolling-cards");
const scrollLeftBtn = document.querySelector(".scroll-left");
const scrollRightBtn = document.querySelector(".scroll-right");
const scrollReviewContainer = document.querySelector('.scrolling-cards-review')
const scrollReviewLeftBtn = document.querySelector('.scroll-review-left')
const scrollReviewRightBtn = document.querySelector('.scroll-review-right')

scrollLeftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -250, behavior: "smooth" });
});


scrollRightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 250, behavior: "smooth" });
});

scrollReviewLeftBtn.addEventListener('click',() =>{
    scrollReviewContainer.scrollBy({ left: -250, behavior: "smooth" });
});

scrollReviewRightBtn.addEventListener('click',() =>{
    scrollReviewContainer.scrollBy({ left: 250, behavior: "smooth" });
});