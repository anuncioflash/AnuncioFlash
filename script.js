document.addEventListener("DOMContentLoaded", function () {
    const adsWall = document.getElementById("ads-wall");
    const paymentSection = document.getElementById("payment-section");
    
    paymentSection.innerHTML = `
        <h2>Selecciona tu Anuncio</h2>
        <form id="payment-form">
            <label>
                <input type="radio" name="adSize" value="small" data-price="10"> Bloque Pequeño - 10€
            </label>
            <label>
                <input type="radio" name="adSize" value="medium" data-price="20"> Bloque Mediano - 20€
            </label>
            <label>
                <input type="radio" name="adSize" value="large" data-price="30"> Bloque Grande - 30€
            </label>
            <br>
            <button id="paypal-button">Pagar con PayPal</button>
            <button id="bizum-button">Pagar con Bizum</button>
        </form>
    `;
    
    document.getElementById("paypal-button").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Redirigiendo a PayPal...");
        // Aquí se integraría la API de PayPal
    });
    
    document.getElementById("bizum-button").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Redirigiendo a Bizum...");
        // Aquí se integraría la API de Bizum
    });
});