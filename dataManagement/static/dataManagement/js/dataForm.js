"use strict";

function processForm(){
    event.preventDefault();
    console.log("[DEBUG]", "Inside  dataForm.processForm()")

    var date_hour = moment().format("d MMM YYYY HH:mm:SS");
   // var date_hour = 'hola';
    var energy = document.getElementById("energy").value;
    var reactive_energy = document.getElementById("react-energy").value;
    var pow = document.getElementById("pow").value;
    var maximeter = document.getElementById("maximeter").value;
    var reactive_power = document.getElementById("react-power").value;
    var voltage = document.getElementById("voltage").value;
    var intensity = document.getElementById("intensity").value;
    var power_factor = document.getElementById("power-factor").value;

   /* var prueba = {
        date_hour: date_hour,
        energy: energy,
        reactive_energy: reactive_energy,
        pow: pow,
        maximeter: maximeter,
        reactive_power: reactive_power
    }
*/
    var data = '{' +
                    '"date_hour" : "' + date_hour + '", ' +
                    '"energy" : "' + energy + '", ' +
                    '"reactive_energy" : "' + reactive_energy + '", ' +
                    '"pow" : "' + pow + '", ' +
                    '"maximeter" : "' + maximeter + '", ' +
                    '"reactive_power" : "' + reactive_power + '", ' +
                    '"voltage" : "' + voltage + '", ' +
                    '"intensity" : "' + intensity + '", ' +
                    '"power_factor" : "' + power_factor + '"' +
                 '}' ;

    var dataJS = JSON.parse(data);
    console.log("[DEBUG]", dataJS);

    axios.post("http://127.0.0.1:8000/monitoring-api/", data, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      }
    })
    .then(function (response) {
        console.log(response);
        var element = document.getElementById("fila-" + id);
        document.removeChild(element);
    })
    .catch(function (error) {
        console.log(error);
    });

/*
   //Peticion AJAX
    var peticion ="http://127.0.0.1:8000/monitoring-api/";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST",peticion,true);
    xmlhttp.setRequestHeader("Content-type", " application/json");
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState==4) {
            if (xmlhttp.status==200) {
                //Respuesta recibida completamente (4) y sin
                //errores del servidor (codigo HTTP 200)
                console.log(result);
                window.location = "http://127.0.0.1:8000/monitoring-data/";
            } else {

            }
        }
      };
    xmlhttp.send(JSON.stringify(dataJS));
*/
}

function goBack() {
    console.log("[DEBUG]", "Inside dataForm.goBack()");
    window.location = "http://127.0.0.1:8000/monitoring-data/";
}

