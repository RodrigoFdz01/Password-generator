let generate = document.getElementById("generate");
let userPass = document.getElementById("userPass");

let upper = document.getElementById("uppercase");
let lower = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

function randomPass(numero) {
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]=<>/,.";

  const hasUpper = upper.checked;
  const hasLower = lower.checked;
  const hasNumbers = numbers.checked;
  const hasSymbols = symbols.checked;
  const array = [hasUpper, hasLower, hasNumbers, hasSymbols];
  console.log(array);

  /* function checkedFun() {
    let noUpper = charset.replace(/[A-Z]/g, "");
    let noLower = charset.replace(/[a-z]/g, "");
    let noNumbers = charset.replace(/[0-9]/g, "");
    let noSymbols = charset.replace(/[^\w\s]/gi, "");
  }*/
  function checkedFun() {
    if (!hasUpper) {
      charset.replace(/[A-Z]/g, "");
    } else if (!hasLower) {
      charset.replace(/[a-z]/g, "");
    } else if (!hasNumbers) {
      charset.replace(/[0-9]/g, "");
    } else if (!hasSymbols) {
      charset.replace(/[^\w\s]/gi, "");
    } else {
      charset;
    }
  }
  //console.log(charset);
  //const finalCharset = [noUpper, noLower, noNumbers, noSymbols];
  //console.log(finalCharset);

  const empty = [];

  for (let i = 0; i < numero; i++) {
    let randomChar = charset[Math.floor(Math.random() * charset.length)];
    empty.push(randomChar);
  }
  let result = empty.join("");

  //console.log(finalLen);
  //console.log(finalResult.slice(0, finalLen - numero));

  userPass.innerText = result;
}

generate.addEventListener("click", () => {
  let len = document.getElementById("length").value;
  randomPass(len);
  //checkedFun();
});

/*
  let noUpper = charset.replace(/[A-Z]/g, "");
  let noLower = charset.replace(/[a-z]/g, "");
  let noNumbers = charset.replace(/[0-9]/g, "");
  let noSymbols = charset.replace(/[^\w\s]/gi, "");  */

/*
function checkedFun() {
  const hasUpper = upper.checked;
  const hasLower = lower.checked;
  const hasNumbers = numbers.checked;
  const hasSymbols = symbols.checked;
  console.log(hasUpper, hasLower, hasNumbers, hasSymbols);
  if (!hasUpper) {
    charset.replace(/[A-Z]/g, "");
  }
  if (!hasLower) {
    charset.replace(/[a-z]/g, "");
  }
  if (!hasNumbers) charset.replace(/[0-9]/g, "");
  if (!hasSymbols) charset.replace(/[^\w\s]/gi, "");
}*/

// -------------------------

/*
function getChecked() {
  if (upper.checked == true) {
    charset.replace(/[A-Z]/g, "");
    console.log("upper");
  } else if (lower.checked != false) {
    charset.replace(/[a-z]/g, "");
    console.log("lower");
  } else if (numbers.checked == false) {
    charset.replace(/[0-9]/g, "");
    console.log("numbers");
  } else if (symbols.checked == false) {
    charset.replace(/[^\w\s]/gi, "");
    console.log("symbols");
  } else {
    charset = "";
  }
}



const lower = "abcdefghijklmnopqrstuvwxyz";
let lowerChar = lower[Math.floor(Math.random() * lower.length)];
// console.log(lowerChar);

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let upperChar = upper[Math.floor(Math.random() * upper.length)];
//console.log(upperChar);

const number = "0123456789";
let numberChar = number[Math.floor(Math.random() * number.length)];
//console.log(numberChar);

const symbols = "!@#$%^&*(){}[]=<>/,.";
let symbolchar = symbols[Math.floor(Math.random() * symbols.length)];
//console.log(symbolchar);

let typesarray = [lowerChar, upperChar, numberChar, symbolchar];
let typesJoin = typesarray.join("");
console.log(typesJoin);
----------------------------------------------
function getChecked() {
  const checkBox = document.getElementById('check1').checked;
  if (checkBox === true) {
    console.log(true);
    } else {
      console.log(false);
  }
}
*/
