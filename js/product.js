let mask = document.querySelector(".mask");
let read_More_Btn = document.querySelectorAll(".read_More");
let close_Btn = document.querySelectorAll(".product_Detail_Close");
let product_Detail = document.querySelectorAll(".product_Detail_Info_Box");

// stop bubbling
for (let i = 0; i < product_Detail.length; i++) {
    product_Detail[i].addEventListener("click", (e) => {
        e.stopPropagation();
    });
}


for (let i = 0; i < read_More_Btn.length; i++) {
    read_More_Btn[i].addEventListener("click", () => {
        show_Detail_Handler(i);
    });
}

mask.addEventListener("click", close_Frame);

for (let i = 0; i < close_Btn.length; i++) {
    close_Btn[i].addEventListener("click", close_Frame);
}

function show_Detail_Handler(index) {
    switch (index) {
        case 0:
            mask.style.display = "block";
            product_Detail[0].style.display = "flex";
            product_Detail[0].scroll({ top: 0, left: 0, behavior: "smooth" });
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            mask.style.display = "block";
            product_Detail[1].style.display = "flex";
            product_Detail[1].scroll({ top: 0, left: 0, behavior: "smooth" });
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            mask.style.display = "block";
            product_Detail[2].style.display = "flex";
            product_Detail[2].scroll({ top: 0, left: 0, behavior: "smooth" });
            break;
    }
}


function close_Frame() {
    mask.style.display = "none";

    product_Detail[0].style.display = "none";
    product_Detail[1].style.display = "none";
    product_Detail[2].style.display = "none";
}


// swiper
var swiper = new Swiper(".product_Detail_Swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});