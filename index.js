const menuButton = document.querySelector('.menu');
const closeButton = document.querySelector('.close');

let menuIsToggled = false;

menuButton.addEventListener('click', () => {
    // showMobileNav();
    if (!menuIsToggled) {
        menuIsToggled = true;
        closeButton.style.opacity = '1';
        menuButton.style.opacity = '0';
        closeButton.style.zIndex = '100';


        document.querySelector('.mobile-nav').style.zIndex = '100';
        // alert(menuIsToggled);
    }
});

closeButton.addEventListener('click', () => {
    if (menuIsToggled) {
        menuIsToggled = false;
        closeButton.style.opacity = '0';
        closeButton.style.zIndex = '-2';
        menuButton.style.opacity = '1';


        document.querySelector('.mobile-nav').style.zIndex = '-2';
        document.querySelector('.mobile-intro-image').style.zIndex = 1

        // alert(menuIsToggled);
    }
});


function checkWidth() {
    if (window.matchMedia('(min-width: 1000px)').matches) {
        mobileImage.innerHTML = '';
        rightSide.innerHTML = '';

        document.querySelector('.div').innerHTML = `
        <img src="images/bg-pattern-intro-right-desktop.svg" alt="intro-right-pattern" class="desktop-right-pattern">
        <img src="images/bg-pattern-intro-left-desktop.svg" alt="intro-left-pattern" class="desktop-left-pattern">

        `
    
        document.querySelector('.find-out-pattern-container').innerHTML =`
        <img src="images/bg-pattern-how-we-work-desktop.svg" alt="" class="find-out-pattern">
        `

    } else {
        // mobileImage.innerHTML = `
        //   <img src="images/image-intro-mobile.jpg" class="image">
        // `;
        document.querySelector('.div').innerHTML = `
        <img src="images/bg-pattern-intro-right-mobile.svg" alt="intro-right-pattern" class="mobile-right-pattern">
        <img src="images/bg-pattern-intro-left-mobile.svg" alt="intro-left-pattern" class="mobile-left-pattern">
        `
    
        document.querySelector('.find-out-pattern-container').innerHTML =`
        <img src="images/bg-pattern-how-we-work-mobile.svg" alt="" class="find-out-pattern">
        `

    }    
}




window.addEventListener('resize', checkWidth);

// Initial check on page load
checkWidth();
