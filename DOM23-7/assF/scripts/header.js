     
     
     
   export function heading() {
    // create a couple of elements in an otherwise empty HTML page
    const heading = document.createElement("h1");
    const heading_text = document.createTextNode("Big Head!");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
 }