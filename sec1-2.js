let txt = "Cursos de Programação geralmente começam com um exemplo de Hello World =)";

let regex1 = new RegExp('Hello');
let regex2 = /World/;
let regex3 = /hello world/i;

// console.log('test', regex1.test(txt));
// console.log('exec', regex2.exec(txt));

// console.log(txt.replace(regex3, 'uma boa chupeta'));

let phones = [
	'801-766-9754',
	'801-234-2345',
	'435-666-3455',
	'801-736-9704',
	'401-796-9754',
	'801-766-9054',
	'401-796-9754',
	'801-766-0054',
];
let regPrefix = /801-/;
let matchedPhones = [];

let m = phones.filter((phone) => {
	return regPrefix.test(phone)
});

console.log('pushed', m);
