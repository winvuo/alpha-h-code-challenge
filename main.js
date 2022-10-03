const shopNowButton = document.querySelector("#hero-banner-shop-now");

shopNowButton.addEventListener("click", (e) => {
  const backgroundColor = shopNowButton.style.backgroundColor;
  if (backgroundColor === "rgb(55, 55, 55)") {
    shopNowButton.style.backgroundColor = "rgb(196, 213, 149)";
    shopNowButton.style.color = "black";
  } else {
    shopNowButton.style.backgroundColor = "rgb(55, 55, 55)";
    shopNowButton.style.color = "white";
  }
});
