burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')


burger.addEventListner('click', ()=>{
    rightnav.classlist.toggle('v-class-resp')
    navList.classlist.toggle('v-class-resp')
    navbar.classlist.toggle('h-nav-resp')
})