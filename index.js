const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const conectarDB = require('./config/db');

// conectar a DB
conectarDB();

// servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        const miContext = "Hola"

        return {
            miContext
        }
    }
});

// arrancar servidor
server.listen().then(({url}) => {
    console.log(`Servidor corriendo en ${url}`);
});