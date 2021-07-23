const paragraph = document.getElementById("para").innerHTML;
const one = 'e\U+1F914'
const two = "e\U+1F632"
paragraph.replace(/\?/g,"<span style='font-size:100px;'>&#129409;</span>");
paragraph.replace(/\!/g,"two");
//