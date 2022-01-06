const { jwt } = require("jsonwebtoken")
const config= require("../config")
const {AuthError} = require('../config/errorHandler')

module.exports = (context) => {
    const authHeader = context.req.headers.authorization;
    if(authHeader){
        const token = authHeader.split('Bearer ')[1]
        if(token){
            try{
                const user = jwt.verify(token, config.development.secret)
                return user
            } catch (err){
                throw  AuthError('Invalid/Expired token')
            }
        }
        throw  AuthError('Authorization token not found')
    }
    throw  AuthError('Authorization header must be provided')
}