// console.log(2>1);
// console.log(2>=1);
// console.log(2 <1);
// console.log(2 == 1);
// console.log(2 !=1);

// console.log("2" >1);
// console.log("02">1);

// console.log(null >0);
// console.log(null ==0);
// console.log(null >= 0);  // true

// this type of conversion is making confusion

/*
  the reason is that an equality check == and comparisons > <>= <= work differently.
  comparison convert null to a number,treating it as 0.
  that's why (3) null >=0 is true and (1) null>0 is false.
*/

// console.log(undefined == 0);  // false
// console.log(undefined>0);  // false
// console.log(undefined<0);  //  false

// ===

console.log("2" === 2);