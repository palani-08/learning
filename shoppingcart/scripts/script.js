



const products = document.getElementById("prod-cont");
 
 const setupproductlist = (data) => {
   let count=0; let html = '';
        data.forEach(doc => {
            const product = doc.data();
        
        
            const card = `
            <div class="container">
            <div class="row">
            <div class="col-md-4">
                  <div class="card" style="width: 18rem;">
            <img src=${product.image} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${product.heading}</h5>
                      <p class="card-text">${product.description}</p>
                      <h6 class="card-price">${product.price}</h6>
                      <button class="btn btn-primary cart-btn "style="margin-left: 140px;" id="cartid${count}" onclick="counts()">Add to Cart</button>
                      </div>
                      </div>
                      </div>
                      </div>
                      
                      
                      `;
                      count++
                      html += card
        })
        products.innerHTML = html;
}

//add to cart function
const cartbtn = document.getElementsByClassName("cart-btn");
var cartno = document.getElementById("cartno");
console.log(cartbtn);
     let x = 0;
    function counts(){
        x+=1;
        document.getElementById("cartno").innerHTML = localStorage.getItem("cartnumbers");
        localStorage.setItem("cartnumbers",x);
       
    }

  
