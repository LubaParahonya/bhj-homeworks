const value = document.querySelector('.dropdown__value');
//const dropdownItem = document.querySelectorAll('.dropdown__item');
const arr = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownList = document.querySelector('.dropdown__list');
//const dropdownLink = document.querySelector('.dropdown__link');
const arrLink = Array.from(document.querySelectorAll('.dropdown__link'))

// при нажании на кнопку с классном dropdown__value меняется класс на dropdown__list_active и 
// открывается меню с элементами класса dropdown__item

value.addEventListener('click', function functionValue(){
    dropdownList.classList.toggle('dropdown__list_active');
});

//при нажатии на элемент с классм dropdown__item, закрывется меня по средством удаления класса dropdown__list_active у элемента value
// значение элемента с классом dropdown__value меняется на значение элемента с классом dropdown__item
 
arrLink.forEach((item, index, Array) => {
    Array[index].addEventListener('click', item => {
        value.textContent = item.textContent
    })
})


