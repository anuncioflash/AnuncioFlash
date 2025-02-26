document.addEventListener("DOMContentLoaded", function () {
    const adsWall = document.getElementById("ads-wall");
    
    function createAd(index) {
        const ad = document.createElement("div");
        ad.classList.add("ad");
        ad.textContent = "Anuncio " + index;
        ad.addEventListener("click", function () {
            alert("Has hecho clic en " + ad.textContent);
        });
        return ad;
    }
    
    function loadMoreAds() {
        for (let i = 1; i <= 6; i++) {
            adsWall.appendChild(createAd(adsWall.children.length + 1));
        }
    }
    
    loadMoreAds();
    
    window.addEventListener("scroll", function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadMoreAds();
        }
    });
});