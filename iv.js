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

// x=[i][9] , delta=[i][10] , iv=[i][11] /call
// x=[i][26] , delta=[i][25] , iv=[i][24] /put
 
}
 })
  .catch(error => {

    console.error('Error:', error);

  });
  
///////////////////////////////////json  