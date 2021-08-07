// Testing XMLHttpRequest

// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log('Request successful');
//     let data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// };

// req.onerror = function () {
//     console.log('Something went wrong');
//     console.log(this);
// };

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();
//=====================================================================
//FETCH API
//Regular way with promises

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((res) => {
//         console.log(res.status);
//         console.log('RESPONSE, WAITING FOR PARSING... ', res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log('Parsed response:');
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('Something went wrong');
//         console.log(err);
//     });

//Using async - await

// const getBitcoinPrice = async () => {
//     try {
//         const res = await fetch('https://api.crypton1ator.com/api/ticker/btc-usd');
//         const data = await res.json();
//         let price = data.ticker.price;
//         console.log(price);
//     } catch (err) {
//         console.log('Something went wrong!!!');
//         console.log(err);
//     }
// };
// getBitcoinPrice();

//==========================================================================
//AXIOS
// axios
//     .get('https://api.cryptona1tor.com/api/ticker/btc-usd')
//     .then((res) => {
//         console.log(`Response status: ${res.status}`);
//         console.log(res.data.ticker.price);
//     })
//     .catch((err) => {
//         console.log('There was an error!!! ', err);
//     });

//Sending headers with Axios

const button = document.querySelector('button');

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };

        const res = await axios.get('https://icanhazdadjoke.com/', config);

        return res.data.joke;
    } catch (err) {
        console.log('Something went wrong', err);
        return 'No jokes available. Sorry :(';
    }
};

const addDadJoke = async () => {
    try {
        const joke = await getDadJoke();
        const newLI = document.createElement('li');
        newLI.innerText = joke;
        document.querySelector('#jokePlaceHolder').appendChild(newLI);
    } catch (err) {
        console.log('Error. Joke was not fetched');
    }
};

button.addEventListener('click', addDadJoke);
