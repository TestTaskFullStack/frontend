

export const usernameValidation = {
    required: 'Це поле є обов\'язковим',
    minLength: { value: 4, message: 'Мінімальна довжина 4 символи' },
}

export const emailValidation = {
    required: 'Це поле є обов\'язковим',
    minLength: { value: 4, message: 'Мінімальна довжина 4 символи' },
}

export const passwordValidation = {
    required: 'Це поле є обов\'язковим',
    minLength: { value: 8, message: 'Мінімальна довжина 8 символи' },
    pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, message: 'Пароль повинен містити мінімум одну велику літеру, одну малу літеру та одну цифру' },
}   

    



