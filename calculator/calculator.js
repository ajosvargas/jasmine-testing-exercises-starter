window.addEventListener('DOMContentLoaded', function() {
  const calcForm = document.getElementById("calc-form");
  if (calcForm) {
    setupValues();
    calcForm.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentinterfaceValues() {
  return {
    rate: +(document.getElementById("loan-rate").value),
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value)
  }
}

function calculateMonthly(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}


function setupValues() {
  const values  = { amount: 1000, years: 10, rate: 4.5 };
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  update();
}

function update() {
  const currentUIValues = getCurrentinterfaceValues();
  updateMonthly(calculateMonthly(currentUIValues));
}

function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
