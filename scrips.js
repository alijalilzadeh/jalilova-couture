  const phone = "994553924931"; 
  const as = document.querySelectorAll(".orderLinks");

 as.forEach(a => {
    a.addEventListener("click", () => {
      const product = a.dataset.product;
      const imgUrl = a.dataset.img;
      const message = `Salam, Mən bu məhsulu sifariş etmək istəyirəm:\n${product}\n${imgUrl}`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });
  });