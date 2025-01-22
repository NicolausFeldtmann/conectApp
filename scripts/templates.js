function getPostTemplate(idxNote, name, message) {
    return `
        <div class="post">
            <h3 class="postedName"><b>${name}:</b></h3>
            <div class="postedMessage">${message}</div>
        </div>`;
}