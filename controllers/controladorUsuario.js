//consumiendo api para acceder a los dato de la bd

let url = "http://localhost:8080/storeapi/v1/usuario";

let peticion = {
  method: "GET",
  headers: {},
};

fetch(url, peticion)
  .then(function(respuesta) {
    return respuesta.json()
  })

  .then(function(respuesta) {
    console.log(respuesta)
    //recorriendo la respuesta para hacer render
    let fila = document.getElementById("fila")
    respuesta.forEach(function(usuario){
       
        let columna = document.createElement("div")
        columna.classList.add("col")
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card", "shadow", "h-100", "pb-5")

        let nombreUsuario = document.createElement("p")
        nombreUsuario.classList.add("text-center")
        nombreUsuario.textContent=usuario.nombres

        tarjeta.appendChild(nombreUsuario)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

        let cedulaUsuario = document.createElement("p")
        cedulaUsuario.classList.add("text-center")
        cedulaUsuario.textContent=usuario.cedula

        tarjeta.appendChild(cedulaUsuario)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

        let correoUsuario = document.createElement("p")
        correoUsuario.classList.add("text-center")
        correoUsuario.textContent=usuario.correo

        tarjeta.appendChild(correoUsuario)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

        
    })
  })

  .catch(function(respuesta) {
    console.log(respuesta);
  });
