const iconos = document.getElementById('iconos')
const acceso = document.getElementById('navBar2')
console.log(acceso)
fetch("../data/datos.json")
    .then(response => response.json())
    .then(data =>{
        data.social.map((link) => {
            iconos.innerHTML +=
            `
                <a href="#"><i class="${link.icon}"></i></a>
            `
        })
    })
