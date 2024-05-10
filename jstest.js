///////////////////////json

const apiUrl = 'https://cdn.tsetmc.com/api/Instrument/GetInstrumentOptionMarketWatch/0';

var opt = [];

 

fetch(apiUrl)

  .then(response => {

    if (!response.ok) {

      throw new Error('Network response was not ok');

    }

    return response.json();

  })

  .then(data => {


for (i=0;i<data.instrumentOptMarketWatch.length;i++){

opt[i] = data.instrumentOptMarketWatch[i];
 
}
 })
  .catch(error => {

    console.error('Error:', error);

  });
  
///////////////////////////////////json  
 
