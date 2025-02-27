document.addEventListener("DOMContentLoaded", function () {
    const adContainer = document.getElementById("ad-container");

    function createAd(size, label) {
        const ad = document.createElement("div");
        ad.classList.add("ad", size);
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
            { size: "large", label: "Anuncio Grande" }
        ];
        
        adTypes.forEach(type => {
            for (let i = 0; i < 5; i++) {
                adContainer.appendChild(createAd(type.size, type.label));
            }
        });
    }

    generateAds();

    document.getElementById("paypal-button").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Redirigiendo a PayPal...");
    });

    document.getElementById("bizum-button").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Redirigiendo a Bizum...");
    });
});