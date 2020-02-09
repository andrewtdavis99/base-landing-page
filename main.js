// A click function to display a message if the user has not entered a email in the text box provided

var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$("#button1").click(function (e) {
    email = document.getElementById("email").value;
    if (!regex.test(email)) {
        $("#invalid-email").css("visibility", "visible");
        $(".img-error").css("visibility", "visible");
        return false;
    }
});