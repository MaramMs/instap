const data = [
  {
    image: "./images/header-item.png",
  },
  {
    image: "./images/header-item2.jpg",
  },
  {
    image: "./images/header-item3.jpg",
  },
];

const sliderContent = document.querySelector(".slider-content");
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
  let currentSlideIndex = [...document.querySelectorAll(".slider-item"),].findIndex((item) => item.style.display === "block");

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
  sliderItem.classList.add("slider-item");

  if (index !== 0) {
    sliderItem.style.display = "none";
  }

  sliderItem.innerHTML = `
        <img src="${item.image}" alt="">
      `;

  sliderContent.appendChild(sliderItem);

  console.log(sliderContent, "slider");

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
  let currentSlideIndex = [
    ...document.querySelectorAll(".slider-item"),
  ].findIndex((item) => item.style.display === "block");

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
