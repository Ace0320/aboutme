console.log("INFO: Starting grannas.js file");

console.log("INFO: Access to elements");

const inputNum1 = document.querySelector("#Width");
const inputNum2 = document.querySelector("#Height");
const btn1 = document.getElementById("calcButton");
const answer = document.getElementById("answer");

console.log("INFO: Creating event handlers");

btn1.onclick = async function () {
    const text1 = inputNum1.value;
    const text2 = inputNum2.value;
    const num1 = parseInt(text1);
    const num2 = parseInt(text2);
    const answ = await area(num1, num2);
    answer.innerHTML = `Your area with your Width (${num1}) and Height (${num2}) is: ${answ}`;
}

console.log("INFO: Declaring Functions");

function area(w, h) {
    let ans = w*h;
    return ans;
}