const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const today = new Date();
const dayNameOfToday = daysOfWeek[today.getDay()];

const redirectToProfile = () => {window.location.href="/profile.html"};

const dayOfMonth = today.getDate();
const month = monthsOfYear[today.getMonth()]

const getSpanOfDayNameOfToday = document.getElementById("dayNameOfToday");
const getSpanMonthAndDay = document.getElementById("dayAndMonth");
getSpanOfDayNameOfToday.innerHTML = dayNameOfToday;
getSpanMonthAndDay.innerHTML = dayOfMonth +  " " + month;

function fetchData(callback) {
    const bridgeIP = "192.168.0.100"; // Replace with your own Bridge IP address
    const username = "salvinas1765"; // Replace with your own desired username
    
    fetch(`http://${bridgeIP}/api`, {
      method: "POST",
      body: JSON.stringify({ devicetype: `myapp#${username}` })
    }).then(response => response.json())
      .then(data => {
        const username = data[0].success.username;
        callback(username)
    });
};

const ButtonOn = document.getElementById("turnOn");

function processData(data) {
ButtonOn.addEventListener('click', function() {

  
    console.log(data)
    const bridgeIP = "192.168.0.100";
const apiKey = data;
const lightId = 14;

// Turn the light on
fetch(`http://${bridgeIP}/api/${apiKey}/lights/${lightId}/state`, {
  method: "PUT",
  body: JSON.stringify({ on: true })
}).then(response => console.log(response));

// Turn the light off
// fetch(`http://${bridgeIP}/api/${apiKey}/lights/${lightId}/state`, {
//   method: "PUT",
//   body: JSON.stringify({ on: false })
// }).then(response => console.log(response));

})
};


fetchData(processData);







