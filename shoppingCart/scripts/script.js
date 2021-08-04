



const products = document.getElementById("prod-cont");
 
 const setupproductlist = (data) => {
   let count=0; let html = '';
        data.forEach(doc => {
            const product = doc.data();
        
        
            const card = `
            
            
            <div class="col-md-4" >
                  <div class="card" style="width: 18rem; text-align: center;">
            <img src=${product.image} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${product.heading}</h5>
                      <p class="card-text">${product.description}</p>
                      <h6 class="card-price">${product.price}</h6>
                      <button class="btn btn-secondary cart-btn "style="margin-left: 140px; text-align: center;" id="cartid${count}" onclick="getid(this.id)">Add to Cart</button>
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
//const cartbtn = document.getElementsByClassName("cart-btn");

    function getid(clicked_id){
     
     
      adddata()
      
    
    function adddata(){
      db.collection("cartitems").add(
        {
          productname: document.getElementById(clicked_id).parentElement.children[0].innerHTML,
          productimg: document.getElementById(clicked_id).parentElement.parentNode.children[0].src,
          productprice : document.getElementById(clicked_id).parentElement.children[2].innerHTML
        }
      )
      .then(function(docs){
        console.log('doc written with id',docs.id);
      })
      .catch(function(error){
        console.error('error in adding doc',error)
      })
    
  

    
      db.collection('cartitems').get().then(snapshot =>{
        setupcartlist(snapshot.docs);
      })
    const toAddtoCart = document.querySelector('tbody');
    const setupcartlist = (data) => {
       let html = '';
           data.forEach(doc => {
               const cartitem = doc.data();

   let tbody = `
   <tr>
       <td class="w-25">
           <img src="${cartitem.productimg}" class="img-fluid img-thumbnail" alt="Sheep">
       </td>
       <td>${cartitem.productname}</td>
       <td id="proprice">${cartitem.productprice}</td>
       <td><input type="number" style="width: 45px;" id="inp"></td>
       <td id="total"></td>
       <td><button class="btn btn-sm" style="border-radius : 2px; background : red" data-bs-dismiss="w-25">
       <i class="bi bi-x-circle"></i>
       </button>
       </td>
       </tr>
   `
          html += tbody
           })
           toAddtoCart.innerHTML = html;
          
          }   
            // total function  
          function total(){
            let proprice = document.getElementById("proprice").innerHTML;
            let inp = document.getElementById("inp").value;
            let total  = document.getElementById("total").innerHTML;
            total = (proprice * inp)
             }
             total();
          
           
}
    }
    
    // search function
    function search(){
      const searchinp = document.getElementById("searchinp").value;
      const searchbtn = document.getElementById("searchbtn");
      
    }