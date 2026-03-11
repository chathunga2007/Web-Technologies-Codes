function changeName() {
    document.getElementById("studentName").textContent = "Chathunga Bimsara";
}

function changeStatus() {
    document.getElementById("studentStatus").textContent = "Status: Completed JavaScript Intro";
}

function showDate() {
    const today = new Date();
    document.getElementById("todayDate").textContent = "Date: " + today.toDateString();
}

function changeTheme() {
    document.body.style.backgroundColor = "aqua";
}