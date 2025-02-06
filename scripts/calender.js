async function addEvent() {
    let inputTitelRef = document.getElementById('evetName');
    let inputDateRef = document.getElementById('eventDate');
    let inputCatRef = document.getElementById('eventCat');
    let inputHostRef = document.getElementById('eventHost');

    let titelInput = inputTitelRef.value.trim();
    let dateInput = inputDateRef.value.trim();
    let catInput = inputCatRef.value.trim();
    let hostInput = inputHostRef.value.trim();

    let newEvent = {
        titel: titelInput,
        date: dateInput,
        cat: catInput,
        host: hostInput, 
    };
    await saveEventToApi(newEvent);
}

function renderCalender() {
    let eventRef = document.getElementById('addEvent');
    eventRef.innerHTML = "";

    for (let idx = 0; idx < addedEvent.length; idx++) {
        let currentEvent = addedEvent[idx];
        let titel = currentEvent.titel;
        let date = currentEvent.date;
        let cat = currentEvent.cat;
        let host = currentEvent.host;
        eventRef.innerHTML += getEventTemplate(idx, titel, date, cat, host);
    }
}