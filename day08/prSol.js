const songList = [
  "너에게 닿기를",
  "like JENNIE",
  "Drowning",
  "모르시나요(PROD.로코베리)",
  "TOO BAD",
  "HOME SWEET HOME",
  "나는 반딧불",
  "Whiplash",
  "REBEL HEART",
  "HOT",
];

const songDetails = {
  "너에게 닿기를": { artist: "10CM", likes: 58471 },
  "like JENNIE": { artist: "제니", likes: 76168 },
  Drowning: { artist: "WOODZ", likes: 189248 },
  "모르시나요(PROD.로코베리)": { artist: "조째즈", likes: 70040 },
  "TOO BAD": { artist: "G-DRAGON", likes: 146178 },
  "HOME SWEET HOME": { artist: "G-DRAGON", likes: 211539 },
  "나는 반딧불": { artist: "황가람", likes: 141198 },
  Whiplash: { artist: "aespa", likes: 132606 },
  "REBEL HEART": { artist: "IVE (아이브)", likes: 98429 },
  HOT: { artist: "LE SSERAFIM (르세라핌)", likes: 35001 },
};

const songListElement = document.getElementById("songList");
songListElement.innerHTML = "";

// for (let a = 0; a < songList.length; a++) {
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.textContent = `${a + 1}. ${songList[a]}`;
//   songListElement.appendChild(listItem);
// }

// while문으로 변경
// let len = songList.length;
// let cnt = 0;

// while (cnt < len) {
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.textContent = `${cnt + 1}. ${songList[cnt]}`;
//   songListElement.appendChild(listItem);
//   cnt++;
// }

// forEach로 변경
// songList.forEach((song, index) => {
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.textContent = `${index + 1}. ${song}`;
//   songListElement.appendChild(listItem);
// });

// for_of로 변경
// let index = 0;

// for (let song of songList) {
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.textContent = `${++index}. ${song}`;
//   songListElement.appendChild(listItem);
// }

// for_in 사용
for (let song in songDetails) {
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  // 대괄호 표기법을 사용하는 이유는 song이 "노래 제목" 처럼 문자열 형식이기 때문
  listItem.innerHTML = `
  <strong>${song}</strong></br>
  가수 : ${songDetails[song].artist} |
  좋아요 : ${songDetails[song].likes} 👍`;
  songListElement.appendChild(listItem);
}

const popularListElement = document.getElementById("popularList");

// 60000개 이상 리스트 그려주는 함수
drawList();

// function addSong() {
//   const listItem = document.createElement("li");
//   const songName = document.getElementById("songName").value;
//   const singer = document.getElementById("singer").value;
//   const likeNumber = document.getElementById("likeNumber").value;

//   if (likeNumber >= 60000) {
//     // DON 요소는 하나의 부모를 갖기 때문에 요소 중복으로 넣기 불가
//     // listItem.cloneNode(true)로 요소 복제하여 넣어주면 됨
//     const listItem2 = listItem.cloneNode(true);
//     songListElement.appendChild(addList(listItem2));
//     popularListElement.appendChild(addList(listItem));
//   } else {
//     songListElement.appendChild(addList(listItem));
//   }

//   function addList(listItem) {
//     listItem.classList.add("list-group-item");
//     listItem.innerHTML = `
//   <strong>${songName}</strong></br>
//   가수 : ${singer} |
//   좋아요 : ${likeNumber} 👍`;
//     return listItem;
//   }
// }

function addSong() {
  const songName = document.getElementById("songName").value;
  const singer = document.getElementById("singer").value;
  const likeNumber = document.getElementById("likeNumber").value;

  songDetails[songName] = {
    artists: singer,
    likes: likeNumber,
  };

  drawList();
}

function drawList() {
  // 내부의 요소 지우고
  popularListElement.innerHTML = "";

  // 다시 채움
  for (let song in songDetails) {
    const listItem = document.createElement("li");
    if (songDetails[song].likes >= 60000) {
      listItem.classList.add("list-group-item");
      listItem.innerHTML = `
  <strong>${song}</strong></br>
  가수 : ${songDetails[song].artist} |
  좋아요 : ${songDetails[song].likes} 👍`;
      popularListElement.appendChild(listItem);
    }
  }
}
