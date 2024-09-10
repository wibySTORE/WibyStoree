const labelNominal = document.querySelectorAll(".nominal");
const priceSection = document.querySelectorAll(".form-input__price-section");
const priceDiv = document.querySelectorAll(".form-input__price");

labelNominal.forEach((el) => {
  el.addEventListener("click", function () {
    let price = this.getAttribute("data-price");

    priceSection.forEach((ps) => {
      ps.style.display = "block";
    });

    priceDiv.forEach((pd) => {
      pd.innerHTML = price;
    });
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nomor = form.elements.nomor.value;
  const inputNominal = form.elements.item_qty.value;
  const paymentMethod = form.elements.payment_method.value;

  let url = `https://api.whatsapp.com/send?phone=6289512622649&text=*Halo%20Admin,%20Saya%20Mau%20TopUp%20Pulsa*.%0ADetail%20Pesanan%20%3A%0ANomor%20Tujuan%20%3A%20${nomor}%0AJumlah%20Pembelian%20%3A%20${inputNominal}%0APembayaran%20%3A%20${paymentMethod}%0A%0AOrder Via Web WibyStore`;
  window.open(url);
});
