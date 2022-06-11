
/**
 * Form validation Alert Function
 */

const msgAlert = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between m-0">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`;
}

/**
 * Email or phone validation
 */

const emailCheck = (email) => {

    let emailPattern = /^[a-z0-9]{3,}(?:(\.|-|_)[a-z0-9]{1,})?@[a-z1-9]{3,}\.[a-z]{2,5}$/;
    return emailPattern.test(email);

}

const phoneCheck = (phone) => {
    let phonePattern = /^(\+8801|008801|01)[0-9]{9}$/;
    return phonePattern.test(phone);
}