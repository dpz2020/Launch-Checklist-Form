// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {


   let planets;

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         planets = json;

         let html = `<h2>Mission Destination</h2><ol><li>Name: ${planets[2].name}</li><li>Diameter: ${planets[2].diameter}</li><li>Star: ${planets[2].star}</li><li>Distance from Earth: ${planets[2].distance}</li><li>Number of Moons: ${planets[2].moons}</li></ol><img src="${planets[2].image}">`;
            
            
         document.getElementById('missionTarget').innerHTML = html;
            
            
         
      });
} );


   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      //let pilotName = document.querySelector("input[name=pilotName]");
      let pilotName = document.getElementById('pilotName');
      if(!pilotName.value) {
         alert('All fields are required!');
         event.preventDefault();
         return;
      }
      
      let copilotName = document.getElementById('copilotName');
      if(!copilotName.value) {
         alert('All fields are required!');
         event.preventDefault();
         return;
      }

      let fuelLevel = document.getElementById('fuelLevel');
      if(!fuelLevel.value) {
         alert('All fields are required!');
         event.preventDefault();
         return;
      }
      let cargoMass = document.getElementById('cargoMass');
      if(!cargoMass.value) {
         alert('All fields are required!');
         event.preventDefault();
         return;
      }

      ///let intFuelLevel = parseInt(fuelLevel, 10);
      if(!isNaN(pilotName.value)) {
         alert('Make sure to enter valid information for each field');
         event.preventDefault();
         return;
      }
      if(!isNaN(copilotName.value)) {
         alert('Make sure to enter valid information for each field');
         event.preventDefault();
         return;
      }
      if(isNaN(fuelLevel.value)) {
         alert('Make sure to enter valid information for each field');
         event.preventDefault();
         return;
      }
      if(isNaN(cargoMass.value)) {
         alert('Make sure to enter valid information for each field');
         event.preventDefault();
         return;
      }
      if(pilotName.value) {
         document.getElementById('faultyItems').style.visibility = "visible";
         let element = document.getElementById('pilotStatus');
         element.textContent = `Pilot ${pilotName.value} is ready for launch`;
         
      }
      if(copilotName.value) {
         document.getElementById('faultyItems').style.visibility = "visible";
         let element = document.getElementById('copilotStatus');
         element.textContent = `Co-pilot ${copilotName.value} is ready for launch`;
         
      }
      if(fuelLevel.value < 10000) {
         document.getElementById('faultyItems').style.visibility = "visible";
         let element = document.getElementById('fuelStatus');
         element.textContent = "Not enough fuel for the journey!";

         document.getElementById('launchStatus').style.color = "red";
         document.getElementById('launchStatus').textContent = "Shuttle not ready for launch";


         
      }
      if(cargoMass.value > 10000) {
         document.getElementById('faultyItems').style.visibility = "visible";
         let element = document.getElementById('cargoStatus');
         element.textContent = "There is too much mass for the shuttle to take off!";
        

         document.getElementById('launchStatus').style.color = "red";
         document.getElementById('launchStatus').textContent = "Shuttle not ready for launch";
         event.preventDefault();
         return;
      }
      if (fuelLevel.value > 10000 && (cargoMass.value < 10000)) {
         document.getElementById('launchStatus').style.color = "green";
         document.getElementById('launchStatus').textContent = "Shuttle ready for launch";
      }


      document.getElementById('missionTarget').style.visibility = "visible";
      event.preventDefault();

      ///let intFuelLevel = parseInt(fuelLevel, 10);
      
      // alert the current value found in the username input
      // alert("pilotName: " + pilotName.value);
   });
});