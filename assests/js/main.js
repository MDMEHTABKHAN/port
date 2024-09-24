/* Menu Show */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

//  remove menu on mobile 
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Section Active Link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

// SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,

});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 




document.querySelector('.contact__form').addEventListener('submit', function(e) {
    // Prevent the default form submission
    e.preventDefault(); 

    const form = this;
    const formData = new FormData(form);
    const responseMessage = document.getElementById('responseMessage');

    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // Check if the submission was successful
        if (data.success) {
            responseMessage.textContent = 'Thank you for your message! We will get back to you soon!.';
            // Optional: Change text color
            responseMessage.style.color = 'green'; 
            // Reset the form after successful submission
            form.reset(); 
        } else {
            responseMessage.textContent = 'Something went wrong. Please try again.';
            // Optional: Change text color
            responseMessage.style.color = 'red'; 
        }
    })
    .catch(error => {
        console.error('Error:', error);
        responseMessage.textContent = 'An error occurred. Please try again later.';
        // Optional: Change text color
        responseMessage.style.color = 'red'; 
    });
});