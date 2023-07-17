//LOAD PARTICLES
window.onload = function()
{
  Particles.init({
    selector: '.background',
    maxParticles: 300,
    connectParticles: false
  });
};

//NAVBAR FUNCIONALITY
const main_navigation = document.querySelector(".main-navigation");
const overlay = main_navigation.querySelector(".overlay");
const toggler = main_navigation.querySelector(".navbar-toggler");

const open_sidenav = () => main_navigation.classList.add("active");
const close_sidenav = () => main_navigation.classList.remove("active");

toggler.addEventListener("click", open_sidenav);
overlay.addEventListener("click", close_sidenav);

document.addEventListener("swiped-right", open_sidenav);
document.addEventListener("swiped-left", close_sidenav);
/********************************************************************************************************/

//MUESTRA CV
$("#btnResume").on("click", function()
{
  $('#modal-resume').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});