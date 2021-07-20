let btn1 = document.querySelector('#Add');
function x1(){
    var a = parseInt(document.getElementById('n1').value);
    var b = parseInt(document.getElementById('n2').value);
     document.querySelector('#result').outerHTML=(a+b);
    return btn1;
}
btn1.addEventListener('click', x1);


let btn2 = document.querySelector('#sub');
 x2 =() =>{
    var a = parseInt(document.getElementById('n1').value);
    var b = parseInt(document.getElementById('n2').value);
     document.getElementById('result').outerHTML=(a-b);
    return a-b;
}
btn2.addEventListener('click', x2);


let btn3 = document.querySelector('#mult');
 x3 =() =>{
    var a = parseInt(document.getElementById('n1').value);
    var b = parseInt(document.getElementById('n2').value);
    document.getElementById('result').outerHTML=(a*b);
    return a*b; 
}
btn3.addEventListener('click', x3);


let btn4 = document.querySelector('#divd');
 x4 =() => {
    var a = parseInt(document.getElementById('n1').value);
    var b = parseInt(document.getElementById('n2').value);
    document.getElementById('result').outerHTML=(a/b);
    return a/b;   
}
btn4.addEventListener('click', x4);


let btn5 = document.querySelector('#rem');
 x5 = () =>{
    var a = parseInt(document.getElementById('n1').value);
    var b = parseInt(document.getElementById('n2').value);
    document.getElementById('result').outerHTML=(a%b);
    return a%b;
}
btn5.addEventListener('click', x5);
 


   
   
    