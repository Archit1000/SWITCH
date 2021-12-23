function change() {
    var x  =document.getElementsById('light-text');
    if (x.innerHTML === "OFF") {
        x.innerHTML = "OFF" ; 
} else {
    x.innerHTML = "OFF";
}
var element = document.body;
element.classList.toggle("lights-on");
}
