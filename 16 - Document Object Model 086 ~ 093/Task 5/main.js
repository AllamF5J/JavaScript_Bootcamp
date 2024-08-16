for (let i = 0, getImg = document.querySelectorAll("img"); i < getImg.length; i++) {
  getImg[i].hasAttribute("alt") ?
    getImg[i].alt = "Old" :
    getImg[i].setAttribute("alt", "Elzero New");
}