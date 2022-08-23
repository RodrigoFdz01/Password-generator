let generate = document.getElementById("generate");
let userPass = document.getElementById("userPass");

let upper = document.getElementById("uppercase");
let lower = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

function randomPass(numero) {
  const hasUpper = upper.checked;
  const hasLower = lower.checked;
  const hasNumbers = numbers.checked;
  const hasSymbols = symbols.checked;
  const array = [hasUpper, hasLower, hasNumbers, hasSymbols];
  // console.log(array); true

  if (hasUpper + hasLower + hasNumbers + hasSymbols === 0) {
    alert("Please check at least one box!");
    userPass.innerText = "";
    return;
  }

  // userPass.innerText = typesJoin;
}

function getlower() {
  const lowerset = "abcdefghijklmnopqrstuvwxyz";
  return lowerset[Math.floor(Math.random() * lowerset.length)];
}
function getupper() {
  const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperset[Math.floor(Math.random() * upperset.length)];
}
function getnumber() {
  const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperset[Math.floor(Math.random() * upperset.length)];
}

function getsymbol() {
  const symbolsset = "!@#$%^&*(){}[]=<>/,.";
  return symbolsset[Math.floor(Math.random() * symbolsset.length)];
}

const randomFunc = {
  lower: getlower(),
  upper: getupper(),
  number: getnumber(),
  symbol: getsymbol(),
  //console.log(Object.values(randomFunc))
};

function getRandomTypes(numero) {
  const randomFunc = [getlower(), getupper(), getnumber(), getsymbol()];
  let result = randomFunc.join("");
  console.log(result);
  userPass.innerText = result;

  for (let i = 0; i < numero; i++) {
    //console.log(result);
  }
}

generate.addEventListener("click", () => {
  let len = document.getElementById("length").value;
  randomPass(len);
  // console.log(arrayTypes);
  getRandomTypes();
});

/*
const lowerset = "abcdefghijklmnopqrstuvwxyz";
  let lowerChar = lowerset[Math.floor(Math.random() * lowerset.length)];
  //console.log(lowerChar);

  const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upperChar = upperset[Math.floor(Math.random() * upperset.length)];
  //console.log(upperChar);

  const numberset = "0123456789";
  let numberChar = numberset[Math.floor(Math.random() * numberset.length)];
  //console.log(numberChar);

  const symbolsset = "!@#$%^&*(){}[]=<>/,.";
  let symbolchar = symbolsset[Math.floor(Math.random() * symbolsset.length)];
  //console.log(symbolchar);

   for (let i = 0; i < numero; i++) {
    let typesarray = [lowerChar, upperChar, numberChar, symbolchar];
    let typesJoin = typesarray.join("");
    //console.log(typesJoin); // uH6>
  }
*/
