// map amader k array return kore & loop er moto kore kaj kore..
const numbers = [1,2,3,4,5,6];
const newArray = numbers.map(number => number+1);
console.log(newArray);


const squareArray = numbers.map(number => number*number);
console.log(squareArray);


const friends = ["Riad", "Israfil", "Abhi", "Nayeem"];
const newFriends = friends.map((element, index) => {
    console.log(index);
    console.log(element);
});
//console.log(newFriends);