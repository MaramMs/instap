const data = [
  {
    image: "./images/header-item.png",
    title:'One CARD that does it all!',
    desc:'Not just for in-person meetings, BUT also for online networking and virtual events. compatible with all modern smartphones, apple and android.'
    
  },
  {
    image: "./images/header-item2.jpg",
    title:'Effortless Networking',
    desc:'Say goodbye to manual contact exchanges and hello to effortless networking with a simple tap.'
  },
  {
    image: "./images/header-item3.jpg",
    title:'Personalized Branding',
    desc:"Showcase your individuality and personal brand with INSTAP's customizable NFC cards."
  },
];

const sliderContent = document.querySelector(".slider-content");
const sliderOverInfo = document.querySelector('.slider-item-over');
const itemDots = document.querySelector(".item-dots");

// Create the previous arrow
const prevArrow = document.createElement("span");
prevArrow.classList.add("prev-arrow");
prevArrow.innerHTML = `
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 8.5L8 2L14.5 8.5" stroke="#494949" stroke-width="1.5" />
    </svg>
  `;
prevArrow.addEventListener("click", () => {
  // Get the index of the currently displayed slide
  let currentSlideIndex = [...document.querySelectorAll(".slider-item"), ...document.querySelectorAll('.item-over-info')].findIndex((item) => item.style.display === "block");

  // Calculate the index of the previous slide
  let prevSlideIndex = currentSlideIndex - 1;
  if (prevSlideIndex < 0) {
    prevSlideIndex = data.length - 1;
  }

  // Hide all slider items
  document.querySelectorAll(".slider-item").forEach((item) => {
    item.style.display = "none";
  });

  // Show the previous slider item
  document.querySelectorAll(".slider-item")[prevSlideIndex].style.display =
    "block";

      // Hide all slider items
  document.querySelectorAll(".item-over-info").forEach((item) => {
    item.style.display = "none";
  });

  // Show the previous slider item
  document.querySelectorAll(".item-over-info")[prevSlideIndex].style.display =
    "block";


  // Remove the active class from all dots
  document.querySelectorAll(".item-dots span").forEach((item) => {
    item.classList.remove("active");
  });

  // Add the active class to the previous dot
  document
    .querySelectorAll(".item-dots span")
    [prevSlideIndex + 1].classList.add("active");
});
itemDots.appendChild(prevArrow);

// Create the navigation dots and slider items
data.forEach((item, index) => {
  const sliderItem = document.createElement("div");
  const itemOverItem = document.createElement('div');
  itemOverItem.classList.add('item-over-info')
  sliderItem.classList.add("slider-item");

  if (index !== 0) {
    itemOverItem.style.display='none'
    sliderItem.style.display = "none";
  }

  itemOverItem.innerHTML = `
  <h3>${item.title}</h3>
  <p>${item.desc}</p>

  <a href="/">Discover Our Cards
  <svg width="18" height="15" viewBox="0 0 18 15" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
          d="M0.5 7.72571C0.5 7.34601 0.782154 7.03222 1.14823 6.98255L1.25 6.97571L16.25 6.97571C16.6642 6.97571 17 7.31149 17 7.72571C17 8.1054 16.7178 8.4192 16.3518 8.46886L16.25 8.47571L1.25 8.47571C0.835786 8.47571 0.5 8.13992 0.5 7.72571Z"
          fill="#151515" stroke="#151515" />
      <path
          d="M9.67101 2.23278C9.37749 1.94051 9.37646 1.46564 9.66872 1.17212C9.93442 0.905279 10.351 0.880177 10.6451 1.0974L10.7294 1.16983L16.7794 7.19383C17.047 7.46032 17.0714 7.87843 16.8524 8.17251L16.7794 8.25673L10.7294 14.2817C10.4359 14.574 9.96105 14.573 9.66877 14.2795C9.40305 14.0127 9.37971 13.596 9.59817 13.3028L9.67096 13.2189L15.187 7.72501L9.67101 2.23278Z"
          fill="#151515" stroke="#151515" />
  </svg>
  `
  sliderItem.innerHTML = `
        <img src="${item.image}" alt="">
      `;
sliderOverInfo.appendChild(itemOverItem);
  sliderContent.appendChild(sliderItem);


  const dot = document.createElement("span");
  dot.textContent = "0" + (index + 1);
  dot.addEventListener("click", () => {
    // Remove the active class from all dots
    document.querySelectorAll(".item-dots span").forEach((item) => {
      item.classList.remove("active");
    });

    // Add the active class to the clicked dot
    dot.classList.add("active");

    // Hide all slider items
    document.querySelectorAll(".slider-item").forEach((item) => {
      item.style.display = "none";
    });

    // Show the selected slider item
    document.querySelectorAll(".slider-item")[index].style.display = "block"; 
     // Hide all slider items
     document.querySelectorAll(".item-over-info").forEach((item) => {
      item.style.display = "none";
    });

    // Show the selected slider item
    document.querySelectorAll(".item-over-info")[index].style.display = "block"; 
  
  
  });

  

  
  itemDots.appendChild(dot);

  if (index === 0) {
    dot.classList.add("active");
  }
});

// Create the next arrow
const nextArrow = document.createElement("span");
nextArrow.classList.add("next-arrow");
nextArrow.innerHTML = `
  <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M1.5 1.5L8 8L14.5 1.5" stroke="#494949" stroke-width="1.5" />
  </svg>
  `;
nextArrow.addEventListener("click", () => {
  // Get the index of the currently displayed slide

  let currentSlideIndex = [...document.querySelectorAll(".slider-item"), ...document.querySelectorAll('.item-over-info')].findIndex((item) => item.style.display === "block");


  // Calculate the index of the next slide
  let nextSlideIndex = currentSlideIndex + 1;
  if (nextSlideIndex >= data.length) {
    nextSlideIndex = 0;
  }

  // Hide all slider items
  document.querySelectorAll(".slider-item").forEach((item) => {
    item.style.display = "none";
  });

  // Show the next slider item
  document.querySelectorAll(".slider-item")[nextSlideIndex].style.display =
    "block";

      // Hide all slider items
  document.querySelectorAll(".item-over-info").forEach((item) => {
    item.style.display = "none";
  });

  // Show the next slider item
  document.querySelectorAll(".item-over-info")[nextSlideIndex].style.display =
    "block";

  // Remove the active class from all dots
  document.querySelectorAll(".item-dots span").forEach((item) => {
    item.classList.remove("active");
  });

  // Add the active class to the next dot
  document.querySelectorAll(".item-dots span")
    [nextSlideIndex + 1].classList.add("active");
});
itemDots.appendChild(nextArrow);

// Set the interval between slides in milliseconds
const slideInterval = 2000;

// Set an interval to show the next slide automatically
setInterval(() => {
  nextArrow.click();
}, slideInterval);

