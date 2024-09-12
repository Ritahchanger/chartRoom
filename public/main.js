
const chartForm = document.getElementById("chart-form");

const socket = io();

socket.on("message", (message) => {
  console.log(message);
});


chartForm.addEventListener('submit',(e)=>{


})