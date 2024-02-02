const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {

    accordion.addEventListener("click",()=>{

        if(!accordion.classList.contains("active")){
            accordions.forEach(e => {
                e.classList.remove("active");
            })
    
            accordion.classList.add("active");
        }else{
            accordion.classList.remove("active");
        }
    })
});


