//sidebar menu
$(document).ready(function(){
    $('.icon').on('click',function(){
        $('#sidebar').toggleClass('show');
    })
})
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

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
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