$(document).ready(function(){
   $('.show-select').hide();
   alert("working!");
  $(".income").on("mouseover", function(){
        $('body').addClass("gored");
   });
   $('.calc-form li').on("mouseover", function(){
        $('.show-select').toggle();
   });
});
