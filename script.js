document.addEventListener("DOMContentLoaded", function () {
    const adContainer = document.getElementById("ad-container");

    function createAd(size, label, customClass) {
        const ad = document.createElement("div");
        ad.classList.add("ad", size, customClass);
        ad.textContent = label;
        ad.addEventListener("mouseover", function () {
            ad.style.transform = "scale(1.1)";
            ad.style.boxShadow = "0px 4px 15px rgba(255, 255, 255, 0.5)";
        });
        ad.addEventListener("mouseleave", function () {
            ad.style.transform = "scale(1)";
            ad.style.boxShadow = "none";
        });
        return ad;
    }

    function generateAds() {
        const adTypes = [
            { size: "small", label: "Anuncio Pequeño" },
            { size: "medium", label: "Anuncio Mediano" },
            { size: "large", label: "Anuncio Grande" },
            { size: "large", label: "Ejemplo Empresa", customClass: "sample" }
        ];
        
        adTypes.forEach(type => {
            for (let i = 0; i < 10; i++) {
                adContainer.appendChild(createAd(type.size, type.label, type.customClass || ""));
            }
        });
    }

    generateAds();
});