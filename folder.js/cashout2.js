// ekn emn ekta function likhte hbe jaa 45000 k noton add kora amount er saathe biyog kore debe. ei function ta shudu call kore diley hbe.
document.getElementById("cashout-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
// account number ta k dorte hbe condition er jonno.
    const accountNumber = document.getElementById("account-number").value;

// amount k dorar jono function k call korbo.
    const amount = getInputValueById("cashout-amount");

// digit pin k dorar jono function k call korbo.
    const pin = getInputValueById("cashout-pin");

// main balance k dorar jonno 2nd function k call korte hbe. cz eta input er bahirer jinish.
    const mainBalance = getInnerTextById("main-balance")

// kew jate main balance theke boro number use korte na pare abong return er maddhome boro number ta k show korano o off kora holo.
    if(amount > mainBalance) {
    alert("Amount not accepted");
    return;
    }

    if(accountNumber.length === 11) {
        if(pin === 1234) {
            const sum = mainBalance - amount;

// 3rd function k call korchi.
            handleToggle("main-balance", sum);

// transaction container ta k ekta variable er modde raka holo. jate oi variable er naam diye append kora jai.
            const container = document.getElementById("transaction-container");

// cash out theke ja remove hbe ta transaction history te dekhanor jonno ei linegulu likha hoise. ekta <p> create kora holo. then <p> e innerText add kora holo. then <p> ta k append kora holo transaction-container e.
            const p = document.createElement("p");

// ei line dhara cash out e koto amount kon account theke remove hoise tha dekhano hbe.
            p.innerText = `
            removed ${amount} from ${accountNumber} account;
            `
            container.appendChild(p);
        }
        else{
            alert("Invalid Pin Number")
        }
    }
    else{
        alert("Invalid Account Number")
    }
})