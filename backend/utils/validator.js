
const Validator = {
    user:  (email, password) => {
        const errors = {}
        if(email.trim() === ''){
            errors.email = 'Email must not be empty'
        }else {
            const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-.\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
            if(!email.match(regEx)){
                errors.email = 'Email is not valid'
            }
        }
    
        if(password.trim() === ''){
            errors.password = 'Password must not be empty'
        }

        return {
            errors,
            valid: Object.keys(errors).length < 1
        }
    },
    info:  (email, phone, name, bio) => {
        const errors = {}
        if(email && email.trim() === ''){
            errors.email = 'Email must not be empty'
        }else {
            const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-.\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
            if(!email.match(regEx)){
                errors.email = 'Email is not valid'
            }
        }
    
        if(name && name.trim() === ''){
            errors.name = 'Name must not be empty'
        }

        if(phone && phone.trim() === ''){
            errors.phone = 'Phone must not be empty'
        }

        return {
            errors,
            valid: Object.keys(errors).length < 1
        }
    }
}

module.exports = Validator