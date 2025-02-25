document.getElementById("add-money").addEventListener("click", function(event) {
    event.preventDefault();

// ekn emn ekta function likhte hbe jaa 45000 k noton add kora amount er saathe jog kore debe.
    const amount = document.getElementById("Amount").value;

// abr number e porinoto korte hocche. eibar parseFloat korlam jate doshomik asle problem na hoi.
    const convertedAmount = parseFloat(amount);

// pin k abr dortechi. cz condition e pin er kaj ache tai.
    const pin = document.getElementById("Digit-pin").value;
    const convertedDigitPin = parseInt(pin);

// eibar 45000 k jog korar jonno ok dorbo.
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

// amount r pin er boolean value jodi true hoi tahole nicher line e jabe.
    if(amount && pin) {
        if(convertedDigitPin === 1234) {

// ei line ta diye 45000 k notun amount er saathe jog kora hbe.
    const sum = convertedMainBalance + convertedAmount;

// ei line ta diye 45000 er saathe notun j amount jog kora hoise tha show korano hbe.
    document.getElementById("main-balance").innerText = sum;
        }
        else{
            alert("Invalid Action");
        }
    }
    else{
        alert("Enter Amount")
    }
})