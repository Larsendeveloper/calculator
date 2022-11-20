 let outputscreen = document.getElementById("output-screen");

function display (number){

outputscreen.value += number; 
}

function calculate(){
  try{
    outputscreen.value= eval(outputscreen.value);
  }
  catch(err)
  {
    alert( "INVALID")
  }
}

function cutt ()
{
    outputscreen.value ="";
}
 function Del()
 {
    outputscreen.value =outputscreen.value.slice(0,-1);
 }


