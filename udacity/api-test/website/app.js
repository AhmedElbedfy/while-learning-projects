/* Global Variables */
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=",
    apiKey = "&appid=f615f89f3054fa249b91379e04a718fe",
    btn = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// click Handler
btn.addEventListener('click', () => {
    const zip = document.getElementById('zip').value,
        mode = document.getElementById('feelings').value;

    const url = baseURL + zip + apiKey; // Url

    // get data from wether api
    getData(url)

        .then(function (data) {
            // post data to local server
            postData('/addData', { temperature: data.main.temp, date: newDate, mode: mode })
            // update UI with the new data
            updateUI()
        })
})

// get data from wether api
async function getData(url) {
    const response = await fetch(url)
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

// send data to server
async function postData(postUrl = '', data = {}) {
    console.log(data)
    const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

// get data from local server and update UI

async function updateUI() {
    const request = await fetch('/all')
    try {
        const allData = await request.json()
        console.log(allData);

        document.getElementById("date").innerText = allData.date;
        document.getElementById("temp").innerText = allData.temp;
        document.getElementById("content").innerText = allData.mode;
    } catch (error) {
        console.log('error', error)
    }
}
