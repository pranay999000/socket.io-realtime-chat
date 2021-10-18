console.log("hello")

const socket = io('http://localhost:4000')

const messageBox = document.getElementById("message-box");
const messageInput = document.getElementById("message-input");
const messageSend = document.getElementById("message-send");

socket.on('welcome', msg => {
    console.log(msg)
})

messageSend.addEventListener("click", () => {
    const message = messageInput.value
    messageInput.value = ""

    socket.emit('message', message)
})

socket.on('message_client', msg => {
    messageBox.innerHTML += `<b>${msg}</b><br>`
})