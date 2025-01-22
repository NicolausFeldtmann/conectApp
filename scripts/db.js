const BASE_URL = "https://conect-d9109-default-rtdb.europe-west1.firebasedatabase.app/"

let post = [];

async function loadPosts(path=""){
    try {
    let response = await fetch(BASE_URL + path + ".json");
    let responseToJson = await response.json();
    post.push(responseToJson);
    console.log(post);
    
    } catch (error) {
        console.log("Fehler beim laden der Nachrichten.")
    }
    renderPost();
}

