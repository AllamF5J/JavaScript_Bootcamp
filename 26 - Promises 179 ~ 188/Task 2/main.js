const getData = async (jsonLink) => {
  try {
    const response = await fetch(jsonLink);
    const result = await response.json();
    result.length = 5;

    for (let i = 0; i < result.length; i++) {
      document.write(`
      <div>
        <h3>${result[i].title}</h3>
        <p>${result[i].description}</p>
      </div>
      `)
    }
  } catch (reject) {
    document.body.prepend(document.createTextNode(reject));
  }
}

getData("../data.json");