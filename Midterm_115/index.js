

fetch("./data.json")
.then(response => response.json())
.then(mylanguages => loadLanguages(mylanguages));


function loadLanguages(mylanguages){
    var mainContainer = document.getElementById("codinglanguages");

    console.log(mylanguages)

    for(let i = 0; i < mylanguages.languages.length; i++){
        let title = mylanguages.languages[i].title;
        let year = mylanguages.languages[i].year;
        let url = mylanguages.languages[i].url;

        console.log(title);

        //construct the HTML document
        let division = document.createElement("div");

        division.innerHTML = `
        <h3>${title}
        ${year}
        <img src = ${url} width="250" />
            `;

        mainContainer.appendChild(division);
    }
}

function randomizer(){
    let rando = Math.floor(Math.random() *3);

    console.log(rando);
    if(rando ===1 ){
        window.location.href="./java.html";
    } 
    else if (rando ===2){
        window.location.href="./python.html";    
    }
    else{
        window.location.href="./javascript.html";    
    }
}