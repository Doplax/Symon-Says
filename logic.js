// function restartGame(){}


// RESTART
// let btn_restart = document.getElementById("btn_restart")
// btn_restart.addEventListener("click",restartGame)




function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


function getNextSecuence() {
    let cadena = ["red","green","yellow","blue"]
    num = getRndInteger(0, (cadena.length)-1)
    list_machine.push(cadena[num])
   

}

function compareStrings() {
    let comparation = (JSON.stringify(list_machine) == JSON.stringify(list_user))
    
    if (comparation == true) {
        console.log("Las cadenas son :", comparation);
        console.log("Machine: ",list_machine);
        console.log("User: ",list_user);
    }
    else{
        console.log("Las cadenas no son iguales :c\nHas perdido");
    }
    
}


let list_machine = [];
let list_user    = [];

let btn_red     = document.getElementById("btn_red")
let btn_green   = document.getElementById("btn_green")
let btn_blue    = document.getElementById("btn_blue")
let btn_yellow  = document.getElementById("btn_yellow")


btn_red.addEventListener("click",function plusRed(){
    list_user.push("red")
    console.log(list_user);
    compareStrings()
    getNextSecuence()
});

btn_green.addEventListener("click",function plusGreen(){
    list_user.push("gren")
    console.log(list_user);
    compareStrings()
    getNextSecuence()
});

btn_blue.addEventListener("click",function plusBlue(){
    list_user.push("blue")
    console.log(list_user);
    compareStrings()
    getNextSecuence()
});

btn_yellow.addEventListener("click",function plusYellow(){
    list_user.push("yellow")
    console.log(list_user);
    compareStrings()
    getNextSecuence()
});


// RUN
getNextSecuence();

