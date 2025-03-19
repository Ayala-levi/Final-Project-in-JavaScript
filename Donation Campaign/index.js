//מערך פריטים
const ArrItems = [
    { id: 1, name: "ספסל חצר", desc: "עץ מלא", price: "300", amount: 30, donated: 1, img: "bench.png" },
    { id: 2, name: "קולר גדול", desc: "שנה אחריות", price: "500", amount: 10, donated: 1, img: "BigCooler.png" },
    { id: 3, name: "פח כיתה", desc: "איכותי במיוחד", price: "100", amount: 50, donated: 1, img: "garbrgCan.jpg" },
    { id: 4, name: "מנורה", desc: "אור יום", price: "150", amount: 200, donated: 1, img: "light.png" },
    { id: 5, name: "מראה", desc: "גודל:70/90", price: "80", amount: 40, donated: 1, img: "mirror.webp" },
    { id: 6, name: "כיסא משרדי", desc: "בד רחיץ", price: "500", amount: 20, donated: 1, img: "officeChair.png" },
    { id: 7, name: "טלפון כיתה", desc: "דור 3", price: "400", amount: 40, donated: 1, img: "phone.jpg" },
    { id: 8, name: "עציץ", desc: "דמוי אמיתי", price: "190", amount: 100, donated: 1, img: "plant.png" },
    { id: 9, name: "כיסא מנהלים", desc: "עור אמיתי", price: "1600", amount: 5, donated: 1, img: "principalChair.png" },
    { id: 10, name: "מתלה", desc: "5 מקומות לתליה", price: "120", amount: 40, donated: 1, img: "rack.png" },
    { id: 11, name: "ארון ספרים", desc: "עץ סנדוויץ", price: "350", amount: 55, donated: 1, img: "SecretaryLocker.png" },
    { id: 12, name: "שולחן משרדי", desc: "מגיע ב-3 צבעים:לבן,שחור,קרם", price: "560", amount: 15, donated: 1, img: "SecretarysDesk.png" },
    { id: 13, name: "כיור", desc: "איכותי במיוחד", price: "200", amount: 75, donated: 1, img: "sink.png" },
    { id: 14, name: "בר מים ", desc: "התקנה חינם", price: "450", amount: 7, donated: 1, img: "smallCooler.png" },
    { id: 15, name: "עציצי שולחן", desc: "3 סוגי עציצים", price: "80", amount: 95, donated: 1, img: "flowerPots.png" },
    { id: 16, name: "אסלה", desc: "מגיע ב-3 צבעים:לבן,שחור,קרם", price: "700", amount: 30, donated: 1, img: "toilet.png" },
    { id: 17, name: "מחשב", desc: "חברה:HP", price: "4000", amount: 30, donated: 1, img: "computer.jpg" },
    { id: 18, name: "שולחן כיתה", desc: "מגיע ב-3 צבעים:לבן,שחור,קרם", price: "400", amount: 200, donated: 1, img: "classTable.png" },
    { id: 19, name: "ברז", desc: "מגיע ב-3 צבעים:לבן,שחור,קרם", price: "300", amount: 50, donated: 1, img: "tab.png" },
    { id: 20, name: "שעון", desc: "שעון קיר", price: "50", amount: 40, donated: 1, img: "clock.png" },
    { id: 21, name: "כיסא כיתה", desc: "מגיע ב-3 צבעים:לבן,שחור,קרם", price: "400", amount: 200, donated: 1, img: "classChair.png" },
    { id: 22, name: "לוח", desc: "מחיק במיוחד", price: "600", amount: 50, donated: 1, img: "boord.jpg" },
]
//מערך עגלה של משתמש נוכחי
let cartArr = [

];
//מערך תורמים
const ArrD = [
    { id: 1, username: "מיכל בקשי", email: "mb@gmail.com", password: "1", phone: "025994444", address: "נחל לוז 18 בית שמש" }
]
//בעת ריענון הדף יהיה רינדור של העגלה והפריטים
function onload() {
    // const thankYouLetter = document.getElementById("thankYouLetter");
    // thankYouLetter.style.display = "none";
    renderArrItems();
    renderCart();
}
//בעת לחיצה על כפתור של הוספת פריט לעגלת התרומות ישתנה צבע הכפתור
function changeColor(event) {
    event.target.style.backgroundColor = "black";
}
//מעבר לעגלת
function passToCart() {
    hideItems();
    renderCart();
}
//במעבר לעגלה תסתיר הכל חוץ מהעגלה, טופס ו2 הכפתורים שבצד
function hideItems() {
    const divItems = document.getElementById("items");
    divItems.style.display = "none";

    const videoDiv = document.getElementById("video");
    videoDiv.style.display = "none"; 7

    // const thankYouLetter = document.getElementById("thankYouLetter");
    // thankYouLetter.style.display = "none";

    const formD = document.getElementById("formD");
    formD.style.display = "block";

    const btnDiv = document.getElementById("btn");
    btnDiv.style.display = "block";

    const btn2Div = document.getElementById("btn2");
    btnDiv.style.display = "block";

    const cartDiv = document.getElementById("cart");
    cartDiv.style.display = "block";

    const DonationsDiv = document.getElementById("DonationDiv");
    DonationsDiv.style.display = "none";

}
//רינדור עגלה של המשתמש הנוכחי
function renderCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "<h2>העגלה שלך</h2>";
    for (let i = 0; i < cartArr.length; i++) {
        const cartElement = `<div class="cartItem">
                                         <img src="images/${cartArr[i].img}" alt="">
                                         <div id="desc">
                                            <p>${cartArr[i].name}</p>
                                            <p>${cartArr[i].price} ש''ח</p>
                                         </div>

                                         <div id="amount">
                                            <p>כמות לתרומה:</p>
                                            <div id="amount2">
                                              <button id="+"; onclick="changeAmount(event,${cartArr[i].id})">+</button>
                                              <p id="pAmount">${cartArr[i].donated}</p>
                                              <button id="-"; onclick="changeAmount(event,${cartArr[i].id})">-</button>
                                            </div>
                                         </div>
                                         <button id="Bgarbage" onclick="ToDelete(${cartArr[i].id})"> <img src="images/garbage.png" alt=""></button>
                            </div>
                            `;
        cartDiv.innerHTML += cartElement;
    }
    if (cartArr.length === 0) {
        cartDiv.innerHTML = `<h2>העגלה שלך</h2>
        <p id="p">אין עדיין פריטים בעגלה שלך</p>`;
        const formD = document.getElementById("formD");
        formD.style.display = "none";
    }
}
//משנה את הכמות הרצויה לתרומה
function changeAmount(event, id) {
    const btn = event.target.id;
    const element = cartArr.filter(c => c.id == id);
    if (btn === "+") {
        element[0].donated += 1;
    }

    else {
        if (element[0].donated != 0)
            element[0].donated -= 1;
    }
    renderCart();
}
//מחיקת פריט מהעגלה
function ToDelete(id) {
    let newCart = cartArr.filter(p => p.id != id);
    cartArr = newCart;
    renderCart();
}
//רינדור הפריטים
function renderArrItems() {
    const itemsDiv = document.getElementById("items");
    itemsDiv.innerHTML = " ";
    for (let i = 0; i < ArrItems.length; i++) {
        const Ielement = `<div class="card">
                            <img src="images/${ArrItems[i].img}" alt="">
                            <p>${ArrItems[i].name}</p>
                            <p>תיאור: ${ArrItems[i].desc}</p>
                            <p>${ArrItems[i].price} ש''ח</p>
                            <p>כמות לתרומה: ${ArrItems[i].amount}</p>
                            <button onclick="addItem(${ArrItems[i].id});changeColor(event);renderCart()">תרום עכשיו</button> 
                            </div>
                            `
        itemsDiv.innerHTML += Ielement;
    }
}
//הוספת פריט לעגלה
function addItem(id) {
    let flag = 0;
    for (let i = 0; i < cartArr.length; i++) {
        if (cartArr[i].id === id) {
            flag = 1;
        }
    }
    if (flag == 0) {
        const product = ArrItems.find(p => p.id === id);
        const item = {
            name: product.name,
            price: product.price,
            img: product.img,
            id: product.id,
            donated: product.donated
        };

        cartArr.push(item);
    }

}
//הפונקציה מקבלת מייל וסיסמא במקרה שיש התאמה מחזירה משתמש - אם לא - תחזיר null
function findUser(email, password) {

    for (let i = 0; i < ArrD.length; i++) {
        if (ArrD[i].email === email && ArrD[i].password === password) {
            return ArrD[i];
        }
    }
    return null;
}
//פונקצית התחברות
function onLoginSubmit(event) {
    //למנוע התנהגות ברירת מחדל
    event.preventDefault();
    //להיבא את המידע מהטופס
    const email = event.target.email.value;
    const password = event.target.psw.value;
    //להפעיל לוגיקה
    const loggedInUser = findUser(email, password);
    //להציג למשתמש תוצאה

    if (loggedInUser != null) {
        const loginForm = document.getElementById('login_form');
        loginForm.classList.remove("show");
        loginForm.classList.add("hide");

        const profilePage = document.getElementById('user_profile_page');
        profilePage.classList.add('show');
        profilePage.classList.remove('hide');

        hideLogin();
        localStorage.setItem("user", loggedInUser.email);
        localStorage.setItem("id", loggedInUser.id);
        const donatet = JSON.stringify(ArrDonations);
        localStorage.setItem("arrDonations", donatet);

    }
    else
        alert("אחד הפרטים שגוי");
}
//מקבלת פרטי משתמש בודקת שלא קיים, יוצרת קוד אוטמטי ומחזירה ערך בוליאני המבטא הצלחה או כישלון
function addUser(user) {
    //בדיקה אם האימייל קיים
    for (let i = 0; i < ArrD.length; i++) {
        if (ArrD[i].email == user.email) {
            return false;
        }
    }

    //הוספת קוד אוטומטי
    user.id = ArrD.length + 1;

    //הוספת המשתמש למערך
    ArrD.push(user);
    return true;
}
//פונקציות שמופעלות בעת שליחת הטופס ומוציאות ממנו את המידע ומפעילות את הלוגיקה המתאימה
function onRegisterSubmit(event) {
    event.preventDefault();  //יש לשים לב לכתוב מדויק מבחינת אותיות גדולות קטנות

    //לשאוב את המידע מהטופס
    const form = event.target;  //כאן יהיה כל הטופס שבתוכו האינפוטים שבתוכם הטקסט

    const username = form.username.value;  //ניתןלגשת לאינפוטים לפי השם שלהם מתוך הטופס
    const phone = form.phone.value;
    const address = form.address.value;
    const email = form.email.value;
    const password = form.psw.value;

    //ליצור אובייקט
    const newUser = { id: 0, username: username, phone: phone, address: address, email: email, password: password }


    //להפעיל את הלוגיקה של הוספת משתמש
    const success = addUser(newUser);

    //להציג למשתמש הודעת ברוכים הבאים

    if (success == true) {
        alert("ברוכים הבאים לאתר שלנו");
        form.username.value = "";
        form.phone.value = "";
        form.address.value = "";
        form.email.value = "";
        form.psw.value = "";
        hideLogin();
        localStorage.setItem("user", newUser.email);
        localStorage.setItem("id", newUser.id);
        const donatet = JSON.stringify(ArrDonations);
        localStorage.setItem("arrDonations", donatet);
    }
    else
        alert("מצטערים, האימייל קיים במערכת");
}
//פונקציה שמחביאה את טופס ההתחברות כשטופס ההרשמה פתוח 
function hideLogin() {
    const main = document.getElementById('main');
    main.style.display = "block";
    const loginP = document.getElementById('login_page');
    loginP.style.display = "none";
}
//פונקציה שמראה את טופס ההרשמה כשטופס ההתחברות פתוח 
function showRegister(event) {
    event.preventDefault();
    const loginForm = document.getElementById('login_form');
    const registerForm = document.getElementById('regiter_form');
    loginForm.classList.remove("show");
    loginForm.classList.add("hide");
    registerForm.classList.remove("hide");
    registerForm.classList.add("show");
}
//פונקציה שמראה את טופס ההתחברות כשטופס ההרשמה פתוח 
function showLogin(event) {
    event.preventDefault();
    const loginForm = document.getElementById('login_form');
    const registerForm = document.getElementById('regiter_form');
    registerForm.classList.remove("show");
    registerForm.classList.add("hide");
    loginForm.classList.remove("hide");
    loginForm.classList.add("show");
}

let Donations;
let donorId;
//מערך תרומות של המשתמש הנוכחי
let myDonations = [];
//מערך כל התרומות
const ArrDonations = [
    { idDonor: 1, name: "ספסל חצר", desc: "עץ מלא", price: "300", amount: 1, img: "bench.png" },
    { idDonor: 1, name: "טלפון כיתה", desc: "דור 3", price: "400", amount: 40, img: "phone.jpg" },
    { idDonor: 1, name: "עציץ", desc: "דמוי אמיתי", price: "190", amount: 100, img: "plant.png" },
    { idDonor: 1, name: "כיסא מנהלים", desc: "עור אמיתי", price: "1600", amount: 5, img: "principalChair.png" }

];
//מעביר את התרומות של המשתמש הנוכחי למערך התרומות שלו
function DonationUser() {
    const strDonations = localStorage.getItem("arrDonations");
    Donations = JSON.parse(strDonations);

    donorId = parseInt(localStorage.getItem("id"));
    myDonations = Donations.filter(d => d.idDonor == donorId);
    renderMyDonation();
}
//רינדור מערך תרומות של המשתמש הנוכחי
function renderMyDonation() {
    const Div = document.getElementById("DonationDiv");
    Div.innerHTML = "<h2>התרומות שלך:</h2>";
    for (let i = 0; i < myDonations.length; i++) {
        const Element = `<div class="cartItem">
                                         <img src="images/${myDonations[i].img}" alt="">
                                         <div id="desc">
                                          <p>${myDonations[i].name}</p>
                                          <p>${myDonations[i].price} ש''ח</p>
                                         </div>

                                         <div id="amount">
                                         <p>כמות שנתרמה: ${myDonations[i].amount}</p>
                                         </div>
                            </div>
                            `;
        Div.innerHTML += Element;
    }
    if (myDonations.length === 0) {
        Div.innerHTML = `<h2>התרומות שלך</h2>
        <p id="p">אין עדיין פריטים בעגלת התרומות שלך</p>`;
    }
}
//פונקציה שמחביאה את כל הדברים חוץ מעגלת התרומות ו2 כפתורים
function hideItemsD() {
    const divItems = document.getElementById("items");
    divItems.style.display = "none";

    const videoDiv = document.getElementById("video");
    videoDiv.style.display = "none";

    const formD = document.getElementById("formD");
    formD.style.display = "none";

    const btnDiv = document.getElementById("btn");
    btnDiv.style.display = "block";

    const btn2Div = document.getElementById("btn2");
    btnDiv.style.display = "block";

    const cartDiv = document.getElementById("cart");
    cartDiv.style.display = "none";

    // const thankYouLetter = document.getElementById("thankYouLetter");
    // thankYouLetter.style.display = "none";

    const DonationsDiv = document.getElementById("DonationDiv");
    DonationsDiv.style.display = "block";

}
// פונקציה שמחביאה את כל הדברים חוץ ממכתב תודה
// function hideItemsF() {
//     const divItems = document.getElementById("items");
//     divItems.style.display = "none";

//     const videoDiv = document.getElementById("video");
//     videoDiv.style.display = "none";

//     const formD = document.getElementById("formD");
//     formD.style.display = "none";

//     const btnDiv = document.getElementById("btn");
//     btnDiv.style.display = "none";

//     const btn2Div = document.getElementById("btn2");
//     btnDiv.style.display = "none";

//     const cartDiv = document.getElementById("cart");
//     cartDiv.style.display = "none";

//     const DonationsDiv = document.getElementById("DonationDiv");
//     DonationsDiv.style.display = "none";

//     const thankYouLetter = document.getElementById("thankYouLetter");
//     thankYouLetter.style.display = "block";
// }

// function onsubmit(event){

//  event.preventDefault();

//  const name = event.target.name.value;
//  const lastName = event.target.lastName.value;
//  const idU = event.target.idU.value;
//  const creditNumber = event.target.creditNumber.value;
//  const cardValidity = event.target.cardValidity.value;
//  const cvv = event.target.cvv.value;

//  hideItemsF();
//  //להציג למשתמש תוצאה
// alert("כל הכבודדדדדדדדדדדד");
// }

function passToRes() {
    const div = document.getElementById("thankYouLetter");
    div.style.display = "none";

    const divbtn = document.getElementById("btnPass");
    divbtn.style.display = "none";

    const divres = document.getElementById("res");
    divres.style.display = "block";



    divres.innerHTML = "<h2>הקבלה </h2>";

    const strCart= localStorage.getItem("cartArr");
    let arrCart=JSON.parse(strCart);


    for (let i = 0; i < arrCart.length; i++) {
        const cartElement = `<div class="cartItem">
                                         <img src="images/${arrCart[i].img}" alt="">
                                         <p>${arrCart[i].name}</p>
                                         <div id="amount">
                                           <p>כמות שנתרמה:</p>
                                           <p id="pAmount">${arrCart[i].donated}</p>
                                         </div>
                            </div>
                            `;
         divres.innerHTML += cartElement;
    }


}

function saveCart(){
    const strArrCart= JSON.stringify(cartArr);
    localStorage.setItem("cartArr",strArrCart);
}
