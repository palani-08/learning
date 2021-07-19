// var addbtn = document.getElementById("addbtn");

// var closebtn = document.getElementById("close");

// //const BtnAdd = document.querySelector(".btn-add");
// const DivContainer = document.getElementById("myform");

// addbtn.addEventListener("click", AddNew);

// function AddNew() {
//   const newtext = document.createElement("textbox");
//   console.log("add");
//   newtext.classList.add("typehere")
// DivContainer.appendChild(newtext)
//  //return DivContainer.appendChild(newtext);
// }

var a = document.createElement("TEXTAREA");
a.setAttribute("type", "box");
a.setAttribute("placeholder", "Type here...");
 a.setAttribute("id", "inp");

        function myFunction() {
          var x = document.createElement("TEXTAREA");
          x.setAttribute("type", "box");
          x.setAttribute("placeholder", "Type here...");
           x.setAttribute("id", "inp");
          document.body.appendChild(x);
        }
        function deletebtn(){
          var delbtn = document.getElementById("delete");
          this.document.getElementById("inp").value = "";
        }
      localStorage.setItem('notes',document.getElementById("inp").value);