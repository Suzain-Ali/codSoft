let input_text = document.getElementById("input-text");
function func(intp) {
    input_text.value+=intp;
}
function reset(){
    input_text.value="";
}
function equal(){
    try{
        input_text.value = eval(input_text.value);  
    }
    catch(error){
        input_text.value = "Error";
    }
}