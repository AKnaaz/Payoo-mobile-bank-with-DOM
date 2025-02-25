// emn ekta function ready korte hbe jta input er value debe shudu id diye. maane function e id likhe diley input er value pawa jabe.
function getInputValueById(id) {

// ekane jkono id name ja onno kono js file e likha hoise ei function k call kore, 1st e sei id name aashe (id) te dukhbe. then convertedValue te jabe. then return korbe id er value. ekn shudu onno kono js file e giye id name likhley hbe.
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);

// ei function theke jai return kora hbe tha bahirer onno jkono js file e use kore jabe. use korar method holo function name ta k ekta variable er modde reke then variable er naam ta k console log korte hbe. addmoney2.js file e kora hoise.
    return convertedValue;
}