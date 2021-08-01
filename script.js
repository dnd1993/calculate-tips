//IIFE

(function () {
  const header = document.querySelector(".tip-container__header");
  const billAmount = document.querySelector(".tip-form__amount-input");
  const peopleQntity = document.querySelector(".tip-form__people-input");
  const serviceQlity = document.querySelector(".tip-form__service-select");
  const btnCalculate = document.querySelector(".tip-form__btn-calc");
  const imgLoading = document.querySelector(".result-container__img-load");
  const tipAmount = document.querySelector(".tip-amount");
  const totalAmount = document.querySelector(".total-amount");
  const amountPerPerson = document.querySelector(".amount-per-person");

  const calcTips = () => {
    imgLoading.style.display = "none";
    tipAmount.textContent = `Tip Amount: $${(
      +billAmount.value * +serviceQlity.value
    ).toFixed(2)}`;
    totalAmount.textContent = `Total Amount: $${(
      +billAmount.value *
      (1 + +serviceQlity.value)
    ).toFixed(2)}`;
    amountPerPerson.textContent = `Each Person Owes: $${(
      (+billAmount.value * (1 + +serviceQlity.value)) /
      +peopleQntity.value
    ).toFixed(2)}`;
  };

  btnCalculate.addEventListener("click", () => {
    if (
      +billAmount.value >= 0 &&
      +peopleQntity.value > 0 &&
      +peopleQntity.value === Math.floor(+peopleQntity.value) &&
      serviceQlity.value
    ) {
      imgLoading.style.display = "block";
      setTimeout(calcTips, 2000);
    }
  });
  header.addEventListener("click", () => {
    location.reload();
    return false;
  });
})();
