// function er betor event likha hoise cz input e kicho likhe login e click korley likha gulu gayeb hoye jai. ei problem ta k solve korar jonno 1st e function er betor event likhte hbe. then function er modde event.preventDefault() likhte hbe.
document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault();

// 1st input e 11 ta number er cheye kom likhe abong 2nd input e 1234 na likhe jodi login e click kora hoi tahole jno ekta error de tar jonno ei code. 1st e input gulu k dorte hbe.
    const mobileNumber = document.getElementById("Mobile-number").value;
    const digitPin = document.getElementById("Digit-pin").value;

// digitPin er typeof k number e porinoto korte hbe. nahole condition kaj korbe na.
    const convertedPin = parseInt(digitPin);

// ekn condition set korte hbe. amra html er input e giye value set kore aschi jate barbar input e likhte na hoi. 
    if(mobileNumber.length === 11) {
        if(convertedPin === 1234) {

// eta 2nd html file er link. ekn login e click korle soja 2nd html file open hbe.
            window.location.href="index2.html"
        }
        else{
            alert("Invalid Action")
        }
    }
    else{
        alert("Invalid Mobile Number")
    }
})