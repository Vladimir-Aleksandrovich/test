const basketBtn = document.querySelector('.basket_btn'),
      input = document.querySelector(".input_field"),
      price = document.querySelector(".lb_price p");
      let a;

      console.log(price)

basketBtn.addEventListener("click", e => {
    console.log("WORK!")
})


input.addEventListener("input",
function name(e) {
   
    a = input.value + "lb";
    console.log(a)
    price.innerText = a;
    console.log(price.innerText )
    // price.innerHTML = `<p>${a}</p>`
})

