"use strict";
var update = false;
var id;
var date_hour;

function processForm(){
    event.preventDefault();
    console.log("[DEBUG]", "Inside  dataForm.processForm()")

    var energy = document.getElementById("energy").value;
    var reactive_energy = document.getElementById("react-energy").value;
    var pow = document.getElementById("pow").value;
    var maximeter = document.getElementById("maximeter").value;
    var reactive_power = document.getElementById("react-power").value;
    var voltage = document.getElementById("voltage").value;
    var intensity = document.getElementById("intensity").value;
    var power_factor = document.getElementById("power-factor").value;

    var dataJS = {
                date_hour: date_hour,
                energy: energy,
                reactive_energy: reactive_energy,
                pow: pow,
                maximeter: maximeter,
                reactive_power: reactive_power,
                voltage: voltage,
                intensity: intensity,
                power_factor: power_factor
                 }

    if (!update) { // Caso creación de nueva medida
        dataJS.date_hour = moment().format("d MMM YYYY HH:mm:SS");
        console.log("[DEBUG]", dataJS);
        createItem(dataJS);

    } else { // caso edición de medida

         var dataJS = {
            date_hour: date_hour,
            energy: energy,
            reactive_energy: reactive_energy,
            pow: pow,
            maximeter: maximeter,
            reactive_power: reactive_power,
            voltage: voltage,
            intensity: intensity,
            power_factor: power_factor
        }
        console.log("[DEBUG]", dataJS);
        updateItem(dataJS);
    }


}

function goBack() {
    console.log("[DEBUG]", "Inside dataForm.goBack()");
    window.location = "http://127.0.0.1:8000/monitoring-data/";
}

function createItem(dataJS) {
     axios.post("http://127.0.0.1:8000/monitoring-api/", dataJS, {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          }
        })
        .then(function (response) {
            console.log(response);
            window.location = "http://127.0.0.1:8000/monitoring-data/";
        })
        .catch(function (error) {
            console.log(error);
        });
}

function updateItem (dataJS) {
     axios.put("http://127.0.0.1:8000/monitoring-api/" + id + "/", dataJS, {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          }
        })
        .then(function (response) {
            console.log(response);
            window.location = "http://127.0.0.1:8000/monitoring-data/";
        })
        .catch(function (error) {
            console.log(error);
        });
}

window.addEventListener("load", function() {
   var urlParams = window.location.search;
   var title = document.getElementById("title");
   if (urlParams != "") {
        var energy = document.getElementById("energy");
        var reactive_energy = document.getElementById("react-energy");
        var pow = document.getElementById("pow");
        var maximeter = document.getElementById("maximeter");
        var reactive_power = document.getElementById("react-power");
        var voltage = document.getElementById("voltage");
        var intensity = document.getElementById("intensity");
        var power_factor = document.getElementById("power-factor");

        var searchParams = new URLSearchParams(urlParams)
        id = searchParams.get("id");
        date_hour = searchParams.get("date_hour")
        energy.value = searchParams.get("energy");
        reactive_energy.value = searchParams.get("reactive_energy");
        pow.value = searchParams.get("pow");
        maximeter.value = searchParams.get("maximeter");
        reactive_power.value = searchParams.get("reactive_power");
        voltage.value = searchParams.get("voltage");
        intensity.value = searchParams.get("intensity");
        power_factor.value = searchParams.get("power_factor");

        title.innerHTML = "Edición de medida";
        update = true;
   } else {
        title.innerHTML = "Creación de nueva medida";
        update = false;
   }
});
