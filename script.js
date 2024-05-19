let maxNum = 100;
let remainingNum = maxNum;
let totalNum = 0;
let textarea = document.querySelector('.textarea-wrapper textarea');
let total = document.querySelector('.total p');
let remaining = document.querySelector('.remaining p');

total.innerHTML = `Total Character: ${totalNum} `;
remaining.innerHTML = `Remaining: ${remainingNum}`;

textarea.addEventListener('keyup', function () {
    Counter();
})
function Counter() {
    remainingNum = maxNum - textarea.value.length;
    totalNum = maxNum - remainingNum;
    remaining.innerHTML = `Remaining: ${remainingNum}`;
    total.innerHTML = `Total Character: ${totalNum} `;
    if (remainingNum < 0) {
        textarea.value = textarea.value.substring(0, maxNum);
        remainingNum = 0;
    }
    remaining.innerHTML = `Remaining: ${remainingNum}`;
}