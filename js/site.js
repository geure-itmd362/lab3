// jQuery 3.x-style ready event and locally scoped $

$(document).ready(function () {
  jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
    $('#email').on('focus', function() {
      $('#input-email label').addClass('active');
    });
    $('#email').on('blur', function() {
      if($('#email').val().length == 0) {
        $('#input-email label').removeClass('active');
      }
    });

      //$("#alt-box").on("click", function () {
      //  if ($("#age-verification").prop("checked", true)) {
      //    $("#age-verification").prop("checked", false);
       //   $("#alt-box").html("<p>&#10004;</p>");
      //  } else {
      //    $("#age-verification").prop("checked", true);
       //   $("#alt-box").html("<p>&#32;</p>");
       // }
      //});


        $('#alt-box').click(function (event) {
        if (!(this.checked)) {
          $('#age-verification').prop('checked', true); //check 
          $("#alt-box").html("<p>&#10004;</p>");
        } else {
          $('#age-verification').prop('checked', false); //uncheck      
          $("#alt-box").html("<p>&#32;</p>");        
        }
    });

  });
});