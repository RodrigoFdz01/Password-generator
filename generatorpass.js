let boton = document.getElementById("boton");
function randomChar() {
  let lower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  let lower2 = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  let upper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  let upper2 = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  let number = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  let number2 = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  let symbolchar = symbols[Math.floor(Math.random() * symbols.length)];
  let symbolchar2 = symbols[Math.floor(Math.random() * symbols.length)];

  let concats = [
    lower,
    lower2,
    upper,
    upper2,
    number,
    number2,
    symbolchar,
    symbolchar2,
  ];
  console.log(concats);
}
boton.addEventListener("click", () => {
  randomChar();
});

// 2da opcion

/*
function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
    }*/
