const chat = document.getElementById("chat");
const number = document.getElementById("numberInp");

chat.addEventListener("click", chatSub);
function chatSub(e) {
  if (number.value.length < 10) {
    alert("Check it", number.value);
    return;
  }
  chat.href = `https://wa.me/${number.value}`;
}
