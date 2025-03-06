    document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const contentclose = document.querySelector('.content');
    const socialMediaLink = document.getElementById('socialMediaLink');
    const socialMediaPopup = document.getElementById('socialMediaPopup');
    const closePopup = document.getElementById('closePopup');
    let Fbutton = document.getElementById("R-button");

    if (Fbutton) {
        Fbutton.addEventListener('click', () => {
            alert("Login Successfully");
        });
    }else{
        console.error("kuch to gadbad hai daya")
    }
   

    if (loginLink  && wrapper) {
        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');
        });
    } else {
        console.error('One or more elements are missing from the DOM.');
    }

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    socialMediaLink.addEventListener('click',()=>{
        socialMediaPopup.style.display = 'flex';
        
    })

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });

    btnPopup.addEventListener('click', () => {
        contentclose.style.display = 'none';
        content.classList.remove('hidden');
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.add('hidden');
        contentclose.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        socialMediaPopup.style.display = 'none';

    });

    document.addEventListener('click', function(event) {
        if (!socialMediaPopup.contains(event.target) && event.target !== socialMediaLink) {
            socialMediaPopup.style.display = 'none';
        }
    });
});
