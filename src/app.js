// // Prime Number

// function findPrime(...numbers) {
//     for (let i = 0; i < numbers.length; i++) {
  
//       let count = 0
//       for (let j = 1; j <= numbers[i]; j++) 
//       {
//         if (numbers[i] % j === 0) 
//         {
//             count++
//         }
//       }

//       if (count === 2) 
//       {
//         console.log("Asal Sayidir " + numbers[i])
//       } else 
//       {
//         console.log("Asal Degil " + numbers[i])
//       }
  
//     }
  
//   }
  
//   findPrime(2,5,7,97)




// // Friendly Numbers

// function FriendlyNumbers(number1,number2){

//     let total1 = 0,total2 = 0;

//     for(let i = 0; i < number1; i++){
//         if(number1 % i === 0)
//         {
//             total1 += i; 
//         }
//     }

//     for(let j = 0; j < number2; j++){
//         if(number2 % j === 0)
//         {
//             total2 += j; 
//         }
//     }

//     if(number1 === total2 && number2 === total1){
//         console.log(number1 + " and " + number2 + " are friendly numbers");
//         return;
//     }

//     console.log(number1 + " and " + number2 + " are not friendly numbers")
    
// }

// FriendlyNumbers(220,284);



    
// // perfect number
    
   
//     for(let i = 1; i < 1000; i++){
//         let totalNumber = 0;
//         for(let j = 1; j < i ; j++){
//             if(i % j === 0){
//                 totalNumber += j;
//             }
//         }

//         if (totalNumber === i) {
//             console.log(i);

//         }
//     }
    

        // super number list

        // let superNumbers =[];
        // for (let i = 2; i < 1000; i++) {
      
        //   let count = 0
          
        //   for (let j = 1; j <= i; j++) 
        //   {
        //     if (i % j === 0) 
        //     {
        //         count++;
        //     }
        //   }
          
        //   if (count === 2) 
        //   {
        //     superNumbers.push(i);
        //   } 
          
      
        // }
        // console.log(superNumbers);

    
      
     