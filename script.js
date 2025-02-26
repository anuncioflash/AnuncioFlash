document.addEventListener("DOMContentLoaded", function () {
    const adsWall = document.getElementById("ads-wall");
    
    function createAd(size, text) {
        const ad = document.createElement("div");
        ad.classList.add("ad", size);
        ad.textContent = text;
        ad.addEventListener("mouseover", function () {
            ad.style.transform = "scale(1.1)";
            ad.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out";
            ad.style.boxShadow = "0px 4px 15px rgba(255, 255, 255, 0.5)";
        });
        ad.addEventListener("mouseleave", function () {
            ad.style.transform = "scale(1)";
            ad.style.boxShadow = "none";
        });
        return ad;
    }
    
    const adTypes = ["small", "medium", "large", "mobile", "tablet"];
    adTypes.forEach((type, index) => {
        adsWall.appendChild(createAd(type, `Anuncio ${type.charAt(0).toUpperCase() + type.slice(1)}`));
    });
});