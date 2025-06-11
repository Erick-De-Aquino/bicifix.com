const navbar = document.getElementById('navBar')
fetch("../data/datos.json")
    .then(response => response.json())
    .then(data =>{
        data.navItems.map((link) => {
            navbar.innerHTML +=
            `
                <a href="${link.url}">${link.title}</a>
            `
            console.log(link.url);
        })
    })

    
    