const pirmas = 7;
const antras = 5;

// function expresion - iprasta funkcijos forma/sintakse
function sudeti(a, b) {
    return a + b;
}
console.log(`${pirmas} + ${antras} = ${sudeti(pirmas, antras)}`);

// anonimine funkcija, priskirta kintamajam
const atimti = function (a, b) {
    return a - b;
}
console.log(`${pirmas} - ${antras} = ${atimti(pirmas, antras)}`);

// arrow function - rodykline funkcija
const padalinti = (a, b) => {
    return a / b;
}
console.log(`${pirmas} / ${antras} = ${padalinti(pirmas, antras)}`);

// arrow function - rodykline funkcija
// jei logikos bloke {} yra tik 1 salyga (statement), tai
// galima nerasyti {} ir return
const sudauginti = (a, b) => a * b;
console.log(`${pirmas} * ${antras} = ${sudauginti(pirmas, antras)}`);

// arrow function - rodykline funkcija
// jei parametru bloke () yra tik 1 parametras, tai
// galima nerasyti ()
const kvadr = a => a ** 2;
console.log(`${pirmas}^2 = ${kvadr(pirmas)}`);
console.log(`${antras}^2 = ${kvadr(antras)}`);

console.log('************************************************');


// iprasta funkcija
function suma(a, b) {
    return a + b;
}
console.log(suma(7, 5));

// anonimine funkcija priskirta kintamajam
const atimtis = function (a, b) {
    return a - b;
}
console.log(atimtis(7, 5));

// arrow function
const daugyba = (a, b) => {
    return a * b;
}
console.log(daugyba(7, 5));

// arrow function - logika su 1 procedura (return), gali netureti {} ir return'o
const dalyba = (a, b) => a / b;
console.log(dalyba(7, 5));

// arrow function - kai turimas tik 1 parametras, tai galim nerasyti ()
const kvadratu = a => a ** 2;
console.log(kvadratu(7));


console.log('************************************************');


/*
Funkcijos:
- masyvo ilgi
- teksto ilgi
- pirma teksto raide
- paskutine teksto raide
- vidurine teksto raide
- triju skaiciu vidurki
- pasisveikinimo sakinys, kur duodamas tik vardas: "Sveiki, as esu [Vardenis]!"
*/






//arrow function - rodykline funkcija
//jei logikos bloke {} yra tik 1 salyga (statement), tai galima nerasyti {} ir return
const daugyb = (a, b) => a * b;
console.log(`${pirmas} * ${antras} = ${daugyb(pirmas, antras)}`);

//arrow function - rodykline funkcija
//jei logikos bloke () yra tik 1 parametras, tai galima nerasyti ()
const kvadra = a => a ** 2;
console.log(`${pirmas}^2 = ${kvadra(pirmas)}`);
console.log(`${antras}^2 = ${kvadra(antras)}`);

console.log('*************************************');


console.log(`------------  NAMU DARBAI -1-  ------------`);


//Funkcijos:
//- masyvo ilgi
const pvz = [1, 2, 3, 0, 2];
const arrayIlgis = a => a.length;
console.log(`Masyvo ilgis: ${arrayIlgis(pvz)}`);

//- teksto ilgi
const pvz2 = `begemotas`;
const stringIlgis = a => a.length;
console.log(`Teksto ilgis: ${stringIlgis(pvz2)}`);

//- pirma teksto raide
const pvz3 = `begemotas`;
const pirma = a => a.charAt(0);
console.log(`Pirma teksto raide: ${pirma(pvz3)}`);

//- paskutine teksto raide
const pvz4 = `begemotas`;
const paskutine = a => a.charAt(a.length -1);
console.log(`Paskutine teksto raide: ${paskutine(pvz4)}`);

//- vidurine teksto raide
const pvz5 = `begemotas`;
const vidurine = a => [a[(a.length / 2) | 0]];
console.log(`Vidurine teksto raide: ${vidurine(pvz5)}`);

//- triju skaiciu vidurki
const aa = 2;
const bb = 4;
const cc = 12;
const vidurkis1 = (a, b, c) => (a + b + c) / 3;
console.log(`Skaiciu vidurkis: ${vidurkis1(aa, bb, cc)}`);

//- EXTRA triju masyvo skaiciu vidurki
const pvz7 = [8, 5, 2];
const vidurkis2 = a => (a[0] + a[1] + a[2]) / a.length;
console.log(`Masyvo skaiciu vidurkis: ${vidurkis2(pvz7)}`);

//- pasisveikinimo sakinys, kur duodamas tik vardas: "Sveiki, as esu [Vardenis]!"
const pvz8 = `Robotas`;
const manoVardas = a => [a];
console.log(`Sveiki, as esu ${manoVardas(pvz8)}!`);






console.log(`------------  NAMU DARBAI -2-  ------------`);

// Funcijos: grazina

console.log('************************************************');

// -  masyvo ilgi
function arrIlgis(arr){
    return arr.length
}
const arrIlgis1 = function (arr){
    return arr.length
}
const arrIlgis2 = (arr) => {
    return arr.length
}

const arrIlgis3 = (arr) => arr.length


console.log(arrIlgis([1,2,3,4,5]));
console.log(arrIlgis1([1,2,3,4,5]));
console.log(arrIlgis2([1,2,3,4,5]));
console.log(arrIlgis3([1,2,3,4,5]));

console.log('************************************************');

// -  texto ilgi
function strIlgis (str){
    return str.length
}
const strIlgis1 = function (str){
    return str.length
}
const strIlgis2 = (str) => {
    return str.length
}
const strIlgis3 = (str) => str.length

console.log(strIlgis(`asdfgh`));
console.log(strIlgis1(`asdfgh`));
console.log(strIlgis2(`asdfgh`));
console.log(strIlgis3(`asdfgh`));

console.log('************************************************');

// -  pirma teksto raide
function pirmaRaide(text){
    return text[0]
}
const pirmaRaide1 = function (text){
    return text[0]
}
const pirmaRaide2 = (text) => {
    return text.charAt(0)
}
const pirmaRaide3 = (text) => text[0]

console.log(pirmaRaide(`asdfg`));
console.log(pirmaRaide1(`asdfg`));
console.log(pirmaRaide2(`asdfg`));
console.log(pirmaRaide3(`asdfg`));

console.log('************************************************');

// - paskutine teksto raide
function paskutineRaide(text){
    return text.slice(-1)
}
const paskutineRaide1 = function(text){
    return text.slice(-1)
}
const paskutineRaide2 = (text)=>{
    return text.slice(-1)
}
const paskutineRaide3 = (text) => text.slice(-1)

console.log(paskutineRaide(`asdfgh`));
console.log(paskutineRaide1(`asdfgh`));
console.log(paskutineRaide2(`asdfgh`));
console.log(paskutineRaide3(`asdfgh`));

console.log('************************************************');

// - vidurine teksto raide
function middle(text){
    if (text.length % 2 === 0){
        return `${text[(text.length/2)-1]}${text[Math.floor(text.length/2)]}`
    }
    else{
    return text[Math.floor(text.length/2)];}
}
const middle1 =function (text){
    if (text.length % 2 === 0){
        return `${text[(text.length/2)-1]}${text[Math.floor(text.length/2)]}`
    }
    else{
    return text[Math.floor(text.length/2)];}
}
const middle2 = (text) => {
    if (text.length % 2 === 0){
        return `${text[(text.length/2)-1]}${text[Math.floor(text.length/2)]}`
    }
    else{
    return text[Math.floor(text.length/2)];}
}
const middle3 = (text) => text.length % 2 === 0 ? `${text[(text.length/2)-1]}${text[Math.floor(text.length/2)]}` : text[Math.floor(text.length/2)];


console.log(middle(`asdfg`));
console.log(middle1(`asdfgh`));
console.log(middle2(`asdfg`));
console.log(middle3(`asdfgh`));

console.log('************************************************');

// - triju skaiciu vidurki
function average(a, b, c){
    return (a+b+c)/3
}
const average1 = function (a, b, c){
    return (a+b+c)/3
}
const average2 = (a, b, c) =>{
    return (a+b+c)/3
}
const average3 = (a, b, c) => (a+b+c)/3

console.log(average(3, 9, 27));
console.log(average1(3, 9, 27));
console.log(average2(3, 9, 27));
console.log(average3(3, 9, 27));
// - pasisveikinimo sakinysm kur duodamas tik vardas: " Sveiki, as esu Vardenis!"
function pasisveikinimas(vardas){
    return `Sveiki, as esu ${vardas}!`
}
const pasisveikinimas1 = function(vardas){
    return `Sveiki, as esu ${vardas}!`
}
const pasisveikinimas2 = (vardas) => {
    return `Sveiki, as esu ${vardas}!`
}
const pasisveikinimas3 = (vardas) => `Sveiki, as esu ${vardas}!`;

console.log(pasisveikinimas(`Vardenis`));
console.log(pasisveikinimas1(`Vardenis`));
console.log(pasisveikinimas2(`Vardenis`));
console.log(pasisveikinimas3(`Vardenis`));

// .map .filter .sort .reduce


console.log(`------------  NAMU DARBAI -3-  ------------`);


const arrLength = a => a.Length;
console.log(arrLength[1, 2, 5]);

console.log(`----------`);

const textLenght = a => a.Length;
console.log('tekstas');

console.log(`----------`);

const firstLetter = a => a.substring(0,1);
console.log(firstLetter('tekstas'));

console.log(`----------`);

const lastLetter = a => a[a.Length - 1];
console.log(lastLetter('tekstas'));

console.log(`----------`);

const middleLetter = a => a.substring(mMath.ceil(a.Length / 2 - 1), a.Length % 2 === 0 ? 2 : 1);
console.log(middleLetter('tekstas'));

const hello = a => 'Sveiki, as esu' + a;
console.log(hello(Vardenis));

console.log(`----------`);

