///////////////////////json

const apiUrl = 'https://cdn.tsetmc.com/api/Instrument/GetInstrumentOptionMarketWatch/0';

var b = [];
var b1 = [];
var b2 = [];
var b3 = [];

fetch(apiUrl)

  .then(response => {

    if (!response.ok) {

      throw new Error('Network response was not ok');

    }

    return response.json();

  })


///////////////////////////////////json  
