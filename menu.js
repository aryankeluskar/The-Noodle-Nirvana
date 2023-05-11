if (screen.availWidth > screen.availHeight) {
    console.log("computer");
    document.write("<link rel=\"stylesheet\" href=\"menuL.css\" >")
} else {
    console.log("phone");
    document.getElementById("addBody").innerHTML = " H. No. 5-5-99/3, Sree Ram Nagar Colony, Kukatpally, <br> Hyderabad - 500072"
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}