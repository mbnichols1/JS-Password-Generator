function generatePasswords() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*";
  const passwords = new Set();
  const length = parseInt(document.getElementById("lengthSlider").value);

  while (passwords.size < 10) {
    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    passwords.add(pwd);
  }

  const output = document.getElementById("passwords");
  output.innerHTML = "";

  passwords.forEach(pwd => {
    const container = document.createElement("div");
    container.className = "password";

    const text = document.createElement("span");
    text.textContent = pwd;
    text.style.marginRight = "10px";

    const button = document.createElement("button");
    button.textContent = "Copy";
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(pwd).then(() => {
        button.textContent = "Copied!";
        setTimeout(() => button.textContent = "Copy", 1500);
      });
    });

    container.appendChild(text);
    container.appendChild(button);
    output.appendChild(container);
  });
}
