const h1 = document.createElement('h1');
const p = document.createElement('p');
const heading = document.createElement('div');
h1.innerHTML = "DOM Manipulation";
h1.id = 'title';
p.innerHTML = 'Calculator';
p.id = 'description';
heading.classList = 'heading'
heading.appendChild(h1);
heading.appendChild(p);
document.body.append(heading);


const flexcontiner = document.createElement('div');
flexcontiner.classList = 'flexdisplay';
document.body.append(flexcontiner);

const container = document.createElement('div');
container.classList = 'container';
container.id='keys'
flexcontiner.append(container);

const inputDisplay = document.createElement('input');
inputDisplay.setAttribute("readonly", true);
inputDisplay.classList = 'grid1';
inputDisplay.id = 'result'
inputDisplay.value = '0';
container.append(inputDisplay);

/* clear button */
const clear = document.createElement('button');
clear.value= 'c';
clear.classList = 'operation';
clear.style.color = 'red';
clear.innerHTML = 'c';
clear.id = 'clear';
container.append(clear);

/* back button */
const back = document.createElement('button');
back.value= '<-';
back.classList = 'operation';
back.id = 'back';
back.innerHTML = '←';
container.append(back);

/* dot button */

const dot = document.createElement('button');
dot.value= '.';
dot.classList = 'operation';
dot.id = 'dot';
dot.innerHTML = '.';
container.append(dot);

/* multiplication */
const multi = document.createElement('button');
multi.value= '*';
multi.classList = 'operation'
multi.id = 'multi';
multi.innerHTML = '×';
container.append(multi);
/* 7 */
const num7 = document.createElement('button');
num7.value= '7';
num7.id = '7';
num7.innerHTML = '7';
container.append(num7);

/* 8 */
const num8 = document.createElement('button');
num8.value= '8';
num8.id = '8';
num8.innerHTML = '8';
container.append(num8);

/* 9 */
const num9 = document.createElement('button');
num9.value= '9';
num9.id = '9';
num9.innerHTML = '9';
container.append(num9);

/* division */
const division = document.createElement('button');
division.value= '/';
division.classList = 'operation'
division.id = 'division';
division.innerHTML = '/';
container.append(division);

/* 4 */
const num4 = document.createElement('button');
num4.value= '4';
num4.id = '4';
num4.innerHTML = '4';
container.append(num4);

/* 5 */
const num5 = document.createElement('button');
num5.value= '5';
num5.id = '5';
num5.innerHTML = '5';
container.append(num5);

/* 6 */
const num6 = document.createElement('button');
num6.value= '6';
num6.id = '6';
num6.innerHTML = '6';
container.append(num6);

/* subraction */
const sub = document.createElement('button');
sub.value= '-';
sub.classList = 'operation'
sub.id = 'subtract';
sub.innerHTML = '-';
container.append(sub);

/* 1 */
const num1 = document.createElement('button');
num1.value= '1';
num1.id = '1';
num1.innerHTML = '1';
container.append(num1);

/* 2 */
const num2 = document.createElement('button');
num2.value= '2';
num2.id = '2';
num2.innerHTML = '2';
container.append(num2);

/* 3 */
const num3 = document.createElement('button');
num3.value= '3';
num3.id = '3';
num3.innerHTML = '3';
container.append(num3);

/* Addition */
const add= document.createElement('button');
add.value= '+';
add.classList = 'operation'
add.id = 'add';
add.innerHTML = '+';
container.append(add);

/* 0 */
const num0 = document.createElement('button');
num0.value= '0';
num0.id = '0';
num0.innerHTML = '0';
container.append(num0); 

/* 00*/
const num00 = document.createElement('button');
num00.value= '00';
num00.id = '00';
num00.innerHTML = '00';
container.append(num00); 

/* equal */

const equal = document.createElement('button');
equal.value= '=';
equal.classList = 'operation';
equal.classList = 'grid20';
equal.id = 'equal';
equal.innerHTML = '=';
container.append(equal); 

//Calculator program

const result = document.querySelector('#result');
const buttons = document.querySelectorAll('button');
const specialChar = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue)=>{
    console.log(btnValue);
    if(btnValue === "=" && btnValue !== ""){
        output = eval(output.replace("%","/100"));
    }else if(btnValue === "c"){
        output = ""; 
    }else if(btnValue === "<-"){
        output = output.toString().slice(0,-1);
    }else{
        if(output === "" && specialChar.includes(btnValue)) return;
        output +=btnValue;
    }
    result.value = output;
};

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{calculate(e.target.value)});
});

document.onkeypress = function (e) {
    e = e || window.event;
    if(e.key == "1" || e.key === "2"  || e.key === "3"  || e.key === "4"  || e.key === "5"  || e.key === "6"  || e.key === "7"  || e.key === "8"  || e.key === "9"  || e.key === "0"  || e.key === "00"  || e.key === "." ){
        calculate(e.key);
    }else{
        alert("Only Numbers are allowed");
    }
};



