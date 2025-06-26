

console.log(document)
const menuOpenButton = document.querySelector('[data-js-main-menu-open]')
const menuOverlay = document.querySelector('[data-js-main-menu-target]')
const menueCloseButton = document.querySelector('[data-js-main-menu-close]')
menuOpenButton.addEventListener('click',openMenue)

menueCloseButton.addEventListener('click',function (){
    menuOverlay.classList.toggle('is-active')
})


function openMenue() {
    menuOverlay.classList.toggle('is-active')
    console.log("openMenue")
}

const pageNavigation = document.querySelector('[data-js-page-navigation-menu]')

const sectionHeadlines = document.querySelectorAll('[data-js-page-navigation-conten] > section > h2')


sectionHeadlines.forEach(function (headline){

    sectionID = headline.innerText.toLowerCase().replace(/ /g, '-')

    const pageNavigationItem = document.createElement('li')
    pageNavigationAnchor = document.createElement('a')

    pageNavigationItem.innerHTML = headline.innerHTML;
    pageNavigationItem.appendChild(pageNavigationAnchor)
    pageNavigation.appendChild(pageNavigationItem)
    console.log(pageNavigation)

    headline.parentElement.setAttribute('id', sectionID)
})