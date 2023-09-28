let submitbtn = document.getElementById('popup');
// let h1 = document.getElementById('popup');
// let p = document.getElementById('popup');
let okbtn = document.getElementById('ok-btn');

function openpopup(){
    submitbtn.classList.add("popup-animate");
    // h1.classList.add("popup3");
    // p.classList.add("popup3");
    // okbtn.classList.add("popup3");
}

function closepopup(){
    submitbtn.classList.remove("popup-animate");
}
