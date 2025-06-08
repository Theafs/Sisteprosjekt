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
        const cartCountDisplay = document.getElementById("cart-count");
        const cartIcon = document.getElementById("cart-icon");
        const cartDropdown = document.getElementById("cart-dropdown");
        const cartItemsList = document.getElementById("cart-items");
        const emptyMsg = document.getElementById("empty-msg");
        const goToCartBtn = document.getElementById("go-to-cart");  // Ny knapp
    
        // Hent handlekurv fra localStorage, eller start med tom liste
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
        // Oppdater handlekurv-ikon og dropdown-innhold
        function updateCartUI() {
            cartCountDisplay.textContent = cart.length;
            cartItemsList.innerHTML = "";
    
            if (cart.length === 0) {
                emptyMsg.style.display = "block";
            } else {
                emptyMsg.style.display = "none";
                cart.forEach((item, index) => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <span>${item.name}</span>
                        <button class="remove-item" data-index="${index}">✖</button>
                    `;
                    cartItemsList.appendChild(li);
                });
    
                // Aktiver sletting av enkeltprodukter i dropdown
                document.querySelectorAll(".remove-item").forEach(button => {
                    button.addEventListener("click", () => {
                        const index = parseInt(button.dataset.index);
                        cart.splice(index, 1);
                        localStorage.setItem("cart", JSON.stringify(cart));
                        updateCartUI();
                    });
                });
            }
        }
    
        updateCartUI();
    
        // Toggle dropdown når man klikker på handlekurv-ikonet
        cartIcon.addEventListener("click", () => {
            cartDropdown.classList.toggle("hidden");
        });
    
        // Legg til produkt i handlekurven når "Legg til i handlekurv"-knapp trykkes
        const buttons = document.querySelectorAll(".add-to-cart");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const product = {
                    name: button.dataset.name,
                    image: button.dataset.image
                };
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartUI();
            });
        });
    
        // Når man klikker "Se handlekurv"-knappen, send brukeren til handlekurv.html
        goToCartBtn.addEventListener("click", () => {
            window.location.href = "handlekurv.html";
        });
    });

    
    
   
    
