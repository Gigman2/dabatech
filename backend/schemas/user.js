const { UserTC } = require("../models/user");
require("../mutation/user.mutation");
const UserQuery = {
  loggedIn: UserTC.getResolver("findOne"),
};

const UserMutation = {
  createUser: UserTC.getResolver("createOne"),
  editUser: UserTC.getResolver("updateById"),
  fakeData: UserTC.getResolver("randomAdd"),
};

module.exports = { UserQuery, UserMutation };
