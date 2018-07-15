let assignment1 = [];
let assignment4 = [];
let input1 = '';
let input4 = '';
// let aaa = [6, 8, 3, 15];
// let bbb = 9;
let targetNumber = 0;
// console.log(aaa.length);
let final=[];

let btnInput = {
  insert: () => {
    assignment1.push(parseInt(inputAssignment1.value));
    input1 += inputAssignment1.value + ',';
    inputAssignment1.value = '';
    console.log(assignment1);
    let order = assignment1.sort((a, b) => a < b ? 1 : -1);
    console.table(order);
    maxNumber.textContent = order[0];
    inputNumber.textContent = input1;
  },
  calculate: (args) => {
    let result;
    if (args.op === "+") {
      result = args.n1 + args.n2;
    } else if (args.op === "-") {
      result = args.n1 - args.n2;
    } else {
      result = "Not supported";
    }
    return result;
  },
  twoSum: () => {
    for (const [key, value] of assignment4.entries()) {
      if (value < targetNumber) {
        let target = targetNumber - value;
        for (const [key2, value2] of assignment4.entries()) {
          if (key === key2) {
            console.log(key2+'是同一個數字所以跳過')
          } else {
            if (target === value2) {
              console.log(key+'和'+key2+'是一樣的');
              final[0]=key;
              final[1]=key2;
              targetText.textContent = `nums[${final[1]}]+nums[${final[0]}] is ${targetNumber}`;
              break;
            }
          }
        }
      }
    }
  },
  totalSum: () => {
    assignment4.push(parseInt(inputAssignment4.value));
    input4 += inputAssignment4.value + ',';
    inputAssignment4.value = '';
    targetNumber = target.value;
    inputNumbers.textContent = input4;
    console.log(targetNumber);
  }
}
console.log(btnInput.calculate({
  n1: 3,
  n2: 4,
  op: '+'
}))

let assignment2 = {};
assignment2.n1 = 7;
assignment2.n2 = 2;
assignment2.op = "-";
console.log(btnInput.calculate(assignment2));

let assignment2_2 = {};
assignment2_2['n1'] = 7;
assignment2_2['n2'] = 2;
assignment2_2['op'] = "%";
console.log(btnInput.calculate(assignment2_2));

const assignment1Button = document.querySelector('.assignment1__button');
assignment1Button.addEventListener('click', btnInput.insert, false);

const assignment4Button = document.querySelector('.assignment4__button');
assignment4Button.addEventListener('click', btnInput.totalSum, false);

const sumButton = document.querySelector('.sum');
sumButton.addEventListener('click', btnInput.twoSum, false);

const maxNumber = document.querySelector('.maxNumber');
const targetText= document.querySelector('.target');

const inputNumber = document.querySelector('.input-number');
const inputNumbers = document.querySelector('.input-numbers');

let inputAssignment1 = document.querySelector('#assignment1');
let inputAssignment4 = document.querySelector('#assignment4');
let target = document.querySelector('#target');