const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const countElement = document.getElementById('count');

    // Initial count value
    let count = 1;

    // Function to update the count value and display it
    function updateCount(newCount) {
        count = newCount;
        countElement.textContent = count;
    }

    // Event listener for the decrement button
    decrementButton.addEventListener('click', function () {
        if (count > 1) {
            updateCount(count - 1);
        }
    });

    // Event listener for the increment button
    incrementButton.addEventListener('click', function () {
        updateCount(count + 1);
    });

// slider function 

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 16,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 50,
            },
        },
    });

    // Add an event listener for the slide change event
    swiper.on('slideChange', function () {
        // Remove the style from all slides
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
            slide.classList.remove('active-slide');
        });

        // Add a style to the active slide
        const activeSlide = slides[swiper.activeIndex];
        activeSlide.classList.add('active-slide');
    });
});

        
        



        let swiper = null;
    
        // Function to initialize or destroy Swiper based on screen width
        function initSwiper() {
            if (window.innerWidth <= 768) {
                // Initialize Swiper with different options for mobile
                swiper = new Swiper('.swiper2', {
                    slidesPerView: 1,
                    spaceBetween: 20, 
                    loop: true,
                });
            } else {
                // Initialize Swiper with different options for larger screens
                swiper = new Swiper('.swiper2', {
                    slidesPerView: 'auto',
                    spaceBetween: 18, 
                    loop: true,
                  
                });
            }
        }
    
        // Initialize Swiper when the page loads
        initSwiper();
    
        // Reinitialize Swiper when the window is resized
        window.addEventListener('resize', function () {
            if (swiper !== null) {
                swiper.destroy();
            }
            initSwiper();
        });
    
    

 