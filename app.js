var messageElement = document.getElementById('home-message');
messageElement.innerHTML = 'Student Fees Calculator';


function calc(){
var name = document.querySelector("#sname").value;
var sn = parseInt(document.querySelector("#snum").value);
var cy = document.querySelector("#currentYear").value;
var sc = document.querySelector("#studCourse").value;
const base = 35000;
var calculate;
var disc; 

if(name=="")
{
    alert("No blank value allowed.");
    return false;
}
else if(sn=="")
{
    alert("No blank value allowed.");
    return false;
}
else if(cy=="null")
{
    alert("Please select an option");
    return false;
}
else if(sc=="null")
{
    alert("Please select an option");
    return false;
}
else
{
    true;
}
   


if(cy == "first"){
    calculate = base-(base/100*5);
    disc = (base/100*5);
    
} else if(cy == "second"){
    calculate = base-(base/100*10);
    disc = (base/100*5)
} else if(cy == "third"){
    calculate = base-(base/100*20);
    disc = (base/100*5); 
}


if(sc=="Eng"){
    sc= "Engineering";
}else if(sc=="Acc"){
    sc = "Accounting"
}else if(sc="man"){

    sc = "Management"
}

document.write("Student name: "+name+""+"<br>")
document.write("Student number: "+sn+""+"<br>")
document.write("Course: "+sc+""+"<br>")
document.write("Sub total: R"+base+""+"<br>")
document.write("Discouted fee: R"+disc+""+"<br>")
document.write("Total fees for the year: R"+calculate+""+"<br>")
}

function reseting(){
    document.getElementById("myForm").reset();
}
