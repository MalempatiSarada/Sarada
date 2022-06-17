function factorial(n){
    
        if (n==0){
            return 1;
        }
        else{
            return n*factorial(n-1);
        }
        
    }
a= -6;
if(a>=0){
    res = factorial(a);
    console.log(`the factorial of ${a} is ${res}`);
}
else{
    console.log("Whoops!! Positive numbers only");
}