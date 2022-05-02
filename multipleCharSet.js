let generate = document.getElementById("generate");
let userPass = document.getElementById("userPass");

let upper = document.getElementById("uppercase");
let lower = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

function randomPass(numero) {
  const lowerset = "abcdefghijklmnopqrstuvwxyz";
  let lowerChar = lowerset[Math.floor(Math.random() * lowerset.length)];
  // console.log(lowerChar);

  const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upperChar = upperset[Math.floor(Math.random() * upperset.length)];
  //console.log(upperChar);

  const numberset = "0123456789";
  let numberChar = numberset[Math.floor(Math.random() * numberset.length)];
  //console.log(numberChar);

  const symbolsset = "!@#$%^&*(){}[]=<>/,.";
  let symbolchar = symbolsset[Math.floor(Math.random() * symbolsset.length)];
  //console.log(symbolchar);

  let typesarray = [lowerChar, upperChar, numberChar, symbolchar];

  let typesJoin = typesarray.join("");
  console.log(typesJoin);

  const hasUpper = upper.checked;
  const hasLower = lower.checked;
  const hasNumbers = numbers.checked;
  const hasSymbols = symbols.checked;
  const array = [hasUpper, hasLower, hasNumbers, hasSymbols];
  // console.log(array);

  if (hasUpper + hasLower + hasNumbers + hasSymbols === 0) {
    alert("Please check atleast one box!");
    return;
  }

  userPass.innerText = typesJoin;
}
generate.addEventListener("click", () => {
  let len = document.getElementById("length").value;
  randomPass(len);
  //checkedFun();
});
