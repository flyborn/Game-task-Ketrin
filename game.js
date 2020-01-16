// 15 января 2020

var arrwin = [];
alert('Поиграем?');
if(true){
    start();
}
function start(gamer){
var gamer = +prompt('Сколько игроков играет, 1 или больше?');
if(gamer <2){
    hand();
}else{
    alert('Избався от лишних и начни сначала');
    start();
    }
}
function hand(lapa){
var lapa = +prompt('В какой руке кубик - в 1 или 2?')
if (lapa == 1 ){
    var W = alert('Получай букву W и играем дальше)');
    arrwin.push('W')
    cubone();  
}else if(lapa == 2 ){
    alert('Попробуем с начала');
    hand();   
}else{
    alert('Не хочешь играть?');
}
function cubone(num1){
alert('Придумай число от 1 до 5');
var num1 = +prompt('Придумал - вводи');
if (num1<=3) {
    var I = alert('Получи букву I');
    arrwin.push('I') 
    cubtwo();
}else if (num1>3){
    alert('Попробуем еще раз');
    cubone();
}
function cubtwo(nam2){
    alert('Придумай число от 6 до 10');
    var num2 = +prompt('Придумал - вводи');
if (num2 == 6 || num2 == 8 || num2 == 10) {
    var N = alert('Получи букву N');
    arrwin.push('N') 
}else if (num2 != 6 || num2 != 8 || num2 != 10){
    alert('Давай начнем сначала');
    cubtwo();
    }
}
}if(arrwin.length == 3){
    alert(arrwin+ '- Ты победил!');
}else{
    alert('LOOZER');
}
}
