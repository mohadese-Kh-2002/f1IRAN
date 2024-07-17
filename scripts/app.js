const $=document

const iconBars=$.querySelector(".icon-bars")

const  menu=$.querySelector('.container-menu-mobile')

const bgImages=$.querySelectorAll('.wrapper-img')


let openMenu=false

iconBars.addEventListener('click',e=>{
    if(!openMenu){

        menu.style.cssText='overflow:visible;max-height:inherit;transform: scaleY(1)'
    }else{
        menu.style.cssText='overflow::none;max-height:0;transform: scaleY(0)'
    }
    openMenu=!openMenu
})


    
bgImages.forEach((item,index)=>{
    item.style.cssText=`background-image:linear-gradient(to bottom ,rgba(0,0,0,.3)70%,rgba(0,0,0,1)),url('../images/${index+1}.jpg') `
})