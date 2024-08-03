
function generateRandomString(n) {
  const allowedChars = 'ABCDEFGHIKLMNOPQRSTUVWYZabcdefghiklmnopqrstuvwyz0123456789+-_$~';
  let result = '';
  for (let i = 0; i < n; i++) {
    result += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
  }
  return result;
}


const N = parseInt(prompt("Введите число N: "), 10);
document.querySelector('input[name]')
const randomString = generateRandomString(N);
console.log("Случайная строка: " + randomString);
document.querySelector('.generate').textContent =`Случайная строка:${randomString}`;

const firstChar = prompt("Введите первый символ для замены всех букв: ");
let modifiedString = '';
for (let ch of randomString) {
  if (/[A-Za-z]/.test(ch)) {
    modifiedString += firstChar;
  } else {
    modifiedString += ch;
  }
}
console.log("Строка после замены всех букв: " + modifiedString);

const secondChar = prompt("Введите второй символ для замены всех цифр: ");
let finalString = '';
for (let ch of modifiedString) {
  if (/\d/.test(ch)) {
    finalString += secondChar;
  } else {
    finalString += ch;
  }
}
console.log("Конечная строка после замены всех цифр: " + finalString);


const countFirstChar = finalString.split(firstChar).length - 1;
const countSecondChar = finalString.split(secondChar).length - 1;
const countUnreplaced = finalString.length - (countFirstChar + countSecondChar);

console.log(`Количество повторов первого символа (${firstChar}): ${countFirstChar}`);
console.log(`Количество повторов второго символа (${secondChar}): ${countSecondChar}`);
console.log(`Количество незамененных символов: ${countUnreplaced}`);

document.querySelector('.col1').textContent=`Количество повторов первого символа (${firstChar})`;
document.querySelector('.col2').textContent=`Количество повторов второго символа (${secondChar})`;
document.querySelector('.col3').textContent=`Количество незамененных символов:`;

document.querySelector('.row1').textContent=`${countFirstChar}`;
document.querySelector('.row2').textContent=`${countSecondChar}`;
document.querySelector('.row3').textContent=`${countUnreplaced}`;