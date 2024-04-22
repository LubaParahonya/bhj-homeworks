
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


//нажатие на кнопку минус
function minusQuantity (indexProduct){
    if(indexProduct >= 0){
    if(productQuantityValue[indexProduct].textContent > 1){
        productQuantityValue[indexProduct].textContent--
    }
  }
}

//нажатие на кнопку плюс
function plusQuantity(indexProduct){
    if(indexProduct >= 0){
    productQuantityValue[indexProduct].textContent++
}else{
    productQuantityValue[0].textContent++
}
}


//событие нажатия на плюс
plus.forEach(itemP => itemP.addEventListener('click', event => {
    event.preventDefault()
    indexProduct = plus.indexOf(itemP)
    plusQuantity(indexProduct)

}))

//событие нажатия на минус
minus.forEach(item => item.addEventListener('click', function(){
    event.preventDefault()
    indexProduct = minus.indexOf(item)
    minusQuantity(indexProduct)

}))

//копирование продукта в корзину
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

// нажатие на кнопку добавить, перенос скопированного товара в корзину
productAdd.forEach(el => el.addEventListener('click', event => {
    event.preventDefault()
    const addProducts = Array.from(document.querySelectorAll('.cart__product'))
    indexProduct = productAdd.indexOf(el)
    const arrAddProductId = []
    addProducts.forEach(e => arrAddProductId.push(e.dataset.id))
    const intArrAddProductId = arrAddProductId.map(num => parseInt(num))
     if(intArrAddProductId.includes(indexProduct + 1)){
        const cartProductCount = Array.from(document.querySelectorAll('.cart__product-count'))
            cartProductCount[indexProduct].textContent = productQuantityValue[indexProduct].textContent
    }else {
        indexProduct = productAdd.indexOf(el)
        const arrId = []
        addProducts.forEach(elementId => arrId.push(elementId.dataset.id))
        copyProduct(indexProduct)
    }
    }
))

