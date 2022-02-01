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
//- masyvo ilgis
const mas = [1, 8, 3, 0, 2, 4, 10];
const arrle = a => a.length;
console.log(`Masyvo ilgis: ${arrle(mas)}`);

//- teksto ilgis
const text = `pomidoras`;
const len = a => a.length;
console.log(`Teksto ilgis: ${len(text)}`);

//- pirma teksto raide
const fi = `pomidoras`;
const pirm = a => a.charAt(0);
console.log(`Pirma teksto raide: ${pirm(fi)}`);

//- paskutine teksto raide
const la = `pomidoras`;
const pask = a => a.charAt(a.length -1);
console.log(`Paskutine teksto raide: ${pask(la)}`);

//- vidurine teksto raide
const mi = `pomidoras`;
const vid = a => [a[(a.length / 2) | 0]];
console.log(`Vidurine teksto raide: ${vid(mi)}`);

//- triju skaiciu vidurkis
const aa = 4;
const bb = 0;
const cc = 50;
const vidurk = (a, b, c) => (a + b + c) / 3;
console.log(`Skaiciu vidurkis: ${vidurk(aa, bb, cc)}`);

//- EXTRA triju masyvo skaiciu vidurkis
const mavi = [11, 33, 22];
const vidur = a => (a[0] + a[1] + a[2]) / a.length;
console.log(`Masyvo skaiciu vidurkis: ${vidur(mavi)}`);

//- pasisveikinimo sakinys, kur duodamas tik vardas: "Sveiki, as esu [Vardenis]!"
const pas = `Pomidoras`;
const vard = a => [a];
console.log(`Sveiki, as esu ${vard(pas)}!`);






console.log(`------------  NAMU DARBAI -2-  ------------`);

// Funcijos: grazina

console.log('************************************************');

// -  masyvo ilgis
function masil1 (arr){
    return arr.length
}
const masil2 = function (arr){
    return arr.length
}
const masil3 = (arr) => {
    return arr.length
}

const masil4 = (arr) => arr.length


console.log(masil1([1, 2, 3, 4]));
console.log(masil2([1, 2, 3, 4, 5]));
console.log(masil3([1, 2, 3, 4, 5, 6]));
console.log(masil4([1, 2, 3, 4, 5, 6, 7]));

console.log('************************************************');

// -  texto ilgis
function ilg1 (str){
    return str.length
}
const ilg2 = function (str){
    return str.length
}
const ilg3 = (str) => {
    return str.length
}
const ilg4 = (str) => str.length

console.log(ilg1(`pomidoras`));
console.log(ilg2(`ananasas`));
console.log(ilg3(`ridikas`));
console.log(ilg4(`bulve`));

console.log('************************************************');

// -  pirma teksto raide
function pir1(text){
    return text[0]
}
const pir2 = function (text){
    return text[0]
}
const pir3 = (text) => {
    return text.charAt(0)
}
const pir4 = (text) => text[0]

console.log(pir1(`pomidoras`));
console.log(pir2(`ananasas`));
console.log(pir3(`ridikas`));
console.log(pir4(`bulve`));

console.log('************************************************');

// - paskutine teksto raide
function pask1 (text){
    return text.slice(-1)
}
const pask2 = function(text) {
    return text.slice(-1)
}
const pask3 = (text) => {
    return text.slice(-1)
}
const pask4 = (text) => text.slice(-1)

console.log(pask(`pomidoras`));
console.log(pask1(`bulve`));
console.log(pask2(`duona`));
console.log(pask3(`vanduo`));

console.log('************************************************');

// - vidurine teksto raide
function midd1(text){
    if (text.length % 2 === 0){
        return `${text[(text.length/2)-1]}${text[Math.floor(text.length/2)]}`
    }
    else{
    return text[Math.floor(text.length/2)];}
}
const midd2 = function (text){
    if (text.length % 2 === 0){
        return `${text[(text.length/2)-1]}${text[Math.floor(text.length/2)]}`
    }
    else{
    return text[Math.floor(text.length/2)];}
}
const midd3 = (text) => {
    if (text.length % 2 === 0){
        return `${text[(text.length/2)-1]}${text[Math.floor(text.length/2)]}`
    }
    else{
    return text[Math.floor(text.length/2)];}
}
const midd4 = (text) => text.length % 2 === 0 ? `${text[(text.length/2)-1]}${text[Math.floor(text.length/2)]}` : text[Math.floor(text.length/2)];


console.log(midd1(`pomidoras`));
console.log(midd2(`ananasas`));
console.log(midd3(`agurkas`));
console.log(midd4(`bulve`));

console.log('************************************************');

// - triju skaiciu vidurkis
function ave1(a, b, c){
    return (a+b+c)/3
}
const ave2 = function (a, b, c){
    return (a+b+c)/3
}
const ave3 = (a, b, c) =>{
    return (a+b+c)/3
}
const ave4 = (a, b, c) => (a+b+c)/3

console.log(ave1(8, 5, 11));
console.log(ave2(2, 0, 16));
console.log(ave3(1, 6, 20));
console.log(ave4(22, 33, 44));

// - pasisveikinimo sakinys, kur duodamas tik vardas: " Sveiki, as esu Vardenis!"
function pasis1(Jonas){
    return `Sveiki, as esu ${Jonas}!`
}
const pasis2 = function(Maryte){
    return `Sveiki, as esu ${Maryte}!`
}
const pasis3 = (Ona) => {
    return `Sveiki, as esu ${Ona}!`
}
const pasis4 = (Jurgis) => `Sveiki, as esu ${Jurgis}!`;

console.log(pasis1(`Vardenis`));
console.log(pasis2(`Vardenis`));
console.log(pasis3(`Vardenis`));
console.log(pasis4(`Vardenis`));

// .map .filter .sort .reduce


console.log(`------------  NAMU DARBAI -3-  ------------`);


const leng = a => a.length;
console.log(leng([1, 2, 5, 8, 9]));

console.log(`----------`);

const tex = a => a.length;
console.log(tex('pomidoras'));

console.log(`----------`);

const file = a => a.substring(0,1);
console.log(file('pomidoras'));

console.log(`----------`);


const lasle = a => a[a.length - 1];
console.log(lasle('pomidoras'));

console.log(`----------`);

const middle = a => a.substring(Math.ceil(a.Length / 2 - 1), a.Length % 2 === 0 ? 2 : 1);
console.log(middle('pomidoras'));

console.log(`----------`);

const laba = a => 'Sveiki, as esu' + a;
console.log(laba(` Pomidoras`));

console.log(`----------`);

