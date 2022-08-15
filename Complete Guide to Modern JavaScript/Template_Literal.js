//문자열 
//ES6 이전
var car1 = 'lambo';
var order1 = 'Your car is' + car1;
console.log(order1);

//ES6 이전
let car = 'Lambo';
const order = 'Your car is ${car}';
console.log(order); 

//표현식
//ES6 이전
var a = 1;
var b = 2;
console.log('1 * 2 is ' + (a * b));

//ES6 이후
var c = 1;
var d = 2;
console.log(`1 * 2 is ${a*b}`);

const team = [{
	name:'Johnson',
	position:'front'
}, {
	name:'Lisa',
	position:'backend'
}];

const markup = `
<ul>
    ${team.map(team => `<li> ${team.name}</li>`)}
</ul>
`;

console.log(markup);

const str = "this is a potato";
console.log(str.indexOf("potato"));

const str2 = "this is a potato";
console.log(str2.slice(0, 5));

const str3 = "PIZZA";
console.log(str3.startsWith("PIZZA"));
console.log(str3.startsWith("CHICKEN"));

const call = "주문완료";
console.log(call.repeat(10));

