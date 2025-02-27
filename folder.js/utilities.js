// uporer doita function e kintu number e convert korar jonno ready kora hoise.

// emn ekta function ready korte hbe jta input er value debe shudu id diye. maane function e id likhe diley input er value pawa jabe.
function getInputValueById(id) {

// ekane jkono id name ja onno kono js file e likha hoise ei function k call kore, 1st e sei id name aashe (id) te dukhbe. then convertedValue te jabe. then return korbe id er value. ekn shudu onno kono js file e giye id name likhley hbe.
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);

// ei function theke jai return kora hbe tha bahirer onno jkono js file e use kore jabe. use korar method holo function name ta k ekta variable er modde reke then variable er naam ta k console log korte hbe. addmoney2.js file e kora hoise.
    return convertedValue;
}


// uporer function ta likha hoise input er value er jonno. tai eta use kore input er bahirer kono jinisher value pawa jabe na. tai ekn emn ekta function ready korte hbe jta input er bahirer jinisher value debe shudu id diye. maane function e id likhe diley input er bahirer jinisher value pawa jabe. baki sob line er kaj same. ei function ta amra mulotho 45000 er jonno korsi. baki input er bahirer jinish gulu teo use kora jabe.
function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// document.getElementById().innerText = jei variable ta declare kora hoise tar naam. ei function ready kora hoise jate uporer line ta barbar likhte na hoi. bas function ta call kore diley hbe. 
function setInnerTextByIdAndValue(id, value) {
    document.getElementById(id).innerText = value;
}

// toggle korar jonno function. status maane block ba none k bujai.
function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}



// add money te ja add hbe ta transaction history te dekhanor jonno ei linegulu likha hoise. ekta <p> create kora holo. then <p> e innerText add kora holo. then <p> ta k append kora holo transaction-container e.
//             const p = document.createElement("p");

// ei line dhara add money te koto amount kon account theke add hoise tha dekhano hbe.
//             p.innerText = `
//             added ${amount} from ${account} account;
//             `
//             container.appendChild(p);
// ei niyomeo kora jai abr erek niyomeo kora jai. ja addmoney2.js e ache.
