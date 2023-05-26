let toggleNavStatus = false;


let ToggleNav = function(){
    let getSidebar = document.querySelector(".nav-links");
    let getSidebarul = document.querySelector(".nav-links ul");
    let getSidebarTitle = document.querySelector(".nav-links span");
    let getSidebarLinks = document.querySelectorAll(".nav-links a");
    
    if (ToggleNavStatus === false){
        getSidebarul.style.visibility="visible";
        getSidebar.style.width="200px";
        getSidebarTitle.style.opacity="0.5";
       
        let arrayLength = getSidebarLinks.length;
        for(var i = 0; i < array.length; i++){
            getSidebarLinks[i].style.opacity="1";
        }
        
       toggleNavStatus = true; 
        
        
    }
}