function generatePasswords() {
  const chars ="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*";
  const passwords = new Set();

  while (passwords.size < 10) {
    let pwd = "";
    for (let i = 0; i < 12; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    passwords.add(pwd);
  }

  const output = document.getElementById("passwords");
  output.innerHTML = "";
  passwords.forEach(pwd => {
    const div = document.createElement("div");
    div.className = "password";
    div.textContent = pwd;
    output.appendChild(div);
  });
}
