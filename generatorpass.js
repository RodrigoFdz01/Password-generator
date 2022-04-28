let boton = document.getElementById("boton");

function randomPass(numero) {
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]=<>/,.";
  // 82 chars
  const vacio = [];
  for (let i = 0; i < numero; i++) {
    let randomChar = charset[Math.floor(Math.random() * charset.length)];
    vacio.push(randomChar);
    //let vacioJoin = vacio.join("");
  }
  console.log(vacio.join(""));
}

boton.addEventListener("click", () => {
  let largo = document.getElementById("length").value;
  //console.log(largo);
});
boton.addEventListener("click", () => {
  randomPass(5);
});
/*
function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
*/
/*

function generatePassword() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
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


//let charset = ["A", "B", "C", "D", "E", "F"];
let passwordlength = 10;
let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let vacio = "";
for (let i = 0; i <= passwordlength; i++) {
  let random = charset[Math.floor(Math.random() * charset.length)];
  console.log(random);
}
*/

/*
function getChecked() {
  const checkBox = document.getElementById('check1').checked;
  if (checkBox === true) {
    console.log(true);
    } else {
      console.log(false);
  }
}
*/
