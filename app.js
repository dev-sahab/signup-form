// get elements

const facebook_form = document.getElementById('facebook_form');
const first_name = facebook_form.querySelector('input[name="first-name"]');
const last_name = facebook_form.querySelector('input[name="last-name"]');
const phone = facebook_form.querySelector('input[name="phone"]');
const password = facebook_form.querySelector('input[name="password"]');
const gender = facebook_form.querySelectorAll('input[name="gender"]');
const submit = facebook_form.querySelector('button[type="submit"]');

// warning boxes
const warning = facebook_form.querySelector('.warning-icon .box1 ');
const warning2 = facebook_form.querySelector('.warning-icon .box2 ');
const warning3 = facebook_form.querySelector('.warning-icon .box3 ');
const warning4 = facebook_form.querySelector('.warning-icon .box4 ');

// tooltipp

const tooltip = facebook_form.querySelector('.tooltipp');

let count = 0;
first_name.onfocus = () => {
    first_name.style.borderColor = '';
    warning.style.display = "";

    count++;
    if ( count > 1 &&  first_name.value == "" ){
        tooltip.style.display = 'block';
    }
    else{
        tooltip.style.display = '';
    }
    
    
}

first_name.onblur = () => {
    
    tooltip.style.display = '';

    if(first_name.value == ""){
        first_name.style.borderColor = 'red';

        warning.style.display = "block";
    }
    else{
        first_name.style.borderColor = '';
        warning.style.display = "";
    }
}

first_name.onkeyup = () => {
    tooltip.style.display = '';
}


last_name.onfocus = () => {
    last_name.style.borderColor = '';
    warning2.style.display = "";



}
last_name.onblur = () => {
    
    if(last_name.value == ""){
        last_name.style.borderColor = 'red';

        warning2.style.display = "block";
    }
    else{
        last_name.style.borderColor = '';
        warning2.style.display = "";
    }
}

phone.onfocus = () => {
    phone.style.borderColor = '';
    warning3.style.display = "";



}
phone.onblur = () => {
    
    if(phone.value == ""){
        phone.style.borderColor = 'red';

        warning3.style.display = "block";
    }
    else{
        phone.style.borderColor = '';
        warning3.style.display = "";
    }
}

password.onfocus = () => {
    password.style.borderColor = '';
    warning4.style.display = "";



}
password.onblur = () => {
    
    if(password.value == ""){
        password.style.borderColor = 'red';

        warning4.style.display = "block";
    }
    else{
        password.style.borderColor = '';
        warning4.style.display = "";
    }
}

// date of birth select options
const day = facebook_form.querySelector('select[name="day"]');
const month = facebook_form.querySelector('select[name="month"]');
const years = facebook_form.querySelector('select[name="year"]');


for (let i = 1; i <= 31; i++) {
    day.insertAdjacentHTML("beforeend",`<option value="${i}">${i}</option>`);
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

months.forEach(item => {
    month.insertAdjacentHTML('beforeend', `<option value="${item}">${item}</option>`)
});



let date = new Date();
let year = date.getFullYear();

for (let i = year; i >= year - 60; i--) {
    years.insertAdjacentHTML("beforeend",`<option value="${i}">${i}</option>`);
}

// required get elements for required fields
const name_req = document.querySelector('.first-name .required');
const last_req = document.querySelector('.last-name .required');
const email_req = document.querySelector('.mail .required');
const pass_req = document.querySelector('.password .required');
const birth_req = document.querySelector('.birth-date .required');

const msg = document.querySelector('.msg');

facebook_form.onsubmit = (e) => {
    
    e.preventDefault();

    // required field
    first_name.value == '' ? name_req.innerHTML = `<span style="color: red;">* Required</span>` : name_req.innerHTML = ``;

    last_name.value == '' ? last_req.innerHTML = `<span style="color: red;">* Required</span>` : name_req.innerHTML = ``;

    phone.value == '' ? email_req.innerHTML = `<span style="color: red;">* Required</span>` : email_req.innerHTML = ``;

    password.value == '' ? pass_req.innerHTML = `<span style="color: red;">* Required</span>` : pass_req.innerHTML = ``;

    (day.value == '' || month.value == '' || years.value == '' ) ? birth_req.innerHTML = `<span style="color: red;">* Required</span>` : birth_req.innerHTML = ``;

    if ( first_name.value == '' || last_name.value == '' || phone.value == '' || password.value == '' || day.value == '' || month.value == '' || years.value == '' ) {

        msg.innerHTML = msgAlert('All fields are required');

    }
    else if( emailCheck(phone.value) == false && phoneCheck(phone.value) == false ){

        msg.innerHTML = msgAlert('Email or Phone number is not valid', 'warning');

    }else{

        msg.innerHTML = msgAlert('Signup Successful. Thank you', 'success');
        
    }

}

