let myReqest = new XMLHttpRequest();

myReqest.open("GET", "../Task 1/articles.json");
myReqest.send();

myReqest.onreadystatechange = () => {
  if (myReqest.readyState === 4 && myReqest.status === 200) {
    let mainData = JSON.parse(myReqest.responseText);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category = "All"
    }
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};