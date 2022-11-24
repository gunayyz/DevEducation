//1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.

// let a=+prompt("enter a");
// while (isNaN(a) || a==""){
//     a=+prompt("Please try again. you should enter a number:");
//    }
// for (let i = 0; i < 1000; i++) {
//     if (i%a==0) {
//         console.log(i);
// }
// }

//2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).
//17
//16<4
//0 1 2 3 4

// let a=+prompt("enter a");
// while (isNaN(a) || a==""){
//     a=+prompt("Please try again. you should enter a number:");
//    }
// for (let i = 0; i < a; i++) {
//     if (i*i<a) {
//         console.log(i);
//     }
// }

//3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
//16-8

// let a=+prompt("enter a");
// while (isNaN(a) || a==""){
//     a=+prompt("Please try again. you should enter a number:");
//    }
// let largestDiv=0;
// for (let div = 1; div < a; div++) {
//     if(a%div==0){
//         largestDiv=div;
//     }
// }
// console.log(largestDiv);



//4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range
// A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).

// let a=+prompt("enter a");
// while (isNaN(a) || a=="" || a%7!=0){
//     a=+prompt("Please try again.you should enter a number and this number should be divisible by 7 without a remainder. ");
//    }

// let b=+prompt("enter b");
// while (isNaN(b) || b=="" || a%7!=0 || a<b){
//     b=+prompt("value must be a number and this number should be divisible by 7 without a remainder. and b should be less than a.");
//    }

// let sum=0;
// for (let i = b; i <= a; i++) //14<21 answer:140
// {
//     sum=sum+i;
// }
// console.log(sum);



//5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to
//6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. 
//7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case
