function Tocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( Tocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return Tocoins(amount, coins);
        }
    }
} 
console.log(Tocoins(57, [25, 10, 5, 2,1]));