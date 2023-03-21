const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")
const apiKey = "OQmMJ20Lp212YZt38l48HA==SSh3UHEjVaNWSM1Z";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key":apiKey
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeEl.innerHTML = "Updating...";
        btnEl.disabled = true ;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disabled=false;
        btnEl.innerText = "Tell me a Joke"
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happened, Try again later";
        btnEl.disabled=false;
        btnEl.innerText = "Tell me a Joke"
    }

  
}


btnEl.addEventListener("click",getJoke);