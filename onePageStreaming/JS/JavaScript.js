
/*
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

*/


$(document).ready(function(){
  // $('#plus').click(function(){
  //   $("#hidden").toggle();

    $("#plus").click(function(){

    if(!$('#hidden').is(':visible'))
  {
    $("#hidden").css("display", "flex")
    $('#plus').val('moins de films')
  } else {
    $("#hidden").hide();
    $('#plus').val('plus de films')
    $ ('#plus').css('alignItem', 'center')
         }
     });

     $("#action").click(function(){
       $('.comedy').hide();
       $('.policier').hide();
       $('.action').show();
     })
     $("#policier").click(function(){
       $('.comedy').hide();
       $('.action').hide();
       $('.policier').show();
     })
     $("#comedy").click(function(){
       $('.action').hide();
       $('.policier').hide();
       $('.comedy').show();
      })

       $("#all").click(function(){
         $('.action').show();
         $('.policier').show();
         $('.comedy').show();
     })




    // $("#plusdeseries").click(function(){
    //      $("#hiddenseries").show();
    //       $('#plusdeseries').val('moins de films')
    //  });
    //  $("#plusdeseries").click(function(){
    //      $("hiddenseries").hide();
    //  });
    $("#plusdeseries").click(function(){

    if(!$('#hiddenseries').is(':visible'))
  {
    $("#hiddenseries").css("display", "flex");
    $('#plusdeseries').val('moins de series')
  } else {
    $("#hiddenseries").hide();
    $('#plusdeseries').val('plus de series')

         }
     });

     $("#action1").click(function(){
       $('.comedy1').hide();
       $('.policier1').hide();
       $('.action1').show();
     })
     $("#policier1").click(function(){
       $('.comedy1').hide();
       $('.action1').hide();
       $('.policier1').show();
     })
     $("#comedy1").click(function(){
       $('.action1').hide();
       $('.policier1').hide();
       $('.comedy1').show();
     })
     $("#all1").click(function(){
       $('.action1').show();
       $('.policier1').show();
       $('.comedy1').show();
      })
})







// $('.feat-movies-button').click(function(){
//   var category =$(this).attr('id');
//   if (category == 'all'){
//
//     $('.basic-rectangle6').addClass('hide');
//   $('.basic-rectangle6').removeClass('hide');
//     // setTimeout(function(){
//     //
//     // }, 300);
//   } else{
//
//     $('.basic-rectangle6').addClass('hide');
//       $('.' + category).removeClass('hide');
//   //   setTimeout(function(){
//   //
//   // })
// }












// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// };
// })
