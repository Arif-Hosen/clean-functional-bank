function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const value = parseFloat(inputText);
    inputField.value = '';

    return value;
}

function updateTotal(fieldId, amount) {
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

// function updateBalance(amount, isAdding) {
//     const previousBalance = getInnerTextValue('balance-total');

//     let newBalance;
//     if (isAdding == true) {
//         newBalance = previousBalance + amount;
//     }
//     else {
//         newBalance = previousBalance - amount;
//     }
//     document.getElementById('balance-total').innerText = newBalance;
// }

//update balance another system
function updateBalance() {
    const depositAmount = getInnerTextValue('deposit-total');
    const withdrawAmount = getInnerTextValue('withdraw-total');
    const newBalance = depositAmount - withdrawAmount + 1240;
    document.getElementById('balance-total').innerText = newBalance;
}

// handler deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        // updateBalance(amount, true);
        updateBalance();
    }
})

//handler withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        // updateBalance(amount, false);
        updateBalance();
    }
})