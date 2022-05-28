const arr = [4, 6, 3, 1, 5, 8, 9, 3, 4];
const oddEvenDifference = (arr = []) => {
   let oddSum = 0;
   let evenSum = 0;
   for(let i = 0;
   i < arr.length; i++){
      const el = arr[i];
      if(i % 2 === 0){
         evenSum += el;
      }else{
         oddSum += el;
      };
 
    };
   return Math.abs(oddSum - evenSum);
};
console.log(oddEvenDifference(arr));