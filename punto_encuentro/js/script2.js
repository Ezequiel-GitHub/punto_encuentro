function agregarUsuario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    let estado_academico = document.getElementsByName("estado_academico").value;
    let admin = true;
    let url = "backend/index.php?action=agregar_usuario&nombre=" + nombre + "&email=" + email + "&telefono=" + telefono + "&password=" + password + "&estado_academico=" + estado_academico + "&admin=" + admin
    console.log(url);

    //if (document.getElementById("password").value == document.getElementById("password2").value) {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data == true) {
                    alert("Registrado con exito");
                    window.location.href = "index.html";
                } else {
                    document.getElementById("nombre") = "";
                    document.getElementById("email") = "";
                    document.getElementById("telefono") = "";
                    document.getElementById("password") = "";
                    document.getElementById("password2") = "";
                    document.getElementById("estado_academico") = "";
                    alert("Error al registrarte")
                }
                alert(data);
            });
}