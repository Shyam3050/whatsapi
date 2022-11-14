const wts = document.getElementById("wts");
const form_inp = document.getElementById("form_inp");

wts.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form_inp.value.length < 10) {
    alert("Check it");
    return;
  }
  location.href = `https://wa.me/+91${form_inp.value}`;
});
