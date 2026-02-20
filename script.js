let serverIP = "play.gohytale.net:15662";
let server_state = false;
let server_players = 0;

let address_field = document.getElementById("address_field");
address_field.value = serverIP;

let server_status = document.getElementById("server_status");

function copyAddress() {
    navigator.clipboard.writeText(serverIP);
    address_field.value = "copied!";

    setTimeout(() => { address_field.value = serverIP; }, 3000);
}

function thanks(element) {
    element.innerHTML = "Thank you ❤";
    element.classList.add("voted");
}

async function updateServerMetric() {
    const workerUrl = "https://gohytale-server-status.arthur2rock-live.workers.dev";

    try {
        const response = await fetch(workerUrl);
        const data = await response.json();

        server_state = data.online;
        server_players = data.players;

        if (server_state) {
            if (server_players > 0)
                server_status.innerHTML = `${server_players} online`;
            else
                server_status.innerHTML = "online";
        } else {
            server_status.innerHTML = "offline";
            server_status.classList.add("offline");
        }
    }
    catch {}
}

address_field.addEventListener("click", copyAddress, false);
updateServerMetric();