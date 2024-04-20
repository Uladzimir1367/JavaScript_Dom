

document.addEventListener('DOMContentLoaded', () => {
   const data = JSON.parse(dataJS);
   console.log(data);
   const cardContainer = document.querySelector('div.box__products');
   
   if (cardContainer) {
   data.forEach(element => {
   const tempEl = document.getElementById('cartTemplate');
   if (tempEl) {
   const clone = tempEl.content.cloneNode(true);
   clone.querySelector("img.img__items__products").src = element.imgUrl;
   clone.querySelector("a.subtitle__items__products").innerHTML = element.subtitle;
   clone.querySelector("p.text__items__products").innerHTML = element.description;
   clone.querySelector("p.price__items__products").innerHTML = element.price;
      
   cardContainer.appendChild(clone);
   } else {
   console.error('Template element with id "cartTemplate" not found.');
   }
   });
   } else {
   console.error('Container element with class "containerCards" not found.');
   }
   });