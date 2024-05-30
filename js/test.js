let shop = document.querySelector('.shop');
let p = document.querySelectorAll('p')

shop.addEventListener('mouseover', e => {
   p.forEach(el => {
    if (e.target == el) {
        el.classList.add("mouseIn");
    }
   })
  
})

shop.addEventListener('mouseout', e => {
    p.forEach(el => {
     if (e.target == el) {
         el.classList.remove("mouseIn");
     }
    })
   
 
})