const express = require("express");
var cors = require('cors')
const path = require('path');
const app = express();
const mongoose = require("mongoose")
const {graphqlHTTP} = require('express-graphql')
const logger = require('./core/logger');
const config = require('./config/index.js')
const {graphqlUploadExpress}  = require('graphql-upload')

app.use(cors())
app.listen(5000, async () => {
    await mongoose.connect(config.development.dbString, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
})
app.use(express.static(path.join(__dirname, 'public')));
app.use('/photos', express.static(path.join(__dirname, 'photos')));

mongoose.connection.on(
    "error", console.error.bind(console, "MongoDB connection error: ")
)

const graphqlSchema = require('./schemas/index')
app.use(
    "/graphql",
    graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
    graphqlHTTP((request) => {
        return {
            context: {req: request},
            graphiql: true,
            schema: graphqlSchema,
            uploads: false
        }
    })
)