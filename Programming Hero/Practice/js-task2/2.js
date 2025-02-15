// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights2 = ['rahim','robin', 'rafi', 'ron', 'rashed'];
let smallestName = heights2[0].length;
    let smallestText;
    for (let i = 0; i < heights2.length; i++) {
        if (smallestName > heights2[i].length) {
            smallestName = heights2[i].length;
            smallestText = heights2[i];
        }
    }
    console.log(smallestText);

