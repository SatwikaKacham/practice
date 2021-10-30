const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const operationBtn = document.querySelectorAll(".btn");
const outPut = document.querySelector(".output");




function btn1Click()
{
var a= Number(input1.value);
var b= Number(input2.value);
console.log(a,b);
outPut.innerText = `the sum is ${Number(a+b)}`;
}


function btn2Click()
{
var a= input1.value;
var b= input2.value;
outPut.innerText = `the sub is ${Number(a-b)}`;
}

function btn3Click()
{
var a= input1.value;
var b= input2.value;
outPut.innerText = `the div is ${Number(a/b)}`;
}

function btn4Click()
{
var a= input1.value;
var b= input2.value;
outPut.innerText = `the mult is ${Number(a*b)}`;
}


operationBtn[3].addEventListener('click',btn4Click);
operationBtn[2].addEventListener('click',btn3Click);
operationBtn[1].addEventListener('click',btn2Click);
operationBtn[0].addEventListener('click',btn1Click);