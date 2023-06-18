let logo_Image = document.querySelectorAll(".logo_Image");
let logo_Icon_Box = document.querySelector(".logo_Icon_Box");
let logo_Loader_Box = document.querySelector(".logo_Loader_Box");

let logo_State = 0;

logo_Loader_Box.addEventListener("click", (e) => {
    if (logo_State == 0) {
        logo_State = 2;

        logo_Icon_Box.style.animationName = "logo_Icon_Anim_On";

        logo_Image.forEach(Element => {
            Element.style.animationName = "bounce";
        });

        window.setTimeout(() => {
            logo_Loader_Box.style.opacity = "1.0";
            logo_Icon_Box.style.pointerEvents = "none";
            logo_State = 1;
        }, 500);
    }
    else if (logo_State == 1) {
        logo_State = 0;

        logo_Loader_Box.style.opacity = "0.0";
        logo_Icon_Box.style.animationName = "logo_Icon_Anim_Off";

        logo_Image.forEach(Element => {
            Element.style.animationName = "none";
        });
    }
    else if (logo_State == 2) {
        e.preventDefault()
    }
})