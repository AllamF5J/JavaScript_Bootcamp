let myReqest = new XMLHttpRequest();

myReqest.open("GET", "../Task 1/articles.json");
myReqest.send();

myReqest.onreadystatechange = () => {
  if (myReqest.readyState === 4 && myReqest.status === 200) {
    console.log(myReqest.responseText);
  }
};

myReqest.onloadend = function () {
  console.log("Data Loaded");
};