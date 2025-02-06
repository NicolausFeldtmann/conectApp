async function addEvent() {
    let eventName = document.getElementById('eventName');
    let eventDate = document.getElementById('eventDate');
    let eventCat = document.getElementById('eventCat');
    let eventHost = document.getElementById('eventHost');

    let newEvent = {
        evName: eventName,
        evDate: eventDate,
        evCat: eventCat,
        evHost: eventHost,
    }
    await saveEventToApi(newEvent);
}

async function saveEventToApi(event) {
    const response = await fetch("https://connectcalender-44632-default-rtdb.europe-west1.firebasedatabase.app/addedEvent.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    });

    if (!response.ok) {
        throw new Error("Fehler beim speichern der Events.");
        
    }
}

function renderCalender() {
    let eventRef = document.getElementById('comming');
    eventRef.innerHTML = "";

    for(let idx = 0; idx < addedEvent.length; idx++) {
        let currentEvent = addedEvent[idx];
        let titel = currentEvent.evName;
        let date = currentEvent.evDate;
        let cat = currentEvent.evCat;
        let host = currentEvent.evHost;
        eventRef.innerHTML += getEventTemplate(titel, date, cat, host);
    }
}