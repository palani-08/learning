// //add to cart number


var cartbtn = document.getElementsByClassName("cart-btn");
var cartno = document.getElementById("cartno");

     let x = 0;
    function counts(){
        x+=1;
        document.getElementById("cartno").innerHTML = parseInt(localStorage.getItem("cartnumbers"));
    }
        localStorage.setItem("cartnumbers",x);
        counts()

// const cartbtn = document.getElementsByClassName("cart-btn");
// console.log(cartbtn);
 
// var cartno = document.getElementById("cartno");
// let count = 0;
//  function counts(){
//      count+=1;
//      document.getElementById("cartno").innerHTML = count;
//      console.log(counts);
//  }
// const cartbtn = document.getElementsByClassName("cart-btn");
// //console.log(cartbtn);
 
// var cartno = document.getElementById("cartno");
// let nom = 0;
//  function counts(){
//      nom += 1;
//      document.getElementById("cartno").innerHTML = nom;
//      console.log(counts);
//  }
// counts()