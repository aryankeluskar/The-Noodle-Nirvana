function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

if (screen.availWidth > screen.availHeight) {
    console.log("computer");
    document.write("<link rel=\"stylesheet\" href=\"homeL.css\" >")
} else {
    console.log("phone");
    document.write("<link rel=\"stylesheet\" href=\"homeM.css\" >")
}