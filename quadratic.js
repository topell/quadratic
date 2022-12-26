let a, b, c;
//let ur = '5x - x2 - 12 = 0';
let ur = prompt("Введите или скопируйте сюда квадратное уравнение \n вида  ax2 + bx + c = 0", "");
let ar = ur.split(' ');

getA(); // Я еще только учусь и не все умею примегять на практике, поэтому
getB(); // каждая операция в отдельной функции.
getC(); // Функции три однотипные, потому что коэффициент через аргумент передать могу

function getA() {
  let arr = new Array();
  for (let value of ar) {
    arr.push(value);
     if (value.includes('x2')) break;  // А условие сюда передать через аргумент не получается
  };
  arr.reverse();
  if (arr[0] === undefined || 0) {
    alert('Уравнение, которое вы ввели, недостаточно квадратное');
      } else {
  a = parseInt(arr[0]);                 // здесь можно использовать аргумент
  if (!isFinite(a)) a = 1;
  };
  if ((arr[1] == '-') || (arr[1] == '−')) a = -a;
};

function getB() {
  let arr = new Array();
  for (let value of ar) {
    arr.push(value);
     if (value.endsWith('x')) break;
  };
  arr.reverse();
  if (arr[0] === undefined || 0) {
    b = 0;
      } else {
  b = parseInt(arr[0]);
  if (!isFinite(b)) b = 1;
  };
  if ((arr[1] == '-') || (arr[1] == '−')) b = -b;
};

function getC() {
  let arr = new Array();
  for (let value of ar) {
    arr.push(value);
     if (isFinite(value)) break;
  };
  arr.reverse();
  if (arr[0] === undefined || 0) {
    c = 0;
      } else {
  c = parseInt(arr[0]);
  if (!isFinite(c)) c = 1;
  };
  if ((arr[1] == '-') || (arr[1] == '−')) c = -c;
};
alert([a, b, c]);

function getResult() {
  let result1;
  let result2;
  let discr = b ** 2 - ( 4 * a * c);
  alert(`Дискриминант равен:   ${discr}`);
  if (discr < 0) {
    result = 'корней нет'
  } else if (discr > 0) {
    result1 = ( -b + discr**0.5 ) / 2 * a;
    result2 = ( -b - discr**0.5 ) / 2 * a;
    result = [result1, result2];
  } else {
    result = -b / 2 * a;
  };
  alert(`Ответ:  x = ${result} `);

};
getResult();
