class Employee {
    
 constructor(salary,workhours){
        this.salary = salary;
        this.workhours = workhours;
    }
    getInfo(){
     return document.write(" My salary is" + " "+this.salary+" "+" My Workinghours is"+" "+ this.workhours)
    }
    AddSal(){
        if(this.salary < 500){
            
            return document.write(" My salary is" + " "+( this.salary+10 )+ " "+" My Workinghours is"+" "+ this.workhours+"<br>")
        }
        }
    Addwork(){
        if(this.workhours > 6){

             return document.write(" My salary is" + " "+( this.salary+5 )+ " "+" My Workinghours is"+" "+ this.workhours+"<br>")
        }
    }
    }


var emp1 = new Employee(300,8)

var emp2 = new Employee(500,5)

emp1.AddSal();
emp1.Addwork();
emp2.getInfo();