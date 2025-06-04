// const $list = document.getElementById("messageList");
// document.querySelector("form").addEventListener("submit", (event) => {
//   const $username = document.getElementById("username").value;
//   const $email = document.getElementById("email").value;
//   const $message = document.getElementById("message").value;
//   event.preventDefault();

//   let arr = [$username, $email, $message];
//   let stateful = ["primary", "secondary", "success"];

//   for (let i = 0; i < arr.length; i++) {
//     const $li = document.createElement("li");
//     $li.classList.add(`list-group-item`);
//     $li.classList.add(`list-group-item-${stateful[i]}`);
//     $li.appendChild(document.createTextNode(arr[i]));
//     $list.appendChild($li);
//   }
// });

// function clearForm() {
//   $list.removeChild($list.lastElementChild);
// }

// html 문서의 기본 구조(DOM)이 모두 로드되었을 때 실행되는 이벤트
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("googleForm");
  const messageList = document.getElementById("messageList");

  // 함수 내부의 함수는 변수처럼 다루어지며, 함수 내부의 변수는 함수가 호출될 때 존재한다.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (username && email && message) {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.innerHTML = `
        <strong>${username} (${email})</strong><br>
        ${message}
      `;
      console.log(messageList);
      messageList.appendChild(listItem);

      // form.reset();
    } else {
      alert("모든 필드를 입력해야 합니다.");
    }
  });
});

// 폼 초기화 버튼
function clearForm() {
  const lastMessage = messageList.lastElementChild;
  if (lastMessage) {
    messageList.removeChild(lastMessage);
  } else {
    alert("삭제할 메시지가 없습니다.");
  }
}
