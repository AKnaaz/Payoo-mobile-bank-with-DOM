// emn ekta function ready korbo jate ekta jinish jta bibinno jaigai use hbe seta jno barbar code kore likhte na hoi. bas function ta k call kore diley jno kaj hoye jai. 1st e amra add money button ta k dorchi id diye.
document.getElementById("add-money").addEventListener("click", function(event) {
    event.preventDefault();
    const amount = getInputValueById("Amount");
    const pin = getInputValueById("Digit-pin");
    console.log(amount, pin);
})
