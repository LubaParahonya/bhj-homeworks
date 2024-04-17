// кнопка уменьшения
const minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'))
//кнопка увеличения
const plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'))
// число продуктов
const productQuantityValue = Array.from(document.querySelectorAll('.product__quantity-value'))
//продукт
const product = Array.from(document.querySelectorAll('.product'))
//фото продукта
const productImage = Array.from(document.querySelectorAll('.product__image'))
//корзина
const cartProducts = document.querySelector('.cart__products')
//кнопка добавления в корзину
const productAdd = Array.from(document.querySelectorAll('.product__add'))

function minusQuantity (indexProduct){
    if(indexProduct >= 0){
    if(productQuantityValue[indexProduct].textContent > 0){
        productQuantityValue[indexProduct].textContent--
    }
  }
}


function plusQuantity(indexProduct){
    if(indexProduct >= 0){
    productQuantityValue[indexProduct].textContent++
}else{
    productQuantityValue[0].textContent++
}
}



plus.forEach(itemP => itemP.addEventListener('click', function(){
    event.preventDefault()
    indexProduct = plus.indexOf(itemP)
    plusQuantity(indexProduct)

}))


minus.forEach(item => item.addEventListener('click', function(){
    event.preventDefault()
    indexProduct = minus.indexOf(item)
    minusQuantity(indexProduct)

}))


function copyProduct(indexProduct){
    const productCart = product[indexProduct].cloneNode(false)
    productCart.classList.add('cart__product')
    productCart.classList.remove('product')
    const photoCart = productImage[indexProduct].cloneNode(false)
    photoCart.classList.add('cart__product-image')
    photoCart.classList.remove('product__image')
    const valueCart = productQuantityValue[indexProduct].cloneNode(false)
    valueCart.classList.add('cart__product-count')
    valueCart.classList.remove('product__quantity-value')
    valueCart.textContent = productQuantityValue[indexProduct].textContent
    cartProducts.appendChild(productCart)
    productCart.appendChild(photoCart)
    productCart.appendChild(valueCart)

}


productAdd.forEach(el => el.addEventListener('click', function(){
    event.preventDefault()
    //id добавленного товара
    const addProducts = Array.from(document.querySelectorAll('.cart__product'))
    // кол-во добавленного товара
    const cartProductCount = Array.from(document.querySelectorAll('.cart__product-count'))
    indexProduct = productAdd.indexOf(el)
    const arrId = []
    addProducts.forEach(elementId => arrId.push(elementId.dataset.id))
    
    /*if(arrId.includes(indexProduct)){
        cartProductCount[indexProduct].textContent += 
    }*/
    
    copyProduct(indexProduct)}
))