let nameGoods = document.querySelectorAll('.name');

let nameGoodsAll = [];

for(let i = 0; i < nameGoods.length; i++){
  nameGoodsAll.push(nameGoods[i].textContent.trim());
}

localStorage.setItem("nameGoodsAll", JSON.stringify(nameGoodsAll));