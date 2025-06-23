function signUp() {
  const $email = document.getElementById("email").value;
  const $password = document.getElementById("password").value;

  const user = {
    email: $email,
    password: $password,
  };

  // 새 유저 추가
  // 페이지 이동하면 추가 안 됨
  userList.push(user);

  // 로그인 페이지로 이동
  window.location.href = "login.html";
}
