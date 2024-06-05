import "./index.html";
import "./style.css";

const current = document.querySelector("#current");
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;


imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {

    //Reset Opacity
    imgs.forEach(img => img.style.opacity = 1);

    //Tıklandıktan src deki img dosyasının değişmesi
    current.src = e.target.src;

    //Fade-in Class eklenmesi
    current.classList.add("fade-in");

    //Fade-in Kaldırma
    setTimeout(() => current.classList.remove("fade-in"), 500);


    //Opacity Eklenmesi
    e.target.style.opacity = opacity;

}