const generateBtn = document.getElementById("generate-btn");
const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");

const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const lengthPass = document.getElementById("length");


const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbersList = "0123456789";
const symbolsList = "!@#$%^&*()_+[]{}<>?/|";


//return random letter from string
function getRandom(str){
  return str.charAt(Math.floor(Math.random() * str.length));
}





function generatePassword() {

  //password length 
  const len = parseInt(lengthPass.value , 10) || 12 ;


  let x = "" ;
  const passArr = [];


  if(upperCase.checked){
    x += upperLetters ;
    passArr.push(getRandom(upperLetters));
  }


  if(lowerCase.checked){
    x += lowerLetters;
    passArr.push(getRandom(lowerLetters));
  }


  if(numbers.checked){
    x += numbersList ;
    passArr.push(getRandom(numbersList));
  }


  if(symbols.checked){
    x += symbolsList;
    passArr.push(getRandom(symbolsList));
  }


  if(x === ""){
      const msgError = document.getElementById("error-msg");
      msgError.classList.add("show");
      setTimeout(() => msgError.classList.remove("show"), 1000);
      return ;
  }


  const pass = [...passArr];
  for(let i = passArr.length ; i < len ; i++){
    pass.push(getRandom(x))
  }

  passwordBox.value = pass.join("");

  document.querySelector(".password-box").style.display="flex";

}

generateBtn.addEventListener("click", generatePassword);


//copy password
copyBtn.addEventListener("click" , ()=>{
  if(passwordBox.value === ""){
    alert("No password to copy!");
    return
  }
  navigator.clipboard.writeText(passwordBox.value)
  .then(() => {
      const msg = document.getElementById("copy-msg");
      msg.classList.add("show");
      setTimeout(() => msg.classList.remove("show"), 1500);
    })
  .catch(()=> alert("Failed to copy"));
    //highlight to password box when copied!
  passwordBox.classList.add("flash");
  setTimeout(() => passwordBox.classList.remove("flash"), 400);
});
