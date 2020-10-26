// navbar section
const navBtn = document.querySelector('.nav-menu-btn');
const navContainer = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');

let showMenu = false;

const toggleMenu = () => {
    if (!showMenu) {
        navContainer.classList.add('include');
        navBtn.classList.add('close');
        navMenu.classList.add('show');

        // reset showMenu state
        showMenu = true;
    }
    else {
        navContainer.classList.remove('include');
        navBtn.classList.remove('close');
        navMenu.classList.remove('show');

        showMenu = false;
    }
}

navBtn.addEventListener('click', toggleMenu);
// end of navbar section


// about pictures section
const aboutCounters = document.querySelectorAll('.about-counter');
const aboutPics = document.querySelectorAll('.about-pic-wrapper');

let aboutCounterIndex = 0;
let aboutPicIndex = 0;

const showAboutPic = () => {
    // show/change test
    aboutPics.forEach(pic => {
        pic.style.display = "none";
    });
    // change the pictures
    aboutPicIndex++;
    if (aboutPicIndex > aboutPics.length) {
        aboutPicIndex = 1;
    };

    // to change counter
    aboutCounters.forEach(counter => {
        counter.classList.remove("active");
    });
    // move to the next counter
    aboutCounterIndex++;
    if (aboutCounterIndex > aboutCounters.length) {
        aboutCounterIndex = 1;
    };

    aboutPics[aboutPicIndex - 1].style.display = "block";
    aboutCounters[aboutCounterIndex - 1].classList.add("active");

    setTimeout(showAboutPic, 4000);
}

showAboutPic();
// end of about-pictures section


// featured works section

const workSlides = document.querySelectorAll('.work-slide');
const workSlideCounters = document.querySelectorAll('.work-slide-counter');

let workCounterIndex = 0;
let workSlideIndex = 0;

const showSlide = () => {
        // show/change test
    workSlides.forEach(slide => {
    // slide.style.display = "none";
    slide.classList.remove("slide-current")
    });

        // change the pictures
    workSlideIndex++;
    if (workSlideIndex > workSlides.length) {
    workSlideIndex = 1;
    };

        // to change counter
    workSlideCounters.forEach(counter => {
    counter.classList.remove("active");
    });

    // move to the next counter
    workCounterIndex++;
    if (workCounterIndex > workSlideCounters.length) {
        workCounterIndex = 1;
    };

    // workSlides[workSlideIndex - 1].style.display = "block";
    workSlides[workSlideIndex - 1].classList.add("slide-current");
    workSlideCounters[workCounterIndex - 1].classList.add("active");

    setTimeout(showSlide, 4000);
}

showSlide();

// const workAutoScroll = false;
// const workIntervalTiming = 4000;
// let slideInterval;

// // function for next workslide 
// const workNextSlide = () => {
//    // grab the div with current class and counter
//    const currentSlide = document.querySelector('.slide-current');
//    const currentCounter = document.querySelector('.active');
//    // remove the class current
//    currentSlide.classList.remove("slide-current");
// //    currentCounter.classList.remove("active");

//    // check if their is a sibling div with class of slide
//    if (currentSlide.nextElementSibling) {
//      //if true we add current class to sibling
//      currentSlide.nextElementSibling.classList.add("slide-current");
//     //  currentCounter.nextElementSibling.classList.add('active');
//     } else {
//         // if we are on the last slide div, we want to add current to the first slide div
//         workSlides[0].classList.add("slide-current");
//         // workSlideCounter[0].classList.add('active');
//     }

//     // remove the current class after, with the timeout option
//     // setTimeout( () => {
//     //     currentSlide.classList.remove("slide-current");
//     //     // currentCounter.classList.remove("active");
//     // }, 2500);
// }

// // function for prev workslide
// const workPrevSlide = () => {
//     // grab the div with current class and counter
//    const currentSlide = document.querySelector('.slide-current');
//    const currentCounter = document.querySelector('.active');
//    // remove the class current
//    currentSlide.classList.remove("slide-current");
// //    currentCounter.classList.remove("active");

//    // check if their is a sibling div with class of slide
//    if (currentSlide.previousElementSibling) {
//     //if true we add current class to sibling
//     currentSlide.previousElementSibling.classList.add("slide-current");
//     // currentCounter.previousElementSibling.classList.add('active');
//    } else {
//        // if we are on the last slide div, we want to add current to the first slide div
//        workSlides[workSlides.length - 1].classList.add("current");
//     //    workSlideCounter[workSlideCounter.length - 1].classList.add('active');
//    }

//    // remove the current class after, with the timeout option
//    setTimeout( () => {
//     currentSlide.classList.remove("slide-current");
//     // currentCounter.classList.remove("active");
//     }, 2500);

// }

// workSlidePrev.addEventListener('click', (e) => {
//     console.log('hello there');
//     workPrevSlide();
//     if (workAutoScroll) {
//         clearInterval(slideInterval)
//         slideInterval = setInterval(workNextSlide, workIntervalTiming);
//         } 
//     }
// );
// workSlideNext.addEventListener('click', (e) => {
//     console.log('yo nigga');
//     workNextSlide();
//     if (workAutoScroll) {
//         clearInterval(slideInterval)
//         slideInterval = setInterval(workNextSlide, workIntervalTiming);
//         } 
//     }
// );

// // for auto slide
// if (workAutoScroll) {
//     // run next slide at interval time
//     slideInterval = setInterval(workNextSlide, workIntervalTiming);
// }

// // function for the next slide button
// const nextSlide = () => {
//     // grab the div with current class
//     const currentSlide = document.querySelector('.current');
//     // remove the class current
//     currentSlide.classList.remove("current");
//     // check if their is a sibling div with class of slide
//     if(currentSlide.nextElementSibling) {
//         //if true we add current class to sibling
//         currentSlide.nextElementSibling.classList.add("current");
//     } else {
//         // if we are on the last slide div, we want to add current to the first slide div
//         slides[0].classList.add("current");
//     }
//     // remove the current class after, with the timeout option
//     setTimeout( () => {currentSlide.classList.remove("current")}, 2500);
// }

// // function for the prev slide button
// const prevSlide = () => {
//     // grab the div with current class
//     const currentSlide = document.querySelector('.current');
//     // remove the class current
//     currentSlide.classList.remove("current");
//     // check if their is a sibling div with class of slide
//     if(currentSlide.previousElementSibling) {
//         //if true we add current class to sibling
//         currentSlide.previousElementSibling.classList.add("current");
//     } else {
//         // if we are on the last slide div, we want to add current to the first slide div
//         slides[slides.length - 1].classList.add("current");
//     }
//     // remove the current class after, with the timeout option
//     setTimeout( () => {currentSlide.classList.remove("current")}, 2500);
// }

// // button events
// btnNext.addEventListener( 'click', (e) => {
//     nextSlide();
//     // to avoid abrupt switch when autoScroll is true we clear the interval using clearInterval
//     if (autoScroll) {
//         clearInterval(slideInterval)
//         slideInterval = setInterval(nextSlide, intervalTiming);
//     }
// });
// btnPrev.addEventListener( 'click', (e) => {
//     prevSlide();
//     if (autoScroll) {
//         clearInterval(slideInterval)
//         slideInterval = setInterval(nextSlide, intervalTiming);
//     }
// });

// // for auto slide
// if (autoScroll) {
//     // run next slide at interval time
//     slideInterval = setInterval(nextSlide, intervalTiming);
// }

// end of slider section

