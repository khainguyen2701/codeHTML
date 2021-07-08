

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
const icon = $('.icon');
const sidebar = $('#sidebar');
icon.addEventListener('click',function(){
    sidebar.classList.toggle('show');
})
//scroll header
window.onscroll = function() {scrollFunction()};
function scrollFunction()
{
    if(document.body.scrollTop>200|| document.documentElement.scrollTop > 50)
    {
        document.querySelector('header').style.background='rgba(26, 119, 71, 0.4)';
    }
    else {
        document.querySelector('header').style.background='transparent';
      }
}

//tabUI

const tabs = $$('.tab-item');
const line = $('.tabs .line');
const panes = $$('.tab-pane');
const tabActive = $('.tab-item.active');
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach(function(tab,index){
    const pane = panes[index];
    tab.onclick = function()
    {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
        this.classList.add("active");
        pane.classList.add("active");
    }
})



//slide
var slideIndex = 1;
 showSlides(slideIndex);
function plusSlides(n) {
   showSlides(slideIndex += n);
 }
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slides[slideIndex-1].style.display = "block";
 }