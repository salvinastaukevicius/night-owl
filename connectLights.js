const redirectToSettings = () => {
  window.location.href = "/profile.html";
};

var receivedIp = "";

var submitButton = document.getElementById("textUseThisIP");
submitButton.addEventListener("click", function() {
  var inputElement = document.getElementById("ipInput");
  var inputData = inputElement.value;
  receivedIp = inputData;
  console.log(receivedIp);
});

//get input IP
// 192.168.0.100


var connectButton = document.getElementById("connect");
connectButton.addEventListener('click', function() {
    fetchData();
})

function fetchData(data) {
    var bridgeIP = receivedIp; 
    const username = "salvinas1765"; 
    fetch(`http://${bridgeIP}/api`, {
      method: "POST",
      body: JSON.stringify({ devicetype: `myapp#${username}` }),
    })
      .then((response) => response.json())
      .then((data) => {
         var username = data[0].success.username;
        // console.log(data);
        console.log(username);
        tunnel(username);
      })
      .catch((error) => {
        console.error(error);
      });;

    };
    let correctKey;
    const tunnel = data => correctKey = data;
    
    const ButtonOn = document.getElementById("turnon");

    ButtonOn.addEventListener("click", function () {
      document.cookie = "cookieIp=" + receivedIp + "; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";
      document.cookie = "cookieKey=" + correctKey + "; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";
    });

    

    
    



      