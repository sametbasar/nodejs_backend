import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Geçerli Bir mail adresi giriniz')
        .not()
        .isEmpty()
        .isEmail(),
    body('password')
        .not()
        .isEmpty()
]

export const registerValidation = [
    body('email', 'Geçerli Bir mail adresi giriniz')
        .not()
        .isEmpty()
        .isEmail(),
    body('phone')
        .not()
        .isEmpty()
        .isNumeric({ no_symbols: true }),
    body('name')
        .not()
        .isEmpty()
        .isString(),
    body('surname')
        .not()
        .isEmpty()
        .isString(),
    body('identityNumber')
        .not()
        .isEmpty()
        .isNumeric({ no_symbols: true }),
    body('password')
        .not()
        .isEmpty()
];

export const customerInfoValidation = [
    body('email', 'Geçerli bir mail adresi giriniz')
        .not()
        .isEmpty({ ignore_whitespace: true })
        .isEmail()
]