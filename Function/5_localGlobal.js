let globalVar = "I am global"; // গ্লোবাল ভেরিয়েবল

function myFunction() {
    let localVar = "I am local"; // লোকাল ভেরিয়েবল
    console.log(globalVar); // গ্লোবাল ভেরিয়েবল অ্যাক্সেস করা যায়
    console.log(localVar); // লোকাল ভেরিয়েবল অ্যাক্সেস করা যায়
}

myFunction();
// console.log(localVar); // Error: লোকাল ভেরিয়েবল বাইরে অ্যাক্সেস করা যায় না
