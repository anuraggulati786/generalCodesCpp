//  Write the js code to compute sum of 2 gvn num if value are same then return (triple of their sum)
let ele1 = document.querySelector(".fst"),
  ele2 = document.querySelector(".snd"),
  btn = document.querySelector(".btn"),
  res = document.querySelector(".outpt");
let tst = document.querySelector(".js").innerHTML;

btn.addEventListener("click", fun);
function fun() {
  ele1 = ele1.value;
  ele2 = ele2.value;
  if (ele1 == ele2) {
    let sum = Number(ele1) + Number(ele2) + 0;
    sum = sum * sum * sum;
    res.innerText = sum;
  } else {
    console.log(ele1 + " " + ele2);
    res.innerText = Number(ele1) + Number(ele2);
  }
}
