const images = document.querySelectorAll('.bilder img');
    let current = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    function nextImage() {
      current = (current + 1) % images.length;
      showImage(current);
    }

    function prevImage() {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    }


    document.addEventListener("DOMContentLoaded", () => {
        const cartDisplay = document.getElementById("cart-count");
    
        // Hent lagret antall fra localStorage, eller start på 0
        let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
        cartDisplay.textContent = cartCount;
    
        const buttons = document.querySelectorAll(".add-to-cart");
    
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                cartCount++;
                cartDisplay.textContent = cartCount;
    
                // Lagre oppdatert antall i localStorage
                localStorage.setItem("cartCount", cartCount);
            });
        });
    });
    
    