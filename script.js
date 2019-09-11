
/*
    =================================================^=======
    Inlämnings uppgift: inloggningssida i Webbapplikation MVP
    Skapad av Fredrik Byström
    =========================================================
*/

var div1 = document.getElementById("div1");
var loginBtn = document.getElementById("loginBtn");
var logoutBtn = document.createElement("BUTTON");       // skapar logout knapp
var inlogged = localStorage.getItem("inloggad")         // hämtar inloggad från localstorage
var mess = document.getElementById("mess");
var userName = "test";
var passWord = "1234";
var inTxt = "Välkommen du är inloggad!";

if(inlogged === "true") {                               // om localstorage inloggad = true så visas detta 

    mess.innerHTML = inTxt;
    div1.style.display = "none";
    mess.style.display = "block";
    logoutBtn.style.display = "block";
    logoutBtn.setAttribute("id", "logoutBtn");
    document.body.appendChild(logoutBtn).innerText = "Logga Ut";
    logoutBtn.addEventListener("click", logout);

}

loginBtn.addEventListener("click", check);              // login knappen som anropar check funktionen                  

function check() {

    div1.style.display = "none";
    var login = document.getElementById("login").value;
    var pass = document.getElementById("pass").value;

    if(login === userName && pass === passWord) {       // kollar om username & password stämmer
        localStorage.setItem("inloggad", true);         // sätter localstorage inloggad till true
        status = localStorage.getItem("inloggad");      // lägger in localstorage i variabeln status

        mess.innerHTML = inTxt;
        logoutBtn.style.display = "block";
        logoutBtn.setAttribute("id", "logoutBtn");
        document.body.appendChild(logoutBtn).innerText = "Logga Ut";
        logoutBtn.addEventListener("click", logout);

    }else {     // är username & password fel så händer detta

        var igenBtn = document.createElement("BUTTON");

        mess.innerHTML = "Fel användarnamn eller lösenord!";
        igenBtn.setAttribute("id", "igenBtn");
        document.body.appendChild(igenBtn).innerText = "Logga in igen";

        igenBtn.addEventListener("click", loginIgen);
    }
}

// detta händer när man klickar på logout knappen
function logout() {
    localStorage.clear();
    location.reload();
    div1.style.display = "block";
    mess.style.display = "none";
    logoutBtn.style.display = "none";
}

// detta händer när man klickar på logga in igen knappen
function loginIgen() {
    location.reload();
    div1.style.display = "inline-block";
    loginBtn.style.display = "inline-block";
    mess.style.display = "none";
    igenBtn.style.display = "none";
}

