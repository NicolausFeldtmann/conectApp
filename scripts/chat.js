
async function init() {
    await loadPosts("post");
    renderPost();
}

function addPost() {
    let nameInputRef = document.getElementById('nameInput');
    let nameInput = nameInputRef.value;
    let messageInputRef = document.getElementById('messageInput');
    let messageInput = messageInputRef.value;

    if (nameInputRef.value + messageInputRef.value ==0) {
        alert('Kein Name, Keine Nachricht... KEIN POST!')
        return false;
    }

    if (nameInputRef.value ==0) {
        alert('Wer bist du ?!')
        return false;
    }

    if(messageInputRef.value ==0) {
        alert('Nichts zu sagen?!')
        return false;
    }

    namePost.push(nameInput);
    message.push(messageInput);
    nameInputRef.value ="";
    messageInputRef.value ="";

    saveLocal();
    renderPost();
}

function saveLocal() {
    localStorage.setItem("namePost", JSON.stringify(namePost));
    localStorage.setItem("message", JSON.stringify(message));
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