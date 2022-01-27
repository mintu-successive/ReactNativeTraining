import { ValidationTypes } from "./Constants";
import RegEx from "./Regex";

const validate = async (text: string, type: string) => {
    switch (type) {
        case ValidationTypes.email:
            if (RegEx.email.test(text) === false) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(false);
                    }, 0);
                });
            }
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(true);
                }, 0);
            });
        case ValidationTypes.username:
            if (RegEx.username.test(text) === false) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(false);
                    }, 0);
                });
            }
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(true);
                }, 0);
            });
        default:
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(false);
                }, 0);
            });
    }
}

const validateEmail = async (text: string) => {
    if (RegEx.email.test(text) === false) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(false);
            }, 0);
        });
    }else{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 0);
        });
    }
}

const validateUserName = async (text: string) => {
    if (RegEx.username.test(text) === false) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(false);
            }, 0);
        });
    }else{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 0);
        });
    }
}

export  {validate, validateEmail, validateUserName}