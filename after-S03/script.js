const factBtn = document.querySelector(".btn-open");
const postBtn = document.querySelector(".btn-post");
const form = document.querySelector(".fact-form");

factBtn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    factBtn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    factBtn.textContent = "Share a fact";
  }
});

// postBtn.addEventListener("click", () => {
//   form.classList.add("hidden");
// });
