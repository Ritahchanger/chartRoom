const chartForm = document.getElementById("chart-form");

const socket = io();

// Message from server

socket.on("message", (message) => {
  console.log(message);

  outPutMessage(message);
});

chartForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const msg = e.target.elements.msg.value;

  socket.emit("chatMessage", msg);
});

// Output message to Dom

function outPutMessage(message) {
  const div = document.createElement("div");

  div.classList.add("message");

  div.innerHTML = `
          <p>Franklin Josepth</p>
          <span> 9-may-2019 </span>
          <p>
            ${message}
          </p>
          `;
  document.querySelector(".messages").appendChild(div);
}
