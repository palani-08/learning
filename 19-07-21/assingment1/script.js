
   
(function(){
    document.write(JSON.stringify(DATA.Employees) +" <br>")
    document.write(JSON.stringify('userid: ' + DATA.Employees[0].userid + ' ' +'jobTitle: ' + DATA.Employees[1].jobTitle+ ' ' +'firstName: ' + DATA.Employees[2].firstName+ ' ' +'lastName: ' + DATA.Employees[3].lastName+ ' ' +'employeeCode: ' + DATA.Employees[4].employeeCode+ ' ' +'region: ' + DATA.Employees[5].region+ ' ' +'phoneNumber: ' + DATA.Employees[6].phoneNumber+ ' ' +'emailAddress: ' + DATA.Employees[7].emailAddress)); 
 })();
console.log(DATA.Employees)
     
    
    
//     fetch("./data.json")
//     .then((resolve)=>{
// return resolve.json();
//      })
//     .then ((data)=>{
// document.write(JSON.stringify(data));
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
    function appendData(DATA) {
        var mainContainer = document.getElementById("myData");
        for (var i = 0; i < DATA.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = 'userid: ' + DATA[i].userId + ' ' +'jobTitle: ' + DATA[i].jobTitle+ ' ' +'firstName: ' + DATA[i].firstName+ ' ' +'lastName: ' + DATA[i].lastName+ ' ' +'employeeCode: ' + DATA[i].employeeCode+ ' ' +'region: ' + DATA[i].region+ ' ' +'phoneNumber: ' + DATA[i].phoneNumber+ ' ' +'emailAddress: ' + DATA[i].emailAddress;
            mainContainer.appendChild(div);
        }
    }
    console.log(appendData(DATA))