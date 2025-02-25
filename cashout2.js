// ekn emn ekta function likhte hbe jaa 45000 k noton add kora amount er saathe biyog kore debe.
document.getElementById("cashout-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const pin = document.getElementById("cashout-pin").value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById("cashout-amount").value;
    convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(convertedPin === 1234) {

// ei line ta diye 45000 k notun amount er saathe biyog kora hbe.
        const sum = convertedMainBalance - convertedAmount;

// ei line ta diye 45000 er saathe notun j amount biyog kora hoise tha show korano hbe
        document.getElementById("main-balance").innerText = sum;
    }
    else{
        alert("Enter valid pin");
    }
})