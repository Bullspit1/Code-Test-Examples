console.log(3 === 3 || false || 'chicken');


// function isAdult(age){
//   if(age && age >= 18){
//     return true;
//   } else {
//     return false;
//   }
// }

/*------------Short Cirtuting--------------*/
function isAdult(age){
  return age && age >= 18;
}

console.log(isAdult(18));


function countToFive(start){
  start = start || 1;
  for (var i = start; i <= 5; i++) {
    console.log(i);
  }
}

// countToFive(2);

function greet(name){
  name && console.log('Hi, ' + name + '!');
}

greet('Sam');