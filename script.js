const conversionRates = {
    USD: { USD: 1, EUR: 0.85, PKR: 280 },
    EUR: { USD: 1.18, EUR: 1, PKR: 330 },
    PKR: { USD: 0.0036, EUR: 0.003, PKR: 1 },
};


function convertCurrency() {
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);


    if (!amount || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    const rate = conversionRates[sourceCurrency][targetCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById('result').textContent = 
        `${amount} ${sourceCurrency} = ${convertedAmount} ${targetCurrency}`;
}

function clearFields() {
    document.getElementById('amount').value = '';
    document.getElementById('result').textContent = '';
}


document.getElementById('convertButton').addEventListener('click', convertCurrency);
document.getElementById('clearButton').addEventListener('click', clearFields);
