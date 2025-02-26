document.addEventListener("DOMContentLoaded", function () {
    const adsWall = document.getElementById("ads-wall");
    const selectButtons = document.querySelectorAll(".select-plan");
    
    function createAd(size, text) {
        const ad = document.createElement("div");
        ad.classList.add("ad", size);
        ad.textContent = text;
        ad.addEventListener("mouseover", function () {
            ad.style.transform = "scale(1.1)";
            ad.style.transition = "transform 0.3s ease-in-out";
        });
        ad.addEventListener("mouseleave", function () {
            ad.style.transform = "scale(1)";
        });
        return ad;
    }
    
    selectButtons.forEach(button => {
        button.addEventListener("click", function () {
            const size = button.parentElement.dataset.size;
            const text = "Nuevo Anuncio " + size.charAt(0).toUpperCase() + size.slice(1);
            adsWall.appendChild(createAd(size, text));
        });
    });
});