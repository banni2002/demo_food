var menu=document.getElementById('menu-bar'), 
navbar=document.querySelector('.navbar'),
section=document.getElementsByTagName('section');
menu.onclick=function(){
    console.log('ok');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
for (let i = 0; i < section.length; i++) {
    section[i].onclick = function(){
        menu.classList.remove('fa-times');
        navbar.classList.remove('active'); 
    }
}