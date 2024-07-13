const burger=document.querySelector('#burger');
const mobileNavigation=document.querySelector('.mobileOnly');

burger.addEventListener('click', function(){
   mobileNavigation.classList.toggle('hidden');
   mobileNavigation.classList.toggle('flex');
});


