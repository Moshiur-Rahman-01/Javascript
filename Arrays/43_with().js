// .with () মেথড মূল অ্যারে পরিবর্তন না করে নতুন অ্যারে তৈরি করে।
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);