var favFoods = ['pizza', 'cake', 'waffles', 'dilly bars'];
var studentsPerGroup = [3, 4, 5, 3, 6, 2];
var aBunchOfBooleans = [true, false, true, false];

favFoods.push('anchovies');
// This string will be added to the end of the `favFoods` array

studentsPerGroup.pop();
/* This method will remove the number in the last index position of `studentsPerGroup` array.*/

aBunchOfBooleans.unshift(false, false);
/* This method will add two booleans (the provided values passed as arguments) to the first two index positions of the array */

console.log(favFoods[2]); //will log 'waffles'
console.log(studentsPerGroup[4]) //will return 6

/* Arrays are based on 0-base index, so the first element will be at position 0, the second at position 1, etc.*/