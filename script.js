const form = document.getElementById("form");
const number = document.getElementById("numberInp");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (number.value.length < 10) {
    alert("Check it", number.value);
    return;
  }
  console.log(number.value);
  location.href = `https://api.whatsapp.com/send?phone=${number.value}`;
});
