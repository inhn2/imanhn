///////////////////////json

const apiUrl = 'https://finroad.ir/panel/makejson.php';

var xivd = [];

fetch(apiUrl)

  .then(response => {

    if (!response.ok) {

      throw new Error('Network response was not ok');

    }

    return response.json();

  })

  .then(data => {


for (i=0;i<data.data.length;i++){

xivd[i] = data.data[i];
 
}
 })
  .catch(error => {

    console.error('Error:', error);

  });
  
///////////////////////////////////json  
