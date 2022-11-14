const form = document.getElementById("form");
const number = document.getElementById("numberInp");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (number.value.length < 10) {
    alert("Check it", number.value);
    return;
  }
  location.href = `https://wa.me/${number.value}`;
  console.log(location.href);
});
