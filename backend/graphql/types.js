const { GraphQLObjectType, GraphQLString, GraphQLInputObjectType } = require('graphql')
const {GraphQLUpload} = require('graphql-upload')

const User = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        bio: { type: GraphQLString },
        phone: { type: GraphQLString },
        avatar: { type: GraphQLString }
    },
})

const Auth = new GraphQLInputObjectType({
    name: 'auth',
    fields: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
})

const UserInfo = new GraphQLInputObjectType({
    name: 'userInfo',
    fields: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        bio: { type: GraphQLString },
        phone: { type: GraphQLString },
        file: { type: GraphQLUpload }
    },
})

const Register = new GraphQLObjectType({
    name: 'register',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        bio: { type: GraphQLString },
        phone: { type: GraphQLString },
        avatar: { type: GraphQLString },
        token: { type: GraphQLString }
    },
})


module.exports = {
    userType: User,
    authType: Auth,
    registerType: Register,
    userInfoType: UserInfo
}