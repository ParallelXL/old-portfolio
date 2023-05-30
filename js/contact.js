// Form validation
const inputs = document.querySelectorAll("input");
const popUp = document.querySelector(".pop-up");
const form = document.querySelector("form");

inputs.forEach((input) => {
  input.addEventListener("change", function (e) {
    const html = `
      <h1>Please Enter Your Full Name</h1>
    `;
    if (!e.target.value.includes(" ") && e.target.name === "name") {
      popUp.innerHTML = "";
      popUp.insertAdjacentHTML("beforeend", html);
      popUp.classList.add("active");
    } else {
      popUp.classList.remove("active");
      popUp.innerHTML = "";
    }
  });
});
