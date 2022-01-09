const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');
const card1 = document.querySelector('.cardUno')

// console.log(menu)
// console.log(hamburguer)

/*despliega el menu hamburguesa */

hamburguer.addEventListener('click', ()=>{  
    menu.classList.toggle("spread")
})
/*hace que al dar un click a otra cosa aparte de la hamburguesa 
este menu se cierre*/
window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != hamburguer    ){
            card1.classList.toggle("spread")
            menu.classList.toggle("spread")
    }
})