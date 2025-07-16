let accountBalance = 0;

function updateBalance() {
const balanceElement = document.getElementById('balance');
balanceElement.textContent = Your Account Balance is: ₹${accountBalance};
}

function credit() {
const amountInput = document.getElementById('amount');
const amount = parseFloat(amountInput.value);

text
if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid positive amount');
    return;
}

accountBalance += amount;
updateBalance();
amountInput.value = '';
}

function debit() {
const amountInput = document.getElementById('amount');
const amount = parseFloat(amountInput.value);

text
if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid positive amount');
    return;
}

if (amount > accountBalance) {
    alert('Insufficient balance for this transaction');
    return;
}

accountBalance -= amount;
updateBalance();
amountInput.value = '';
