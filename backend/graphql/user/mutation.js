const config = require('../../config')
const {clientError: ClientError} = require('../../config/errorHandler')
const Validator = require('../../utils/validator')
const CheckAuth = require('../../utils/check-auth')

const { UserSchema } = require("../../models/user");
const {userType, userInfoType} = require('../types')

const Mutation = {
    updateUser: {
        type: userType,
        args: {
            payload: {type: userInfoType}
        },
        resolve: async (_, {payload: {email, phone, bio, name}}, context) => {
            let authUser = CheckAuth(context)
            const {errors, valid} = Validator.info(email, phone, name, bio)
            if(!valid){
                throw ClientError({errors})
            }

            const user = await UserSchema.findByIdAndUpdate(authUser.id, {email, phone, bio, name})
            if(!user){
                errors.general = 'Account not found'
                throw ClientError({errors})
            }
          
            return {
            ...user._doc,
            id: user._id,
            }
        }
    }
    
}

module.exports = Mutation