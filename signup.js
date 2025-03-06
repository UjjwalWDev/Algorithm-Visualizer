    document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.register-link');
    const iconClose = document.querySelector('.icon-close');
    const socialMediaLink = document.getElementById('socialMediaLink');
    const socialMediaPopup = document.getElementById('socialMediaPopup');
    const closePopup = document.getElementById('closePopup');
    let Fbutton2 = document.getElementById("R-button2");

    if (Fbutton2) { 
        Fbutton2.addEventListener('click', () => {
            alert("Registered Successfully");
        });
    } else {
        console.error("kuch to gadbad hai daya");
    }

    if (registerLink && wrapper) {
        registerLink.addEventListener('click', () => {
            wrapper.classList.add('active');
        });
    } else {
        console.error('One or more elements are missing from the DOM.');
    }

    iconClose.addEventListener('click',()=>{
        window.location.href="/login"
    })
    socialMediaLink.addEventListener('click',()=>{
        socialMediaPopup.style.display = 'flex';
        
    })
    
    closePopup.addEventListener('click', function() {
        socialMediaPopup.style.display = 'none';

    });

    document.addEventListener('click', function(event) {
        if (!socialMediaPopup.contains(event.target) && event.target !== socialMediaLink) {
            socialMediaPopup.style.display = 'none';
        }
    });
});
