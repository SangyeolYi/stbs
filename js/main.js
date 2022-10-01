const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
const searchIcon = searchEl.querySelector('material-icons')

searchEl.addEventListener('click',function(){
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus',function(){
  searchInputEl.setAttribute('placeholder','検索')
  searchEl.classList.add('focused')
  // searchIcon.setAttribute('style','')
})

searchInputEl.addEventListener('blur',function(){
  searchInputEl.setAttribute('placeholder','')
  searchEl.classList.remove('focused')
})