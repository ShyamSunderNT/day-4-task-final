//task 1 : Print odd numbers in an array
//Anonymous Function

var result = [];
var d = function (even) {
  for (var i = 0; i < even.length; i++) {
    if (even[i] % 2 !== 0) {
      result.push(even[i]);
    }
  }
  return result;
};
console.log(d([2, 5, 6, 8, 7, 9, 4, 21, 45, 65, 98, 78, 21, 45, 65]));


// IIFE Function

(function (even1) {
    for (var i = 0; i < even1.length; i++) {
      if (even1[i] % 2 !== 0) {
          console.log(even1[i])
      }
    }
   
  })
  ([2, 5, 6, 8, 7, 9, 4, 21, 45, 65, 98, 78, 21, 45, 65])

  // arrow functions

var result2 =[];
var f =(even2)=>{
    for(var i=0;i<even2.length;i++){
        if (even2[i] % 2 !== 0) {
            result2.push(even2[i]);
          }   
}
return result2
} 
console.log(f([2, 5, 6, 8, 7, 9, 4, 21, 45, 65, 98, 78, 21, 45, 65]));


// task 2
//Anonymous Function

var  n =function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
  console.log(n("my name shyam"));


  // IIFE Function

(function (str1) {
    str1 = str1.toLowerCase().split(' ');
    for (var i = 0; i < str1.length; i++) {
      str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1); 
    } 
    console.log( str1.join(' '));
  })("SHYAM IS MY NAME");

//    arrow functions


var str2 =[];
var f= (str2) =>{
    str2 = str2.toLowerCase().split(' ');
 for (var i = 0; i < str2.length; i++) 
 { 
  str2[i] = str2[i].charAt(0).toUpperCase() + str2[i].slice(1); 
 } 
 return str2.join(' ');
}
 console.log(f ("SHYAM IS MY NAME"));


 //task 3
//Anonymous Function

var ini = [];
var b = function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};
console.log(b([1, 2, 3, 4, 5]));

// IIFE :
(function (array1) {
    var sum = 0;
    for (var i = 0; i < array1.length; i++) {
      sum = sum + array1[i];
    }
    console.log(sum);
  })([1, 2, 3, 4]);

  // arrow functions

 var sum = (array2) => {
    var sum = 0;
    for (var i = 0; i < array2.length; i++) {
      sum = sum + array2[i];
    }
    return sum;
  };
   console.log(sum([6, 8, 7, 4]));
  

   //  task4
//Anonymous Function

let prime = function (arr) {
    return arr.filter(function(n){
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    });
  };
  console.log(prime([17, 28, 98, 31]));

// IIFE :

// (function (primeNum){
//     var primeNum = [45, 129, 243, 199]
//     primeNum = primeNum.filter(function(number) {
//       for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) return false;
//       }
//       return true;
//     });
    
//     console.log(primeNum);
//     })()



 // arrow functions

    (function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([1,2,3,4])


//    palindromes in an array
//Anonymous Function

const Palindromes = function (words) {
    return words.filter(function (word) {
       return word.split("").reverse().join("") === word;
     });
   };
   
   console.log(Palindromes(["hello", "noon"]))
// IIFE 


// ( function (d) {
//     var myArray = ['dad', "acecar", "joystick", "malayalam", "leo" , "mark"];
//     var arr = myArray.filter(function (c, d) {
//       var palindrome = c.split('').reverse().join('');
//       if (c == palindrome) {
//         console.log(myArray[d]);
//       }
//     });
//   })()


  //f.Return median of two sorted arrays of same size.

//Anonymous :
let median = function(z, y) {

  let c = [...z, ...y].sort((z, y) => z - y);

  const half = c.length / 2 | 0;
  
if (c.length % 2) {
  return c[half];
} else {
  
  return (c[half] + c[half - 1]) / 2;
}
}
let z = [1, 12, 15, 26, 38,24];
let y = [2, 13, 17, 30, 45, 47];
console.log(median(z, y));

//OUTPUT: 20.5


//IIFE :
( function() {
let arr1 = [1, 12, 15, 26, 38,24];
let arr2 = [2, 13, 17, 30, 45, 47];

  let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);

  const half = c.length / 2 | 0;
  
if (c.length % 2) {
console.log(c[half]);
} else {
  
console.log((c[half] + c[half - 1]) / 2);
}

})()


// Remove duplicates from an array
//Anonymous :


let a = function () {
  
    const Array = [1, 1, 2, 3, 4, 5, 5]
    let b = []
    const Array1 = [...Array].sort() 
    for (let i = 0; i < Array1.length; i++) {
      if (Array1[i + 1] === Array1[i]) {
        b.push(Array1[i])
      }
    }
    console.log(b) 
  }
  a()


//IIFE 



let input = [1, 8, 2, 8, 1, 3, 2, 2,  "shyam","shyam" , 1];

(function() {
    let ans=[];
    ans = input.filter((a,b)=> input.indexOf(a) == b)
    console.log(ans);
})();
  
//   Rotate an array by k times
//Anonymous :
let T = function(arr,k) {
    for(let i=0; i<k; i++)
    {
       arr.push(arr[0]);
       arr.shift();
    }
  return arr;
 }
 let arr=[0,1,2,3,4,5,6,7,8,9]
 let k=10;
 console.log(T(arr,k));
   


//IIFE 

(function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  })([1,2,3,4,5])
  
   

