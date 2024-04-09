// --------------------------------------------------
console.log('---------------------   1    ---------------------');
// --------------------------------------------------
'use strict'
// var can contain number, string, boolean, null, undefined, NaN (not a number),
// var doesn't use in ecma scrpt 6 -------------
var num = 5;
var Num = true;
var i = NaN; // (not number that is not a number)
var myarray = [5, 'saeed', false]; // array (object)
var myarray2 = { // array (object)
    name: 'SAEED',
    tel: '+98'
}
// it uses in ecma script 6
let newnum = 15;


console.log('num = ' + num);
console.log('Num = ' + Num);
console.log('i = ' + i);
console.log('myarray[1] = ' + myarray[1]);
console.log('myarray2.name = ' + myarray2.name);
console.log('newnum = ' + newnum);
console.log('newnum++ = ' + newnum++);
console.log('++newnum = ' + ++newnum);
// --------------------------------------------------
console.log('---------------------   2    ---------------------');
// --------------------------------------------------
console.log('\'10\' + 20  -> ' + ('10' + 20));
console.log('\'10\' + true  -> ' + ('10' + true));
console.log('20 + true  -> ' + (20 + true));
console.log('20 + [2, 4]  -> ' + (20 + [2, 4]));
console.log('20 / \'10\'  -> ' + (20 / '10'));
console.log('\'10\' - 20  -> ' + ('10' - 20));
console.log('\"Saeed\" - 20  -> ' + ("Saeed" - 20));
// --------------------------------------------------
console.log('---------------------   3    ---------------------');
// --------------------------------------------------
console.log('5 == 5  -> ' + (5 == 5));
console.log('5 != 6  -> ' + (5 != 6));
console.log('5 == \'5\'  -> ' + (5 == '5'));
console.log('5 === \'5\'  -> ' + (5 === '5')); // compare typeof
console.log('5 !== \'5\'  -> ' + (5 !== '5'));
console.log('1 == true  -> ' + (1 == true));
console.log('0 == false  -> ' + (0 == false));
console.log('!true  -> ' + (!true));
console.log('null == undefined  -> ' + (null == undefined));
console.log('null == NaN  -> ' + (null == NaN));
console.log('null === undefined  -> ' + (null === undefined));
console.log('The strict equality operator (===) behaves identically to the abstract equality operator (==) except no type conversion is done, and the types must be the same to be considered equal.');
console.log('2 * 3 + 4  -> ' + (2 * 3 + 4));
console.log('5 | 3  -> ' + (5 | 3));
console.log('5 & 3  -> ' + (5 & 3));
var a = 5 / 2.2;
console.log('a.toString()  -> ' + a.toString());
console.log('a.toFixed(5)  -> ' + a.toFixed(5));
// --------------------------------------------------
console.log('---------------------   4    ---------------------');
// --------------------------------------------------
function myfunc(a) {
    console.log('Hello ' + a);
}
function myfunc2(a) {
    return a * 2;
}

myfunc("Saeed");            // myfunc
console.log(myfunc2(5));    // myfunc2
// --------------------------------------------------
console.log('---------------------   5    ---------------------');
// --------------------------------------------------
// difference between var & let (local & global scope)
console.log('difference between var & let (local & global scope) ');
console.log('\"use strict\" to get error when we don\'t write var to define variable (line 4)');

var vartemp = 5;
function showValue() {
    console.log('vartemp = ' + vartemp);
    vartemp = 7;
    console.log('vartemp = ' + vartemp);
}
console.log('vartemp = ' + vartemp);
showValue();
console.log('vartemp = ' + vartemp);

var vartemp2 = 5;
function showValue2() {
    console.log('vartemp2 = ' + vartemp2);
    var vartemp2 = 7;
    console.log('vartemp2 = ' + vartemp2);
}
console.log('vartemp2 = ' + vartemp2);
showValue2();
console.log('vartemp2 = ' + vartemp2);



// --------------------------------------------------
console.log('---------------------   6    ---------------------');
// --------------------------------------------------
// if(true & true | && || ..)
console.log('(35 & 57) = ' + (35 & 57) + '   -> ' + (35).toString(2) + ' & ' + (57).toString(2) + ' = ' + (35 & 57).toString(2)  );
console.log('(35 | 57) = ' + (35 | 57) + '   -> ' + (35).toString(2) + ' | ' + (57).toString(2) + ' = ' + (35 | 57).toString(2)  );
console.log('(35 && 57) = ' + (35 && 57));
console.log('(35 || 57) = ' + (35 || 57));
// --------------------------------------------------
console.log('---------------------   7    ---------------------');
// --------------------------------------------------
var b = 8;
switch (b) {
    case 10:
    case 9:
        console.log('print 9 or 10');
        break;
    case 8:
        console.log('print 8');
        break;
    default:
        console.log('it`s wrong');
        break;
}
switch (true) {
    case (b == 10 || b == 9):
        console.log('print 9 or 10')
        break;
    case (b >= 11):
        console.log('print 11+')
        break;
    default:
        console.log('it`s wrong');
        break;
}
switch (false) {
    case (b == 10 || b == 9):
        console.log('print 9 or 10')
        break;
    case (b >= 11):
        console.log('print 11+')
        break;
    default:
        console.log('it`s wrong');
        break;
}
// --------------------------------------------------
console.log('---------------------   8    ---------------------');
// --------------------------------------------------
for (var i = 0; i < 3; i++) {
    console.log('(for)  i= ' + i);
}

var i = 0;
while (i < 3) {
    console.log('(while)  i= ' + i);
    i++;
}

i = 0;
while (true) {
    if (i >= 3) {
        break;
    }
    console.log('(while)  i= ' + i);
    i++;
}

i = 0;
do {
    console.log('(do-while)  i= ' + i);
    i++;
} while (i < 0)
// --------------------------------------------------
console.log('---------------------   9   ---------------------');
// --------------------------------------------------

var list = [0, 1, 2];
console.log('list[1] ->    ' + list[1]);
list[6] = 6;
console.log('list ->    ' + list);
console.log('list[5] ->    ' + list[5]);
console.log('list.length ->    ' + list.length);
var list2 = [0, 5, 10];

console.log(sum(list2) + '    (function)');

function sum(array) {
    var s = 0;
    for (var i = 0; i < array.length; i++) {
        s += array[i];
    }
    return s;
}

var total = 0;
list2.forEach(function(item) {
    total += item;
});
console.log(total + '    (forEach)');

console.log(sum2(list2) + '    (array.reduce)');

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
function sum2(array) {
    return array.reduce(function(total, value) {
        return total += value;
    }, 0);
}
// --------------------------------------------------
console.log('---------------------   10   ---------------------');
// --------------------------------------------------
list = [3, 6, 9, 12, 15, 18];
console.log('list ->   ' + list);
list.push(21);
console.log('list.push(21) ->   ' + list);
list.pop();
console.log('list.pop() ->   ' + list);
list.shift();
console.log('list.shift() ->   ' + list);
list.unshift(222);
console.log('list.unshift(222) ->   ' + list);
list2 = [0, 5, 10, 15, 20, 25, 30];
console.log('list2 = ' + list2)
console.log('list2.indexOf(25) ->   ' + list2.indexOf(25));
console.log('list2.slice(1, 5) ->   ' + list2.slice(1, 5));
console.log('list2 ->   ' + list2);
console.log('list2.splice(2, 3) ->   ' + list2.splice(2, 3));
console.log('list2 ->   ' + list2);
console.log('list2.join(\'    /   \') ->   ' + list2.join('    /   '));
var list3 = [1, 3, 5, 7, 9, 11];
console.log('list3 = ' + list3);
var list4 = list2.concat(list3);
console.log('list4 = list2.concat(list3) ->   ' + list4);
console.log('list2.sort() ->   ' + list4.sort() + '   (sort string)');
console.log('list4 = ' + list4);
console.log('list3 = ' + list3);
console.log('list2 = ' + list2);
console.log('list4.reverse() ->   ' + list4.reverse());
console.log('list4 = ' + list4);
console.log('list4.filter ->   ' + list4.filter(function(item) {
    return (item % 3 == 0);
}) + '  (item%3==0)');
console.log('list4 = ' + list4);
console.log('list4.map ->   ' + list4.map(function(item) {
    return (item % 10);
}));
console.log('list4 = ' + list4);
// --------------------------------------------------
console.log('---------------------   11   ---------------------');
// --------------------------------------------------
var Car1 = {
    make: 'Ford',
    model: 'Mustang',
    'year-old': 1980,
    details: {
        colors: ['white', 'blue'],
        wheels: 4
    },
    maxspeed: function() {
        return 'Speed up to 320!';
    },
    summary: function() {
        return this.model + ' was made by ' + this.make + ' in ' + this["year-old"];
    }
}
console.log(Car1);
console.log('Car1.details.colors[1] ->   ' + Car1.details.colors[1]);
console.log('Car1[\'year-old\'] ->   ' + Car1['year-old']);
console.log('Car1.maxspeed() ->   ' + Car1.maxspeed() + '   (function in object)');
console.log('Car1.summary() ->   ' + Car1.summary() + '   (function in object)');

console.log('Car1.cc ->   ' + Car1.cc);
Car1.cc = '1800cc';
console.log('Car1.cc ->   ' + Car1.cc);


var sayhello = function() {
    console.log('Hello Saeed!   (function)');
}
sayhello();
var car2 = Object.create(Car1);
var car3 = new Object(Car1);
var car4 = Car1;
console.log('car2.model ->  ' + car2.model);
console.log('car2 == Car1 ->  ' + (car2 == Car1) + '  (because of different location in memory)');
console.log('car2 === Car1 ->  ' + (car2 === Car1));
console.log('car3.model ->  ' + (car3.model));
console.log('car3 == Car1 ->  ' + (car3 == Car1));
console.log('car3 === Car1 ->  ' + (car3 === Car1));
console.log('car4.model ->  ' + (car4.model));
console.log('car4 == Car1 ->  ' + (car4 == Car1));
console.log('car4 === Car1 ->  ' + (car4 === Car1));
// --------------------------------------------------
console.log('---------------------   12   ---------------------');
// --------------------------------------------------
// Constructor function (to define object)
function Car2(make, model, year, colors, wheels) {
    this.make = make,
    this.model = model,
    this['year-old'] = year,
    this.details = {
        colors: colors,
        wheels: wheels
    },
    this.maxspeed = function() {
        return 'Speed up to 320!';
    },
    this.summary = function() {
        return this.model + ' was made by ' + this.make + ' in ' + this["year-old"];
    }
}
var car5 = new Car2('saipa', '131', '2012', ['green', 'black'], 4);
console.log('Constructor ->\n');
console.log(car5);
console.log('car5 instanceof Car2 ->   ' + (car5 instanceof Car2));
console.log("The difference is that Car1 is a function expression and so only defined when that line is reached, whereas Car2 is a function declaration and is defined as soon as its surrounding function or script is executed");
// --------------------------------------------------
console.log('---------------------   13   ---------------------');
// --------------------------------------------------
Object.prototype.run = function() {
    return ('Object Run');
}
Car2.prototype.fun = function() {
    return ('Car Fun');
}
var car6 = new Car2('Toyota', 'Camry', '2007', 'white', 4);
console.log('car6.run ->    ', car6.run());
console.log('car6.fun ->    ', car6.fun());
console.log('car6 ->    ', car6);
// --------------------------------------------------
console.log('---------------------   14   ---------------------');
// --------------------------------------------------
var myobj = Object.create(Object);
var myobj2 = Object.create(null);   // No properties
var myobj3 = new Object(null);
console.log('console.log(myobj)');
console.log(myobj);
console.log('console.log(myobj2)');
console.log(myobj2);
console.log('console.log(myobj3)');
console.log(myobj3);

var car7 = new Car2('BMW', '530', '2006', 'black', 4);
car7.MakeSmile2 = function() {
    console.log(':' + ')')
}
console.log('car7.MakeSmile2() ->   ');
car7.MakeSmile2();
var car8 = Object.create(car7);     // inheritance
console.log('car8.MakeSmile2() ->   ');
car8.MakeSmile2();
// --------------------------------------------------
console.log('---------------------   15   ---------------------');
// --------------------------------------------------
function displayDetails(price, year) {
    console.log('Price: ' + price + '   year: ' + year +
        '   Maker: ' + this.make + '    Model: ' + this.model)
}

console.log('displayDetails.call(car6, \'65,000$\', 2012); ->   ');
displayDetails.call(car6, '65,000$', 2012);

console.log('displayDetails.apply(car6, [\'65,000$\', 2012]); ->   ');
displayDetails.apply(car6, ['65,000$', 2012]);
console.log('displayDetails.apply(car6, new Array(\'65,000$\', 2012)); ->   ');
displayDetails.apply(car6, new Array('65,000$', 2012));
console.log('In apply, arguments you can pass an argument as an array literal or a new array object.');

var c = displayDetails.bind(car6, '65,000$', 2012);
console.log('var c = displayDetails.bind(car6, \'65,000$\', 2012); ->   ');
c();

function phone(make, model, year) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.summary = function() {
        return model + ' was made by ' + this.make + ' in ' + this.year;
    }
}
var phone1 = new phone('Model1', 'Brand1', 2011);
var phone2 = new phone('Model2', 'Brand2', 2022);
console.log('phone1 ->  ' + phone1.summary());
console.log('phone2 ->  ' + phone2.summary());
console.log('phone1.summary.apply(phone2) ->    ' + phone1.summary.apply(phone2));
// --------------------------------------------------
console.log('---------------------   16   ---------------------');
// --------------------------------------------------
// debugger;
console.log('debugger;');
// --------------------------------------------------
console.log('---------------------   17   ---------------------');
// --------------------------------------------------
try {
    console.log('cc = 10; -> ');
    cc = 10;
} catch (err) {
    console.log('err.name: ' + err.name + '   err.message: ' + err.message);
}
console.log('...............................');
try {
    console.log('throw \'this is an error\'; -> ');
    throw 'this is an error';
} catch (err) {
    console.log('err: ' + err);
    console.log('err.name: ' + err.name + '   err.message: ' + err.message);
}
console.log('...............................');
try {
    console.log('throw {name: \'new error\' ,message: \'new error eccur\'}; -> ');
    throw {
        name: 'new error',
        message: 'new error eccur'
    };
} catch (err) {
    console.log('err: ', err);
    console.log('err.name: ' + err.name + '   err.message: ' + err.message);
} finally {
    console.log('The end');
}
// --------------------------------------------------
console.log('---------------------   18   ---------------------');
// --------------------------------------------------

//  run function after specific time when file loaded
/*setTimeout(function() {
    console.log('setTimeout ->  after 2000ms');
}, 2000)*/

//  run function after every specific time
/*var i = 1;
setInterval(function() {
    console.log('setInterval(after 1000ms) ->   ' + i);
    i++;
}, 1000)*/

/*var i = 1;
setInterval(() => {
    console.log('setInterval(after 1000ms) ->   ' + i);
    i++;
}, 1000);*/
// --------------------------------------------------
console.log('---------------------   19   ---------------------');
// --------------------------------------------------
var fullname = 'Saeed Cr';

console.log('fullname ->    \'' + fullname + '\'');
console.log('fullname.length ->    ' + fullname.length);
console.log('fullname.charAt(6) ->    ' + fullname.charAt(6));
console.log('fullname[6] ->    ' + fullname[6]);
console.log('fullname.concat(\' from Iran\') ->    ' + fullname.concat(' from Iran'));
console.log('fullname.toUpperCase() ->    ' + fullname.toUpperCase());
console.log('fullname.toLowerCase() ->    ' + fullname.toLowerCase());
console.log('fullname.split(\' \') ->    ' + fullname.split(' '));
console.log('fullname.indexOf(\'eed\') ->    ' + fullname.indexOf('eed'));
console.log('fullname.indexOf(\'aaa\') ->    ' + fullname.indexOf('aaa'));
console.log('fullname.substr(4, 3) ->    ' + fullname.substr(4, 3));
console.log('fullname.replace(\'Saeed\', \'Armin\') ->    ' + fullname.replace('Saeed', 'Armin'));
fullname = '      Saeed Cr       ';
console.log('fullname ->    \'' + fullname + '\'');
console.log('fullname.trim() ->    \'' + fullname.trim() + '\'');
// --------------------------------------------------
console.log('---------------------   20   ---------------------');
// --------------------------------------------------
// It's better to save date in miladi mode (not shamsi)
var d = new Date();
console.log('d = new Date() ->   ' + d);
console.log('d.getTime() ->   ' + d.getTime());
var e = new Date(d.getTime() + 1000 * 60 * 5);
console.log('e = d after 5 Minute ->    ' + e);
console.log('getHours() ->    ' + e.getHours());
e.setDate('25');
console.log('e.setDate(\'25\') ->   ' + e);
console.log('Date.parse(e) ->  ' + Date.parse(e));
// --------------------------------------------------
console.log('---------------------   21   ---------------------');
// --------------------------------------------------
console.log('Math.PI ->   ' + Math.PI);
console.log('Math.abs(-20) ->   ' + Math.abs(-20));
console.log('Math.floor(4.9999) ->   ' + Math.floor(4.9999));
console.log('Math.random() ->   ' + Math.random());
console.log('Math.round(1.2) ->   ' + Math.round(1.2));
console.log('Math.round(1.5) ->   ' + Math.round(1.5));
console.log('Math.round(1.7) ->   ' + Math.round(1.7));
console.log('Math.pow(2, 3) ->   ' + Math.pow(2, 3));
// --------------------------------------------------
console.log('---------------------   22   ---------------------');
// --------------------------------------------------
// DOM (document object model)
console.log(document);
console.log(document.head);
document.body.style.backgroundColor = 'rgb(146, 178, 190)';
document.body.children[0].style.color = 'white';
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.nextElementSibling);
// --------------------------------------------------
console.log('---------------------   23   ---------------------');
// --------------------------------------------------
console.log('document.getElementById(\'heading\')');
console.log(document.getElementById('heading'));
console.log('document.getElementsByTagName(\'li\')');
console.log(document.getElementsByTagName('li'));
console.log('document.querySelector(\'ul\')');
console.log(document.querySelector('ul'));
console.log('document.querySelectorAll(\'ul\')');
console.log(document.querySelectorAll('ul'));
console.log('document.querySelectorAll(\'#group1\')');
console.log(document.querySelectorAll('#group1'));
console.log('document.querySelectorAll(\'.gp2\')');
console.log(document.querySelectorAll('.gp2'));
// --------------------------------------------------
console.log('---------------------   24   ---------------------');
// --------------------------------------------------
console.log('create-append-remove Elements');
var ol = document.createElement('ol');
ol.classList.add('list-group');
var count = 3;
var arr = [];
for (var i = 1; i <= count; i++) {
    arr[i] = document.createElement('li');
    arr[i].classList.add('item-group');
    arr[i].textContent = 'Item ' + (i) + ' --------added by JavaScript';
    ol.appendChild(arr[i]);
}
document.querySelector('h2').after(ol);
// document.querySelector('.item-group').parentElement.remove();

// --------------------------------------------------
console.log('---------------------   25   ---------------------');
// --------------------------------------------------
console.log('Dialogs');
// alert('Welcome');
// confirm('Are you?');
// prompt('What\'s your name?');
// --------------------------------------------------
console.log('---------------------   26   ---------------------');
// --------------------------------------------------
console.log('Event Handler');
var myhead = document.querySelector('#heading');
myhead.onmouseenter = function(e) {
    e.target.style.backgroundColor = 'black';
}
myhead.onmouseout = function(e) {
    e.target.style.backgroundColor = 'rgb(146, 178, 190)';
}

// --------------------------------------------------
console.log('---------------------   27   ---------------------');
// --------------------------------------------------
console.log('Event Listener');
console.log('we can\'t have multi EventHandler but we have it in EventListener');
var myhead = document.querySelector('#heading');
myhead.addEventListener('click', function() {
    console.log('EventListener 1');
})
myhead.addEventListener('click', function() {
    console.log('EventListener 2');
})
var el1 = document.querySelector('.el1');
var el2 = document.querySelector('.el2');
var el3 = document.querySelector('.el3');
el1.addEventListener('click', function() {
    console.log('EventListener el1');
})
el2.addEventListener('click', function(e) {
    console.log('EventListener el2');
})
el3.addEventListener('click', function(e) {
    e.stopPropagation(); // --------------
    console.log('EventListener el3');
})
var link = document.querySelector('#link');
link.addEventListener('click', function(e) {
    e.preventDefault(); // --------------
    console.log('Google');
})

// --------------------------------------------------
console.log('---------------------   28   ---------------------');
// --------------------------------------------------
console.log('AJAX get');
console.log('XMLHttpRequest');

// var ajax = new XMLHttpRequest();
// ajax.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// this.status(for GET):     200 = successful / 404 = users not found
/*ajax.onreadystatechange = function() {    // it is an EventHandler (you can use once)
    if (this.readyState == XMLHttpRequest.DONE) {
        console.log(this.status);
        if (this.status == 200) {
            console.log(this.responseText);
        }
    }
})
ajax.send();*/

/*ajax.addEventListener('load', function() {    // it is an EventListener (you can use more than once)
    if (this.readyState == XMLHttpRequest.DONE) {
        console.log(this.status);
        if (this.status == 200) {
            console.log(this.responseText);
        }
    }
})
ajax.send();*/
// --------------------------------------------------
console.log('---------------------   29   ---------------------');
// --------------------------------------------------
console.log('AJAX post');
// this.status(for POST):     201 = successful / 404 = users not found

var ajax2 = new XMLHttpRequest();
var data = {
    username: 'Saeed CR',
    email: 'saeedcr@gmail.com'
}
console.log('data ->    ', JSON.parse(JSON.stringify(data)));
ajax2.open('POST', 'https://jsonplaceholder.typicode.com/users');
ajax2.setRequestHeader('Content-type', "application/json; charset=UTF-8")
ajax2.addEventListener('load', function() {
    if (this.readyState == XMLHttpRequest.DONE) {
        if (this.status == 201) {
            console.log('Post Request succesfully sent!');
            var data = JSON.parse(this.responseText);
            console.log('POST: data.username ->    ' + data.username);
        } else {
            console.log('POST' + this.status);
        }
    }
})
ajax2.send(JSON.stringify(data))

// --------------------------------------------------
console.log('---------------------   30   ---------------------');
// --------------------------------------------------
console.log('Libraries and Frameworks');
console.log('\tjQuery / axios');
console.log('\tAngular.js / Vue.js / React.js');
// jQuery and axios
// Angular.js -> just for single page application
//Vue.js -> very low volume (for single and multi page application)
//React.js -> like a library
// --------------------------------------------------
console.log('---------------------   31   ---------------------');
// --------------------------------------------------