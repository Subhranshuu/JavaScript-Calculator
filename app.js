const display =
document.getElementById("box");
function appendtodisplay(input){
    display.value +=input;
}
function cleardisplay(){
    display.value ="";
}
function calculate(){
try{
display.value=eval(display.value);
}
catch(error){
    alert("ghar ajaa bataunga");
}

}
