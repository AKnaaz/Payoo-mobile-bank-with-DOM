// toggle korbo transaction k function call kore.
document.getElementById("transaction-box").addEventListener("click", function() {
    handleToggle("addmoney", "none");
    handleToggle("cashout", "none");
    handleToggle("transaction-history", "block");
})