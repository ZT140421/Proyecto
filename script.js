alert("Hola Somos Stellar X, y estamos encantados de tenerte aquí. Explora nuestro sitio y descubre todo lo que tenemos para ofrecer sobre lo ultimo en el mundo de la tecnologia. ")
window.addEventListener("DOMContentLoaded", function () {
    var usuarioN = localStorage.getItem("nombres")
    var usuarioA = localStorage.getItem("apellidos")

    if (usuarioN) {
        var registro = document.getElementById("registro")
        registro.textContent = usuarioN + " " + usuarioA
}
})
