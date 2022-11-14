const chat = document.getElementById("chat");
const number = document.getElementById("numberInp");

chat.addEventListener("click", chatSub);
function chatSub(e) {
  if (number.value.length < 10) {
    alert("Check it", number.value);
    return;
  }
  chat.href = `https://wa.me/+91${number.value}`;
}

const wts = document.getElementById('wts')
const form_inp = document.getElementById('form_inp');

console.log(form_inp.value);
wts.addEventListener('submit' , e=>{
  e.preventDefault()
  location.href = `https://wa.me/+91${form_inp.value}`
})