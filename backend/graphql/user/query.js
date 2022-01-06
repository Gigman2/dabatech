var { GraphQLString } = require('graphql')
const { UserSchema } = require("../../models/user");

var {userType} = require('../types')


const Query = {
    getUser: {
        type: userType,
        args: {
            id: { type: GraphQLString }
        },
        resolve: async (_, {id}) => {
            return await UserSchema.findById(id)
        }
    }
    
}

module.exports = Query