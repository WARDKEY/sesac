const users = [];

function addUser() {
  // 추가하기 버튼이 눌렸을 때 동작
  const username = document.getElementById("username").value;
  const status = document.getElementById("status").value;

  const userList = document.getElementById("userList");

  // 함수 실행마다 객체 생성 (validation 없음)
  const newUser = {
    username,
    status,
  };

  // 객체를 배열에 추가
  users.push(newUser);
  // user

  updateUserList();
  updateStatus();
  updateUser();
}
// html 그리는 역할할
function updateUserList() {
  userList.innerHTML = "";
  // user 배열의 개수만큼 li 생성
  users.forEach((user, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between"
    );
    listItem.innerHTML = `
      <span>${user.username} - ${user.status}</span>
      <button class="btn btn-sm btn-outline-primary" onclick="sendMessage('${user.username}')">📩 메시지</button>
    `;
    userList.appendChild(listItem);
  });
  // 배열의 크기가 0이면 추가
  if (users.length === 0) {
    userList.innerHTML =
      '<li class="list-group-item text-muted">사용자가 없습니다.</li>';
  }
}

// 총 user 개수++ (배열의 크기로 계산)
function updateUser() {
  const totalUsers = document.getElementById("totalUsers");
  totalUsers.textContent = `${users.length}명`;
}

// status가 활성인 user의 개수++
function updateStatus() {
  const activeUsers = document.getElementById("activeUsers");
  let user = 0;
  for (let a = 0; a < users.length; a++) {
    if (users[a].status === "활성") {
      user++;
    }
  }
  activeUsers.textContent = `${user}명`;
}
