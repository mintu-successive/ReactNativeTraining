const RegEx={
    name:/^[a-zA-Z\\s]*$/,
    contact : /^(\+91[\-\s]?)?[0]?(91)?[7896]\d{9}$/,
    email: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    idCard:/^([a-zA-Z0-9_-]){3,5}$/,
    username:/^([a-zA-Z0-9_-]){5,8}$/,
    cardnumber:/^([0-9]{12})$/,
    expirydate:/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
    cvv:/^([0-9]{3})$/
}

export default RegEx