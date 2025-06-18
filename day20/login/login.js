function login() {
  const info = document.getElementById("info");
  const $email = document.getElementById("Email").value;
  const $password = document.getElementById("inputPassword").value;

  const h = document.createElement("p");
  h.innerHTML = `
  아이디 : ${$email}
  비밀번호 : ${$password}
  `;

  info.appendChild(h);
  console.log("클릭됨");
  
}
