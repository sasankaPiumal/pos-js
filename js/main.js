let userArray = [];

class User {
    constructor(fullName, email, password) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;

    }
}

const createUser = () => {

    const fullName = $('#full-name').val();
    const email = $('#register-email').val();
    const password = $('#register-password').val();

    // // package.json
    // {
    //     "name": "my-app",
    //     "version": "1.0.0",
    //     "type": "commonjs"
    // }

    // bCrypt.js
    // const bcrypt = require('bcrypt');
    // const crypto = require("crypto");
    // const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    // console.log(hash);

    let createUser = new User(fullName, email, password);
    let existsUserData = userArray.find(e => e.email === email);
    if (existsUserData) {
        alert('user email already exists.');
        return;
    }
    userArray.push(createUser);
    console.log(userArray);
}

const login = ()=> {
    const email = $('#email').val();
    const password = $('#password').val();

    let existsUserData = userArray.find(e=>e.email ===  email);
    if (existsUserData){
        if (existsUserData.password === password){
            // login ==> Dashboard
        }else{
           alert('password is wrong.and try again.');

        }
    }
    else{
       alert('User email not found!');

    }
}

// const clearAndLoad = (element)=>{
//     let body = $('body').empty();
//     let tempElement = $("#"+element);
//     tempElement.appendTo(body);
//
// }
//
// console.log("main.js")