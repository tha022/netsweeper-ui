import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidationService {
    constructor () {}

    static emailValidator(c: FormControl) {
        // RFC 2822 compliant regex
        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        return EMAIL_REGEXP.test(c.value) ? null : { 'invalidEmailAddress': true };
    }
 
    static passwordValidator(c: FormControl) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        const PASSWORD_REGEXP = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/;

        return PASSWORD_REGEXP.test(c.value) ? null : { 'invalidPassword': true };
    }

    static phoneValidator(c: FormControl) {
        // assert that phone number has 10 digits with no comma, no spaces, no punctuation
        const PHONE_REGEXP = /^\d{10}$/;

        return PHONE_REGEXP.test(c.value) ? null : { 'invalidPhone': true };
    }
}
