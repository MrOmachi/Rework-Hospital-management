$(document).ready(function() {

    $("a").click(function(e) {
      if(e.preventDefault)
        e.preventDefault();
      else
        e.stop();
    });

    customizeJotFormAndHideFooter()

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



});


const customizeJotFormAndHideFooter = () => {
    var iframe = document.querySelector('iframe'); //.contentDocument
    iframe.addEventListener("load", function() {
        var elmnt = iframe.contentWindow.document.getElementsByClassName("branding21")[0];
        elmnt.style.display = "none";

        console.log("here!!!!!!!")
        var formTitle = iframe.contentWindow.document.getElementById("header_1");
        console.log("Form tutle!!!", formTitle)
        formTitle.style.textAlign = 'center';
    });
}
