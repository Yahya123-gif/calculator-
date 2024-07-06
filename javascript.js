 const dislay= document.getElementById("dislay");
function appendToDisplay(input){
    dislay.value+=input;
}
function cleardisplay(){
    dislay.value = "";
}
function calculate(){
    try{
        dislay.value = eval(dislay.value);
    }
    catch{
        dislay.value ="Error";
    } 
}










