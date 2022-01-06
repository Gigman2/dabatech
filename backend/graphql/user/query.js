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
            return await UserSchema.findById(authUser.id)
        }
    }
    
}

module.exports = Query