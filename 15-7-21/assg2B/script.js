var button = document.getElementById("search");
function searchtext() {
var mytext = document.getElementById("content").innerHTML;
var myWord = document.getElementById("typehere").value;
var myAns = new RegExp(myWord);

var matches = mytext.match(myAns);
if (matches === null)
  {
       document.getElementById("demo").innerHTML = "No results";
      return;
  }
    
  document.getElementById("demo").innerHTML  = matches + " " + matches.length ;
  
};
button.addEventListener('click', searchtext);