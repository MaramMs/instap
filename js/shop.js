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
                // Optional parameters
                centeredSlides: true,
                slidesPerView: 'auto',
                spaceBetween: 50,
                loop: true,
             
            });
        
         // Function to apply styles to the active slide
function setActiveSlideStyles() {
    // Remove the box shadow and background color from all slides
    document.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.style.boxShadow = 'none';
        slide.style.backgroundColor = '';
    });

    // Apply the desired background color and box shadow to the active slide
    const activeSlide = swiper.slides[swiper.activeIndex];
    activeSlide.style.backgroundColor = '#3C4045';
    activeSlide.style.borderRadius='50px';
    activeSlide.style.padding='10px'
    activeSlide.style.boxShadow = '0px 17.48385238647461px 13.987080574035645px 0px #00000011';

    // Add this line to apply the desired box-shadow to the active slide
    activeSlide.style.boxShadow = '0px 2.1660828590393066px 1.7328662872314453px 0px #00000008, 0px 5.2053985595703125px 4.164319038391113px 0px #0000000B, 0px 9.80130386352539px 7.841042518615723px 0px #0000000E, 0px 17.48385238647461px 13.987080574035645px 0px #00000011';

    // Center the active slide by adjusting the Swiper container's transform
    const containerWidth = swiper.container.offsetWidth;
    const activeSlideWidth = activeSlide.offsetWidth;
    const translateX = (containerWidth - activeSlideWidth) / 2;
    swiper.wrapper.style.transform = `translate3d(${translateX}px, 0, 0)`;
}

        
            // Initialize the styles for the active slide
            setActiveSlideStyles();
        
            // Add an event listener for the slide change event
            swiper.on('slideChange', setActiveSlideStyles);
        });
        


    // const swiper = new Swiper('.swiper2', {
    //     slidesPerView: 'auto',
    //     spaceBetween: 18, 
    //     loop: true,
      
    // });

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
    
    

 