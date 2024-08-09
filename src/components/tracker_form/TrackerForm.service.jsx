export const validateTime = (time) => {
    const hours = time.slice(0, 2)
    const minutes = time.slice(3, 5)

    if (isNaN(+hours) || isNaN(+minutes)) {
        return 'Enter numbers for correct time'
    }

    if (hours > 24 || hours < 0) {
        return 'Enter correct hour'
    }

    if (minutes > 60 || minutes < 0) {
        return 'Enter correct minutes'
    }

    return true
}

export const createRegisterOptions = (inputTimeName, validationFunc) => {
    return {
        required: `${inputTimeName} time is required`,
        validate: validationFunc,
        minLength: {
            value: 5,
            message: 'Lenght should be 5'
        },
        maxLength: {
            value: 5,
            message: 'Lenght should be 5'
        }
    }
}