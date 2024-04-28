const minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'))
const plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'))
const productQuantityValue = Array.from(document.querySelectorAll('.product__quantity-value'))
const product = Array.from(document.querySelectorAll('.product'))
const productImage = Array.from(document.querySelectorAll('.product__image'))
const cartProducts = document.querySelector('.cart__products')
const productAdd = Array.from(document.querySelectorAll('.product__add'))

function minusQuantity (indexProduct){
    if(indexProduct >= 0){
    if(productQuantityValue[indexProduct].textContent > 1){
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

plus.forEach(itemP => itemP.addEventListener('click', event => {
    event.preventDefault()
    indexProduct = plus.indexOf(itemP)
    plusQuantity(indexProduct)

}))

minus.forEach(item => item.addEventListener('click', event => {
    event.preventDefault()
    indexProduct = minus.indexOf(item)
    minusQuantity(indexProduct)

}))

function copyProduct(indexProduct){
    cartProducts.insertAdjacentHTML('afterbegin', `
    <div class="cart__product">
                <img class="cart__product-image">
                <div class="cart__product-count"></div>
            </div>`)
    const cartProduct = document.querySelector('.cart__product')
    cartProduct.dataset.id = product[indexProduct].dataset.id
    const cartProductImage = document.querySelector('.cart__product-image')
    cartProductImage.src = productImage[indexProduct].src
    const cartProductCount = document.querySelector('.cart__product-count')
    cartProductCount.textContent =  productQuantityValue[indexProduct].textContent

}

function getAddProducts(){
    return addProducts = Array.from(document.querySelectorAll('.cart__product'))

}

function getCartProductCount(){
    return cartProductCount  = Array.from(document.querySelectorAll('.cart__product-count'))
}
 
productAdd.forEach(el => el.addEventListener('click', event => {
        indexProduct = productAdd.indexOf(el)
        getAddProducts()
        getCartProductCount()
        if(addProducts.find(item => item.dataset.id === el.closest('.product').dataset.id)){
            index = addProducts.findIndex(e => e.dataset.id ===  el.closest('.product').dataset.id)
            cartProductCount[index].textContent = (parseInt(cartProductCount[index].textContent) + parseInt(productQuantityValue[indexProduct].textContent)).toString()


        }else{
            copyProduct(indexProduct)
            getAddProducts()
        }
    }
))


