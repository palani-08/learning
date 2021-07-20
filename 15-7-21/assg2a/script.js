    var firstbutton = document.getElementById("btn1");
    var a =  document.getElementById ("v1").value;
    var b =  document.getElementById("v2") .value;
     CalculateAreaofcircle =() =>{
     var radius =document.form1.txtRadius.value;
     document.getElementById("v1").value =  (radius * radius * Math.PI)
     document.getElementById("v2").value = (2 * radius * Math.PI)
    }
    firstbutton.addEventListener('click', CalculateAreaofcircle);



    var secondbutton = document.getElementById("btn2");
        Trianglearea = () =>{
         document.getElementById("trihere").value =
        ((document.getElementById ("v1").value * document.getElementById("v2") .value)/2);
    }
    secondbutton.addEventListener('click', Trianglearea);


    var thirdbutton = document.getElementById("btn3");
        Rectanglearea = () =>{
        document.getElementById("rechere").value =
        ( document.getElementById ("v1").value * document.getElementById("v2") .value)
    }
    thirdbutton.addEventListener('click', Rectanglearea);