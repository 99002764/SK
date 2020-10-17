let employee = function(id, name, address){
    this.empId = id;
    this.empName = name;
    this.empAddress = address;

    this.display = function(){
        console.log("The name: " + this.empName)
        console.log("The Address: " + this.empAddress)
        console.log("The ID: " + this.empId)
    }
}
//new is the formal way to create a new object..
let emp1 = new employee(123, "Phaniraj", "Bangalore"); 
let emp2 = new employee(124, "Vinod Kumar", "Shimoga");
let emp3 = new employee(125, "Banu Prakash", "Hassan");
// A class can have both data as well as operations(functions or methods. All the members of UR class are public only)...

emp1.display();
emp2.display();
emp3.display();
console.log("The data: " + emp2.empName);
