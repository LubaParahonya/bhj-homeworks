const value = document.querySelector('.dropdown__value');
const arr = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownList = document.querySelector('.dropdown__list');
const arrLink = Array.from(document.querySelectorAll('.dropdown__link'))

// при нажании на кнопку с классном dropdown__value меняется класс на dropdown__list_active и 
// открывается меню с элементами класса dropdown__item

function functionValue(){
    dropdownList.classList.toggle('dropdown__list_active');
}

value.addEventListener('click', functionValue);


function clickItem(event) {
    value.textContent = this.textContent
    event.preventDefault();
    functionValue();
}
 
arrLink.forEach(item => {
    item.addEventListener('click', clickItem)
})

