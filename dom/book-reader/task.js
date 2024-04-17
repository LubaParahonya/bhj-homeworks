const fontSize = Array.from(document.querySelectorAll('.font-size'))
const book = document.querySelector('.book')
   

function addClass(indexElement){
    const activeFont = document.querySelector('.font-size_active')
    activeFont.classList.remove('font-size_active')
    fontSize[indexElement].classList.add('font-size_active')

    if(fontSize[indexElement].classList.contains('font-size_small')){
        if(book.classList.contains('book_fs-big')){
            book.classList.remove('book_fs-big')
        }
      book.classList.add('book_fs-small')
    }else if(fontSize[indexElement].classList.contains('font-size_big')){
        if(book.classList.contains('book_fs-small')){
        book.classList.remove('book_fs-small')
    }
       book.classList.add('book_fs-big')
      }else{
        if(book.classList.contains('book_fs-small')){
        book.classList.remove('book_fs-small')
    }if(book.classList.contains('book_fs-big')){
        book.classList.remove('book_fs-big')
    }
        
      }


}

fontSize.forEach(item => item.addEventListener('click', function(){
    event.preventDefault()
    indexElement = fontSize.indexOf(item)
    addClass(indexElement)

})) 

