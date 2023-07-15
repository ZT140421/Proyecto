alert("Bienvenido a la seccion de registro, registrandote recibiras mas informacion acerca de nuestra pagina web.")
var form = document.getElementById("form")

form.addEventListener("submit", function(e){
    e.preventDefault()
    var nombres = document.getElementById("nombres").value
    var apellidos = document.getElementById("apellidos").value

    localStorage.setItem("nombres", nombres)
    localStorage.setItem("apellidos", apellidos)

    window.location.replace("../index.html")
    
})