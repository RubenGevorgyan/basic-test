import jokes from './scripts/random.js'

const routing = async()=> {
    let url = window.location.hash;
    let adress = url.split('/')[1];
    let body = document.getElementById("body")
    if (adress === "rand") {
        body.innerHTML= `<section class="section"><h1>  </h1></section>`
    }
    else {
        if (adress === "contactus") {
            body.innerHTML = `
        <section class="section">
            <h1> Contact Us </h1>
        </section>
    `
        }
        else {
            list.for_dropdown()
        }
    }
}
window.addEventListener('hashchange', routing);

window.addEventListener('load', routing);