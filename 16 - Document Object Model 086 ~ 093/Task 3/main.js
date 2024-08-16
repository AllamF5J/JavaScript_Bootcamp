let inputForm = document.querySelector("form input[type=number]");
let spanDollar = document.querySelector("form .Dollar");
let spanPound = document.querySelector("form .Pound");

inputForm.oninput = () => {
  spanDollar.innerHTML = inputForm.value;
  spanPound.innerHTML = (inputForm.value * 15.6).toFixed(2);
}