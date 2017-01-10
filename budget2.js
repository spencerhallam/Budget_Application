$(document).ready(function(){
   $('li select').hide();
   alert("working!");
   $('form.ul li')each().on("click", function(){
        $('li select').show();
   });

});
