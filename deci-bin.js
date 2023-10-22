var display="";
function show(ans)
{
    document.getElementById("display").innerText = ans;
}
function addnum(number)
{
    display+= number;
    show(display);
}
function clearDisplay() {
    display= "0";
    show(display);
    display="";
}
function del(){
    display = display.substring(0, display.length - 1);
    show(display);
    if(display=="")
    {
    display="0";
    show(display);
    display="";
    }
}
function convert(){
var input=parseFloat(display);
var ans = input.toString(2);
show(ans);
display="";
}
