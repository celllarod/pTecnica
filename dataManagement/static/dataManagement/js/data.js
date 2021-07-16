// Petición AXIOS para obtener todos los elementos de la tabla
// Se ha usado AXIOS en lugar de AJAX
axios.get("http://127.0.0.1:8000/monitoring-api/")
  .then(response => {
    console.log('Success: ', response.data); // response.data ya es un JSON
    fillTable(response.data)
  }, error => {
    console.log(error);
    fillTable(response.data)
  });


// Procesa resultado de la petición de todos los elementos de la tabla y rellena tabla http
// TODO: considerar cuando se produzca algún error (mostrar de otra forma)
function fillTable(data){
    if (data.error) {
        alert(data.error);
    } else {
        var tdiv = document.getElementById("tmeasures-div")
        var tbody = document.getElementById("tmeasures-body")
        // showLoading(tdiv);

        // Insertamos filas en la tabla con el contenido de  'data'
        for (elem in data){
            // Creamos elementos de la tabla
            var fila = document.createElement("tr")
            var id = document.createElement("th")
            var date_hour = document.createElement("td")
            var energy = document.createElement("td")
            var reactive_energy = document.createElement("td")
            var pow = document.createElement("td")
            var maximeter = document.createElement("td")
            var reactive_power = document.createElement("td")
            var voltage = document.createElement("td")
            var intensity = document.createElement("td")
            var power_factor = document.createElement("td")
            var editar = document.createElement("td")
            var eliminar = document.createElement("td")

            fila.id = "fila-" + data[elem].id

            id.innerHTML = data[elem].id
            date_hour.innerHTML = data[elem].date_hour
            energy.innerHTML = data[elem].energy
            reactive_energy.innerHTML = data[elem].reactive_energy
            pow.innerHTML = data[elem].pow
            maximeter.innerHTML = data[elem].maximeter
            reactive_power.innerHTML = data[elem].reactive_power
            voltage.innerHTML = data[elem].voltage
            intensity.innerHTML = data[elem].intensity
            power_factor.innerHTML = data[elem].power_factor
            editar.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">' +
            '  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>' +
            '  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>' +
            '</svg>'
            eliminar.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">' +
            '    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>' +
            '    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>' +
            '</svg>'

            fila.appendChild(id)
            fila.appendChild(date_hour)
            fila.appendChild(energy)
            fila.appendChild(reactive_energy)
            fila.appendChild(pow)
            fila.appendChild(maximeter)
            fila.appendChild(reactive_power)
            fila.appendChild(voltage)
            fila.appendChild(intensity)
            fila.appendChild(power_factor)
            fila.appendChild(editar)
            fila.appendChild(eliminar)
            tbody.appendChild(fila)
        }
     }
}


// Muestra mensaje de 'cargando' mientras se realiza la consulta
function showLoading(elemento) {
	elemento.innerHTML="Cargando"; // TODO: cambiar por animación
}


window.addEventListener("load", function() { });


/*
//Peticion AJAX
var peticion="http://127.0.0.1:8000/monitoring-api/";
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET",peticion,true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState==4) {
        if (xmlhttp.status==200) {
            //Respuesta recibida completamente (4) y sin
            //errores del servidor (codigo HTTP 200)
            //Analizamos
            var result = JSON.parse(xmlhttp.responseText);
            console.log(result);
        } else {
            console.log(error);
            divDetalle.innerHTML=cabDetalle+"<p>Error</p>";
        }
    }
  };
xmlhttp.send();
*/