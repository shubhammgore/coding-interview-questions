function find_duplicate_Num(){
    const arr= [ 10,30,40,50,60,50,60,70,70]
    let duplicateNum = [];
    for(let num=0; num<arr.length; num++){
        for(let j=num+1; j<arr.length; j++){
           if(arr[num]==arr[j]){
               duplicateNum.push(arr[num]);
           }
        }
    }
    console.log("duplicate num",duplicateNum);

}
find_duplicate_Num();