function sum(...args) {
    var total = 0;
    args.forEach(arg => {
      
      total += arg;
      console.log(total);
   });
  }
  sum(1, 3, 6, 9);