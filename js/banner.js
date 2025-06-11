const hero = document.getElementById('hero-content')
const h1Banner = document.getElementById('h1Banner')

fetch("../data/datos.json")
    .then(response => response.json())
    .then(data =>{
        data.banner.map((link) => {
            hero.innerHTML +=
            `
                <p>${link.info}</p>
                <a href="${link.url}" class="btn">${link.btn}</a>
            `
        })
    })