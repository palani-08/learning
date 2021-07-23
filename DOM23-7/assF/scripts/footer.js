export function createFoot() {
    var f = document.createElement("FOOTER");
    document.body.appendChild(f);
    var p = document.createElement("P");
    var txt = document.createTextNode("Copyright ©, 2019");
    p.appendChild(txt);
    f.appendChild(p);
 }
