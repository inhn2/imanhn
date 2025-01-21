///////////////////////json

const apiUrl = 'https://optionz.ir/GradDB/V1/select_request';

var c = 0;
var optitems = [];

//////////////////////////////////////////////

fetch(apiUrl , {
 method: "POST",
  headers: {
    "Content-Type": "application/json"
  },body: JSON.stringify(
  {"api_key":"d025488f-8ec6-4434-afbe-b6a5343815a7","token":"8494690d-0064-4809-835a-1effe87620bd","member_id":"0016094530","table":"option","method_type":"select_options_market_watch_new","data":{"_sort":"trades_value__desc","_filters":true,"_limit":""+10+""},"from":0,"size":1000}
  )
})

  .then(response => {

    if (!response.ok) {

      throw new Error('Network response was not ok');

    }

    return response.json();

  })

  .then(data => {

c = data.response.data.total;

///////////////////////////////////////////////////////////////////////////////////////

fetch(apiUrl , {
 method: "POST",
  headers: {
    "Content-Type": "application/json"
  },body: JSON.stringify(
  {"api_key":"d025488f-8ec6-4434-afbe-b6a5343815a7","token":"8494690d-0064-4809-835a-1effe87620bd","member_id":"0016094530","table":"option","method_type":"select_options_market_watch_new","data":{"_sort":"trades_value__desc","_filters":true,"_limit":""+c+""},"from":0,"size":1000}
  )
})

  .then(response => {

    if (!response.ok) {

      throw new Error('Network response was not ok');

    }

    return response.json();

  })

  .then(data => {

    // Display data in an HTML element

//   const obj = JSON.stringify(data, null, 2);

for(i=0;i<data.response.data.results.length;i++){
	
optitems[i] = data.response.data.results[i].body;

} 

 })
  .catch(error => {

    console.error('Error:', error);

  });

/////////////////////////////////////////////////////////////////////////////////////////


})
  .catch(error => {

    console.error('Error:', error);

  });
 
  
///////////////////////////////////json
