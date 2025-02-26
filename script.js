document.addEventListener("DOMContentLoaded", function () {
    const adsWall = document.getElementById("ads-wall");
    
    function createAd(size, customClass) {
        const ad = document.createElement("div");
        ad.classList.add("ad", size, customClass);
        ad.style.backgroundColor = getRandomColor();
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
    
    function getRandomColor() {
        const colors = ["#ff512f", "#dd2476", "#ffcc00", "#00c9ff", "#32ff7e", "#f45c43", "#5b86e5"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    function generateAds(amount) {
        const adTypes = ["small", "medium", "large", "phone", "tablet"];
        for (let i = 0; i < amount; i++) {
            const type = adTypes[i % adTypes.length];
            adsWall.appendChild(createAd(type, type));
        }
    }
    
    generateAds(30);
});