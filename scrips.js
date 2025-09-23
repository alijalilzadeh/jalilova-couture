  const phone = "994553924931"; // bibinin nömrəsi
  const as = document.querySelectorAll("a");

 as.forEach(a => {
    a.addEventListener("click", () => {
      const product = a.dataset.product;
      const imgUrl = a.dataset.img;
      const message = `Mən bu məhsulu sifariş etmək istəyirəm:\n${product}\n${imgUrl}`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank"); // WhatsApp açılır
    });
  });