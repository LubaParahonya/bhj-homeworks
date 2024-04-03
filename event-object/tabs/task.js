const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));



function clickTab(indexTab){
    const tabActive = document.querySelector('.tab_active')
    const tabContentActive = document.querySelector('.tab__content_active')
    tabActive.classList.remove('tab_active')
    tabContentActive.classList.remove('tab__content_active')
    tab[indexTab].classList.add('tab_active');
    tabContent[indexTab].classList.add('tab__content_active');
}



tab.forEach(element => element.addEventListener('click', function(){
    indexTab = tab.indexOf(element);
    clickTab(indexTab);
}))








    