var firebaseConfig = {
    apiKey: "AIzaSyCbKaJTcMWz2tbo-DKph8CSzer7IWqxJWY",
    authDomain: "shirtz-shoppingcart.firebaseapp.com",
    projectId: "shirtz-shoppingcart",
    storageBucket: "shirtz-shoppingcart.appspot.com",
    messagingSenderId: "536137889380",
    appId: "1:536137889380:web:eba9286f99dccee0a29171",
    measurementId: "G-S1B2257X8D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // make auth and firestore references
  let auth = firebase.auth();
  const db = firebase.firestore();

  //update firestore settings
  db.settings({timestampsInSnapshots: true});



//database from firestore




  //login status
  auth.onAuthStateChanged(user =>{
      if(user){
//alert("user has logged in")
db.collection('productlist').get().then(snapshot =>{
  setupproductlist(snapshot.docs);
})
       }
        else{
          alert("please login to see Products")
          setupproductlist([])
        }
  })


//signup
const signupForm = document.querySelector("#signupform");
const signupbtn = document.getElementById("signupbtn");
signupbtn.addEventListener('click',() =>{
    const username = document.getElementById("recipient-name").value;
    const phone = document.getElementById("recipient-phone").value;
    const address = document.getElementById("recipient-address").value;
    const Email = document.getElementById("recipient-email").value;
    const email = Email.trim();
    const password = document.getElementById("signuppassword").value;
//signup the user
auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // console.log(cred);
    // $('#signupmodal').modal('hide');
    // return false;   
    alert(username + " " +"has signed in successfully");
})
})
//logging out the user
const logoutbtn = document.getElementById("logoutbtn");
logoutbtn.addEventListener('click',()=>{
    auth.signOut().then(()=>{
        confirm("Are you sure you want to Logout")
        //alert("you have logged out successfully");
    })
})

//login
const loginbtn = document.getElementById("loginbtn");
loginbtn.addEventListener('click', () =>{



const loginemail = document.getElementById("loginemail").value;
const loginpassword = document.getElementById("loginpassword").value;

auth.signInWithEmailAndPassword(loginemail,loginpassword).then(cred =>{
//  alert(loginemail +" "+"has logged in")
})
})