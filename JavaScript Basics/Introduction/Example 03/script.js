function changeName() {
    document.getElementById("studentName").innerHTML = "Chathunga Bimsara";
}

function changeStatus() {
    document.getElementById("studentStatus").innerHTML = "Status: Completed JavaScript Intro";
}

function showDate() {
    const today = new Date();
    document.getElementById("todayDate").innerHTML = "Date: " + today.toDateString();
}

function changeTheme() {
    document.body.style.backgroundColor = "aqua";
}