const value = document.querySelector('.dropdown__value');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const arr = Array.from(document.querySelectorAll('.dropdown__item'))

// при нажании на кнопку с классном dropdown__value меняется класс на dropdown__list_active и 
// открывается меню с элементами класса dropdown__item

value.addEventListener('click', function functionValue(){
    value.classList.add('dropdown__list_active');
});

//при нажатии на элемент с классм dropdown__item, закрывется меня по средством удаления класса dropdown__list_active у элемента value
// значение элемента с классом dropdown__value меняется на значение элемента с классом dropdown__item


arr.forEach((item, index, Array) => {
    Array[index].addEventListener('click', (index, Array) => {
        value.classList.remove('dropdown__list_active');
        value.textContent = Array[index].textContent
    })
})