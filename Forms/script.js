// Todo: Without editing the "index.html" file, add event listeners to the script.js


let allinputfields = document.querySelectorAll('input');

/**
 * Todo: 1. highlight all input fields when cliked/focused
 */
allinputfields.forEach(inputfield => inputfield.addEventListener("focus", (event) => inputfocusStyle(event.target)));
allinputfields.forEach(inputfield => inputfield.addEventListener("blur", (event) => inputOnBlur(event.target)));

function inputfocusStyle(field) {
    field.style.background = "#FAECB5";
}
function inputOnBlur(field) {
    field.style.background = "";
};


/**
 * Todo: 2. when the user type his name in the first field, make it appear next to it
 * ! update while editing
 */

let nameinput = document.getElementById('firstname');
let firstnamedisplay = document.getElementById('display-firstname');

// ! important to set the oninput attribute here:
nameinput.setAttribute("oninput", "displayInputContent(this.value, firstnamedisplay)");

/**
 * Return input value if it exists and is not empty
 * @param {inputvalue} val 
 * @param {htmlelement} field 
 */
function displayInputContent(val, field) {
    if (val && val != ""){
            field.innerText = val;
        }
}


/**
 * Todo: 3. Display the default hidden html message if age>=18
 */
let ageinput = document.getElementById("age");
let adultsection = document.getElementById("a-hard-truth");

ageinput.setAttribute("onchange", "checkAge((this.value), adultsection)");
/**
 * Check if input value exists & is above 18 and display text content if so
 * @param {number} val 
 * @param {htmlelement} section 
 */
function checkAge (val, section) {
    if (val && val != "" && val>=18) {
        section.style.visibility = "visible";
    } else {
        section.style.visibility = "hidden";
    }
}


/**
 * Todo: 4. Validate passwords (>6 characters) + match each other;
 */
let pwd = document.getElementById("pwd");
let pwdconfirm = document.getElementById("pwd-confirm");

pwd.parentNode.setAttribute("id", "pwd-container");
pwdconfirm.parentNode.setAttribute("id", "pwdconfirm-container");
let pwdcontainer = document.getElementById("pwd-container");
let pwdconfirmcontainer = document.getElementById("pwdconfirm-container");

let pwdcheckmsg = document.createElement("span");
pwdcheckmsg.setAttribute("id", "pwdcheckmsg");
pwdcontainer.appendChild(pwdcheckmsg);

let pwdconfirmcheckmsg = document.createElement("span");
pwdconfirmcheckmsg.setAttribute("id", "pwdconrimcheckmsg");
pwdconfirmcontainer.appendChild(pwdconfirmcheckmsg);

[pwd, pwdconfirm].forEach(passwordfield => passwordfield.addEventListener("keyup", (event) => (checkLength((event.target.value),event.target))));

pwd.addEventListener("keyup", (event) => pwdCheckMsg(event.target.value, pwdcheckmsg));
pwdconfirm.addEventListener("keyup", (event) => checkMatch(pwd, event.target, pwdconfirmcheckmsg));

/**
 * Check if length >=6 + update background input
 * @param {input value} val 
 * @param {html element} field 
 */
function checkLength(val, field) {
    if (val.length>5) {
        field.style.backgroundColor="#CBFAD4";
    } else {
        field.style.backgroundColor="#FC3C2B";
    }
}

/**
 * Display a different message next to the input depending on it's length
 * @param {input value} val 
 * @param {html element} field 
 */
function pwdCheckMsg(val, field) {
    val.length>5?field.innerHTML="&#10004;":field.innerText="password must  be at least 6 characters";
}

/**
 * Return a message depending on input values matching
 * @param {htmlinput} firstinput 
 * @param {htmlinput} secondinput 
 * @param {htmlelement} displayfield 
 */
function checkMatch(firstinput, secondinput, displayfield) {
    let secondinputvalue = secondinput.value;
    if(secondinputvalue.length<=5) {
        displayfield.innerText="";
    } else if (firstinput.value === secondinput.value) {
        displayfield.innerHTML="&#10004;"
    } else {
        displayfield.innerText="Passwords don't match";
    }
}


/**
 * Todo: 5. Swith to dark mode if user select the dark option;
 */

let selectmode = document.getElementById("toggle-darkmode");
let body = document.querySelector("body");

/**
 * Update element background & text color depending on user's choice
 * @param {htmlselectelement} selecttag git rm -r --cached .
 * @param {htmlelement} elementtoupdate 
 * @returns 
 */
const toggleDarkMode = (selecttag, elementtoupdate) => selecttag.value == "dark"?(elementtoupdate.style.backgroundColor="#333339", elementtoupdate.style.color="white"):(elementtoupdate.style.backgroundColor="", elementtoupdate.style.color="black");

selectmode.addEventListener("change", (e) => toggleDarkMode(e.target, body));