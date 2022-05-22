const userAction = async () => {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=GZDrXLQhN96rrD5lTopVQMhgJ61ekWfQRSchiIxV');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);

    document.querySelector("#root").innerHTML += `<h1 class="title">${myJson.title}</h1>`
    document.querySelector("#root").innerHTML += `<h2 class="date">${myJson.date}</h2>`
    document.querySelector("#root").innerHTML += `<img class="hdurl" src=${myJson.hdurl}>`   
    document.querySelector("#root").innerHTML += `<p class="explanation">${myJson.explanation}</p>`
    
    if (myJson.copyright = "undefined") {
        document.querySelector("#copy").innerHTML += `<p class="explanation">Anonymous</p>`
    }else{
        document.querySelector("#copy").innerHTML += `<p class="explanation">${myJson.copyright}</p>`
    }
}

userAction()