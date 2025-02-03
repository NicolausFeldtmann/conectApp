const BASE_URL = "https://conect-d9109-default-rtdb.europe-west1.firebasedatabase.app/"

let post = [];
let userName = [];

async function loadPosts(path = "") {
    try {
        let response = await fetch(BASE_URL + path + ".json");
        let responseToJson = await response.json();

        post = []; // Reset des Post-Arrays

        // Überprüfen, ob die Antwort Daten enthält
        if (responseToJson) {
            for (let key in responseToJson) {
                post.push(responseToJson[key]);
            }
        }

    } catch (error) {
        console.log("Fehler beim Laden der Nachrichten:", error);
    }
    console.log(post);
    
    renderPost(); // Nach dem Laden, die Posts rendern
}

