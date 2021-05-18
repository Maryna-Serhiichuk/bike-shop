let getGoodsAll = localStorage.getItem("nameGoodsAll");
getGoodsAll = JSON.parse(getGoodsAll);

let payListGoods = document.querySelector('#pay-list-goods')

for(let i = 0; i < getGoodsAll.length; i++){
  let option = document.createElement('option'); 
  option.textContent = getGoodsAll[i];
  payListGoods.appendChild(option);
}