const userLocation = document.querySelector(".location");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(showPosition);
})

function showPosition(position) {
    userLocation.innerHTML = `
        Latitude: ${position.coords.latitude} <br>
        Longitude: ${position.coords.longitude}
    `
}


const canvasElement = document.getElementById('canvas');
const context = canvasElement.getContext('2d');
context.strokeStyle = "red";
context.fillStyle = "blue";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);
