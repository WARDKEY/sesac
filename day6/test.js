const $list = document.getElementById("messageList");
document.querySelector("form").addEventListener("submit", (event) => {
  const $username = document.getElementById("username").value;
  const $email = document.getElementById("email").value;
  const $message = document.getElementById("message").value;
  event.preventDefault();

  let arr = [$username, $email, $message];
  let stateful = ["primary", "secondary", "success"];

  for (let i = 0; i < arr.length; i++) {
    const $li = document.createElement("li");
    $li.classList.add(`list-group-item`);
    $li.classList.add(`list-group-item-${stateful[i]}`);
    $li.appendChild(document.createTextNode(arr[i]));
    $list.appendChild($li);
  }
});

function clearForm() {
  $list.removeChild($list.lastElementChild);
}
