function login() {
  const $email = document.getElementById("email").value;
  const $password = document.getElementById("password").value;

  // email을 통해 해당 user 찾기
  const user = userList.find((user) => {
    return user.email === $email;
  });

  // user가 존재하고 비밀번호가 일치할 때 로그인
  if (user && user.password === $password) {
    localStorage.setItem("login", true);

    // 게시판 페이지로 이동
    window.location.href = "post.html";
  } else {
    alert("로그인 정보가 일치하지 않습니다.");
  }
}
