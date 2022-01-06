const PORT = 4001;

const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://daba:Go0aR5mwuLjnh9bp@cluster0.vsw6p.mongodb.net/dabatech?retryWrites=true&w=majority'
    },
    production: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://daba:Go0aR5mwuLjnh9bp@cluster0.vsw6p.mongodb.net/dabatech?retryWrites=true&w=majority'
    }
}

module.exports = environment

