var { GraphQLString, Gra } = require('graphql')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../../config')
const {clientError: ClientError} = require('../../config/errorHandler')
const Validator = require('../../utils/validator')

const { UserSchema } = require("../../models/user");
const {userType, userInfoType} = require('../types')

const Mutation = {
    updateUser: {
        type: userType,
        args: {
            payload: {type: userInfoType}
        },
        resolve: async (_, {payload: {email, phone, bio, name}}) => {
            const {errors, valid} = Validator.user(email, password)
            if(!valid){
                throw ClientError({errors})
            }
            const user = await UserSchema.findOne({email})
            // if(!user){
            //     errors.general = 'Account not found'
            //     throw ClientError({errors})
            // }
          
            return {
            ...user._doc,
            id: user._id,
            }
        }
    }
    
}

module.exports = Mutation