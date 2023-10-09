function updateDate() {
    const dateElement = document.getElementById('dateText');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString(); 
    const daysOfWeek = ["Nie", "Pon", "Wto", "Sro", "Czw", "Pio", "Sob"];
dateElement.textContent = formattedDate + " dzień: " +daysOfWeek[currentDate.getDay()];
}
setInterval(updateDate, 100);
updateDate