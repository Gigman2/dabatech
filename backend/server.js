const express = require("express");
const app = express();
const mongoose = require("mongoose")
const {graphqlHTTP} = require('express-graphql')
const logger = require('./core/logger');
const extensions = ({context}) => {
    return {
        runtime: Date.now() - context.startTime,
    };
}
const config = require('./config.js')

app.use(logger);

app.listen(5000, async () => {
    await mongoose.connect(config.development.dbString, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
})

mongoose.connection.on(
    "error", console.error.bind(console, "MongoDB connection error: ")
)

const graphqlSchema = require('./schemas/index')
app.use(
    "/graphql",
    graphqlHTTP((request) => {
        return {
            context: {startTime: Date.now()},
            graphiql: true,
            schema: graphqlSchema,
            extensions
        }
    })
)