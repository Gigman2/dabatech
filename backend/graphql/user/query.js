var { GraphQLString } = require('graphql')
const { UserSchema } = require("../../models/user");
const CheckAuth = require('../../utils/check-auth')
var {userType} = require('../types')

const Query = {
    getUser: {
        type: userType,
        args: {},
        resolve: async (_, {}, context) => {
            let authUser = CheckAuth(context)
            let user = await UserSchema.findById(authUser.id)
            if(user){
                let data = JSON.parse(JSON.stringify(user))
                data.avatar = data.avatar.split('/')
                let avatar = data.avatar[1]+'/'+data.avatar[2]
                data.avatar = avatar
                return data
            }
            return {}
        }
    }
    
}

module.exports = Query