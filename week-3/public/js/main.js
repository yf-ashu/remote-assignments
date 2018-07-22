
// let btn={
//   change:()=>{
//     heroText.textContent="Have a Good Time!"
//   },
//   open:()=>{
//     document.querySelector('.sidenav--open').style.right =0 ;
//   },
//   close:()=>{
//     document.querySelector('.sidenav--open').style.right ='-100%';
//   },
//   action:()=>{
//     document.querySelector(".second").classList.toggle("hidden");
//   }
// }

// const heroText = document.querySelector('.hero__text');
// heroText.addEventListener('click', btn.change, false);
// const open= document.querySelector('.sidenav');
// open.addEventListener('click', btn.open, false);
// const close= document.querySelector('.closeBtn');
// close.addEventListener('click', btn.close, false);
// const action = document.querySelector('.main__button--action');
// action.addEventListener('click', btn.action, false);




$( document ).ready(function() {
  $( ".sidenav" ).click(function() {
    $(".sidenav--open").css("right","0");
  });
  $( ".closeBtn" ).click(function() {
    $(".sidenav--open").css("right","-100%");
  });
  $( ".hero__text" ).click(function() {
    $( ".hero__text" ).text( "Have a Good Time!" );
  });
  $( ".btn" ).click(function() {
    $( ".second" ).removeClass( "hidden" )
  });

});