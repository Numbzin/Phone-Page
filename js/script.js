const dots = document.querySelectorAll(".dot");
const phoneImage = document.querySelector(".phoneimg img");

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        dots.forEach((d) => d.classList.remove("active"));
        dot.classList.add("active");
        phoneImage.src = Phones[index].imgSrc;
    });
});

const Phones = [
  {
    imgSrc: "../images/phone1.webp",
  },
  {
    imgSrc: "../images/phone2.webp",
  },
  {
    imgSrc: "../images/phone3.webp",
  },
  {
    imgSrc: "../images/phone4.webp",
  },
];

