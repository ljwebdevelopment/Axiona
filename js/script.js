/* Axiona Login — Static Demo JS
   - Adds the fly-in animation on first load
   - Prevents form submission (since no backend)
   - Optional tiny validation + message
*/

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".wrap");
  if (wrap) wrap.classList.add("animate-in");

  const form = document.querySelector("form");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  // Create a small inline error/status element (optional)
  let msg = document.querySelector(".form-error");
  if (!msg && form) {
    msg = document.createElement("div");
    msg.className = "form-error";
    msg.setAttribute("aria-live", "polite");
    form.appendChild(msg);
  }

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // static page

    const emailVal = (email?.value || "").trim();
    const passVal = (password?.value || "").trim();

    // Super light validation (purely UX)
    if (!emailVal || !passVal) {
      if (msg) msg.textContent = "Please enter your email and password.";
      return;
    }

    // Demo message (replace later with real auth)
    if (msg) msg.textContent = "Static demo only — connect authentication to enable login.";
  });
});
