let slideIndex = 0;

// 顯示輪播圖的函數
function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const wrapper = document.querySelector(".slideshow-wrapper");
    const totalSlides = slides.length;

    // 循環處理超出範圍的 slideIndex
    if (slideIndex >= totalSlides) { 
        slideIndex = 0; 
    }
    if (slideIndex < 0) { 
        slideIndex = totalSlides - 1; 
    }

    // 更新幻燈片位置
    wrapper.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// 下一張或上一張幻燈片的控制函數
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

// 初始化輪播圖
document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});

// 商品輪播相關的變量與邏輯
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let currentIndex = 0;
const itemsToShow = 4; // 一次顯示的商品數量

// 更新商品輪播的函數
function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    const offset = -currentIndex * (itemWidth + 20); // 考慮到每個項目之間的間距
    track.style.transform = `translateX(${offset}px)`;
}

// 點擊 "下一張" 按鈕事件
nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - itemsToShow) {
        currentIndex++;
        updateCarousel();
    }
});

// 點擊 "上一張" 按鈕事件
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// 初始化商品輪播
updateCarousel();
