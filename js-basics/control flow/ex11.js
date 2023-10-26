
showPrimes(20);

function showPrimes(limit){
    for(let i=2; i<=limit; i++){
        let flag=1;
        for (let j=2; j<=Math.sqrt(i); j++){
            if (i%j===0){
               flag=0;
               break;
            }
        }
      if(flag===1) console.log(i);
    }
}