  const phone = "994556028288"; 
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

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        console.log(entry.target)
        entry.target.classList.add("interect")
      }
      else{
        entry.target.classList.remove("interect")
      }
    })
  })

  const reviewBoxes = document.querySelectorAll(".reviews-box");

  reviewBoxes.forEach(reviewBox =>{
    observer.observe(reviewBox);
  })