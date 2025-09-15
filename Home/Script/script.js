function mostrar_nav(){
    var nav = document.getElementById("nav")
    var lin1 = document.getElementById("linha1") 
    var lin2 = document.getElementById("linha2") 
    var lin3 = document.getElementById("linha3") 

    if (nav.style.opacity == "0" || nav.style.opacity == ""){
        nav.style.transition = "transform .5s linear, opacity .4s linear"
        nav.style.opacity = "100%"
        nav.style.transform = "translateX(0%)"

        lin1.style.top = "50%"
        lin1.style.transform = "rotate(45deg)"
        lin2.style.transform = "rotate(-45deg)"
        lin3.style.opacity = "0"
    } else{
        nav.style.transform = "translateX(105%)"
        nav.style.transition = "transform .4s linear, opacity .5s linear"
        nav.style.opacity = "0%"

        lin1.style.top = "0%"
        lin1.style.transform = "rotate(0deg)"
        lin2.style.transform = "rotate(0deg)"
        lin3.style.opacity = "65%"
    }
}