$(document).ready(function(){
   $('.show-01, .show-02, .show-03, .show-04, .show-05, .show-06, .show-07, .show-08, .show-09, .show-10').hide();
   alert("working!");
  $(".income").on("mouseover", function(){
        $('body').addClass("gored");
   });
   $('.on-01').on("click", function(){
        $('.show-01').toggle();
   });
   $('.on-02').on("click", function(){
        $('.show-02').toggle();
   });
   $('.on-03').on("click", function(){
        $('.show-03').toggle();
   });
   $('.on-04').on("click", function(){
        $('.show-04').toggle();
   });
   $('.on-05').on("click", function(){
        $('.show-05').toggle();
   });
   $('.on-06').on("click", function(){
        $('.show-06').toggle();
   });
   $('.on-07').on("click", function(){
        $('.show-07').toggle();
   });
   $('.on-08').on("click", function(){
        $('.show-08').toggle();
   });
   $('.on-09').on("click", function(){
        $('.show-09').toggle();
   });
   $('.on-10').on("click", function(){
        $('.show-10').toggle();
   });
});
