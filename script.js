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