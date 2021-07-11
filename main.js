function add(){
    var field1=document.getElementById("no1").value;
    var field2=document.getElementById("no2").value;
    
    var result=parseFloat(field1)+parseFloat(field2);
    
    if(!isNaN(result))
        {
            document.getElementById("ans").innerHTML=result;
        }
}

function sub(){
    var field1=document.getElementById("no1").value;
    var field2=document.getElementById("no2").value;
    
    var result=parseFloat(field1)-parseFloat(field2);
    
    if(!isNaN(result))
        {
            document.getElementById("ans").innerHTML=result;
        }
}

function mul(){
    var field1=document.getElementById("no1").value;
    var field2=document.getElementById("no2").value;
    
    var result=parseFloat(field1)*parseFloat(field2);
    
    if(!isNaN(result))
        {
            document.getElementById("ans").innerHTML=result;
        }
}

function div(){
    var field1=document.getElementById("no1").value;
    var field2=document.getElementById("no2").value;
    
    var result=parseFloat(field1)/parseFloat(field2);
    
    if(!isNaN(result))
        {
            document.getElementById("ans").innerHTML=result;
        }
}

function convert(){
    var field1=document.getElementById("num1").value;
    var field2=document.getElementById("num2").value;
    
    var result=parseFloat(field1)/parseFloat(field2);
    
    if(!isNaN(result))
        {
            document.getElementById("converted").innerHTML=result;
        }
}

























