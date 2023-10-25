let val = [0, 1, 2, 3, 4, 5];
var slider = document.getElementById("my-range");
var output = document.getElementById("demo");

function getClosest(arr, val) {
  return arr.reduce(function (prev, curr) {
    return Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev;
  });
}

output.innerHTML = slider.value;

slider.oninput = function () {
  let closest = getClosest(val, this.value);
  this.value = closest;
  output.innerHTML = this.value;
  console.log(this.value);
};
