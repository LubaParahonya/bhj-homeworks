const fontSize = Array.from(document.querySelectorAll('.font-size'))
const book = document.querySelector('.book')
 

fontSize.forEach(item => item.addEventListener('click', element => {
    const activFontSize = document.querySelector('.font-size_active');
    activFontSize.classList.remove('font-size_active');
    element.classlist.add('font-size_active')
    if(element.classList.contains('font-size_small') === true){
        if(book.classList.contains('font-size_big')){
            book.classList.remove('font-size_big')
        }
        book.classList.add('book_fs-small')
    }if(element.classList.contains('font-size_big') === true){
        if(book.classList.contains('font-size_small')){
            book.classList.remove('font-size_small')
        }
        book.classList.add('book_fs-big')
    }
   }
    )
     )