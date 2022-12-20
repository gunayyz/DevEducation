//1. Find the minimum element of this array
// let arr=[11,5,3,8,13];
// let min=arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]<min) {
//     min=arr[i];
//   }
  
// }
// console.log(min);

//2. Find the maximum element of this array
// let arr=[11,5,3,8,13];
// let max=arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]>max) {
//     max=arr[i];
//   }
// }
//console.log(max);

// 3. Find the index of the minimum element of this array
// let arr=[11,5,3,8,13];
// let index=0;
// let min=arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]<min) {
//     min=arr[i];
//     index=i;
//   }
// }
// console.log(index);

// 4. Find the index of the maximum element of this array
// let arr=[11,5,3,8,13]
// let max=arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i]>max) {
//     max=arr[i];
//   }
// }
// console.log(index);

//5. Calculate the sum of array's elements with odd indices
// let arr=[11,5,3,8,13];
// let sum=0;
// for (let i = 0; i < array.length; i++) {
//   if (arr[i]%2!=0) {
//     sum+=arr[i];
//   } 
// }
// console.log(sum);

// 6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, 
//which WILL NOT create any new array

// let array=[11,5,3,8,13];
// function reverse(arr){
//     let temp=0;
//     for (let i = 0; i < array.length/2; i++) {
//         temp=arr[i];
//         arr[i]=arr[arr.length-i-1];
//         arr[arr.length-i-1]=temp;
//     }
//     console.log(arr);
// }
// reverse(array);

// 7. Count the number of odd elements in the array
// let num = [11,5,3,8,13];
// let count=0;
// for (let i = 0; i < num.length; i++) {
//    if (num[i]%2!=0) {
//    count++
//    } 
// }
// console.log(cnt);

// 8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.

//let array=[1,5,3,8];
// let temperory=0;
// let half=0;
// for (let i = 0; i < array.length/2-1; i++) {
//     temperory=array[i];
//     half=Math.round(array.length/2);
//     array[i]=array[half+i];
//     array[half+i]=temperory;
// }

// 9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
// let array = [11,5,3,8,13];
// let value;

// for(i = 0; i < array.length; i++){
//     for(j = 0; j < array.length-1; j++){
//         if(array[j] > array[j+1]){
//             value = array[j]
//             array[j] = array[j+1]
//             array[j+1] = value
//         }
//     }   
// }
// console.log(array)

// 10. Sort the array in descending order in one of the ways (different from the method taken in the 9th task): bubble sort, selection sort or insertion sort.
// let array = [11,5,3,8,13];
// let value;
// let indexValue;

// for(i = 0; i < array.length; i++){
//     let minValue = array[i]
//     console.log(array)
//     console.log(array[i])
//     for(j = i; j < array.length; j++){
//         if(minValue > array[j]){
//             minValue = array[j]
//         }
//     }
//     for(k = 0; k < array.length; k++){
//         if(minValue == array[k]){
//             indexValue = k;
//         }
//     }
//     value = array[i]
//     array[i] = minValue;
//     array[indexValue] = value
// }