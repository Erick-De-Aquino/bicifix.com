const navbar = document.getElementById('navBar2')
fetch("../data/datos.json")
    .then(response => response.json())
    .then(data =>{
        data.navItems2.map((link) => {
            let pre = ""
            if(link.title === "INICIO"){
                pre = "../"
            }else{
                pre = "../views/"
            }
            navbar.innerHTML +=
            `
                <a href="${pre}${link.url}">${link.title}</a>
            `
        })
    })

    
    
