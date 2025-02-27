// emn ekta function ready korbo jate ekta jinish jta bibinno jaigai use hbe seta jno barbar code kore likhte na hoi. bas function ta k call kore diley jno kaj hoye jai. 1st e amra add money button ta k dorchi id diye.
document.getElementById("add-money").addEventListener("click", function(event) {
    event.preventDefault();
    const amount = getInputValueById("Amount");
    const pin = getInputValueById("Digit-pin");
    console.log(amount, pin);

// account number k dorte hbe cz niche condition likhar time e lagbe.
    const account = document.getElementById("Account-number").value;

// ekn ei id ta 2nd function e jabe then condition er betor kaj korbe.
    const mainBalance = getInnerTextById("main-balance");

// transaction history k shondor korar jono sobgulu element k dorte hbe. 
    const select = document.getElementById("allbank").value;
    

// kew jate negative number use korte na pare abong return er maddhome negative number ta k show korano o off kora holo.
    if(amount < 0) {
        alert("Amount not accepted");
        return;
    }
    
    if(account.length === 11) {
        if(pin === 1234) {
            const sum = mainBalance + amount;
            setInnerTextByIdAndValue("main-balance", sum);

// transaction container ta k ekta variable er modde raka holo. jate oi variable er naam diye append kora jai.
            const container = document.getElementById("transaction-container");

// ekta div create kore innerHTML diye jinish gulu kora hbe.
            const div = document.createElement("div");
            div.innerHTML = `
            <h1 class= "text-blue-700">Added money from ${select}</h1>
            <h3>${amount}</h3>
            <p>Account number:${account}</p>
            `
            container.appendChild(div);
        }
        else{
            alert("Invalid Action")
        }
    }
    else{
        alert("Invalid Account Number")
    }
})
