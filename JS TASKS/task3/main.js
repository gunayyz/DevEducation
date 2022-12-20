//TASK 3-1
//1. User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.

// let a=prompt("enter a");
// let b=prompt("enter b");
// function getResult(a,b) {
//    let result=parseInt(a/b);
//    console.log(result);
// }
// function GetRem(a,b) {
//     let remain=a%b;
//     console.log(remain);
// }
// getResult(a,b);
// GetRem(a,b);



//2. The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).

// let a=prompt("enter a"); 
// let b=prompt("enter b"); 
// function getResult(a,b) {
//     let c=a; 
//     a=b; 
//     b=c;
//     console.log(a,b);
// }
// getResult(a,b)

//3. The user enters 3 non-zero numbers (A, B and C). Print to the console the solution 
//(the value of X) of the standard linear equation, where A*X+B=C.

// let a=prompt("enter a");
// let b=prompt("enter b");
// let c=prompt("enter c");
// function getResult(a,b,c) {
//     let x=c-b/a;
//     console.log(x);
// } 
// getResult(a,b,c)

//4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.

// let a=prompt("enter a"); 
// let b=prompt("enter b"); 
// function getResult(a,b) {
//     if(a>b){
//             console.log(a+b);
//         }
//         else if(a<b){
//             console.log(a-b);
//         }
//         else if(a=b){
//             console.log(a*b);
//         }
// }
// getResult(a,b)


//5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.

// let a=prompt("enter a");
// let b=prompt("enter b");
// let c=prompt("enter c"); 

// function getResult(a,b,c) {
//     let d=b*b-4*a*c;
//     if(d>0){
//         root1 = (-b + Math.sqrt(d)) / (2 * a);
//         root2 = (-b - Math.sqrt(d)) / (2 * a);
//         console.log("First root is", root1)
//         console.log("second root is", root2)
//     }
//     else if (d == 0) {
//         root1 = root2 = -b / (2 * a);
//         console.log("The root is", root1)
//     }
//! if roots are not real
//     else {
//         console.log("no real roots")
//     }
// }
// getResult(a,b,c)

//6. The user enters a two-digit number. Print the literal representation of this number to the console. For example, typing "25" will display "twenty five" in the console, and "13" will display "thirteen".
// let number = Number(prompt('Enter the number : '))
// function getResult(number)  {
//     if(number == 25){
//     console.log("Twenty five");
// }
// else if(number == 13){
//     console.log("Thirteen");
// }
// else{
//     console.log("You can enter only 13 and 25 ");
// }
// }
// getResult(number)


//7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)

// let a = Number(prompt('Enter the a : '))
// let b = Number(prompt("Enter the b : "))
// let c = Number(prompt('Enter the c : '))
// function getResult(a,b,c) {
//     if(c > a && c > b){
//         console.log("It is in inside the circle");
//     }
//     else{
//         console.log("It is in outside");
//     }
// }
// getResult(a,b,c)

//task 3-2
//1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.

// let a=+prompt("enter a");
// function getResult(a) {
//     while (isNaN(a) || a=="")
//     {
//     a=+prompt("Please try again. you should enter a number:");
//     }
// for (let i = 0; i < 1000; i++) 
// {
//     if (i%a==0) 
//     {
//         console.log(i);
//     }
// }
// }
// getResult(a)

//2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).


// let a=+prompt("enter a");
// function getResult(a) {
//     while (isNaN(a) || a==""){
//     a=+prompt("Please try again. you should enter a number:");
//    }
// for (let i = 0; i < a; i++) {
//     if (i*i<a) {
//         console.log(i);
//     }
// }
// }
// getResult(a)


//3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
// function getResult(a) {
//     let a=+prompt("enter a");
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
// }
// getResult(a)




//4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range
// A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).
//21 and 14
// function getResult() {
//     let a=+prompt("enter a");
// while (isNaN(a) || a=="" || a%7!=0){
//     a=+prompt("Please try again.you should enter a number and this number should be divisible by 7 without a remainder. ");
//    }

// let b=+prompt("enter b");
// while (isNaN(b) || b=="" || a%7!=0 || a<b){
//     b=+prompt("value must be a number and this number should be divisible by 7 without a remainder. and b should be less than a.");
//    }

// let sum=0;
// for (let i = b; i <= a; i++) //14<21 
// {
//     sum=sum+i;


// }
// console.log(sum);
// }
// getResult()




//5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. 
//In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1
// function getResult() {
    // let N=+prompt("enter N");
// while (isNaN(N) || N=="" ||N<0){
//     N=+prompt("Please try again. you should enter a positive number:");
//    }
// console.log(fib(N));
// function fib(N) {
//     if (N <= 1){
//         return N;
//     }
//     return fib(N-1) + fib(N-2);
// }
// } 
// getResult()




//6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. 
//90 54
// function getResult() { 
    // let a=+prompt("enter a");
// while (isNaN(a) || a=="" || a<0){
//     a=+prompt("Please enter correctly");
//    }
// let b=+prompt("enter b");
// while (isNaN(b) || b=="" || b<0){
//     b=+prompt("Please enter correctly");
//    }
// let reminder=0;
// while (a%b>0) {
//     reminder=a%b;
//     a=b;
//     b=reminder;
// }
// if (a%b==0) {
//     console.log(b);
// }

// }
// getResult()


//7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case
//13 31
// function getResult() {
    // let a=+prompt("enter a"); 
// while (isNaN(a) || a=="" || a<0){
//     a=+prompt("Please enter correctly");
//    }
// let reverse=0;
// let remainder=0;
// while (a>0) {
//         remainder=a%10;
//         reverse=reverse*10+remainder;
//         a=parseInt(a/10);
        
//     }
//     console.log(reverse);

// }
// getResult()





//8. The user enters 2 numbers. Find out if these two numbers have the same digits. 
//For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".
// let num1 = prompt(" enter num1");
// let num2 = prompt(" enter num2");
// let count=0;
// function getResult() {
    // for (let i = num2; i > 0; i--) {
//  if (num1%i==0&&num2%i==0) {
//     count++;
//  }
    
// }
// if (count>1) {
//     console.log("Yes");
// }
// else{
//       console.log("No");
 
// }
// }
// getResult()


















