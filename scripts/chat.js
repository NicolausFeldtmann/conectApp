
async function init() {
    await loadPosts("post");
    renderPost();
}

async function addPost() {
    let nameInputRef = document.getElementById('nameInput');
    let nameInput = nameInputRef.value.trim();
    let messageInputRef = document.getElementById('messageInput');
    let messageInput = messageInputRef.value.trim();

    // Überprüfungen
    if (!nameInput && !messageInput) {
        alert('Kein Name, Keine Nachricht... KEIN POST!');
        return false;
    }

    if (!nameInput) {
        alert('Wer bist du ?!');
        return false;
    }

    if (!messageInput) {
        alert('Nichts zu sagen?!');
        return false;
    }
    
    // Objekt für den neuen Post erstellen
    const newPost = {
        name: nameInput,
        message: messageInput,
    };

    // Post an die API senden
    try {
        const response = await fetch("https://conect-d9109-default-rtdb.europe-west1.firebasedatabase.app/post.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });

        if (!response.ok) {
            throw new Error("Fehler beim Speichern des Posts.");
        }

        // Eingabefelder zurücksetzen
        nameInputRef.value = "";
        messageInputRef.value = "";

        // Posts neu laden und rendern
        await loadPosts("post");

    } catch (error) {
        console.log("Fehler beim Speichern des Posts:", error);
    }
}

function renderPost() {
    let postRef = document.getElementById('chat');
    postRef.innerHTML = "";

    for (let idxNote = 0; idxNote < post.length; idxNote++) {
        let currentPost = post[idxNote];
        let name = currentPost.name; 
        let message = currentPost.message; 
        postRef.innerHTML += getPostTemplate(idxNote, name, message);
    }
}