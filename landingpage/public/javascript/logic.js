$(document).ready(function() {

    $("a").click(function(e) {
      if(e.preventDefault)
        e.preventDefault();
      else
        e.stop();
    });


    $("#submit").click(function(){

    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

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
