function myFunction() {
    var x = document.getElementById("navvy");
    if (x.className === "navbar navbar-static-top") {
        x.className += " responsive";
    } else {
        x.className = "navbar navbar-static-top";
    }
}