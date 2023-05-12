//Make a selector to intakes and displays values
const $ = selector => document.querySelector(selector);

//create an event handler that processes user's entry to make sure it's a number between 0 and 99
const processEntry = () => {
    var userEntry = document.querySelector("#amountOfChange").value;
    if(userEntry>0 && userEntry<99) makeChange(userEntry);
    else alert("Please input a value between 0 and 99");
}

//DOMContentLoaded event handler that attaches  processEntry to click event of Calculate
document.addEventListener("DOMContentLoaded",() => {$("#Calculate").addEventListener("click",processEntry);});

//Create change from the user input and display the change in the HTML. 
function makeChange(userEntry){
    const numOfQuarters = parseInt(userEntry/25);
    const changeAfterQuarters =userEntry%25;
    $("#Quarters").value = numOfQuarters;

    const numOfDimes = parseInt(changeAfterQuarters/10);
    const changeAfterDimes =changeAfterQuarters%10;
    $("#Dimes").value = numOfDimes;

    const numOfNickels = parseInt(changeAfterDimes/5);
    const changeAfternickels =changeAfterDimes%5;
    $("#Nickels").value = numOfNickels;

    const numOfPennies= parseInt(changeAfternickels/1);
    $("#Pennies").value = numOfPennies;


}
