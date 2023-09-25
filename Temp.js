function celsiustofahrenheit(num)
{
    let celsius=document.getElementById("cel").value;
    fahrenheit=(celsius*9/5)+32;
    document.getElementById("fra").value=fahrenheit;
}
function fahrenheittocelsius(num)
{
    let fahrenheit=document.getElementById("fra").value;
    celsius=(fahrenheit-32)*(5/9);
    document.getElementById("cel").value=celsius;
}