// Create Constants
const searchButtonEl = document.getElementById("search-button");
const cityNameEl = document.getElementById("city-name");
const cityEntryEl = document.getElementById("city-entry");
const reviews = document.getElementById("reviews");
const historyEl = document.getElementById("history");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

// API Info
const APIKey = "4482d2f1e25804f9ddbf18853625fefe";

// Form Stuff
function getSushi(cityName) {
  let foodURL = "https://developers.zomato.com/api/v2.1/cuisines" + cityName + "&appid=" + APIKey;
  fetch(foodURL, {method: "GET"})
  .then(response => response.json())

    .then(function(response){

    })
}


// Locate City Name

// Local Storage

// Event Listeners

// Create Search History?

// Conditions

// Check Storage
checkStorage();