const noti = document.getElementById('noticias')
fetch("data/datos.json")
    .then(response => response.json())
    .then(data =>{
        data.noticias.map((informacion)=>{
            noti.innerHTML +=
            `
                <div class="noticia" id="noticia">
                    <h2>${informacion.titulo}</h2>
                    <p>${informacion.fecha}</p>
                    <p>${informacion.contenido}</p>
                </div>
                
            `
        })
        
    })
