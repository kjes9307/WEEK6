window.onload = () =>{     
    var icon = document.getElementsByClassName('ham-icon')[0]
    var menu = document.getElementsByClassName('dropdown-self')[0]
    icon.onclick = (e)=>{
        e.preventDefault()
        menu.classList.toggle('active-self')
    }  
}