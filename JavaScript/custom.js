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
    let firstName = prompt("");
    let lastName = prompt("");
    let fullName = firstName + " " + lastName; 
    document.getElementById("Statement").innerHTML = "let Fist and last Name is " + firstName + "" + lastName + ";"; 
    document.getElementById("Output").innerHTML = fullName;
    console.log(fullName)
  

}