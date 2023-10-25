var slider = document.getElementById("my-range");
var output = document.getElementById("demo");

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  console.log(this.value);
};
