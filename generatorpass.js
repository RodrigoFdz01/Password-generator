let generate = document.getElementById("generate");
let userPass = document.getElementById("userPass");

let upper = document.getElementById("uppercase");
let lower = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

function randomPass(numero) {
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_!@#$%^&*(){}[]=<>/,.";

  const hasUpper = upper.checked;
  const hasLower = lower.checked;
  const hasNumbers = numbers.checked;
  const hasSymbols = symbols.checked;
  const array = [hasUpper, hasLower, hasNumbers, hasSymbols];
  //console.log(array);
  if (array.includes(!hasUpper && !hasLower)) {
    // console.log("no uppers y no lowers");
  }

  if (hasUpper + hasLower + hasNumbers + hasSymbols === 0) {
    alert("Please check atleast one box!");
    return;
  }

  /* function checkedFun() {
    let noUpper = charset.replace(/[A-Z]/g, "");
    let noLower = charset.replace(/[a-z]/g, "");
    let noNumbers = charset.replace(/[0-9]/g, "");
    let noSymbols = charset.replace(/[^\w\s]/gi, "");
  }*/

  // if (!hasUpper) {
  //   console.log(charset.replace(/[A-Z]/g, ""));
  // } else if (!hasLower) {
  //   console.log(charset.replace(/[a-z]/g, ""));
  // } else if (!hasNumbers) {
  //   console.log(charset.replace(/[0-9]/g, ""));
  // } else if (!hasSymbols) {
  //   console.log(charset.replace(/[^\w\s]/gi, ""));
  // }

  const empty = [];

  for (let i = 0; i < numero; i++) {
    let randomChar = charset[Math.floor(Math.random() * charset.length)];
    empty.push(randomChar);
    //console.log(empty);
  }
  let result = empty.join("");
  //console.log(result);
  //console.log(finalResult.slice(0, finalLen - numero));

  userPass.innerText = result;
}

generate.addEventListener("click", () => {
  let len = document.getElementById("length").value;
  if (len === "") {
    alert("choose the length of the password ! (8 to 20)");
    userPass.innerText = "";
  }

  randomPass(len);
  //checkedFun();
});

// function getChecked() {
//   const checkBox = document.getElementById('check1').checked;
//   if (checkBox === true) {
//     console.log(true);
//     } else {
//       console.log(false);
//   }
// }
