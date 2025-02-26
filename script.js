document.addEventListener("DOMContentLoaded", function () {
    const ads = document.querySelectorAll(".ad");
    
    ads.forEach(ad => {
        ad.addEventListener("click", function () {
            alert("Has hecho clic en un anuncio");
        });
    });
});