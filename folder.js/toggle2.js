// by default dekhanor jonno.
document.getElementById("cashout").style.display = "none";
document.getElementById("transaction-history").style.display = "none";

// add money img box er id ta niye function ready kortechi. jate oi box e click korle add money form ta open hoi. r cash out form ta chole jai.
document.getElementById("add-money-box").addEventListener("click", function() {
    handleToggle("addmoney", "block");
    handleToggle("cashout", "none");
    handleToggle("transaction-history", "none");
})

// cash out img box er id ta niye function ready kortechi. jate oi box e click korle cash out form ta open hoi. r add money form ta chole jai.
document.getElementById("cashout-box").addEventListener("click", function() {
    handleToggle("addmoney", "none");
    handleToggle("cashout", "block");
    handleToggle("transaction-history", "none");
})