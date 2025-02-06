
async function init() {
    await loadPosts("post");
    await loadEvent("addedEvent");
    renderPost();
    renderCalender();
}

function enterName() {
    let inputName = document.getElementById('inputName');
    let name = inputName.value;
    if (!name) {
        alert('NAME!')
        return false
    } else {
        let x = document.getElementById('enterScreen');
        x.classList.toggle('dspNone');
    }
    userName.push(name);
    console.log(userName);
}

document.getElementById('messageInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        enterName(); 
    }
});

async function addPost() {
    let nameInput = userName[0];
    let messageInputRef = document.getElementById('messageInput');
    let messageInput = messageInputRef.value.trim();
    
    if (!messageInput) {
        alert('Nichts zu sagen?!');
        return false;
    }
    
    let newPost = {
        name: nameInput,
        message: messageInput,
    };

    try {
        await savePostToApi(newPost);
        messageInputRef.value = ""; 
        await loadPosts("post");
    } catch (error) {
        console.log("Fehler beim Speichern des Posts:", error);
    }
}
    
async function savePostToApi(post) {
    const response = await fetch("https://conect-d9109-default-rtdb.europe-west1.firebasedatabase.app/post.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    });

    if (!response.ok) {
        throw new Error("Fehler beim Speichern des Posts.");
    }
}

async function deleteAllPosts() {
    try {
        const response = await fetch("https://conect-d9109-default-rtdb.europe-west1.firebasedatabase.app/post.json", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Fehler beim Löschen der Posts.");
        }

        console.log("Alle Posts wurden erfolgreich gelöscht.");
    } catch (error) {
        console.log("Fehler beim Löschen der Posts:", error);
    }
    loadPosts();
    renderPost();
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