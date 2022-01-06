var { GraphQLString, Gra } = require('graphql')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../../config')
const {clientError: ClientError} = require('../../config/errorHandler')
const Validator = require('../../utils/validator')

const { UserSchema } = require("../../models/user");
const {authType, registerType} = require('../types')

const generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        email: user.email,
        password: user.password
      }, config.development.secret, {expiresIn: '1d'})
}

const Mutation = {
    register: {
        type: registerType,
        args: {
            payload: {type: authType}
        },
        resolve: async (_, {payload: {email, password}}) => {
            const {errors, valid} = Validator.user(email, password)
            if(!valid){
                throw ClientError({errors})
            }
            const user = await UserSchema.findOne({email})
            if(user){
                throw ClientError('Email is not available')
            }
            password = await bcrypt.hash(password, 12)
            const newUser = new UserSchema({
                email, 
                password
              })
              const res = await newUser.save()
              const token = generateToken(res)
          
              return {
                ...res._doc,
                id: res._id,
                token
              }
        }
    },

    login: {
        type: registerType,
        args: {
            payload: {type: authType}
        },
        resolve: async (_, {payload: {email, password}}) => {
            const {errors, valid} = Validator.user(email, password)
            if(!valid){
                throw ClientError({errors})
            }
            const user = await UserSchema.findOne({email})
            if(!user){
                errors.general = 'email or password is incorrect'
                throw ClientError({errors})
            }
            const match = await bcrypt.compare(password, user.password)
            if(!match){
                errors.general = 'email or password is incorrect'
                throw ClientError({errors})
            }
              const token = generateToken(user)
          
              return {
                ...user._doc,
                id: user._id,
                token
              }
        }
    }
    
}

module.exports = Mutation