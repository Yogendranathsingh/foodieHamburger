const mobile=document.querySelector('.mobile');
const textBar=document.querySelector('.text-bar');
mobile.addEventListener('click',()=>{
textBar.style.display='block'
mobile.style.display='none'
console.log("heelo")
},true)

textBar.addEventListener('click',()=>{
    textBar.style.display='block'
    mobile.style.display='none'
},true)

document.body.addEventListener('click',()=>{
    textBar.style.display='none'
    mobile.style.display='block'   
},true)