///////////////////////json

const apiUrl = 'https://cdn.tsetmc.com/api/Instrument/GetInstrumentOptionMarketWatch/0';

var b = [];
var b1 = [];
var b2 = [];
var b3 = [];
var name = 'خودران';
 

fetch(apiUrl)

  .then(response => {

    if (!response.ok) {

      throw new Error('Network response was not ok');

    }

    return response.json();

  })

  .then(data => {


for (i=0;i<data.instrumentOptMarketWatch.length;i++){

b[i] = data.instrumentOptMarketWatch[i].lval30_UA;

  function checkname(na) {
  return na == name;
}

if( name == b[i] ){

b1[i] = i;

}

else{b1[i]=0;}  
 
 }
 
function rz1(z) {
  return z > 0;
}

b2 = b1.filter(rz1);
 


for (i=0;i<b2.length;i++){

b3[i] = JSON.stringify(data.instrumentOptMarketWatch[b2[i]].strikePrice);

}

 })
  .catch(error => {

    console.error('Error:', error);

  });
  
///////////////////////////////////json  
