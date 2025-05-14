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

const $arr = document.getElementById("arr");
const $obj = document.getElementById("obj");
const $like = document.getElementById("like");
const sortByLike = Object.fromEntries(
  Object.entries(songDetails).sort(
    ([keyA, valueA], [keyB, valueB]) => valueA.likes - valueB.likes
  )
);
createArray();
createObj();
likeList();

function createArray() {
  const $ul = document.createElement("ul");
  $ul.classList.add("list-group");
  $arr.appendChild($ul);

  for (let i = 0; i < songList.length; i++) {
    const $li = document.createElement("li");
    $li.classList.add("list-group-item");
    $li.innerHTML = `<div class="card text-start"">
<div class="card-body">
  <h5 class="card-title">${i + 1}. ${songList[i]}</h5>
</div>
</div>`;
    $ul.appendChild($li);
  }
}

function createObj() {
  const $ul = document.createElement("ul");
  $ul.classList.add("list-group");
  $obj.appendChild($ul);

  let i = 1;
  for (let key in songDetails) {
    const $li = document.createElement("li");
    $li.classList.add("list-group-item");
    $li.innerHTML = `<div class="card text-start"">
<div class="card-body">
  <h5 class="card-title">${i++}. ${key}</h5>
  <p class="card-text">artist : ${songDetails[key].artist}</p>
    <p class="card-text">likes : ${songDetails[key].likes}</p>
</div>
</div>`;
    $ul.appendChild($li);
  }
}

function likeList() {
  const $ul = document.createElement("ul");
  $ul.classList.add("list-group", "sort");
  $like.appendChild($ul);

  let i = 1;
  for (let key in songDetails) {
    if (songDetails[key].likes >= 60000) {
      const $li = document.createElement("li");
      $li.classList.add("list-group-item");
      $li.innerHTML = `<div class="card text-start"">
<div class="card-body">
  <h5 class="card-title">${i++}. ${key}</h5>
  <p class="card-text">artist : ${songDetails[key].artist}</p>
    <p class="card-text">likes : ${songDetails[key].likes}</p>
</div>
</div>`;
      $ul.appendChild($li);
    }
  }
}

function sort() {
  const $sortList = document.querySelector(".sort");
  while ($sortList.firstChild) {
    $sortList.removeChild($sortList.firstChild);
  }
  const $ul = document.createElement("ul");
  $ul.classList.add("list-group", "sort");
  $like.appendChild($ul);
  let i = 1;
  for (let key in sortByLike) {
    if (sortByLike[key].likes >= 60000) {
      const $li = document.createElement("li");
      $li.classList.add("list-group-item");
      $li.innerHTML = `<div class="card text-start"">
<div class="card-body">
  <h5 class="card-title">${i++}. ${key}</h5>
  <p class="card-text">artist : ${sortByLike[key].artist}</p>
    <p class="card-text">likes : ${sortByLike[key].likes}</p>
</div>
</div>`;
      $ul.appendChild($li);
    }
  }

  console.log($sortList);
}

function add() {
  const $songName = document.getElementById("songname").value;
  const $singer = document.getElementById("singer").value;
  const $likeNumber = document.getElementById("likeNumber").value;
  const $sortList = document.querySelector(".sort");

  songDetails.$songName = {
    artist: $singer,
    likes: $likeNumber,
  };

  const $li = document.createElement("li");
    $li.classList.add("list-group-item");
    $li.innerHTML = `<div class="card text-start"">
<div class="card-body">
  <h5 class="card-title">${Object.keys(songDetails).length}. ${$songName}</h5>
  <p class="card-text">artist : ${$singer}</p>
    <p class="card-text">likes : ${$likeNumber}</p>
</div>
</div>`;
    $sortList.appendChild($li);


  
}
