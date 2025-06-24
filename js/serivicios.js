const servi = document.getElementById('servi')
fetch("data/datos.json")
    .then(response => response.json())
    .then(data =>{
        data.servicios.map((informacion)=>{
            servi.innerHTML +=
            `
                <div class="servicio ${informacion.fondo}" id="servicio">
                    <h2>${informacion.titulo}</h2>
                    <p>${informacion.descripcion}</p>
                    <p class="precio">${informacion.precio}</p>
                </div>
                
            `
        })
        
    })
