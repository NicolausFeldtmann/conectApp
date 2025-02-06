function getPostTemplate(idxNote, name, message) {
    return `
        <div class="post">
            <h3 class="postedName"><b>${name}:</b></h3>
            <div class="postedMessage">${message}</div>
        </div>`;
}

function getEventTemplate(idx, titel, date, cat, host) {
    return`
        <div class="postedEvent">
            <div class="calPostHeader">
                <h3 class="calTitel"><b>${titel}</b></h3>
                <h2 class="calDate"><b>${date}</b></h2>
            </div>
            <div class="calContent">
                <div class="calCat"><b>${cat}</b></div>
                <div class="calHost"><b>${host}</b></div>
            </div>
        </div>`;
}