function openAddEvent() {
    let x = document.getElementById('addEvent');
    x.classList.toggle('showTemplate');
}

async function init() {
    await loadPosts("post");
    renderPost();
    //await loadEvent("addedEvent");
    //renderCalender();
}



