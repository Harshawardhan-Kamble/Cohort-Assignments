const array=[22,69,85,87,8,9,65,64,6,86,9,3,6,6,76,5,2,3,6,97,654,9,63,1,7596,5,8]
let largestElement=array[0]
for (let i=0;i<array.length;i++){
    if (largestElement<array[i]){
        largestElement=array[i]
    }
}
console.log("The Largest Element is "+largestElement)