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
    var parts = display.split(".");
    var decimal = parseInt(parts[0], 2);
    var input=parts[1];
    var dum=0;
    var pow=1;
    var ans=0;
    for(i=0;i<input.length;i++)
    {
        dum=parseInt(input[i]);
        console.log(dum);
        ans=(dum*(1/2**pow))+ans;
        pow++;
    }
    console.log(ans);
    decimal+=ans;
    show(decimal);
    display="";
}

