class Matrix{
    constructor(noofrows,noofcolumns){
        this.noofrows = noofrows;
        this.noofcolumns = noofcolumns;
    }
    element(value = (i,j) => 0){
        
        var array = new Array(this.noofrows);
        for (var i = 0; i < this.noofrows; i+++"<br>") {
          array[i] = new Array(this.noofcolumns);
          for (var j = 0; j < this.noofcolumns; j++) {
            array[i][j] = value(i, j);
          }
        }
    
        return array;
      }
      
    }

var mat1 = new Matrix(2,2);
document.write(mat1.element())
