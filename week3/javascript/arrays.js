//create an array
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];

//variables IN functions (function scope) can see global variables)

//function testFunction()
//{ check final js file for this
  
//}

var imageList = new Array();

imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
imageList[5] = "images/drawing/thumbs/artwork_6.jpg";

//create the buildThumbnail function
function buildThumbnails()
{
  //hook onto the thumbs div
  var thumbsDiv = document.getElementById("thumbs");
  
  //create an output variable
  var output = "";
  //first part counter (we set up 0 to start counting the loop)
  //second part: condition (the loop will keep looping as long as the condition is true)
  //third part: incrementer - adds one to the counter AFTER the code is executed in the brackets
  
  for(var i=0; i < imageList.length; i++)
  {
    //concatenation assignment operator
    output += '<img src="' + imageList[i] + '" />';
  }
    thumbsDiv.innerHTML = output;
  

  //thumbsDiv.innerHTML =
  //'<img src="' + imageList[0] + '" />' +
  //'<img src="' + imageList[1] + '" />' +
  //'<img src="' + imageList[2] + '" />' +
  //'<img src="' + imageList[3] + '" />' +
  //'<img src="' + imageList[4] + '" />'
  //;
}

window.onload = function()
{
  buildThumbnails(); //use or "fire off" this function
  //or invoke the function
};





