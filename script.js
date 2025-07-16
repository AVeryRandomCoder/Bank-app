const outputValueEl = document.getElementById("output-value") as HTMLParagraphElement;
const addBtn = document.getElementById("+") as HTMLButtonElement;
const subtractBtn = document.getElementById("-") as HTMLButtonElement;

function getCurrentBalance(): number {
    return parseInt(outputValueEl.innerText) || 0;
}

function updateBalance(newBalance: number): void {
    outputValueEl.innerText = newBalance.toString();
}

function getEnteredAmount(): number {
    // Assuming user enters digits by clicking number buttons
    return parseInt(prompt("Enter amount") || "0");
}

addBtn.addEventListener("click", () => {
    const amount = getEnteredAmount();
    const currentBalance = getCurrentBalance();
    const newBalance = currentBalance + amount;
    updateBalance(newBalance);
});

subtractBtn.addEventListener("click", () => {
    const amount = getEnteredAmount();
    const currentBalance = getCurrentBalance();
    const newBalance = currentBalance - amount;
    updateBalance(newBalance);
});
