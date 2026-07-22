let datosOfertas = [];

addEventListener("DOMContentLoaded", mostrarOfertas)

function guardarOferta() {
    let titulo = document.getElementById("titulo").value;
    let puesto = document.getElementById("puesto").value;
    let direccion = document.getElementById("direccion").value; 
    let horario = document.getElementById("horario").value;
    let salario = document.getElementById("salario").value;
    let requisitos = document.getElementById("requisitos").value;
    let url = "backend/index.php?action=agregar_oferta&titulo=" + titulo + "&puesto=" + puesto + "&direccion=" + direccion + "&horario=" + horario + "&salario=" + salario + "&requisitos=" + requisitos
    console.log(url);
    fetch(url)
        .then(response => response.json())
        //true/false
        .then(data => {
            if (data == true) {
                alert("Oferta registrada con exito");
                mostrarOfertas();
            } else {
                alert("Error")
            }
            alert(data);
        });
document.getElementById("titulo").value = "";
document.getElementById("puesto").value = "";
document.getElementById("direccion").value = ""; 
document.getElementById("horario").value = "";
document.getElementById("salario").value = "";
document.getElementById("requisitos").value = "";
}

function mostrarOfertas() {
     let url = "backend/index.php?action=ofertas";
     console.log(url)
    fetch(url)
        .then(response => response.json())
        //true/false
        .then(data => {
                datosOfertas=data;
                let resultDiv = document.getElementById("resultado");
                let html = "";
               
                datosOfertas.map((oferta) => {
                html += 
                `<li> Titulo: ${oferta.titulo} |
                Puesto: ${oferta.puesto} |
                Direccion: ${oferta.direccion} |
                Horario ${oferta.horario} |
                Salario ${oferta.salario} |
                Requisitos ${oferta.requisitos} </li> `;
                })


                resultDiv.innerHTML = html;

            });
}
        
function mostrarOferta() {
    let titulo = document.getElementById("titulo").value;
    let url = "backend/index.php?action=oferta&titulo=" + titulo;
    
    fetch(url)
        .then(response => response.json())
        //true/false
        .then(data => {

                datosOfertas=data;
                let resultDiv = document.getElementById("resultado");
                let html = "";
               
                datosOfertas.map((oferta) => {
                html += 
                `<li> Titulo: ${oferta.titulo} |
                Puesto: ${oferta.puesto} |
                Direccion: ${oferta.direccion} |
                Horario ${oferta.horario} |
                Salario ${oferta.salario} |
                Requisitos ${oferta.requisitos} </li> `;
                })
                
                resultDiv.innerHTML = html;

        });
        
}

