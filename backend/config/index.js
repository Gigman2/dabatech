const PORT = 4001;

const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://eric:I1L5yCmxDrPYX2f1@cluster0.vsw6p.mongodb.net/dabatech?retryWrites=true&w=majority',
        secret: '@JnbJKBbjg1wenkjbnqui3e423fewksnhjsdkfj'
    },
}

module.exports = environment

