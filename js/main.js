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