const BASE_URL = "https://conect-d9109-default-rtdb.europe-west1.firebasedatabase.app/"
const CALENDER_URL = "https://connectcalender-44632-default-rtdb.europe-west1.firebasedatabase.app/"

let post = [];
let userName = [];
let addedEvent = [];

async function loadPosts(path = "") {
    try {
        let response = await fetch(BASE_URL + path + ".json");
        let responseToJson = await response.json();

        post = []; 

        if (responseToJson) {
            for (let key in responseToJson) {
                post.push(responseToJson[key]);
            }
        }

    } catch (error) {
        console.log("Fehler beim Laden der Nachrichten:", error);
    }
    console.log(post);
    
    renderPost(); 
}

async function loadEvent(path = "") {
    try {
        let response= await fetch(CALENDER_URL + path + ".json");
        let responseToJson = await response.json();

        addedEvent = [];

        if (responseToJson) {
            for (let key in responseToJson) {
                addedEvent.push(responseToJson[key]);
            }
        }
    } catch (error) {
        console.log("Fehler beim laden der Events:". error);
    }
    console.log(addedEvent);
    renderCalender();
}

