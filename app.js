function greeting(name = "talaba") {
  return `Assalomu alaykum, ${name}! CI/CD loyihasi muvaffaqiyatli ishlamoqda.`;
}

if (typeof document !== "undefined") {
  const button = document.getElementById("helloButton");
  const message = document.getElementById("message");
  if (button && message) {
    button.addEventListener("click", () => {
      message.textContent = greeting("Shahzoda");
    });
  }
}

if (typeof module !== "undefined") {
  module.exports = { greeting };
}
