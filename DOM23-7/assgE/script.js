function changeContent(){
    rowNumber = prompt("Input the Row Number (options 0,1,2)", "1");
    colNumber = prompt("Input the Column Number (options 0,1)", "0");
    inputString = prompt("Input the string", "Edited");
    let editIt = document.getElementById("myTable").rows[parseInt(rowNumber)].cells[parseInt(colNumber)];
    editIt.innerHTML = inputString;
}