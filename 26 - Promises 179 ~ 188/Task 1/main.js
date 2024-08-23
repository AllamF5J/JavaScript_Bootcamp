const getData = (jsonData) => {
  return new Promise((resolve, reject) => {
    let myReqest = new XMLHttpRequest();

    myReqest.onload = () => {
      if (myReqest.readyState === 4 && myReqest.status === 200) {
        resolve(JSON.parse(myReqest.responseText));
      } else {
        reject(Error("Sorry, No Data Was Found."));
      }
    };
    myReqest.open("GET", jsonData);
    myReqest.send();
  });
};

getData("../data.json").then((result) => {
  result.length = 5;
  return result;
}).then((result) => {
  for (let i = 0; i < result.length; i++) {
    document.write(`
    <div>
      <h3>${result[i].title}</h3>
      <p>${result[i].description}</p>
    </div>
    `)
  }
  }).catch((reject) => {
      document.body.prepend(document.createTextNode(reject));
});