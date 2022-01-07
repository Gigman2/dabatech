const config = require('../../config')
const bcrypt = require('bcryptjs')
const {clientError: ClientError} = require('../../config/errorHandler')
const Validator = require('../../utils/validator')
const CheckAuth = require('../../utils/check-auth')
const Uploader = require('../../utils/uploader')
const { UserSchema } = require("../../models/user");
const {userType, userInfoType} = require('../types')

const Mutation = {
    updateUser: {
        type: userType,
        args: {
            payload: {type: userInfoType}
        },
        resolve: async (_, {payload: {email, phone, bio, name, password, file}}, context) => {
            let fileLocation;
            if(file){
                const { filename, createReadStream } = await file;
                const stream = createReadStream();
                const pathObj = await Uploader({ stream, filename });
                fileLocation = pathObj.path;
            }
            
            let authUser = CheckAuth(context)
            const {errors, valid} = Validator.info(email, phone, name, bio)
            if(!valid){
                throw ClientError({errors})
            }

            if(password){
                password = await bcrypt.hash(password, 12)
            }

            const user = await UserSchema.findByIdAndUpdate(authUser.id, {email, phone, bio, name, password, avatar: fileLocation})
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