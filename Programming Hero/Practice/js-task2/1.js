// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const heights = [167, 190, 120, 165, 137];
let minHeight = heights[0];
for(let i=0; i<heights.length; i++){
    if(minHeight>heights[i]){
        minHeight = heights[i];
    }
}
console.log(minHeight);
