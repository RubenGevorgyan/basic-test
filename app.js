import random from './scripts/random.js'

const routing = async()=> {
    let jokes= new random()
    let url = window.location.hash;
    let adress = url.split('/')[1];
    let body = document.getElementById("body")
    if (adress === "rand") {
        await jokes.forConstruction()
        body.innerHTML=jokes.htmlGenerator();
        var selectElement = document.getElementById("selectElement")
        selectElement.addEventListener('change', jokes.getJoke );
    }
    else {
        if (adress === "search") {
            body.innerHTML = `
        <section class="section">
            <h1> Contact Us </h1>
        </section>
    `
        }
        if(url=="") {
            body.innerHTML="  "
        }
    }
}
window.addEventListener('hashchange', routing);

window.addEventListener('load', routing);