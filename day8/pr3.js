const $itemList = document.getElementById("itemList");
$itemList.innerHTML = "";

let totalPrice = 0;

function add(number) {
  const $list = document.createElement("li");

  const $item = document.querySelectorAll(".item")[number - 1].textContent;
  const $price = document.querySelectorAll(".price")[number - 1].textContent;
  const $totalPrice = document.getElementById("allPrice");

  $list.classList.add("list-group-item");
  $list.innerHTML = `${$item} | 가격: ${$price}`;
  $itemList.appendChild($list);

  formatPrice();

  function formatPrice() {
    totalPrice += Number($price.substring(1).replace(",", "").trim());
    $totalPrice.innerHTML = `총 금액: ₩ ${totalPrice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원`;
  }
}
