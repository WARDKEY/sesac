const postForm = document.getElementById("postForm");
const postList = document.getElementById("postList");

const title = document.getElementById("title");
const content = document.getElementById("content");

let posts = []; // 게시글 저장용

const user = localStorage.getItem("login");
const logoutBtn = document.getElementById("logout");

// 로그인x는 readOnly로, 로그아웃 버튼은 로그인으로 변경
document.addEventListener("DOMContentLoaded", () => {
  if (!user) {
    title.setAttribute("readonly", true);
    content.setAttribute("readOnly", true);
    logoutBtn.innerHTML = `로그인`;
  }
});

// 로그아웃
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("login");
});

// 게시글 생성
function createPosts() {
  postList.innerHTML = "";
  posts.forEach((post, index) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-start";
    li.innerHTML = `
      <div>
        <h5 class="fw-bold">${post.title}</h5>
        <p class="mb-1">${post.content}</p>
        <small class="text-muted">${post.date}</small>
      </div>
      <button class="btn btn-sm btn-danger" onclick="deletePost(${index})">삭제</button>
    `;
    postList.appendChild(li);
  });
}

// 글 작성
postForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  // 제목과 내용 있으면 앞에 추가
  if (title && content) {
    posts.unshift({
      title,
      content,
      date: new Date().toLocaleString(),
    });
    createPosts();
    postForm.reset();
  }
});

// 게시글 삭제
function deletePost(index) {
  if (confirm("이 글을 삭제하시겠습니까?")) {
    posts.splice(index, 1);
    createPosts();
  }
}

createPosts();
