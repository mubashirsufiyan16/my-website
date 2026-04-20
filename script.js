// BACK TO TOP BUTTON
const backTop = document.getElementById("back-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
});

// NEWSLETTER
function handleSubscribe(btn) {
  const input = btn.previousElementSibling;

  if (!input.value.trim()) {
    alert("Enter email first!");
    return;
  }
  alert("You are successfully enrolled!")
  btn.innerText = "Joined ✓";
  input.value = "";
}