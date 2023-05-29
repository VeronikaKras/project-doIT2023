const animItems = document.querySelectorAll("._anim_items");

if (animItems.length > 0) { 
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() { 
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeigth = animItem.offsetHeigth;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeigth / animStart;
            if (animItemHeigth > window.innerHeight) { 
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemoffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeigth)) {
                animItem.classList.add("_active");
            }
            else { 
              animItem.classList.remove("_active");  
            }
        }
    }
    function offset(el) { 
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}
