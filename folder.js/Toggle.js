// by default add money form ta k dekhabe.
    document.getElementById("addmoney" ).style.display = "block";
    document.getElementById("cashout").style.display = "none";

// add money img box er id ta nichi. jate oi box e click korle add money form ta open hoi. r cash out form ta chole jai.
document.getElementById("add-money-box").addEventListener("click", function() {
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney" ).style.display = "block";
})

// cash out img box er id ta nichi. jate oi box e click korle cash out form ta open hoi. r add money form ta chole jai.
document.getElementById("cashout-box").addEventListener("click", function() {
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("cashout" ).style.display = "block";
})