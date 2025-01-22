function getPostTemplate(idxNote, name, message) {
    return `
        <div class="post">
            <h3>${name}</h3>
            <div class="postedMessage">${message}</div>
        </div>`;
}