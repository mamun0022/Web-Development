
// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended


// let output = checkSpeed(75);
// console.log(output);

// function checkSpeed(speed){
//     let extra_speed = (speed-70);
//     let points = Math.floor(extra_speed/5);
//     if (points==0){
//         return "Ok";
//     }
//     else if (points>=1 && points<12){
//         return ("Points: "+points);
//     }
//     else{
//         return "License Suspended";
//     }
// }

checkSpeed(75);

function checkSpeed(speed){
   const speedLimit = 70;
   const kmPerPoint = 5;

   if(speed < speedLimit+kmPerPoint)
     console.log('Ok');
    else{
        const points = Math.floor((speed-speedLimit)/kmPerPoint);
        if (points>=12) 
          console.log('License suspended');
        else 
          console.log('Points',points);
    }
}
