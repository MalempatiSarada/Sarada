function CtoF(c){
    f = c*9/5 + 32;
    console.log("temperature in Farenheit is " + f + " F");
}
function FtoC(f){
    c= (f-32)*5/9;
    console.log("temperature in Celcius is " + c + " C");
}

CtoF(5);
FtoC(32);