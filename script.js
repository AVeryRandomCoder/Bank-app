let balance = 0;

function updateBalance() {
  document.getElementById("balance").innerText = `Your Account Balance is: ₹${balance}`;
}

function credit() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    updateBalance();
    document.getElementById("amount").value = "";
  } else {
    alert("Please enter a valid amount");
  }
}

function debit() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (!isNaN(amount) && amount > 0) {
    if (amount > balance) {
      alert("Insufficient balance");
    } else {
      balance -= amount;
      updateBalance();
      document.getElementById("amount").value = "";
    }
  } else {
    alert("Please enter a valid amount");
  }
}
