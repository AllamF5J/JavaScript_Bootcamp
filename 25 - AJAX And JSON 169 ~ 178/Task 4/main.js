let myReqest = new XMLHttpRequest();
myReqest.open("GET", "../Task 1/articles.json");
myReqest.send();
myReqest.onreadystatechange = () => {
  if (myReqest.readyState === 4 && myReqest.status === 200) {
    let mainData = JSON.parse(myReqest.responseText);
    document.write(`<div id="data">`);
    for (let i = 0; i < mainData.length; i++) {
      document.write(`
          <div>
            <h2>${mainData[i].title}</h2>
            <p>${mainData[i].body}</p>
            <p>Author: ${mainData[i].author}</p>
            <p>Category: ${mainData[i].category}</p>
          </div>
        `)
    }
    document.write(`</div>`);
  }
};