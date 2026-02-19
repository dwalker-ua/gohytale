let serverIP = "play.gohytale.net:15662";

let address_field = document.getElementById("address_field");
address_field.value = serverIP;

function copyAddress() {
    navigator.clipboard.writeText(serverIP);
    address_field.value = "copied!";

    setTimeout(() => { address_field.value = serverIP; }, 3000);
}

address_field.addEventListener("click", copyAddress, false);