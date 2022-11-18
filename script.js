function compute()
{
    //Retrive the values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //Calculate interest, amount and year. 
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    //Write output and display on html
    var result= "If you deposit <mark>" + principal +
    ",</mark> <br> at an interest rate of <mark>" + rate + 
    "%</mark>. <br> You will receive an amount of <mark>" + interest + 
    "</mark>, <br> in the year <mark>"+ year +"</mark>";
    document.getElementById("result").innerHTML=result;
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval +"%";
}
function checkprincipal(){
    var principal = document.getElementById("principal");
       //validation
       if(principal.value <= 0)
       {
           alert("Enter a positive number")
           principal.focus();
       }
       else
	   {
		   compute();
       }
}