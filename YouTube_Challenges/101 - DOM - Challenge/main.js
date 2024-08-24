let header = document.createElement("header");
let logo = document.createElement("div");
let ul = document.createElement("ul");
let div = document.createElement("div");
let footer = document.createElement("footer");

let liArray = [
  document.createElement('li'),
  document.createElement('li'),
  document.createElement('li'),
  document.createElement('li')
];

logo.setAttribute("class", "logo");
logo.innerHTML = "Elzero";
logo.style.cssText = "color: rgb(35, 169, 110); font-weight: bold; font-size: 26px";

liArray.forEach(li => {
  li.style.cssText = "display: block; padding-left: 25px";
});
liArray[0].innerHTML = "Home";
liArray[1].innerHTML = "About";
liArray[2].innerHTML = "Service";
liArray[3].innerHTML = "Contact";

ul.setAttribute("class", "menu");
ul.style.cssText = "list-style: none; padding: 0; display: flex; justify-content: right";
ul.append(...liArray);

header.append(logo);
header.append(ul);
header.setAttribute("class", "website-head");
header.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: #fff";

div.classList.add("content");
div.style.cssText = "box-sizing: border-box; display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; padding: 20px; min-height: calc(100vh - 142px)";

for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  let span = document.createElement("span");
  product.classList.add("product");
  product.style.cssText = "box-sizing: border-box; padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); text-align: center;color: rgb(136, 136, 136); border-radius: 6px";
  
  span.innerHTML = `${i + 1}`;
  span.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px";

  product.append(span);
  div.append(product);

  span.after("Product");
};


footer.classList.add("footer");
footer.innerHTML = "Copyright 2024";
footer.style.cssText = "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255)";

document.body.style.cssText = "margin: 0; background-color: rgb(236, 236, 236); font-family: Tahom, Arial; user-select: none";
document.body.prepend(footer);
document.body.prepend(div);
document.body.prepend(header);