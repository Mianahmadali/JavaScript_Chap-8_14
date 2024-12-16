document.getElementById("Concatenate_Some_String").onclick = function(){
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let text = "Good day";
    let name = "Mian Ahmad Ali";
    let symble = "!";
    Concatenate = text + " " + name + symble;

    document.getElementById("Statement").innerHTML = "let Concatenate " + text + " " + name + "" + symble + " ;";
    document.getElementById("Output").innerHTML = Concatenate;
    alert(Concatenate)

}

document.getElementById("Ask_Numbers_Users").onclick = function(){
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let firstName = prompt("Enter your First Name");
    let lastName = prompt("Enetr your last Name");
    let fullName = firstName + " " + lastName; 
    document.getElementById("Statement").innerHTML = "let Fist and last Name is " + firstName + "" + lastName + ";"; 
    document.getElementById("Output").innerHTML = fullName;
    console.log(fullName)
  

}
document.getElementById("Comparision").onclick = function(){
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let num1 = +prompt("Enter First number");


    if(isNaN(num1)){
        alert("num1 is not a number, Please try again")
        return
        
    }
    let num2 = +prompt("Enter Second number");
    
    if(isNaN(num2)){
        alert("num2 is not a number, Please try again")
        return
        
    }
    let sum = num1 + num2;
    console.log(sum)



    document.getElementById("Statement").innerHTML = "let Fist number is " + num1 + "<br> and Second number is " + num2 + "<br> The sum of " + num1 + "+" + num2 + " is ;"; 
    document.getElementById("Output").innerHTML = sum;
   
  

}


document.getElementById("if_else_if").onclick = function(){
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let num1 = +prompt("Enter any number");
    
    if(isNaN(num1)){
        alert("num1 is not a number, Please try again")
        return
        
    }
    let num2 = +prompt("Enter any Number");
    if(isNaN(num2)){
        alert("num2 is not a number, Please try again")
        return
        
    }
    if(num1 < num2){
        alert("The num1 is less then num2")
    }
    else if (num1 > num2){
        alert("The num 1 is greater then num2")
    }
    else if (num1 = num2){
        alert("The num1 is equal to num2")
    }
    else{ alert("No your condition is false")}
    document.getElementById("Statement").innerHTML = "The num1 is " + num1 + "<br> The num2 is " + num2 + ";";
   
    // document.getElementById("Output").innerHTML = fullName;
   
  

}

document.getElementById("TestingSets").onclick = function(){
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let age = +prompt("Enter your age");
    
    if(isNaN(age)){
        alert("num1 is not a number, Please try again")
        return
        
    }
    let weight = +prompt("Enter your weight");
    if(isNaN(weight)){
        alert("num2 is not a number, Please try again")
        return
        
    }
    if(age >= 18 && weight <= 70){
        alert("Your are a smart guy")
    }
    // else if (age >=18 && weight < 70){
    //     alert("You are a thin guy")
    // }
    else if (age >=18 && weight < 80 ){
        alert("You are a healthy guy")
    }
    else if (age >=18 && weight <=90){
        alert("You are a faty guy")
    }
    else{ alert("You are a baby")}
    document.getElementById("Statement").innerHTML = "The age is " + age + "<br> The weight is " + weight + ";";
   
   
  

}


document.getElementById("IfStatementNested").onclick = function() {
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";

    let age = +prompt("Enter your age");
    if (isNaN(age)) {
        alert("Age is not a valid number. Please try again.");
        return;
    }

    if (age >= 18) {
        let weight = +prompt("Enter your weight");
        if (isNaN(weight)) {
            alert("Weight is not a valid number. Please try again.");
            return;
        }

        if (weight <= 70) {
            alert("You are a healthy guy.");
        } else {
            alert("You are a heavy guy.");
        }

        document.getElementById("Statement").innerHTML =
            "The age is " + age + "<br> The weight is " + weight + ".";
    } else {
        alert("You are a baby.");
        document.getElementById("Statement").innerHTML =
            "The age is " + age + ".<br> You are too young to enter weight.";
    }
};
document.getElementById("Login").onclick = function() {
    let fullName = prompt("Enter your Full Name");
    let password = prompt("Enter your password");
    
    let userName = "Mian Ahmad Ali";
    let pass = "123"; // Password should be a string for proper comparison
    
    if (userName === fullName && pass === password) {
        alert("User logged in");
    } else {
        alert("Invalid username or password. Please try again.");
    }
};
document.getElementById("ClearStatement").onclick = function(){
    document.getElementById("Statement").innerHTML = "";

}
document.getElementById("ClearOutput").onclick = function(){
    document.getElementById("Output").innerHTML = "";

}


// document.getElementById("TestingSets").onclick = function() {
//     document.getElementById("Statement").innerHTML = "";
//     document.getElementById("Output").innerHTML = "";

//     let age = +prompt("Enter your age");
//     if (isNaN(age)) {
//         alert("Age is not a valid number. Please try again.");
//         return;
//     }

//     let weight = +prompt("Enter your weight");
//     if (isNaN(weight)) {
//         alert("Weight is not a valid number. Please try again.");
//         return;
//     }

//     if (age >= 18) {
//         if (weight <= 70) {
//             alert("You are a smart guy.");
//         } else if (weight < 80) {
//             alert("You are a healthy guy.");
//         } else if (weight <= 90) {
//             alert("You are a fatty guy.");
//         } else {
//             alert("Your weight is above the typical range.");
//         }
//     } else {
//         alert("You are a baby.");
//     }

//     document.getElementById("Statement").innerHTML = 
//         "The age is " + age + "<br> The weight is " + weight + ".";
// };


 


