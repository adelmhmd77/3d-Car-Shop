var li = document.querySelectorAll(".products li");
var cart = document.getElementById("contnt");
var price = document.getElementById("price");

var pnum = document.getElementById("num");
var total = 0;
var count = 0;
li.forEach(function (item) {
  item.onclick = function () {
    total += +item.getAttribute("price");
    count++;
    pnum.innerHTML = count;

    cart.innerHTML += item.querySelector("h3").innerHTML + "<br>";

    price.innerHTML = "Your Total Is: <br/> " + total + '$';
  };
});
