//OpenWeatherMap Api Key goes here
const apiKey = "PASTE_YOUR_API_KEY_HERE";

//defining useful variables
const form = document.querySelector("input");
const submitButton = document.querySelector("button");
// const userInput = form.value;
const serverMessage = document.querySelector("span");
const cityList = document.querySelector(".cities");

//adding needed event listeners
submitButton.addEventListener("click", submitButtonHandler);

//the main function that called when the submit key is pressed
function submitButtonHandler(event) {
    //Disable auto refreshing
    event.preventDefault();
    
    //setting city name from user input
    let cityName = form.value;
    
    //defining request url template
    let apiCallByCity = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    
    //sending request
    fetch(apiCallByCity)
        .then(response => response.json())
        .then(data => {
            //deconstructing recieved object
            const {main,name,sys,weather} = data;
            
            //a template url to source the weather icon based on recieved data
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
            
            const newListItem = document.createElement("li");
            newListItem.classList.add("city");
            
            //a template to populate the newly added city with the data fetched from OpenWeatherMap
            const listItemContent = `
            <h2 class="city-name" data-name="${name},${sys.country}">
                <span>${name}</span>
                <span>${sys.country}</span>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}</div>
            <figure>
                <img class="city-icon" src="${icon}" alt="${weather[0]["description"]} icon">
                <figurecaption>${weather[0]["description"]}</figurecaption>
            </figure>
            `;
            
            //fill the newly created list item with the template above.
            newListItem.innerHTML = listItemContent;
            
            //adding the newly finished list item to list 
            cityList.appendChild(newListItem);
            
            //resetting the user input field
            form.value = "";
        })
        //show error message if the user input was not found or an error happend.
        .catch(() => serverMessage.innerText = `${form.value} Not Found. Search for a Valid City`);
};


