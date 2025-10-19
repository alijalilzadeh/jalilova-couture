const phoneNumber = "994556028288";
const as = document.querySelectorAll(".orderLinks");

as.forEach(a => {
  a.addEventListener("click", () => {
    const product = a.dataset.product;
    const imgUrl = a.dataset.img;
    const message = `Salam, Mən bu geyimi sifariş etmək istəyirəm:${product}\n${imgUrl}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("interect")
    }
    else {
      entry.target.classList.remove("interect")
    }
  })
})

const reviewBoxes = document.querySelectorAll(".reviews-box");

reviewBoxes.forEach(reviewBox => {
  observer.observe(reviewBox);
})

const personalOrder = document.querySelector(".personal-order");
personalOrder.addEventListener("click", () => {
  const message2 = "Salam, Jalilova Couture saytından yazıram. Özümə xüsusi geyim tikdirmək istəyirəm."
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message2)}`;
  window.open(url, "_blank");
});

const termsBox = document.querySelector(".terms-box");
const arrowIcon = document.querySelector(".terms-service i");
document.querySelector(".order-form-box .terms-service").addEventListener("click", () => {
  if (termsBox.style.display === "none" || !termsBox.style.display) {
    termsBox.classList.remove("close");
    termsBox.classList.add("open");
    arrowIcon.className = "fa-solid fa-arrow-up";
    termsBox.style.display = "flex";
  } else {
    termsBox.classList.remove("open");
    termsBox.classList.add("close");
    arrowIcon.className = "fa-solid fa-arrow-down";
    termsBox.style.display = "none";
  }
});


const productBoxes = document.querySelectorAll(".product-box");
const simpleViewBox = document.querySelector(".simple-view-products");
let openStatus = false;
productBoxes.forEach(productBox =>{
  productBox.addEventListener("click",()=>{
    console.log("Hello")
    if(!openStatus){
        simpleViewBox.style.display = "block"  
        openStatus =! openStatus;
    }
    else{
        simpleViewBox.style.display = "none";
        openStatus =! openStatus;
    }
     simpleViewBox.innerHTML = `<p>Hello</p>`
  })
})