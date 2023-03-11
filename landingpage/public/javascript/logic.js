$(document).ready(function() {

    $("a").click(function(e) {
      if(e.preventDefault)
        e.preventDefault();
      else
        e.stop();
    });


    $("#submit").click(function(){

    });
    //
    // $(".clevaButton").click(function(){
    // alert("This is a test!")
    // //window.location=  window.location.host+'/philipa/www/codify/'
    // });

    $('#contactCleva').on('click', function () {
        localStorage.setItem('test', "This is a test");
        alert(localStorage.getItem('test'))
        // $('#clevaContactModal').trigger('hide')
    })

    $('#clevaContactModal').on('shown.bs.modal', function () {
        // alert("This was triggered")
        // $('#clevaContactModal').trigger('focus')
    })


});
